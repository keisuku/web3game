#!/usr/bin/env python3
"""
コマ割りパターン自動選定

bible/panel-patterns/patterns.json から、
前後5ページの使用履歴を避けたパターンを1つ選ぶ。

使い方:
  python3 scripts/pick-pattern.py EP PAGE [--purpose <tag>]

引数:
  EP          エピソード番号 (例: 02)
  PAGE        ページID (例: P01)
  --purpose   用途タグ (introduction/climax/confrontation/ending/normal)
              省略時は normal
"""
import argparse
import json
import re
import sys
import random
from pathlib import Path

# Windows CP932 対策: 標準出力を UTF-8 に切り替え
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

REPO = Path(__file__).resolve().parent.parent
PATTERNS = REPO / "bible" / "panel-patterns" / "patterns.json"

# purpose → 推奨パターンID
PURPOSE_MAP = {
    "introduction": ["P01-quiet-base", "P12-strip-plus-big", "P09-top-big-three-small"],
    "climax": ["P06-black-punchline", "P11-double-spread", "P14-explosion-radial", "P03-diagonal-5"],
    "confrontation": ["P13-center-vs-flanks", "P10-vertical-4faces", "P04-pointing-radial"],
    "ending": ["P08-back-glance", "P05-meta-bird-eye"],
    "normal": ["P15-sym-grid-break", "P09-top-big-three-small", "P02-audience-clockwise",
               "P10-vertical-4faces", "P07-onomatopoeia-comp", "P16-vertical-long"],
}


def load_patterns():
    with PATTERNS.open(encoding="utf-8") as f:
        return json.load(f)["patterns"]


def recent_patterns(ep: str):
    ep_dir = REPO / "episodes" / f"ep{ep}" / "pages"
    if not ep_dir.exists():
        return []
    used = []
    for page_file in sorted(ep_dir.glob("P*.md")):
        if page_file.name.startswith("_"):
            continue
        text = page_file.read_text(encoding="utf-8", errors="replace")
        m = re.search(r"採用パターン:\s*(\S+)", text)
        if m:
            pid = m.group(1).strip("*[]")
            used.append((page_file.stem, pid))
    return used


def count_pattern_usage(used):
    counter = {}
    for _, pid in used:
        counter[pid] = counter.get(pid, 0) + 1
    return counter


def pick(ep: str, page: str, purpose: str):
    patterns = load_patterns()
    used = recent_patterns(ep)
    last5_ids = {pid for (_, pid) in used[-5:]}
    usage = count_pattern_usage(used)

    # 候補を purpose から絞る
    candidates = PURPOSE_MAP.get(purpose, PURPOSE_MAP["normal"])
    # 候補内で、直近5ページ未使用かつ使用回数3回未満のものを優先
    filtered = [p for p in candidates
                if p not in last5_ids and usage.get(p, 0) < 3]
    if not filtered:
        # 緩める
        filtered = [p["id"] for p in patterns
                    if p["id"] not in last5_ids and usage.get(p["id"], 0) < 3]
    if not filtered:
        filtered = [p["id"] for p in patterns]

    chosen_id = random.choice(filtered)
    chosen = next(p for p in patterns if p["id"] == chosen_id)
    return chosen, used, usage


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("ep", help="エピソード番号 (例: 02)")
    parser.add_argument("page", help="ページID (例: P01)")
    parser.add_argument("--purpose", default="normal",
                        choices=list(PURPOSE_MAP.keys()))
    args = parser.parse_args()

    chosen, used, usage = pick(args.ep, args.page, args.purpose)

    print(f"選定パターン: {chosen['id']} — {chosen['name']}")
    print(f"  コマ数: {chosen['panelCount']}")
    print(f"  強度: 密度 {', '.join(chosen['densityLevels'])}")
    print(f"  用途: {chosen['useCase']}")
    print(f"  視線: {chosen['rightToLeftFlow']}")
    print()
    print("Composition (Nano Banana用にそのまま使える):")
    print(f"  {chosen['composition']}")
    print()
    print(f"このエピの既使用パターン: {len(used)}ページ")
    if usage:
        print("  使用回数:")
        for pid, count in sorted(usage.items(), key=lambda x: -x[1]):
            print(f"    {pid}: {count}")


if __name__ == "__main__":
    main()
