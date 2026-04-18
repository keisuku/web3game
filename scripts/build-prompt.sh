#!/bin/bash
# ═══════════════════════════════════════════════════════════
# プロンプトビルダー
# 固定部分（bible/prompt-constants/）＋ ページ可変部分を結合して
# Nano Banana 投入可能な完全プロンプトを出力する。
#
# 使い方:
#   bash scripts/build-prompt.sh <EP> <PXX>
#   bash scripts/build-prompt.sh 03 P01
#
#   → 出力: episodes/ep03/prompts/build/P01.txt
#   → 標準出力にも同内容が表示される
# ═══════════════════════════════════════════════════════════

set -e

EP_NUM="$1"
PAGE_ARG="$2"

if [ -z "$EP_NUM" ] || [ -z "$PAGE_ARG" ]; then
  echo "使い方: bash scripts/build-prompt.sh <EP> <PXX>"
  echo "例:     bash scripts/build-prompt.sh 03 P01"
  exit 1
fi

PAGE_NUM=$(echo "$PAGE_ARG" | tr -d 'Pp.' | sed 's/^0*//')
[ -z "$PAGE_NUM" ] && PAGE_NUM=1
PAGE_ID=$(printf "P%02d" "$PAGE_NUM")

EP_DIR="episodes/ep${EP_NUM}"
PROMPT_FILE="${EP_DIR}/prompts/${PAGE_ID}-prompt.md"
BUILD_DIR="${EP_DIR}/prompts/build"
OUT_FILE="${BUILD_DIR}/${PAGE_ID}.txt"
CONST_DIR="bible/prompt-constants"

if [ ! -f "$PROMPT_FILE" ]; then
  echo "❌ プロンプトファイルが見つかりません: $PROMPT_FILE"
  exit 1
fi

mkdir -p "$BUILD_DIR"

# ────────────────────────────────
# YAML フロントマターを抽出（Python で安全にパース）
# ────────────────────────────────
parse_frontmatter() {
  python3 - "$PROMPT_FILE" << 'PYEOF'
import sys, re
if hasattr(sys.stdout, "reconfigure"):
    try: sys.stdout.reconfigure(encoding="utf-8")
    except Exception: pass
path = sys.argv[1]
with open(path, encoding='utf-8') as f:
    text = f.read()
m = re.match(r'^---\n(.*?)\n---\n(.*)$', text, re.DOTALL)
if not m:
    print("NO_FRONTMATTER", file=sys.stderr)
    sys.exit(2)
fm, body = m.group(1), m.group(2)

# 超シンプルな YAML（layout / characters / mood / page_specific_ban のみ対応）
out = {}
current_key = None
current_subkey = None
for line in fm.split("\n"):
    if not line.strip() or line.strip().startswith("#"):
        continue
    # top-level key: value
    m1 = re.match(r'^([a-z_]+):\s*(.*)$', line)
    if m1 and not line.startswith(" "):
        k, v = m1.group(1), m1.group(2).strip()
        current_key = k
        if v == "":
            out[k] = {}
            current_subkey = None
        elif v.startswith("["):
            out[k] = [x.strip().strip('"') for x in v.strip("[]").split(",") if x.strip()]
        else:
            out[k] = v.strip('"')
        continue
    # subkey (2-space indent): value
    m2 = re.match(r'^  ([a-z_]+):\s*(.*)$', line)
    if m2 and isinstance(out.get(current_key), dict):
        sk, sv = m2.group(1), m2.group(2).strip()
        current_subkey = sk
        if sv.startswith("["):
            out[current_key][sk] = [x.strip().strip('"') for x in sv.strip("[]").split(",") if x.strip()]
        else:
            out[current_key][sk] = sv.strip('"')
        continue
    # list item under current key: "- foo"
    m3 = re.match(r'^  - (.+)$', line)
    if m3:
        val = m3.group(1).strip().strip('"')
        if isinstance(out.get(current_key), list):
            out[current_key].append(val)
        elif isinstance(out.get(current_key), dict):
            pass

import json
print(json.dumps(out, ensure_ascii=False))
PYEOF
}

FM_JSON=$(parse_frontmatter)
if [ -z "$FM_JSON" ]; then
  echo "❌ フロントマターの解析に失敗"
  exit 1
fi

# ────────────────────────────────
# 可変部分（フロントマター以降）を取得
# ────────────────────────────────
BODY=$(awk 'BEGIN{skip=1} /^---$/ && skip==1 {skip=2; next} skip==2 && /^---$/ {skip=0; next} skip==0 {print}' "$PROMPT_FILE")

# ────────────────────────────────
# 出力組み立て
# ────────────────────────────────
python3 - "$FM_JSON" "$BODY" "$CONST_DIR" "$OUT_FILE" << 'PYEOF'
import sys, json, os, re
if hasattr(sys.stdout, "reconfigure"):
    try: sys.stdout.reconfigure(encoding="utf-8")
    except Exception: pass

fm = json.loads(sys.argv[1])
body = sys.argv[2]
const_dir = sys.argv[3]
out_file = sys.argv[4]

def read_block(path):
    """Markdown ファイルから最初のコードブロック（```〜```）を抽出"""
    if not os.path.exists(path):
        return ""
    with open(path, encoding='utf-8') as f:
        text = f.read()
    m = re.search(r'```\n(.*?)\n```', text, re.DOTALL)
    return m.group(1).strip() if m else ""

def read_section(path, section_name):
    """Markdown ファイルから指定セクション（## name）のコードブロックを抽出"""
    if not os.path.exists(path):
        return ""
    with open(path, encoding='utf-8') as f:
        text = f.read()
    # Section is `## name` followed by optional content and a code block
    pattern = rf'##\s+{re.escape(section_name)}[^\n]*\n.*?```\n(.*?)\n```'
    m = re.search(pattern, text, re.DOTALL)
    return m.group(1).strip() if m else ""

parts = []

# 1. 画風固定ブロック
parts.append(read_block(f"{const_dir}/base-style.md"))
parts.append("")

# 2. レイアウトテンプレ
layout = fm.get("layout", "vertical-4")
parts.append(read_block(f"{const_dir}/layouts/{layout}.md"))
parts.append("")

# 3. キャラクター固定プロンプト
characters = fm.get("characters", {})
for char_name, modes in characters.items():
    char_file = f"{const_dir}/characters/{char_name}.md"
    if not os.path.exists(char_file):
        continue
    # base は必ず 1 回
    seen = set()
    base = read_section(char_file, "base")
    if base:
        parts.append(base)
        seen.add("base")
    # 各モード（重複排除）
    if isinstance(modes, str):
        modes = [modes]
    for mode in (modes or []):
        if mode in seen:
            continue
        mode_block = read_section(char_file, mode)
        if mode_block:
            parts.append(mode_block)
            seen.add(mode)
    parts.append("")

# 4. ページ可変部分（フロントマター以降の本文）
parts.append(body.strip())
parts.append("")

# 5. Mood（フロントマターから取り出し）
if fm.get("mood"):
    parts.append(f"Mood: {fm['mood']}")
    parts.append("")

# 6. コア禁止事項（必ず末尾）
parts.append(read_block(f"{const_dir}/prohibited-core.md"))

# 7. ページ固有禁止事項
page_ban = fm.get("page_specific_ban", [])
if page_ban:
    parts.append("")
    parts.append("Additional page-specific constraints:")
    for ban in page_ban:
        parts.append(f"- {ban}")

result = "\n".join(parts)

with open(out_file, "w", encoding='utf-8') as f:
    f.write(result)

print(result)
PYEOF

echo ""
echo "────────────────────────────────"
echo "✅ 出力: $OUT_FILE"
echo "✅ 文字数: $(wc -c < "$OUT_FILE") / 行数: $(wc -l < "$OUT_FILE")"
