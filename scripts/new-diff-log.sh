#!/bin/bash
# 差分ログファイルを作成する
# 使い方: bash scripts/new-diff-log.sh 01 P01  (EP01のP01のログを作成)

set -e

EP_NUM="$1"
PAGE_ID="$2"

if [ -z "$EP_NUM" ] || [ -z "$PAGE_ID" ]; then
  echo "エピソード番号とページIDを指定してください"
  echo "使い方: bash scripts/new-diff-log.sh 01 P01"
  exit 1
fi

LOG_FILE="diff-log/log-ep${EP_NUM}-${PAGE_ID}.md"
TODAY=$(date +%Y-%m-%d)

if [ -f "$LOG_FILE" ]; then
  echo "ログは既に存在します: ${LOG_FILE}"
  echo "既存ファイルに追記してください"
  exit 1
fi

cp "diff-log/_diff-log-template.md" "$LOG_FILE"
sed -i "s/P\[XX\]/${PAGE_ID}/g" "$LOG_FILE"
sed -i "s/EP\[XX\]/EP${EP_NUM}/g" "$LOG_FILE"
sed -i "s/\[YYYY-MM-DD\]/${TODAY}/g" "$LOG_FILE"

echo "差分ログを作成しました: ${LOG_FILE}"
