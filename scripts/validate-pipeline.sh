#!/bin/bash
# ═══════════════════════════════════════════════════════════
# パイプライン整合性検証（強化版）
# ページ設計書 → プロンプト → 差分ログ の各ステップ間の整合性をチェック。
# 情報の欠落・劣化に加え、絶対禁止事項の混入も自動検出する。
#
# 使い方: bash scripts/validate-pipeline.sh <episode番号> <ページID>
#         bash scripts/validate-pipeline.sh <episode番号>     (全ページ)
# 例:     bash scripts/validate-pipeline.sh 03 P02
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

# ────────────────────────────────
# 絶対禁止ワードのチェック（設計書本文をスキャン）
# ────────────────────────────────
# - 「使用」「描く」「採用」等ポジティブ文脈での登場のみ検出
# - 「禁止」「封印」「NG」「しない」と同じ行 or 近接なら除外
check_forbidden_expressions() {
  local file="$1"

  # ページ内の設計記述だけをスキャン（禁止事項セクション・🔒 絶対禁止ブロックは除外）
  local content
  content=$(awk '
    /^## 🔒 絶対禁止/ { skip=1; next }
    /^## コマ設計/ { skip=0; next }
    /^## 禁止事項/ { skip=1; next }
    /^## 漫画文法チェックリスト/ { skip=0; next }
    /^## 編集者メモ/ { skip=0; next }
    !skip { print }
  ' "$file")

  local found_issues=0

  # 禁止表情モード（「〜使用」「〜採用」などのポジティブ文脈のみ）
  for pattern in "天啓モード" "布団モード" "死んだ魚の目"; do
    # 禁止系単語と同じ行にある場合はスキップ
    local hits
    hits=$(echo "$content" | grep "$pattern" | grep -v -E "(禁止|封印|NG|しない|使わない|使用しない|避ける|無し|なし|回避)" | grep -v -E "^\s*$")
    if [ -n "$hits" ]; then
      warn "絶対禁止の表情『${pattern}』が設計コマ部分に混入している可能性"
      echo "$hits" | head -3 | sed 's/^/     /'
      found_issues=$((found_issues + 1))
    fi
  done

  # シアン色（クロちゃん／スマホ光／画面光以外で使用されていないか）
  if echo "$content" | grep -E "シアン|cyan" >/dev/null 2>&1; then
    local cyan_hits
    # 許容語: 禁止／NG／しない／クロちゃん／スマホ（画面・光関連）／画面光／ディスプレイ
    cyan_hits=$(echo "$content" | grep -E "シアン|cyan" | grep -v -E "(禁止|NG|使わない|しない|クロちゃん|スマホ|画面光|ディスプレイ|display)")
    if [ -n "$cyan_hits" ]; then
      warn "シアン色の使用疑い（クロちゃん／スマホ画面光以外で混入？）"
      echo "$cyan_hits" | head -3 | sed 's/^/     /'
      found_issues=$((found_issues + 1))
    fi
  fi

  # 話者ラベル（「翔一：」「クロちゃん：」等）
  local speaker_label
  speaker_label=$(echo "$content" | grep -E "(翔一|クロちゃん|主人公)[:：]" | grep -v -E "(禁止|NG|しない)")
  if [ -n "$speaker_label" ]; then
    warn "話者ラベル（『○○：』）が本文に混入している可能性"
    echo "$speaker_label" | head -3 | sed 's/^/     /'
    found_issues=$((found_issues + 1))
  fi

  if [ $found_issues -eq 0 ]; then
    pass "絶対禁止ワード: 混入なし"
  fi
}

# ────────────────────────────────
# スマホ傾け指示の確認
# ────────────────────────────────
check_smartphone_tilt() {
  local file="$1"
  # 「スマホ画面」または「スマートフォン画面」が構図に現れるコマを探す
  # （単なる「スマホを握る」等の手持ち描写はチェック対象外）
  local has_phone_screen
  has_phone_screen=$(awk '
    /^### コマ/ { in_panel=1; panel_text=""; next }
    /^---/ || /^### / { if (in_panel && match(panel_text, /スマホ画面|スマートフォン画面/)) print panel_text; in_panel=0; panel_text="" }
    in_panel { panel_text = panel_text "\n" $0 }
    END { if (in_panel && match(panel_text, /スマホ画面|スマートフォン画面/)) print panel_text }
  ' "$file")

  if [ -n "$has_phone_screen" ]; then
    if echo "$has_phone_screen" | grep -qE "(10[-−〜~]?15度|10度|15度|傾け|斜め)"; then
      pass "スマホ画面の傾け指示: あり"
    else
      warn "スマホ画面が登場するが「10-15度傾け」の指示が見当たらない"
    fi
  fi
}

# ────────────────────────────────
# コマ機能の単一性（各コマの機能が 1 つに絞られているか簡易チェック）
# ────────────────────────────────
check_panel_single_function() {
  local file="$1"
  local checklist_ok
  checklist_ok=$(grep -E "\[x\].*各コマの機能が1つに絞られている|\[x\].*機能が1つ" "$file")
  if [ -n "$checklist_ok" ]; then
    pass "漫画文法チェックリスト: コマ機能単一性 確認済"
  else
    local checklist_any
    checklist_any=$(grep -E "\[.\].*機能が1つ" "$file")
    if [ -n "$checklist_any" ]; then
      warn "漫画文法チェックリストの『各コマの機能が1つ』が未チェック"
    fi
  fi
}

# ────────────────────────────────
# 単一ページの検証
# ────────────────────────────────
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

  # ── 1.5 絶対禁止ワードの混入チェック（強化版の肝）──
  check_forbidden_expressions "$PAGE_FILE"

  # ── 1.6 スマホ傾け指示 ──
  check_smartphone_tilt "$PAGE_FILE"

  # ── 1.7 コマ機能単一性チェック ──
  check_panel_single_function "$PAGE_FILE"

  # ── 1.8 読み方向（右上→左下）チェック ──
  # 誤った直接的な指示（「視線誘導は左上→右下」等の方向宣言）のみを検出
  # 田の字のコマ順など（「右上→左上→右下→左下」のように複数要素が並ぶ場合）は誤検出しない
  if grep -qE "(視線(誘導)?は|流れは|Eye flow:?)\s*左上[^左]*右下|左上→右下(に通|へ流|方向|の流れ)" "$PAGE_FILE"; then
    BAD_DIR=$(grep -E "(視線(誘導)?は|流れは|Eye flow:?)\s*左上[^左]*右下|左上→右下(に通|へ流|方向|の流れ)" "$PAGE_FILE" | grep -v -E "(禁止|❌|NG|避ける|使わない)")
    if [ -n "$BAD_DIR" ]; then
      fail "🚨 読み方向バグ: 方向宣言に「左上→右下」検出。日本漫画は右上→左下（${BAD_DIR:0:60}…）"
    fi
  fi
  # 視線誘導フィールドの存在と方向
  VFLOW=$(grep -E "^- 視線誘導:" "$PAGE_FILE" | head -1)
  if [ -n "$VFLOW" ]; then
    if echo "$VFLOW" | grep -q "右上.*左下"; then
      pass "視線誘導: 右上→左下 明記"
    else
      warn "視線誘導フィールドに「右上→左下」の明記なし"
    fi
  else
    warn "視線誘導フィールド（- 視線誘導:）が未記入"
  fi

  # ── 1.9 採用パターンフィールドチェック ──
  PATTERN=$(grep "採用パターン:" "$PAGE_FILE" | head -1 | grep -oE 'P[0-9]+-[a-z-]+' | head -1)
  if [ -n "$PATTERN" ]; then
    pass "採用パターン: $PATTERN"
    if [ -f "bible/panel-patterns/patterns.json" ]; then
      if grep -q "\"id\": \"$PATTERN\"" "bible/panel-patterns/patterns.json"; then
        pass "パターンID: patterns.jsonに定義あり"
      else
        warn "パターンID「$PATTERN」がpatterns.jsonに未定義"
      fi
    fi
  else
    warn "採用パターンフィールドが未記入（scripts/pick-pattern.py で選定推奨）"
  fi

  # ── 1.10 密度レベル（Togashi hybrid）チェック ──
  LV_LOW=$(grep -c "Lv\.1\|Lv\.2" "$PAGE_FILE" 2>/dev/null)
  LV_HIGH=$(grep -c "Lv\.4\|Lv\.5" "$PAGE_FILE" 2>/dev/null)
  if [ "$LV_LOW" -gt 0 ] && [ "$LV_HIGH" -gt 0 ]; then
    pass "密度レベル: 低(${LV_LOW}) + 高(${LV_HIGH}) = Togashi hybrid適用"
  elif [ "$LV_LOW" -eq 0 ] && [ "$LV_HIGH" -eq 0 ]; then
    warn "密度レベル(Lv.X)の記述なし。Togashi hybrid メソッド未適用"
  elif [ "$LV_LOW" -eq 0 ]; then
    warn "低密度(Lv.1-2)のコマがない。全コマ均一で冨樫らしさが出ない"
  else
    warn "高密度(Lv.4-5)のコマがない。見せ場が弱い"
  fi

  # ── 2. プロンプト ──
  local BUILD_FILE="$EP_DIR/prompts/build/${PID}.txt"

  if [ ! -f "$PROMPT_FILE" ]; then
    echo "  - プロンプト: 未作成"
  else
    pass "プロンプトあり"

    # 新フォーマット（YAML フロントマター）か判定
    if head -1 "$PROMPT_FILE" | grep -q '^---$'; then
      # YAML フロントマター形式 → ビルド実行して build 出力を検証
      if bash scripts/build-prompt.sh "$EP" "$PID" > /dev/null 2>&1; then
        pass "プロンプト ビルド成功 → $BUILD_FILE"

        # Panel 数がコマ数と一致するか（build 出力で確認）
        PROMPT_PANELS=$(grep -c "^## Panel [0-9]" "$BUILD_FILE" 2>/dev/null)
        if [ "$PROMPT_PANELS" -ne "$PANEL_COUNT" ] && [ "$PANEL_COUNT" -gt 0 ]; then
          warn "ビルド出力のPanel数(${PROMPT_PANELS})がコマ数(${PANEL_COUNT})と不一致"
        elif [ "$PROMPT_PANELS" -gt 0 ]; then
          pass "Panel数: コマ数と一致（${PROMPT_PANELS}）"
        fi

        # コア制約が含まれているか（肯定文フォーマット）
        if grep -q "RENDERING CONSTRAINTS" "$BUILD_FILE" && grep -q "Monochrome and greyscale" "$BUILD_FILE"; then
          pass "コア制約: 含まれている"
        else
          fail "コア制約: 欠落（bible/prompt-constants/prohibited-core.md 参照）"
        fi

        # Mood の存在確認
        if grep -q "^Mood:" "$BUILD_FILE"; then
          pass "Mood: 記述あり"
        else
          warn "Mood: 欠落（フロントマターに mood を追加）"
        fi
      else
        fail "プロンプト ビルド失敗 — scripts/build-prompt.sh を手動実行して原因確認"
      fi
    else
      # 旧フォーマット（自己完結プロンプト）
      if grep -q "Do not change" "$PROMPT_FILE" && grep -q "Do not add" "$PROMPT_FILE"; then
        pass "Do Notリスト: 含まれている（旧フォーマット）"
      else
        fail "Do Notリスト: 欠落（情報劣化リスク高）"
      fi
      warn "旧フォーマット検出 — 新 YAML フロントマター形式への移行推奨"
    fi
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
  PAGE_NUM=$(echo "$PAGE" | tr -d 'Pp.' | sed 's/^0*//')
  [ -z "$PAGE_NUM" ] && PAGE_NUM=1
  PAGE_ID=$(printf "P%02d" "$PAGE_NUM")
  validate_page "$PAGE_ID"
else
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
