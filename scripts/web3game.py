#!/usr/bin/env python3
"""
Cross-platform operations for the web3game manga workflow.

The repository's source of truth is Markdown under episodes/, bible/, and
claude-knowledge/. This CLI builds prompts, validates consistency, and
generates the public dashboard from those source files without requiring Bash.
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import shutil
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any


if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass


REPO = Path(__file__).resolve().parent.parent
EPISODES_DIR = REPO / "episodes"
CONST_DIR = REPO / "bible" / "prompt-constants"
PATTERNS_FILE = REPO / "bible" / "panel-patterns" / "patterns.json"
DASHBOARD_DATA = REPO / "assets" / "dashboard-data.js"
INDEX_FILE = REPO / "index.html"


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="replace")


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8", newline="\n")


def normalize_page(page: str) -> str:
    raw = page.strip().upper().replace(".", "")
    raw = raw[1:] if raw.startswith("P") else raw
    raw = raw.lstrip("0") or "1"
    return f"P{int(raw):02d}"


def normalize_episode(ep: str | None) -> str | None:
    if ep is None:
        return None
    raw = ep.strip().lower().replace("_", "-")
    if raw in {"all", "*"}:
        return "all"
    raw = raw.removeprefix("episodes/")
    if raw.startswith("ep"):
        raw = raw[2:]
    raw = raw.replace("reboot", "-reboot")
    raw = re.sub(r"-+", "-", raw).strip("-")
    match = re.match(r"^(\d+)(?:-?r|-?reboot)?$", raw)
    if match:
        suffix = "-reboot" if ("r" in raw or "reboot" in raw) else ""
        return f"ep{int(match.group(1)):02d}{suffix}"
    if raw.startswith("ep"):
        return raw
    return f"ep{raw}"


def episode_sort_key(path: Path) -> tuple[int, int, str]:
    match = re.match(r"ep(\d+)(-reboot)?$", path.name)
    if not match:
        return (9999, 1, path.name)
    return (int(match.group(1)), 0 if match.group(2) else 1, path.name)


def list_episode_dirs() -> list[Path]:
    if not EPISODES_DIR.exists():
        return []
    dirs = [
        p
        for p in EPISODES_DIR.iterdir()
        if p.is_dir() and p.name.startswith("ep") and not p.name.startswith("_")
    ]
    return sorted(dirs, key=episode_sort_key)


def episode_dir(ep: str) -> Path:
    normalized = normalize_episode(ep)
    if normalized in {None, "all"}:
        raise ValueError("episode must not be all here")
    return EPISODES_DIR / normalized


def parse_scalar(value: str) -> Any:
    value = value.strip()
    if value == "":
        return ""
    if (value.startswith('"') and value.endswith('"')) or (
        value.startswith("'") and value.endswith("'")
    ):
        return value[1:-1]
    if value.startswith("[") and value.endswith("]"):
        inner = value[1:-1].strip()
        if not inner:
            return []
        return [parse_scalar(item.strip()) for item in inner.split(",")]
    return value


def parse_simple_yaml(raw: str) -> dict[str, Any]:
    result: dict[str, Any] = {}
    current_key: str | None = None
    for line in raw.splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        top = re.match(r"^([A-Za-z0-9_-]+):\s*(.*)$", line)
        if top and not line.startswith(" "):
            key, value = top.group(1), top.group(2)
            current_key = key
            result[key] = {} if value.strip() == "" else parse_scalar(value)
            continue
        sub = re.match(r"^  ([A-Za-z0-9_-]+):\s*(.*)$", line)
        if sub and current_key:
            if not isinstance(result.get(current_key), dict):
                result[current_key] = {}
            result[current_key][sub.group(1)] = parse_scalar(sub.group(2))
            continue
        item = re.match(r"^  -\s+(.+)$", line)
        if item and current_key:
            if not isinstance(result.get(current_key), list):
                result[current_key] = []
            result[current_key].append(parse_scalar(item.group(1)))
    return result


def parse_frontmatter(text: str) -> tuple[dict[str, Any], str]:
    if not text.startswith("---\n"):
        return {}, text
    end = text.find("\n---\n", 4)
    if end < 0:
        return {}, text
    return parse_simple_yaml(text[4:end]), text[end + 5 :]


def first_code_block(text: str) -> str:
    match = re.search(r"```\n(.*?)\n```", text, re.S)
    return match.group(1).strip() if match else text.strip()


def read_block(path: Path) -> str:
    if not path.exists():
        return ""
    return first_code_block(read_text(path))


def read_section_code(path: Path, section: str) -> str:
    if not path.exists():
        return ""
    text = read_text(path)
    pattern = rf"^##\s+{re.escape(section)}[^\n]*\n(.*?)(?=^##\s+|\Z)"
    match = re.search(pattern, text, re.S | re.M)
    if not match:
        return ""
    return first_code_block(match.group(1))


def build_prompt(ep: str, page: str, *, echo: bool = False) -> str:
    ep_dir = episode_dir(ep)
    page_id = normalize_page(page)
    prompt_file = ep_dir / "prompts" / f"{page_id}-prompt.md"
    if not prompt_file.exists():
        raise FileNotFoundError(f"prompt file not found: {prompt_file.relative_to(REPO)}")

    source = read_text(prompt_file)
    frontmatter, body = parse_frontmatter(source)
    out_file = ep_dir / "prompts" / "build" / f"{page_id}.txt"

    if not frontmatter:
        result = source.strip() + "\n"
    else:
        parts: list[str] = []
        layout = str(frontmatter.get("layout", "vertical-4"))
        characters = frontmatter.get("characters", {})

        parts.extend([read_block(CONST_DIR / "base-style.md"), "", read_block(CONST_DIR / "layouts" / f"{layout}.md"), ""])

        if isinstance(characters, dict):
            for char_name, modes in characters.items():
                char_file = CONST_DIR / "characters" / f"{char_name}.md"
                if not char_file.exists():
                    parts.append(f"[Missing character prompt: {char_name}]")
                    continue
                seen: set[str] = set()
                for section in ["strict-rules", "base"]:
                    block = read_section_code(char_file, section)
                    if block:
                        parts.append(block)
                        seen.add(section)
                mode_list = [modes] if isinstance(modes, str) else [str(m) for m in modes] if isinstance(modes, list) else []
                for mode in mode_list:
                    if mode in seen:
                        continue
                    block = read_section_code(char_file, mode)
                    if block:
                        parts.append(block)
                        seen.add(mode)
                parts.append("")

        parts.extend([body.strip(), ""])
        mood = frontmatter.get("mood")
        if mood:
            parts.extend([f"Mood: {mood}", ""])
        parts.append(read_block(CONST_DIR / "prohibited-core.md"))

        page_ban = frontmatter.get("page_specific_ban", [])
        if page_ban:
            parts.extend(["", "Additional page-specific constraints:"])
            for item in page_ban:
                parts.append(f"- {item}")

        result = "\n".join(parts).strip() + "\n"

    write_text(out_file, result)
    if echo:
        print(result)
        print("\n────────────────────────────────")
        print(f"出力: {out_file.relative_to(REPO)}")
        print(f"文字数: {len(result.encode('utf-8'))} / 行数: {result.count(chr(10))}")
    return result


def extract_line_value(text: str, label: str) -> str:
    pattern = rf"^-\s*(?:\*\*)?{re.escape(label)}(?:\*\*)?\s*:\s*(.+)$"
    match = re.search(pattern, text, re.M)
    if not match:
        return ""
    return re.sub(r"\*\*", "", match.group(1)).strip()


def clean_markdown_inline(value: str) -> str:
    value = re.sub(r"\*\*(.*?)\*\*", r"\1", value or "")
    value = re.sub(r"`([^`]+)`", r"\1", value)
    return value.strip()


def derive_page_title(page_id: str, purpose: str, heading: str) -> str:
    if purpose:
        cleaned = clean_markdown_inline(purpose).replace("★", "").strip()
        for sep in ["—", " - ", "→", "／", ":"]:
            if sep in cleaned:
                return cleaned.split(sep)[0].strip()[:48] or page_id
        return cleaned[:48] or page_id
    if heading:
        return heading.split(page_id, 1)[-1].strip(" —:-") or page_id
    return page_id


def parse_panel(section: str) -> dict[str, str]:
    lines = section.splitlines()
    heading = lines[0] if lines else ""
    n_match = re.search(r"コマ\s*([0-9]+)", heading)
    size_match = re.search(r"[（(](.*?)[）)]", heading)
    joined = "\n".join(lines[1:])
    return {
        "n": n_match.group(1) if n_match else "",
        "size": clean_markdown_inline(size_match.group(1) if size_match else ""),
        "composition": clean_markdown_inline(extract_line_value(joined, "構図")),
        "expression": clean_markdown_inline(
            extract_line_value(joined, "表情・感情") or extract_line_value(joined, "表情") or extract_line_value(joined, "感情")
        ),
        "dialogue": clean_markdown_inline(
            extract_line_value(joined, "セリフ要約") or extract_line_value(joined, "セリフ") or extract_line_value(joined, "テキスト")
        ),
        "sfx": clean_markdown_inline(extract_line_value(joined, "効果音")),
        "density": clean_markdown_inline(extract_line_value(joined, "密度レベル")),
        "techniques": clean_markdown_inline(extract_line_value(joined, "適用技法")),
    }


def parse_page_file(path: Path) -> dict[str, Any]:
    text = read_text(path)
    page_id = path.stem
    heading = re.search(r"^#\s+(.+)$", text, re.M)
    purpose = extract_line_value(text, "目的")
    sections = re.split(r"(?=^###\s+コマ)", text, flags=re.M)
    prompt_md = path.parent.parent / "prompts" / f"{page_id}-prompt.md"
    build_txt = path.parent.parent / "prompts" / "build" / f"{page_id}.txt"
    return {
        "id": page_id,
        "title": derive_page_title(page_id, purpose, heading.group(1) if heading else ""),
        "purpose": clean_markdown_inline(purpose),
        "density": clean_markdown_inline(extract_line_value(text, "密度")),
        "status": clean_markdown_inline(extract_line_value(text, "ステータス")),
        "pattern": clean_markdown_inline(extract_line_value(text, "採用パターン")),
        "techniques": clean_markdown_inline(extract_line_value(text, "適用技法")),
        "flow": clean_markdown_inline(extract_line_value(text, "視線誘導")),
        "star": "★" in purpose or "最大" in purpose or "ピーク" in purpose,
        "panels": [parse_panel(s) for s in sections if s.startswith("### コマ")],
        "source": str(path.relative_to(REPO)).replace("\\", "/"),
        "promptSource": str(prompt_md.relative_to(REPO)).replace("\\", "/") if prompt_md.exists() else "",
        "buildSource": str(build_txt.relative_to(REPO)).replace("\\", "/") if build_txt.exists() else "",
        "promptText": read_text(build_txt).strip() if build_txt.exists() else "",
    }


def parse_episode_design(path: Path) -> dict[str, str]:
    if not path.exists():
        return {"title": path.parent.name.upper(), "summary": "", "status": ""}
    text = read_text(path)
    heading = re.search(r"^#\s+話の設計書\s+—\s+(.+)$", text, re.M)
    summary_match = re.search(r"^##\s+企画要約\s*\n(.*?)(?=^##\s+|\Z)", text, re.S | re.M)
    summary = ""
    if summary_match:
        summary = " ".join(line.strip() for line in summary_match.group(1).splitlines() if line.strip() and not line.strip().startswith("---"))
    return {
        "title": clean_markdown_inline(heading.group(1).strip() if heading else path.parent.name.upper()),
        "summary": clean_markdown_inline(summary),
        "status": clean_markdown_inline(extract_line_value(text, "ステータス")),
        "kind": clean_markdown_inline(extract_line_value(text, "種別")),
        "postUnit": clean_markdown_inline(extract_line_value(text, "投稿単位")),
        "source": str(path.relative_to(REPO)).replace("\\", "/"),
    }


def latest_file(directory: Path, pattern: str) -> Path | None:
    if not directory.exists():
        return None
    files = [p for p in directory.glob(pattern) if p.is_file()]
    return max(files, key=lambda p: p.stat().st_mtime) if files else None


def build_dashboard_data() -> dict[str, Any]:
    episodes: list[dict[str, Any]] = []
    for ep_dir in list_episode_dirs():
        prompts_dir = ep_dir / "prompts"
        if prompts_dir.exists():
            for prompt_file in sorted(prompts_dir.glob("P*-prompt.md")):
                if not prompt_file.name.startswith("_"):
                    try:
                        build_prompt(ep_dir.name, prompt_file.stem.replace("-prompt", ""))
                    except Exception as exc:
                        print(f"警告: {prompt_file.relative_to(REPO)} のビルド失敗: {exc}", file=sys.stderr)
        pages_dir = ep_dir / "pages"
        pages = [parse_page_file(p) for p in sorted(pages_dir.glob("P*.md")) if not p.name.startswith("_")] if pages_dir.exists() else []
        design = parse_episode_design(ep_dir / "episode-design.md")
        episodes.append(
            {
                "id": ep_dir.name.upper(),
                "slug": ep_dir.name,
                "label": ep_dir.name.upper().replace("-REBOOT", "★REBOOT"),
                "reboot": ep_dir.name.endswith("-reboot"),
                "pages": pages,
                "pageCount": len(pages),
                "promptCount": sum(1 for p in pages if p.get("promptText")),
                **design,
            }
        )
    latest_checkpoint = latest_file(REPO / "sessions" / "checkpoints", "*.md")
    return {
        "generatedAt": dt.datetime.now().astimezone().isoformat(timespec="seconds"),
        "project": "WEB3.0 終わたから",
        "episodes": episodes,
        "latestCheckpoint": str(latest_checkpoint.relative_to(REPO)).replace("\\", "/") if latest_checkpoint else "",
    }


INDEX_TEMPLATE = """<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WEB3.0 終わたから — 制作ダッシュボード</title>
  <link rel="stylesheet" href="assets/site.css">
</head>
<body>
  <header class="topbar">
    <div>
      <p class="eyebrow">Manga Workflow Dashboard</p>
      <h1>WEB3.0 終わたから</h1>
      <p id="episode-subtitle">Markdownから自動生成された制作ダッシュボード</p>
    </div>
    <div class="status-strip" aria-label="dashboard status">
      <span id="generated-at"></span>
      <span id="counts"></span>
    </div>
  </header>
  <section class="workspace">
    <aside class="sidebar">
      <div class="side-section">
        <h2>Episodes</h2>
        <div id="episode-list" class="episode-list"></div>
      </div>
      <div class="side-section">
        <h2>Tools</h2>
        <div class="tool-grid">
          <button id="copy-current-prompt" class="tool-button" type="button">現在のプロンプトをコピー</button>
          <button id="copy-feedback" class="tool-button secondary" type="button">フィードバック文をコピー</button>
        </div>
      </div>
    </aside>
    <main class="content">
      <nav class="tabs" aria-label="dashboard sections">
        <button class="tab-button active" data-tab="pages" type="button">ページ</button>
        <button class="tab-button" data-tab="prompt" type="button">プロンプト</button>
        <button class="tab-button" data-tab="feedback" type="button">フィードバック</button>
        <button class="tab-button" data-tab="sources" type="button">出典</button>
      </nav>
      <section id="pages" class="tab-panel active">
        <div id="page-grid" class="page-grid"></div>
        <article id="page-detail" class="detail-panel"></article>
      </section>
      <section id="prompt" class="tab-panel">
        <div class="prompt-header">
          <h2 id="prompt-title">Prompt</h2>
          <button id="copy-prompt-inline" class="copy-button" type="button">コピー</button>
        </div>
        <pre id="prompt-text" class="prompt-box"></pre>
      </section>
      <section id="feedback" class="tab-panel">
        <label class="field-label" for="feedback-input">このページへのフィードバック</label>
        <textarea id="feedback-input" class="feedback-input" placeholder="例: コマ2のスマホ角度をもっと斜めに。次回以降も反映。"></textarea>
        <p id="feedback-status" class="muted"></p>
      </section>
      <section id="sources" class="tab-panel">
        <div id="source-list" class="source-list"></div>
      </section>
    </main>
  </section>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
  <script src="assets/dashboard-data.js"></script>
  <script src="assets/site.js"></script>
</body>
</html>
"""


def sync_dashboard() -> None:
    data = build_dashboard_data()
    write_text(DASHBOARD_DATA, "window.WEB3GAME_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")
    write_text(INDEX_FILE, INDEX_TEMPLATE)
    print(f"ダッシュボード生成: {INDEX_FILE.relative_to(REPO)}")
    print(f"データ生成: {DASHBOARD_DATA.relative_to(REPO)}")
    print(f"エピソード: {len(data['episodes'])} / ページ: {sum(e['pageCount'] for e in data['episodes'])}")


@dataclass
class ValidationResult:
    errors: int = 0
    warnings: int = 0
    lines: list[str] = field(default_factory=list)

    def pass_(self, msg: str) -> None:
        self.lines.append(f"  ✓ {msg}")

    def warn(self, msg: str) -> None:
        self.warnings += 1
        self.lines.append(f"  ⚠ {msg}")

    def fail(self, msg: str) -> None:
        self.errors += 1
        self.lines.append(f"  ✗ {msg}")

    def extend(self, other: "ValidationResult") -> None:
        self.errors += other.errors
        self.warnings += other.warnings
        self.lines.extend(other.lines)


def design_content(text: str) -> str:
    match = re.search(r"^##\s+コマ設計\s*\n(.*?)(?=^##\s+|\Z)", text, re.S | re.M)
    return match.group(1) if match else text


def panel_sections(text: str) -> list[str]:
    body = design_content(text)
    return [section for section in re.split(r"(?=^###\s+コマ)", body, flags=re.M) if section.startswith("### コマ")]


def pattern_ids() -> set[str]:
    if not PATTERNS_FILE.exists():
        return set()
    try:
        raw = json.loads(read_text(PATTERNS_FILE))
        return {p["id"] for p in raw.get("patterns", []) if "id" in p}
    except Exception:
        return set()


def validate_page(ep_dir: Path, page_file: Path) -> ValidationResult:
    result = ValidationResult(lines=[f"\n━━━ {ep_dir.name.upper()} {page_file.stem} ━━━"])
    text = read_text(page_file)
    content = design_content(text)
    page_id = page_file.stem
    result.pass_("ページ設計書あり")

    panel_count = len(re.findall(r"^###\s+コマ", text, flags=re.M))
    pattern_value = extract_line_value(text, "採用パターン")
    if panel_count < 1:
        result.warn("コマ定義が検出できません")
    elif panel_count == 1 and "P16-vertical-long" in pattern_value:
        result.pass_("コマ数: 1（P16縦長1本コマとして許容）")
    elif panel_count < 2 or panel_count > 6:
        result.warn(f"コマ数: {panel_count}（推奨 2-6）")
    else:
        result.pass_(f"コマ数: {panel_count}")

    comp_count = len(re.findall(r"構図", text, flags=re.I))
    expr_count = len(re.findall(r"表情", text, flags=re.I))
    result.pass_("構図: 全コマ記述あり") if not panel_count or comp_count >= panel_count else result.warn(f"構図の記述がコマ数に対して不足（{comp_count}/{panel_count}）")
    result.pass_("表情: 全コマ記述あり") if not panel_count or expr_count >= panel_count else result.warn(f"表情の記述がコマ数に対して不足（{expr_count}/{panel_count}）")

    forbidden_found = False
    for pattern in ["天啓モード", "布団モード", "死んだ魚の目"]:
        hits = [
            line for line in content.splitlines()
            if pattern in line and not re.search(r"禁止|封印|NG|しない|使わない|使用しない|避ける|無し|なし|回避|ではなく|not", line, re.I)
        ]
        if hits:
            forbidden_found = True
            result.warn(f"絶対禁止の表情『{pattern}』が設計コマ部分に混入している可能性")
            result.lines.extend(f"     {h[:120]}" for h in hits[:3])
    cyan_hits = [
        line for line in content.splitlines()
        if re.search(r"シアン|cyan", line, re.I)
        and not re.search(r"禁止|NG|使わない|しない|なし|無し|限定|許容|クロちゃん|スマホ|画面光|ディスプレイ|display|robot|chrome|粒子", line, re.I)
    ]
    if cyan_hits:
        forbidden_found = True
        result.warn("シアン色の使用疑い（クロちゃん／スマホ画面光以外で混入？）")
        result.lines.extend(f"     {h[:120]}" for h in cyan_hits[:3])
    speaker_hits = [
        line for line in content.splitlines()
        if re.search(r"(翔一|クロちゃん|主人公)[:：]", line) and not re.search(r"禁止|NG|しない", line)
    ]
    if speaker_hits:
        forbidden_found = True
        result.warn("話者ラベル（『○○：』）が本文に混入している可能性")
        result.lines.extend(f"     {h[:120]}" for h in speaker_hits[:3])
    if not forbidden_found:
        result.pass_("絶対禁止ワード: 混入なし")

    phone_panels = [section for section in panel_sections(text) if re.search(r"スマホ画面|スマートフォン画面|smartphone screen", section, re.I)]
    if phone_panels and not all(re.search(r"10[-−〜~]?15度|10度|15度|傾け|斜め|tilt", section, re.I) for section in phone_panels):
        result.warn("スマホ画面が登場するコマに「10-15度傾け」の指示が見当たらない")
    elif phone_panels:
        result.pass_("スマホ画面の傾け指示: あり")

    if re.search(r"\[x\].*機能が.*1つ|\[x\].*各コマの機能", text):
        result.pass_("漫画文法チェックリスト: コマ機能単一性 確認済")
    elif re.search(r"\[.\].*機能が.*1つ", text):
        result.warn("漫画文法チェックリストの『各コマの機能が1つ』が未チェック")

    if re.search(r"(視線(誘導)?は|流れは|Eye flow:?)\s*左上[^左]*右下|左上→右下(に通|へ流|方向|の流れ)", content):
        result.fail("読み方向バグ: 方向宣言に「左上→右下」検出。日本漫画は右上→左下")
    flow = extract_line_value(text, "視線誘導")
    if flow:
        result.pass_("視線誘導: 右上→左下 明記") if "右上" in flow and "左下" in flow else result.warn("視線誘導フィールドに「右上→左下」の明記なし")
    else:
        result.warn("視線誘導フィールド（- 視線誘導:）が未記入")

    pat_id_match = re.search(r"P[0-9]+-[A-Za-z0-9-]+", pattern_value)
    if pat_id_match:
        pat_id = pat_id_match.group(0)
        result.pass_(f"採用パターン: {pat_id}")
        ids = pattern_ids()
        result.pass_("パターンID: patterns.jsonに定義あり") if ids and pat_id in ids else result.warn(f"パターンID「{pat_id}」がpatterns.jsonに未定義")
    else:
        result.warn("採用パターンフィールドが未記入")

    low = len(re.findall(r"Lv\.1|Lv\.2", text))
    high = len(re.findall(r"Lv\.4|Lv\.5", text))
    if low and high:
        result.pass_(f"密度レベル: 低({low}) + 高({high}) = Togashi hybrid適用")
    elif not low and not high:
        result.warn("密度レベル(Lv.X)の記述なし")
    elif not low:
        result.warn("低密度(Lv.1-2)のコマがない")
    else:
        result.warn("高密度(Lv.4-5)のコマがない")

    prompt_file = ep_dir / "prompts" / f"{page_id}-prompt.md"
    if not prompt_file.exists():
        result.warn(f"プロンプトなし（{prompt_file.relative_to(REPO)}）")
    else:
        result.pass_("プロンプトあり")
        try:
            built = build_prompt(ep_dir.name, page_id)
            build_panels = len(re.findall(r"^## Panel [0-9]", built, flags=re.M))
            if build_panels and panel_count and build_panels != panel_count:
                result.warn(f"ビルド出力のPanel数({build_panels})がコマ数({panel_count})と不一致")
            elif build_panels:
                result.pass_(f"Panel数: コマ数と一致（{build_panels}）")
            is_frontmatter = read_text(prompt_file).startswith("---\n")
            if "HARD RULES" in built and "revelation mode" in built:
                result.pass_("コア禁止事項: 含まれている")
            elif is_frontmatter:
                result.fail("コア禁止事項: 欠落")
            if "Mood:" in built:
                result.pass_("Mood: 記述あり")
            elif is_frontmatter:
                result.warn("Mood: 欠落")
        except Exception as exc:
            result.fail(f"プロンプト ビルド失敗: {exc}")

    log_candidates = [
        REPO / "diff-log" / f"log-{ep_dir.name}-{page_id}.md",
        REPO / "diff-log" / f"log-ep{ep_dir.name.removeprefix('ep')}-{page_id}.md",
    ]
    existing_log = next((p for p in log_candidates if p.exists()), None)
    if existing_log:
        result.pass_("差分ログあり")
        log_text = read_text(existing_log)
        result.lines.append(f"  - 試行結果: 成功{log_text.count('結果: 成功')} / 失敗{log_text.count('結果: 失敗')} / 部分{log_text.count('結果: 部分成功')}")
        if "更新必要: あり" in log_text and ("反映済み: 未反映" in log_text or "反映済み:" not in log_text):
            result.warn("未反映のバイブル更新候補あり")
    else:
        result.lines.append("  - 差分ログ: 未作成")
    return result


def validate_episode(ep_arg: str, page: str | None = None) -> ValidationResult:
    ep_dir = episode_dir(ep_arg)
    result = ValidationResult(lines=[f"\n═══ パイプライン検証: {ep_dir.name.upper()} ═══"])
    result.pass_("話の設計書あり") if (ep_dir / "episode-design.md").exists() else result.fail("話の設計書なし")
    if page:
        page_file = ep_dir / "pages" / f"{normalize_page(page)}.md"
        result.extend(validate_page(ep_dir, page_file)) if page_file.exists() else result.fail(f"ページ設計書なし（{page_file.relative_to(REPO)}）")
    else:
        pages_dir = ep_dir / "pages"
        files = [p for p in sorted(pages_dir.glob("P*.md")) if not p.name.startswith("_")] if pages_dir.exists() else []
        if not files:
            result.warn("ページ設計書が見つかりません")
        for page_file in files:
            result.extend(validate_page(ep_dir, page_file))
    return result


def validate_command(ep: str | None, page: str | None, *, strict_warnings: bool = False) -> int:
    targets = list_episode_dirs() if ep in {None, "all"} else [episode_dir(ep)]
    total = ValidationResult()
    for target in targets:
        res = validate_episode(target.name, page if len(targets) == 1 else None)
        total.extend(res)
        print("\n".join(res.lines))
    print("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
    print(f"検証完了: エラー {total.errors} 件 / 警告 {total.warnings} 件")
    if total.errors:
        print("→ エラーを解消してから次のステップに進んでください")
        return 1
    if total.warnings:
        print("→ 警告を確認してください（続行は可能）")
        return 2 if strict_warnings else 0
    print("→ 問題なし")
    return 0


def status_command() -> None:
    print("\n═══ 漫画制作ワークフロー ステータス ═══")
    for ep_dir in list_episode_dirs():
        design = parse_episode_design(ep_dir / "episode-design.md")
        pages_dir = ep_dir / "pages"
        prompts_dir = ep_dir / "prompts"
        page_count = len([p for p in pages_dir.glob("P*.md")]) if pages_dir.exists() else 0
        prompt_count = len([p for p in prompts_dir.glob("P*-prompt.md")]) if prompts_dir.exists() else 0
        build_count = len([p for p in (prompts_dir / "build").glob("P*.txt")]) if (prompts_dir / "build").exists() else 0
        print(f"{ep_dir.name.upper():14} [{design.get('status') or '下書き'}] pages={page_count} prompts={prompt_count} build={build_count}")
    logs = sorted((REPO / "diff-log").glob("log-*.md")) if (REPO / "diff-log").exists() else []
    pending = [p for p in logs if "更新必要: あり" in read_text(p) and "反映済み: 済" not in read_text(p)]
    print(f"\n差分ログ: {len(logs)} 件 / 未反映バイブル更新候補: {len(pending)} 件")
    proc = subprocess.run(["git", "status", "--short"], cwd=REPO, text=True, capture_output=True, check=False)
    changed = [line for line in proc.stdout.splitlines() if line.strip()]
    print(f"未保存の変更: {len(changed)} 件")


def new_episode(ep: str) -> None:
    normalized = normalize_episode(ep)
    if not normalized or normalized == "all":
        raise ValueError("episode number is required")
    target = EPISODES_DIR / normalized
    if target.exists():
        raise FileExistsError(f"{target.relative_to(REPO)} already exists")
    template = EPISODES_DIR / "_episode-template"
    if not template.exists():
        raise FileNotFoundError("episodes/_episode-template is missing")
    shutil.copytree(template, target)
    today = dt.date.today().isoformat()
    for path in target.rglob("*.md"):
        text = read_text(path).replace("EP[XX]", normalized.upper()).replace("[YYYY-MM-DD]", today)
        write_text(path, text)
    print(f"作成: {target.relative_to(REPO)}")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)

    p_build = sub.add_parser("build-prompt", help="Build one Nano Banana prompt")
    p_build.add_argument("episode")
    p_build.add_argument("page")
    p_build.add_argument("--quiet", action="store_true")

    p_sync = sub.add_parser("sync-dashboard", help="Build all prompts and regenerate the dashboard")
    p_sync.add_argument("episode", nargs="?", help="Accepted for compatibility; dashboard generation scans all episodes")

    p_validate = sub.add_parser("validate", help="Validate an episode/page or all episodes")
    p_validate.add_argument("episode", nargs="?", default="all")
    p_validate.add_argument("page", nargs="?")
    p_validate.add_argument("--strict-warnings", action="store_true")

    sub.add_parser("status", help="Show workflow status")

    p_new_ep = sub.add_parser("new-episode", help="Create an episode from the template")
    p_new_ep.add_argument("episode")

    args = parser.parse_args(argv)
    try:
        if args.command == "build-prompt":
            build_prompt(args.episode, args.page, echo=not args.quiet)
        elif args.command == "sync-dashboard":
            sync_dashboard()
        elif args.command == "validate":
            return validate_command(normalize_episode(args.episode), args.page, strict_warnings=args.strict_warnings)
        elif args.command == "status":
            status_command()
        elif args.command == "new-episode":
            new_episode(args.episode)
    except Exception as exc:
        print(f"エラー: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
