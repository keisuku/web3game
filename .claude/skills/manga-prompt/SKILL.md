---
name: manga-prompt
description: Convert page designs into Nano Banana / Gemini image prompts for web3game. Use when creating or revising PXX-prompt.md, prompt constants, character prompt modes, or build outputs.
allowed-tools: Read, Write, Edit, MultiEdit, Grep, Glob, Bash
---

# Manga Prompt

Use this Skill when working under `episodes/<episode>/prompts/` or `bible/prompt-constants/`.

## Prompt Format

Prefer the split format:

```markdown
---
layout: vertical-4
characters:
  shouichi: [analysis, shock-reversal]
applied_techniques: [T13, T31, T49]
mood: "..."
page_specific_ban:
  - "..."
---

## Panel 1 ...
```

The fixed blocks come from `bible/prompt-constants/`; the page file only contains page-specific panel instructions.

## Conversion Rules

- Keep dialogue inside Japanese brackets `「 」`; do not translate it.
- Translate technique intent into visual instructions, not abstract labels.
- Mention panel size and reading order explicitly.
- Keep smartphone/laptop screens tilted at `10-15 degree`.
- Include only allowed cyan uses: smartphone/screen glow, Kuro-chan robot elements, or explicit ritual particles.
- Avoid meta labels in the rendered image: no `Panel 1`, `CLIMAX`, `見せ場`.

## Build

After editing:

```powershell
python scripts\web3game.py build-prompt <episode> PXX
python scripts\web3game.py sync-dashboard
python scripts\web3game.py validate <episode> PXX
```
