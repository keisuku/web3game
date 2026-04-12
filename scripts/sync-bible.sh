#!/bin/bash
# bible/ 配下の各ファイルの内容を確認し、
# claude-knowledge/01_manga-bible.md の統合状態をチェックする
#
# ※ 完全な自動統合は行いません（内容の判断が必要なため）。
#   各ファイルの最終更新日を一覧表示し、統合が必要かどうかを判断する材料を提示します。

set -e

echo "=== バイブル統合チェック ==="
echo ""
echo "bible/ 配下のファイル一覧と最終更新:"
echo "---"

for f in bible/*.md bible/characters/*.md; do
  if [ -f "$f" ] && [[ ! "$f" == *"_"* ]]; then
    UPDATED=$(grep -m1 "最終更新日" "$f" 2>/dev/null | sed 's/.*: //' || echo "[未設定]")
    echo "  $f → $UPDATED"
  fi
done

echo ""
echo "---"

BIBLE_UPDATED=$(grep -m1 "最終更新日" "claude-knowledge/01_manga-bible.md" 2>/dev/null | sed 's/.*: //' || echo "[未設定]")
echo "統合版 (claude-knowledge/01_manga-bible.md) → $BIBLE_UPDATED"

echo ""
echo "統合版が古い場合は、Claude Codeに「バイブルを統合して」と伝えてください。"
echo "Claude Codeが bible/ の内容を読み取り、01_manga-bible.md を更新します。"
