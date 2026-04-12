#!/bin/bash
# プロジェクトの現在の状態を一覧表示する

echo "=== 漫画制作ワークフロー ステータス ==="
echo ""

# エピソード一覧
echo "【エピソード】"
for ep_dir in episodes/ep*/; do
  if [ -d "$ep_dir" ] && [[ ! "$ep_dir" == *"_"* ]]; then
    EP_NAME=$(basename "$ep_dir")
    PAGE_COUNT=$(ls "$ep_dir/pages/"*.md 2>/dev/null | grep -v "_" | wc -l)
    PROMPT_COUNT=$(ls "$ep_dir/prompts/"*.md 2>/dev/null | grep -v "_" | wc -l)

    STATUS="[下書き]"
    if [ -f "$ep_dir/episode-design.md" ]; then
      S=$(grep -m1 "ステータス" "$ep_dir/episode-design.md" 2>/dev/null | sed 's/.*: //')
      [ -n "$S" ] && STATUS="[$S]"
    fi

    echo "  $EP_NAME $STATUS — ページ: ${PAGE_COUNT}, プロンプト: ${PROMPT_COUNT}"
  fi
done

echo ""

# 差分ログ
echo "【差分ログ】"
LOG_COUNT=$(ls diff-log/log-*.md 2>/dev/null | wc -l)
echo "  記録数: ${LOG_COUNT}"

# バイブル更新候補チェック
PENDING=$(grep -rl "更新必要: あり" diff-log/ 2>/dev/null | grep -v template | wc -l)
if [ "$PENDING" -gt 0 ]; then
  echo "  未反映のバイブル更新候補: ${PENDING} 件"
fi

echo ""

# 参照画像
echo "【参照画像】"
REF_COUNT=$(ls references/images/ 2>/dev/null | grep -v gitkeep | wc -l)
echo "  登録数: ${REF_COUNT}"

echo ""

# 未保存の変更
CHANGED=$(git status --porcelain 2>/dev/null | wc -l)
if [ "$CHANGED" -gt 0 ]; then
  echo "【未保存の変更: ${CHANGED} 件】"
  echo "  「保存して」と伝えてください"
else
  echo "【すべて保存済み】"
fi
