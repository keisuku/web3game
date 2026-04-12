#!/bin/bash
# 新ページ設計書とプロンプトファイルを作成する
# 使い方: bash scripts/new-page.sh 01 03  (EP01のP03を作成)

set -e

EP_NUM="$1"
PAGE_NUM="$2"

if [ -z "$EP_NUM" ] || [ -z "$PAGE_NUM" ]; then
  echo "エピソード番号とページ番号を指定してください"
  echo "使い方: bash scripts/new-page.sh 01 03"
  exit 1
fi

EP_DIR="episodes/ep${EP_NUM}"
PAGE_FILE="${EP_DIR}/pages/P${PAGE_NUM}.md"
PROMPT_FILE="${EP_DIR}/prompts/P${PAGE_NUM}-prompt.md"

if [ ! -d "$EP_DIR" ]; then
  echo "EP${EP_NUM} が存在しません。先に作成してください:"
  echo "  bash scripts/new-episode.sh ${EP_NUM}"
  exit 1
fi

if [ -f "$PAGE_FILE" ]; then
  echo "P${PAGE_NUM} は既に存在します: ${PAGE_FILE}"
  exit 1
fi

# ページ設計書をテンプレートからコピー
cp "${EP_DIR}/pages/_page-template.md" "$PAGE_FILE"
sed -i "s/P\[XX\]/P${PAGE_NUM}/g" "$PAGE_FILE"
sed -i "s/EP\[XX\]/EP${EP_NUM}/g" "$PAGE_FILE"

# プロンプトファイルをテンプレートからコピー
cp "${EP_DIR}/prompts/_prompt-template.md" "$PROMPT_FILE"
sed -i "s/P\[XX\]/P${PAGE_NUM}/g" "$PROMPT_FILE"
sed -i "s/EP\[XX\]/EP${EP_NUM}/g" "$PROMPT_FILE"

echo "P${PAGE_NUM} を作成しました:"
echo "  ページ設計書: ${PAGE_FILE}"
echo "  プロンプト:   ${PROMPT_FILE}"
echo ""
echo "次のステップ:"
echo "  1. ${PAGE_FILE} のコマ設計を記入（Pass 1: 構図ラフ）"
