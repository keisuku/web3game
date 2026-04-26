---
name: manga-feedback
description: Classify and apply user feedback from generated manga images into page, prompt, character, bible, or prohibition-rule changes. Use when the user says to fix, never use, next time, rule追加, or feedback.
allowed-tools: Read, Write, Edit, MultiEdit, Grep, Glob, Bash
---

# Manga Feedback

Use this Skill when turning image-generation feedback into durable repo changes.

## Classification

Classify feedback before editing:

- A: Page-local panel composition
- B: Prompt wording
- C: Character identity or costume
- D: Global style/bible rule
- E: Prohibited item
- F: Layout/panel-pattern issue
- G: Dashboard or workflow issue
- H: Ambiguous, apply a local fix first

## Apply Rules

- Page-local issues go to `episodes/<episode>/pages/PXX.md` and the matching prompt.
- Character identity issues go to `bible/prompt-constants/characters/` and relevant character bible files.
- Global bans go to `bible/prompt-constants/prohibited-core.md`.
- After `bible/` changes, keep `claude-knowledge/01_manga-bible.md` in sync.
- Do not wait for confirmation when the feedback clearly identifies a rule.

## Verification

```powershell
python scripts\web3game.py sync-dashboard
python scripts\web3game.py validate <episode>
```
