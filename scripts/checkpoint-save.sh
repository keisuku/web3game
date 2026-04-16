#!/bin/bash
# ═══════════════════════════════════════════════════════════
# セッションチェックポイント保存（強化版）
# - sessions/checkpoints/YYYY-MM-DD_checkpoint.md を生成
# - NEXT.md の「🎯 次にやること」「🌿 現行作業ブランチ」を自動更新
# - 冒頭 20 行に復帰に必要な情報を圧縮
#
# 使い方: bash scripts/checkpoint-save.sh [メモ] [--next "次のアクション"]
# 例:     bash scripts/checkpoint-save.sh "EP03 P03 完了、P04 未着手"
#         bash scripts/checkpoint-save.sh "P03 完了" --next "EP03 P04 の設計書を作成"
# ═══════════════════════════════════════════════════════════

MEMO=""
NEXT_ACTION=""
# 引数パース
while [ $# -gt 0 ]; do
  case "$1" in
    --next)
      shift
      NEXT_ACTION="$1"
      shift
      ;;
    *)
      if [ -z "$MEMO" ]; then
        MEMO="$1"
      else
        MEMO="$MEMO $1"
      fi
      shift
      ;;
  esac
done

DATE=$(date +%Y-%m-%d 2>/dev/null || echo "unknown")
TIME=$(date +%H:%M 2>/dev/null || echo "unknown")
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")

CHECKPOINT_DIR="sessions/checkpoints"
mkdir -p "$CHECKPOINT_DIR"

FILENAME="${DATE}_checkpoint.md"
FILEPATH="$CHECKPOINT_DIR/$FILENAME"

# ── チェックポイントを生成（冒頭 20 行で復帰可能な構造）──
{
  echo "# セッションチェックポイント — ${DATE} ${TIME}"
  echo ""
  echo "## 🌿 現行作業ブランチ"
  echo "\`${CURRENT_BRANCH}\`"
  echo ""
  echo "## 🎯 次のアクション（唯一）"
  if [ -n "$NEXT_ACTION" ]; then
    echo "${NEXT_ACTION}"
  else
    # NEXT.md から現在の目標を引っ張る
    CURRENT_NEXT=$(awk '/^## 🎯 次にやること/{getline;getline;print;exit}' NEXT.md 2>/dev/null)
    if [ -n "$CURRENT_NEXT" ]; then
      echo "${CURRENT_NEXT}"
    else
      echo "[次にやるべきことを記入]"
    fi
  fi
  echo ""
  echo "## 📝 セッションメモ"
  echo "${MEMO:-[メモなし]}"
  echo ""
  echo "---"
  echo ""
  echo "## 制作状況"
  echo ""
  if [ -f "scripts/status.sh" ]; then
    bash scripts/status.sh 2>/dev/null
  fi
  echo ""

  echo "## パイプライン状態"
  echo ""
  for ep_dir in episodes/ep*/; do
    [ ! -d "$ep_dir" ] && continue
    case "$ep_dir" in *_*) continue ;; esac
    EP_NAME=$(basename "$ep_dir" | sed 's/ep//')
    if [ -f "scripts/validate-pipeline.sh" ]; then
      bash scripts/validate-pipeline.sh "$EP_NAME" 2>/dev/null
    fi
  done
  echo ""

  echo "## 最近の変更"
  echo ""
  echo '```'
  git log --oneline -5 2>/dev/null || echo "(git情報なし)"
  echo '```'
  echo ""

  echo "## 🔒 絶対ルール（復帰時に必ず再確認）"
  echo ""
  echo "- 天啓モード／布団モード／死んだ魚の目 使用禁止"
  echo "- シアン色 クロちゃん＋スマホ光以外 禁止"
  echo "- スマホ画面 10-15 度傾け必須"
  echo "- 話者ラベル禁止／各コマ 1 機能厳守"
  echo "- git 操作はユーザーに教えない／「プルリクエスト」等の用語禁止"
  echo "- **止まらない**（聞かずに仮案で先行→差分修正）"
  echo ""

} > "$FILEPATH"

echo "✅ チェックポイント保存: $FILEPATH"

# ── NEXT.md の更新（ブランチ・次アクションがあれば反映）──
if [ -f "NEXT.md" ]; then
  # 🌿 現行作業ブランチを更新
  if [ "$CURRENT_BRANCH" != "unknown" ]; then
    awk -v b="\`${CURRENT_BRANCH}\`" '
      /^## 🌿 現行作業ブランチ/ { print; getline; print ""; print b; found=1; next }
      found && /^`/ { found=0; next }
      found && /^$/ { next }
      { print }
    ' NEXT.md > NEXT.md.tmp && mv NEXT.md.tmp NEXT.md
  fi
  # 🎯 次にやること更新（--next が指定されたときのみ）
  if [ -n "$NEXT_ACTION" ]; then
    awk -v a="**${NEXT_ACTION}**" '
      /^## 🎯 次にやること/ { print; getline; print ""; print a; found=1; next }
      found && /^\*\*/ { found=0; next }
      found && /^$/ { next }
      { print }
    ' NEXT.md > NEXT.md.tmp && mv NEXT.md.tmp NEXT.md
  fi
  echo "✅ NEXT.md 更新: ブランチ=${CURRENT_BRANCH}${NEXT_ACTION:+ / 次=${NEXT_ACTION}}"
fi
