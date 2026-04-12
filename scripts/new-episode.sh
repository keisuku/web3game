#!/bin/bash
# 新エピソードを作成する
# 使い方: bash scripts/new-episode.sh 02

set -e

EP_NUM="$1"

if [ -z "$EP_NUM" ]; then
  echo "エピソード番号を指定してください"
  echo "使い方: bash scripts/new-episode.sh 02"
  exit 1
fi

EP_DIR="episodes/ep${EP_NUM}"

if [ -d "$EP_DIR" ]; then
  echo "EP${EP_NUM} は既に存在します: ${EP_DIR}"
  exit 1
fi

cp -r episodes/_episode-template/ "$EP_DIR"

# テンプレート内のプレースホルダーを置換
sed -i "s/EP\[XX\]/EP${EP_NUM}/g" "$EP_DIR/episode-design.md"
sed -i "s/EP\[XX\]/EP${EP_NUM}/g" "$EP_DIR/pages/_page-template.md"
sed -i "s/EP\[XX\]/EP${EP_NUM}/g" "$EP_DIR/prompts/_prompt-template.md"

# 作成日を埋める
TODAY=$(date +%Y-%m-%d)
sed -i "s/\[YYYY-MM-DD\]/${TODAY}/g" "$EP_DIR/episode-design.md"

echo "EP${EP_NUM} を作成しました: ${EP_DIR}"
echo ""
echo "次のステップ:"
echo "  1. ${EP_DIR}/episode-design.md を編集して企画を記入"
echo "  2. ページ設計書を作成 (scripts/new-page.sh ${EP_NUM} 01)"
