---
name: manga-page
description: Design or revise one manga page for web3game. Use when creating PXX page designs, revising panel layouts, adding expressions, checking reading flow, or applying the technique library.
allowed-tools: Read, Write, Edit, MultiEdit, Grep, Glob, Bash
---

# Manga Page

Use this Skill when working on `episodes/<episode>/pages/PXX.md`.

## Required Inputs

Read these before editing:

1. `AGENTS.md`
2. `CLAUDE.md`
3. `bible/technique-library.md`
4. `bible/panel-patterns/patterns.json`
5. The episode's `episode-design.md`
6. The target page and previous page, if present

## Page Design Contract

Every page needs:

- `ページID`, `エピソードID`, `目的`, `採用パターン`, `適用技法`, `視線誘導`, `密度`, `ステータス`
- `## コマ設計`
- `### コマN` sections with `構図`, `密度レベル`, `表情・感情`, and `セリフ要約`
- A checklist confirming right-to-left reading, one function per panel, and hard-ban compliance

## Creative Rules

- Use right-to-left Japanese manga flow and state it as `右上→左下`.
- Choose panel patterns intentionally; avoid repeating recent patterns unless the episode design requires it.
- Apply at least three techniques from `bible/technique-library.md`.
- Keep one function per panel. If a panel explains, it should not also carry a separate emotional reversal.
- Smartphone screens must say `10-15度傾け`.
- Do not use speaker labels such as `翔一：`.

## Verification

After editing:

```powershell
python scripts\web3game.py sync-dashboard
python scripts\web3game.py validate <episode>
```
