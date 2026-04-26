# AGENTS.md — Codex Operating Guide

## Project Shape

This repository is a manga-production workflow for **WEB3.0 終わたから**. The source of truth is Markdown:

- `episodes/` holds episode plans, page designs, and Nano Banana prompts.
- `bible/` holds durable character, world, style, layout, and prohibition rules.
- `claude-knowledge/` is the upload-ready knowledge bundle for Claude Projects.
- `index.html` plus `assets/` is generated from the Markdown sources.

Do not hand-edit dashboard episode/page arrays. Regenerate them.

## Commands

Use the cross-platform Python CLI first:

```powershell
python scripts\web3game.py status
python scripts\web3game.py build-prompt 03-reboot P01
python scripts\web3game.py sync-dashboard
python scripts\web3game.py validate 03-reboot
python scripts\web3game.py validate all
```

PowerShell wrapper:

```powershell
.\scripts\web3game.ps1 status
.\scripts\web3game.ps1 sync-dashboard
```

Bash wrappers remain for GitHub Actions or Git Bash, but local Windows work should not assume `bash` is on PATH.

## Editing Rules

- When editing any page design or prompt, run `python scripts\web3game.py sync-dashboard`.
- When editing `bible/prompt-constants/`, rebuild and validate the affected episode.
- Keep Japanese dialogue in Japanese. Do not translate quoted dialogue inside prompts.
- Preserve the hard bans: revelation mode, dead-fish eyes, deformed comedy face, speaker labels, flat smartphone screens, green, and cyan outside approved uses.
- Smartphone or app screens must say `10-15度傾け` in page designs and `10-15 degree tilt` in prompts.
- Generated build outputs under `episodes/*/prompts/build/` are committed because GitHub Pages serves static files and the dashboard embeds these prompts.

## Current Priority

Prefer the `*-reboot` episodes for ongoing work. Legacy `ep01`, `ep02`, and `ep03` are retained as history and may still produce validation warnings.

## Completion Checklist

Before finishing:

```powershell
python scripts\web3game.py sync-dashboard
python scripts\web3game.py validate 03-reboot
node --check assets\site.js
```

For broad workflow changes, also run:

```powershell
python scripts\web3game.py validate all
```
