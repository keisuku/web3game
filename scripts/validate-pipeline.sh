#!/bin/bash
# ═══════════════════════════════════════════════════════════
# パイプライン整合性検証
# ページ設計書 → プロンプト → 差分ログ の各ステップ間の整合性をチェック。
# 情報の欠落・劣化を検出する。
#
# 使い方: bash scripts/validate-pipeline.sh <episode番号> <ページID>
#         bash scripts/validate-pipeline.sh <episode番号>     (全ページ)
# 例:     bash scripts/validate-pipeline.sh 01 P02
# ═══════════════════════════════════════════════════════════

EP="$1"
PAGE="$2"

if [ -z "$EP" ]; then
  echo "使い方: bash scripts/validate-pipeline.sh <episode番号> [ページID]"
  exit 1
fi

EP_DIR="episodes/ep${EP}"
ERRORS=0
WARNINGS=0

pass() { echo "  ✓ $1"; }
warn() { echo "  ⚠ $1"; WARNINGS=$((WARNINGS + 1)); }
fail() { echo "  ✗ $1"; ERRORS=$((ERRORS + 1)); }

# 単一ページの検証
validate_page() {
  local PID="$1"
  local PAGE_FILE="$EP_DIR/pages/${PID}.md"
  local PROMPT_FILE="$EP_DIR/prompts/${PID}-prompt.md"
  local LOG_FILE="diff-log/log-ep${EP}-${PID}.md"

  echo ""
  echo "━━━ EP${EP} ${PID} ━━━"

  # ── 1. ページ設計書 ──
  if [ ! -f "$PAGE_FILE" ]; then
    fail "ページ設計書なし（${PAGE_FILE}）"
    return
  fi
  pass "ページ設計書あり"

  # コマ数チェック (2-6)
  PANEL_COUNT=$(grep -c "^### コマ" "$PAGE_FILE" 2>/dev/null)
  if [ "$PANEL_COUNT" -eq 0 ]; then
    # 別の形式かも (コマ1: 等)
    PANEL_COUNT=$(grep -c "^- コマ[0-9]" "$PAGE_FILE" 2>/dev/null)
  fi
  if [ "$PANEL_COUNT" -lt 1 ]; then
    warn "コマ定義が検出できません"
  elif [ "$PANEL_COUNT" -lt 2 ] || [ "$PANEL_COUNT" -gt 6 ]; then
    warn "コマ数: ${PANEL_COUNT}（推奨 2-6）"
  else
    pass "コマ数: ${PANEL_COUNT}"
  fi

  # 各コマに「構図」「表情」があるか
  COMP_COUNT=$(grep -ci "構図" "$PAGE_FILE" 2>/dev/null)
  EXPR_COUNT=$(grep -ci "表情" "$PAGE_FILE" 2>/dev/null)
  if [ "$COMP_COUNT" -lt "$PANEL_COUNT" ]; then
    warn "構図の記述がコマ数に対して不足（${COMP_COUNT}/${PANEL_COUNT}）"
  else
    pass "構図: 全コマ記述あり"
  fi
  if [ "$EXPR_COUNT" -lt "$PANEL_COUNT" ]; then
    warn "表情の記述がコマ数に対して不足（${EXPR_COUNT}/${PANEL_COUNT}）"
  else
    pass "表情: 全コマ記述あり"
  fi

  # ── 2. プロンプト ──
  if [ ! -f "$PROMPT_FILE" ]; then
    echo "  - プロンプト: 未作成"
  else
    pass "プロンプトあり"

    # Do Notリスト確認
    if grep -q "Do not change" "$PROMPT_FILE" && grep -q "Do not add" "$PROMPT_FILE"; then
      pass "Do Notリスト: 含まれている"
    else
      fail "Do Notリスト: 欠落（情報劣化リスク高）"
    fi

    # Panelの数がコマ数と一致するか
    PROMPT_PANELS=$(grep -c "^Panel [0-9]" "$PROMPT_FILE" 2>/dev/null)
    if [ "$PROMPT_PANELS" -ne "$PANEL_COUNT" ] && [ "$PANEL_COUNT" -gt 0 ]; then
      warn "プロンプトのPanel数(${PROMPT_PANELS})がコマ数(${PANEL_COUNT})と不一致"
    elif [ "$PROMPT_PANELS" -gt 0 ]; then
      pass "Panel数: コマ数と一致（${PROMPT_PANELS}）"
    fi

    # Composition, Camera, Mood の存在確認
    for field in "Composition" "Camera" "Mood"; do
      if grep -q "$field:" "$PROMPT_FILE"; then
        pass "${field}: 記述あり"
      else
        warn "${field}: 欠落"
      fi
    done
  fi

  # ── 3. 差分ログ ──
  if [ ! -f "$LOG_FILE" ]; then
    echo "  - 差分ログ: 未作成"
  else
    pass "差分ログあり"

    # 未反映のバイブル更新候補
    if grep -q "更新必要: あり" "$LOG_FILE"; then
      if grep -q "反映済み: 未反映" "$LOG_FILE" || ! grep -q "反映済み:" "$LOG_FILE"; then
        warn "未反映のバイブル更新候補あり"
      else
        pass "バイブル更新候補: 反映済み"
      fi
    fi

    # 試行結果の確認
    SUCCESS=$(grep -c "結果: 成功" "$LOG_FILE" 2>/dev/null)
    FAIL=$(grep -c "結果: 失敗" "$LOG_FILE" 2>/dev/null)
    PARTIAL=$(grep -c "結果: 部分成功" "$LOG_FILE" 2>/dev/null)
    echo "  - 試行結果: 成功${SUCCESS} / 失敗${FAIL} / 部分${PARTIAL}"
  fi
}

# ────────────────────────────────
# メイン処理
# ────────────────────────────────

echo "═══ パイプライン検証: EP${EP} ═══"

# エピソード設計書の存在確認
if [ -f "$EP_DIR/episode-design.md" ]; then
  pass "話の設計書あり"
else
  fail "話の設計書なし"
fi

if [ -n "$PAGE" ]; then
  # 単一ページ
  PAGE_NUM=$(echo "$PAGE" | tr -d 'Pp.' | sed 's/^0*//')
  [ -z "$PAGE_NUM" ] && PAGE_NUM=1
  PAGE_ID=$(printf "P%02d" "$PAGE_NUM")
  validate_page "$PAGE_ID"
else
  # 全ページ
  for page_file in "$EP_DIR/pages/"*.md; do
    [ ! -f "$page_file" ] && continue
    case "$page_file" in *_*) continue ;; esac
    PID=$(basename "$page_file" .md)
    validate_page "$PID"
  done
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "検証完了: エラー ${ERRORS} 件 / 警告 ${WARNINGS} 件"
if [ "$ERRORS" -gt 0 ]; then
  echo "→ エラーを解消してから次のステップに進んでください"
elif [ "$WARNINGS" -gt 0 ]; then
  echo "→ 警告を確認してください（続行は可能）"
else
  echo "→ 問題なし"
fi
