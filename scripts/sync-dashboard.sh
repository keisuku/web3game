#!/bin/bash
# ═══════════════════════════════════════════════════════════
# ダッシュボード同期
# 全ページのプロンプトをビルドし、index.html の promptTextsEP03/EP02 配列に
# 組み立て済みプロンプトを自動投入する。
#
# 使い方:
#   bash scripts/sync-dashboard.sh <EP>
#   bash scripts/sync-dashboard.sh 03
#
# Note: pagesEPXX（ページデータ）は手動更新（人間が編集するデータ）。
#       本スクリプトは promptTextsEPXX のみ自動更新する。
# ═══════════════════════════════════════════════════════════

set -e

EP_NUM="$1"

if [ -z "$EP_NUM" ]; then
  echo "使い方: bash scripts/sync-dashboard.sh <EP>"
  echo "例:     bash scripts/sync-dashboard.sh 03"
  exit 1
fi

EP_DIR="episodes/ep${EP_NUM}"
PROMPT_DIR="${EP_DIR}/prompts"
BUILD_DIR="${PROMPT_DIR}/build"

if [ ! -d "$PROMPT_DIR" ]; then
  echo "❌ ${PROMPT_DIR} が存在しません"
  exit 1
fi

# 全プロンプトをビルド
echo "═══ 全プロンプトをビルド: EP${EP_NUM} ═══"
for pfile in "$PROMPT_DIR"/P*-prompt.md; do
  [ ! -f "$pfile" ] && continue
  case "$pfile" in *_*) continue ;; esac
  PID=$(basename "$pfile" | sed 's/-prompt\.md$//')
  if bash scripts/build-prompt.sh "$EP_NUM" "$PID" > /dev/null 2>&1; then
    echo "  ✅ ${PID} → build/${PID}.txt"
  else
    echo "  ❌ ${PID} ビルド失敗"
    exit 1
  fi
done
echo ""

# index.html に投入
echo "═══ index.html に投入 ═══"
python3 - "$EP_NUM" "$BUILD_DIR" << 'PYEOF'
import sys, os, re, glob

ep = sys.argv[1].zfill(2)
build_dir = sys.argv[2]
ep_tag = f"EP{ep}"
var_name = f"promptTextsEP{ep}"

# build 出力を順番に読み込み
build_files = sorted(glob.glob(f"{build_dir}/P*.txt"))
if not build_files:
    print(f"❌ {build_dir} にビルド出力がありません")
    sys.exit(1)

prompts = []
for bf in build_files:
    with open(bf) as f:
        text = f.read().strip()
    text = text.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    prompts.append(text)

# 配列を組み立て
new_block = f"const {var_name} = [\n"
for t in prompts:
    new_block += '`' + t + '`,\n'
new_block += '];'

# index.html 読み込み・置換
html_path = '/home/user/web3game/index.html'
with open(html_path) as f:
    html = f.read()

start = html.find(f"const {var_name} = [")
if start < 0:
    print(f"❌ index.html に {var_name} が見つかりません（EP を初めて追加する場合は手動で追加）")
    sys.exit(1)
end = html.find('];', start) + 2

old_len = end - start
html = html[:start] + new_block + html[end:]

with open(html_path, 'w') as f:
    f.write(html)

print(f"✅ index.html 同期: {var_name} を {len(build_files)} 本のビルド出力で更新")
print(f"   旧サイズ: {old_len} 文字 → 新サイズ: {len(new_block)} 文字")
PYEOF

echo ""
echo "✅ ダッシュボード同期完了"
echo "   確認: git diff index.html で差分確認 → commit + push でデプロイ"
