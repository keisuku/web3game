#!/bin/bash
# ═══════════════════════════════════════════════════════════
# Thread A コンテキストバンドル生成
# ページ設計セッションに必要な全情報を1ブロックにまとめて出力。
# コピペ1回で Thread A の新セッションを開始できる。
#
# 使い方: bash scripts/bundle-thread-a.sh <episode番号> [ページID]
# 例:     bash scripts/bundle-thread-a.sh 01 P04
#         bash scripts/bundle-thread-a.sh 01         （企画整理）
# ═══════════════════════════════════════════════════════════

EP="$1"
PAGE="$2"

if [ -z "$EP" ]; then
  echo "使い方: bash scripts/bundle-thread-a.sh <episode番号> [ページID]"
  echo "例:     bash scripts/bundle-thread-a.sh 01 P04"
  exit 1
fi

EP_DIR="episodes/ep${EP}"

if [ ! -d "$EP_DIR" ]; then
  echo "エラー: ${EP_DIR} が見つかりません"
  exit 1
fi

# ページIDの正規化
if [ -n "$PAGE" ]; then
  PAGE_NUM=$(echo "$PAGE" | tr -d 'Pp.' | sed 's/^0*//')
  [ -z "$PAGE_NUM" ] && PAGE_NUM=1
  PAGE_ID=$(printf "P%02d" "$PAGE_NUM")
fi

# ────────────────────────────────
# 出力開始
# ────────────────────────────────

cat << 'HEADER'
══════════════════════════════════════════════
 ページ設計セッション（Thread A）
══════════════════════════════════════════════
HEADER

if [ -n "$PAGE_ID" ]; then
  echo " EP${EP} ${PAGE_ID}"
else
  echo " EP${EP}（企画整理）"
fi
echo ""
echo "ナレッジの 01_manga-bible.md, 02_output-format-rules.md,"
echo "03_manga-grammar.md を参照してください。"
echo ""

# ── 話の設計書 ──
if [ -f "$EP_DIR/episode-design.md" ]; then
  echo "──────────────────────────────────────────"
  echo "■ 話の設計書"
  echo "──────────────────────────────────────────"
  echo ""
  cat "$EP_DIR/episode-design.md"
  echo ""
fi

# ── 前ページ（連続性確認用）──
if [ -n "$PAGE_ID" ] && [ "$PAGE_NUM" -gt 1 ]; then
  PREV_NUM=$((PAGE_NUM - 1))
  PREV_ID=$(printf "P%02d" "$PREV_NUM")
  PREV_FILE="$EP_DIR/pages/${PREV_ID}.md"

  if [ -f "$PREV_FILE" ]; then
    echo "──────────────────────────────────────────"
    echo "■ 前ページ（${PREV_ID}）— 流れの連続性確認"
    echo "──────────────────────────────────────────"
    echo ""
    cat "$PREV_FILE"
    echo ""
  fi
fi

# ── 差分ログからのフィードバック ──
echo "──────────────────────────────────────────"
echo "■ 差分ログからのフィードバック"
echo "──────────────────────────────────────────"
echo ""

FOUND_FEEDBACK=false
for log in diff-log/log-ep${EP}-*.md; do
  [ ! -f "$log" ] && continue
  case "$log" in *template*) continue ;; esac

  # 「次回への反映」セクションを抽出
  FEEDBACK=$(awk '
    /次回への反映/ { printing=1; print; next }
    printing && /^$/ { printing=0; next }
    printing && /^#/ { printing=0; next }
    printing && /^---/ { printing=0; next }
    printing { print }
  ' "$log")

  if [ -n "$FEEDBACK" ]; then
    echo "--- $(basename "$log") ---"
    echo "$FEEDBACK"
    echo ""
    FOUND_FEEDBACK=true
  fi
done

if ! $FOUND_FEEDBACK; then
  echo "（フィードバックなし）"
  echo ""
fi

# ── 既存ページ一覧（進捗確認）──
EXISTING_PAGES=$(ls "$EP_DIR/pages/"*.md 2>/dev/null | grep -v "_" | sort)
if [ -n "$EXISTING_PAGES" ]; then
  echo "──────────────────────────────────────────"
  echo "■ 作成済みページ一覧"
  echo "──────────────────────────────────────────"
  echo ""
  for p in $EXISTING_PAGES; do
    PNAME=$(basename "$p" .md)
    # ステータスを取得
    PSTATUS=$(grep -m1 "ステータス" "$p" 2>/dev/null | sed 's/.*: //' | tr -d '*')
    echo "  ${PNAME}: ${PSTATUS:-不明}"
  done
  echo ""
fi

# ── タスク指示 ──
echo "──────────────────────────────────────────"
echo "■ タスク"
echo "──────────────────────────────────────────"
echo ""

if [ -n "$PAGE_ID" ]; then
  # 既にページ設計書があるかチェック
  TARGET_FILE="$EP_DIR/pages/${PAGE_ID}.md"
  if [ -f "$TARGET_FILE" ]; then
    echo "EP${EP} ${PAGE_ID} のページ設計書を改訂してください。"
    echo ""
    echo "現在の内容:"
    echo ""
    cat "$TARGET_FILE"
  else
    echo "EP${EP} ${PAGE_ID} のページ設計書を新規作成してください。"
    echo "3パスループで進めます:"
    echo "  Pass 1: 構図ラフ（コマ割り・視線誘導）"
    echo "  Pass 2: 表情・流れ補正"
    echo "  Pass 3: セリフ・演出仕上げ"
    echo ""
    echo "まず Pass 1（構図ラフ）から開始してください。"
    echo "漫画文法の6原則を確認しながら進めてください。"
  fi
else
  echo "EP${EP} の企画を整理してください。"
  echo "02_output-format-rules.md のエピソード企画フォーマットに従って出力してください。"
fi
