# Agent Setup — Codex / Claude Code

最終更新: 2026-04-27

このリポジトリは、Claude Code で作られた運用を Codex でも安全に回せるように再構成している。

## 公式仕様に合わせた置き場

- Codex: `AGENTS.md`
  - リポジトリの作業規約、検証コマンド、生成ルールを書く。
  - 参考: OpenAI「Introducing Codex」内の AGENTS.md 説明  
    https://openai.com/index/introducing-codex/
- Claude Code memory: `CLAUDE.md`
  - プロジェクト共有メモとして使う。
  - 参考: Anthropic memory docs  
    https://docs.anthropic.com/en/docs/claude-code/memory
- Claude Code project Skills: `.claude/skills/<skill-name>/SKILL.md`
  - チーム共有のプロジェクトSkillとしてgit管理する。
  - 参考: Claude Code Agent Skills docs  
    https://docs.claude.com/en/docs/claude-code/skills
- Claude Code subagents: `.claude/agents/`
  - 現時点では未導入。ページ制作はSkillで十分に分割できる。
  - 参考: Claude Code Subagents docs  
    https://docs.claude.com/en/docs/claude-code/subagents

## 今回の方針

1. `~/.claude/skills/` 前提をやめ、プロジェクト直下の `.claude/skills/` に実体を置く。
2. Skillは1つの能力に絞る。説明文には「何をするか」と「いつ使うか」の両方を書く。
3. `allowed-tools` を使い、読み取り専用レビュー系と編集系を分ける。
4. Bash前提の運用をやめ、`scripts/web3game.py` を正本CLIにする。
5. ダッシュボードはMarkdownから再生成し、手書きJS配列を正本にしない。

## 導入済みSkill

- `manga-page`
- `manga-prompt`
- `manga-review`
- `manga-feedback`
- `manga-episode-plan`
- `workflow-maintainer`

各Skillの詳細は `.claude/skills/*/SKILL.md` と `docs/skills-inventory.md` を参照。
