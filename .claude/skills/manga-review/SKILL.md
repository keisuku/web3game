---
name: manga-review
description: Review web3game page designs, prompts, and generated-image feedback for continuity, rule violations, and prompt readiness. Use when asked to review, grade, check, or inspect an episode/page.
allowed-tools: Read, Grep, Glob, Bash
---

# Manga Review

Use this Skill in a code-review stance for manga workflow quality.

## Review Order

1. Read `AGENTS.md`, `CLAUDE.md`, and `NEXT.md`.
2. Read the target episode design.
3. Read target page design and prompt.
4. Run validation when possible.
5. Lead with findings, then list residual risks.

## Checklist

- Page design and prompt panel counts match.
- Right-to-left flow is explicit.
- Each panel has one function.
- Expression, composition, and dialogue are present per panel.
- Hard bans are absent from the actual panel instructions.
- The prompt includes `HARD RULES`, character strict-rules, mood, and page-specific bans.
- Dashboard data was regenerated after source edits.

## Output Style

Prioritize concrete file/line findings. Do not rewrite the whole page unless asked; identify the smallest high-value fixes first.
