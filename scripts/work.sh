#!/bin/bash
# ═══════════════════════════════════════════════════════════
# 次ページ着手ワンコマンド
# 1 コマンドでページ設計着手に必要な情報を全部集めて準備する。
# - NEXT.md のブランチ確認
# - 前ページ表示
# - 話の設計書の該当行抽出
# - 禁止事項の再掲
# - 参照画像一覧
# - PXX.md がなければテンプレから作成
# - 次の具体的な作業指示を表示
#
# 使い方: bash scripts/work.sh <EP> <P>
# 例:     bash scripts/work.sh 03 P03
# ═══════════════════════════════════════════════════════════

set -e

EP_NUM="$1"
PAGE_ARG="$2"

if [ -z "$EP_NUM" ] || [ -z "$PAGE_ARG" ]; then
  echo "使い方: bash scripts/work.sh <EP> <P>"
  echo "例:     bash scripts/work.sh 03 P03"
  exit 1
fi

PAGE_NUM=$(echo "$PAGE_ARG" | tr -d 'Pp.' | sed 's/^0*//')
[ -z "$PAGE_NUM" ] && PAGE_NUM=1
PAGE_ID=$(printf "P%02d" "$PAGE_NUM")

EP_DIR="episodes/ep${EP_NUM}"
PAGE_FILE="${EP_DIR}/pages/${PAGE_ID}.md"
PROMPT_FILE="${EP_DIR}/prompts/${PAGE_ID}-prompt.md"

if [ ! -d "$EP_DIR" ]; then
  echo "❌ EP${EP_NUM} が存在しません。先に: bash scripts/new-episode.sh ${EP_NUM}"
  exit 1
fi

echo "══════════════════════════════════════════════"
echo " 着手準備: EP${EP_NUM} ${PAGE_ID}"
echo "══════════════════════════════════════════════"
echo ""

# ── 0. ブランチ確認 ──
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")
NEXT_BRANCH=$(grep -m1 '^`claude/' NEXT.md 2>/dev/null | tr -d '`')
echo "🌿 現在のブランチ: ${CURRENT_BRANCH}"
if [ -n "$NEXT_BRANCH" ] && [ "$CURRENT_BRANCH" != "$NEXT_BRANCH" ]; then
  echo "   ⚠ NEXT.md 指定ブランチ『${NEXT_BRANCH}』と不一致"
fi
echo ""

# ── 1. 話の設計書の該当ページ行を抽出 ──
if [ -f "$EP_DIR/episode-design.md" ]; then
  echo "📖 話の設計書から ${PAGE_ID} の役割を抽出"
  echo "───────────────────────────────────────────────"
  # 該当ページ行をページ構成テーブルから抽出
  grep -E "^\| *${PAGE_ID}|^\| *\*\*${PAGE_ID}\*\*" "$EP_DIR/episode-design.md" 2>/dev/null | head -1 | sed 's/^/   /'
  echo ""
fi

# ── 2. 前ページのあらすじ（連続性確認） ──
if [ "$PAGE_NUM" -gt 1 ]; then
  PREV_NUM=$((PAGE_NUM - 1))
  PREV_ID=$(printf "P%02d" "$PREV_NUM")
  PREV_FILE="$EP_DIR/pages/${PREV_ID}.md"
  if [ -f "$PREV_FILE" ]; then
    echo "📄 前ページ ${PREV_ID} の目的・オチ（連続性確認）"
    echo "───────────────────────────────────────────────"
    grep -E "^- 目的:" "$PREV_FILE" 2>/dev/null | head -1 | sed 's/^/   /'
    # 最終コマの要約を抽出
    LAST_PANEL=$(awk '/^### コマ/ { buf=""; capture=1; name=$0 } capture { buf=buf"\n"$0 } END { print name buf }' "$PREV_FILE")
    echo "   最終コマ:"
    echo "$LAST_PANEL" | grep -E "^- (構図|表情|セリフ)" | head -3 | sed 's/^/     /'
    echo ""
  fi
fi

# ── 3. 絶対禁止事項の再掲（毎回） ──
echo "🔒 絶対禁止（毎回確認）"
echo "───────────────────────────────────────────────"
cat << 'RULES'
   - 天啓モード（目に炎・スピードライン）使用禁止
   - 布団モード／死んだ魚の目 当面封印
   - シアン色（クロちゃん＋スマホ光以外）禁止
   - ミドリ色露出禁止
   - デフォルメ顔禁止
   - 話者ラベル（「翔一：」等）禁止
   - スマホ画面は必ず 10-15 度傾け
   - 各コマの機能は 1 つに絞る
   - モザイク禁止（著作権キャラは黒い横線バーのみ）
RULES
echo ""

# ── 4. 参照画像一覧 ──
if [ -d "references/images" ]; then
  REF_FILES=$(ls references/images/ 2>/dev/null | grep -v gitkeep | head -10)
  if [ -n "$REF_FILES" ]; then
    echo "🖼  参照画像（references/images/）"
    echo "───────────────────────────────────────────────"
    echo "$REF_FILES" | sed 's/^/   /'
    echo ""
  fi
fi

# ── 5. 差分ログからのフィードバック ──
FEEDBACK_LOGS=$(ls diff-log/log-ep${EP_NUM}-*.md 2>/dev/null)
if [ -n "$FEEDBACK_LOGS" ]; then
  FOUND=false
  for log in $FEEDBACK_LOGS; do
    case "$log" in *template*) continue ;; esac
    FB=$(awk '
      /次回への反映/ { printing=1; print; next }
      printing && (/^$/ || /^#/ || /^---/) { exit }
      printing { print }
    ' "$log")
    if [ -n "$FB" ]; then
      if ! $FOUND; then
        echo "🔁 差分ログからのフィードバック"
        echo "───────────────────────────────────────────────"
        FOUND=true
      fi
      echo "   --- $(basename "$log") ---"
      echo "$FB" | sed 's/^/   /'
    fi
  done
  $FOUND && echo ""
fi

# ── 6. PXX.md の作成（未作成なら） ──
if [ -f "$PAGE_FILE" ]; then
  echo "📝 ページ設計書: 既存 → 続きを編集"
  echo "   $PAGE_FILE"
else
  if [ -f "${EP_DIR}/pages/_page-template.md" ]; then
    cp "${EP_DIR}/pages/_page-template.md" "$PAGE_FILE"
    sed -i "s/P\[XX\]/${PAGE_ID}/g" "$PAGE_FILE"
    sed -i "s/EP\[XX\]/EP${EP_NUM}/g" "$PAGE_FILE"
    echo "📝 ページ設計書: 新規作成"
    echo "   $PAGE_FILE（テンプレから作成済み）"
  fi
fi

# プロンプトファイルも並行作成
if [ ! -f "$PROMPT_FILE" ] && [ -f "${EP_DIR}/prompts/_prompt-template.md" ]; then
  cp "${EP_DIR}/prompts/_prompt-template.md" "$PROMPT_FILE"
  sed -i "s/P\[XX\]/${PAGE_ID}/g" "$PROMPT_FILE"
  sed -i "s/EP\[XX\]/EP${EP_NUM}/g" "$PROMPT_FILE"
fi
echo ""

# ── 7. 次の作業指示 ──
echo "✅ 準備完了。次の動き:"
echo "───────────────────────────────────────────────"
echo "   1. ${PAGE_FILE} のコマ設計を 3 パスループで書く"
echo "      （Pass 1 構図ラフ → Pass 2 表情補正 → Pass 3 セリフ仕上げ）"
echo "   2. 書き終わったら: bash scripts/validate-pipeline.sh ${EP_NUM} ${PAGE_ID}"
echo "   3. エラー/警告 0 なら: git add -A && git commit && git push"
echo ""
