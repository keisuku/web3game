---
name: manga-episode-plan
description: Plan a new web3game manga episode or reboot arc. Use when creating EPXX, deciding page count, assigning panel patterns, emotional peaks, hooks, and X post units.
allowed-tools: Read, Write, Edit, MultiEdit, Grep, Glob, Bash
---

# Manga Episode Plan

Use this Skill for `episodes/<episode>/episode-design.md`.

## Inputs

- `bible/world-setting.md`
- `bible/tone-and-mood.md`
- `bible/technique-library.md`
- `bible/panel-patterns/patterns.json`
- Previous episode ending page
- `references/correct-version-2026-04-18.md`

## Planning Contract

An episode plan should define:

- Title, type, post unit, period, status, and page count
- One-line story promise
- Emotional peaks
- Page table with pattern, techniques, and function
- Character modes
- Hard bans and phrase retirements
- Hook into the next episode

## Page Count

For X posting, prefer 4 or 8 pages unless the main arc clearly needs a longer non-strict structure.

## After Planning

Create page stubs only if the plan is stable enough to avoid churn. Then run:

```powershell
python scripts\web3game.py sync-dashboard
python scripts\web3game.py validate <episode>
```
