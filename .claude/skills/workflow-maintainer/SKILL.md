---
name: workflow-maintainer
description: Maintain the web3game repository workflow, dashboard generator, validation scripts, AGENTS.md, CLAUDE.md, and project Skills. Use when fixing broken automation, Windows/Codex compatibility, GitHub Pages, or repo structure.
allowed-tools: Read, Write, Edit, MultiEdit, Grep, Glob, Bash
---

# Workflow Maintainer

Use this Skill for tooling and repository structure.

## Principles

- Markdown remains the source of truth.
- `index.html` and `assets/dashboard-data.js` are generated artifacts.
- `scripts/web3game.py` is the cross-platform CLI; Bash scripts are compatibility wrappers.
- Prefer zero external dependencies.
- Keep commands runnable in Windows PowerShell and GitHub Actions.

## Checks

Run these after workflow changes:

```powershell
python -m py_compile scripts\web3game.py
python scripts\web3game.py sync-dashboard
python scripts\web3game.py validate 03-reboot
node --check assets\site.js
```

For broad changes:

```powershell
python scripts\web3game.py validate all
```
