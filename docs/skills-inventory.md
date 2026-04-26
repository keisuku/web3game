# Skills インベントリ — web3game

**最終更新: 2026-04-27**

このリポジトリで活用される Claude Code Skills の一覧。
2026-04-27 の Codex リビルドで、個人環境前提の `~/.claude/skills/` から、プロジェクト共有の `.claude/skills/` に正本を移した。

## 2026-04-27 現在の実体

| Skill | 実体 | 役割 |
|---|---|---|
| **manga-page** | `.claude/skills/manga-page/SKILL.md` | ページ設計、コマ割り、表情・視線誘導・技法適用 |
| **manga-prompt** | `.claude/skills/manga-prompt/SKILL.md` | ページ設計からNano Banana / Gemini用プロンプトへ変換 |
| **manga-review** | `.claude/skills/manga-review/SKILL.md` | 設計書・プロンプト・生成結果のレビュー |
| **manga-feedback** | `.claude/skills/manga-feedback/SKILL.md` | 生成結果フィードバックをページ/プロンプト/bibleへ分類反映 |
| **manga-episode-plan** | `.claude/skills/manga-episode-plan/SKILL.md` | 新エピソード企画、ページ数、技法配分、伏線設計 |
| **workflow-maintainer** | `.claude/skills/workflow-maintainer/SKILL.md` | Codex/Claude両対応のCLI、検証、ダッシュボード、GitHub Pages保守 |

関連:

- Codex 用規約: `AGENTS.md`
- Claude Code / Codex セットアップ整理: `docs/agent-setup.md`

---

## 🎨 漫画制作専用スキル（web3game 独自）

| Skill | 起動トリガー | 役割 |
|---|---|---|
| **manga-page** | 「PXX作って」「ページ設計」「コマ割り」 | 1ページの設計書を3パスループで生成。70技法から最低3つを選定強制 |
| **manga-prompt** | 「プロンプト作って」「画像生成」「ビルドして」 | 設計書 → Nano Banana用英語プロンプト変換。技法をビジュアル言語に翻訳 |
| **manga-review** | 「採点して」「レビュー」「見て」「評価」 | 10項目チェックで自己採点。正解ver5枚を基準に再生成判断 |
| **manga-feedback** | 「これ直して」「次からこうして」「ルール追加」 | フィードバックを8分類（A-H）に仕分けて適切に bible 反映 |
| **manga-episode-plan** | 「新しいエピソード」「新EP企画」「構成組んで」 | エピソード企画（ページ数/技法配分/伏線/感情アーク） |
| **manga-character-design** | 「新キャラ」「キャラ追加」「サブキャラ」 | 既存キャラと混同されない差別化マトリックスを作る |
| **gemini-image** | （python経由） | Gemini 2.5 Flash Image で実際に画像生成 |

---

## 🔧 Meta Skills（スキル作成/改善用）

| Skill | 出典 | 役割 |
|---|---|---|
| **skill-creator** | Anthropic公式 | 新しいSkillの作成と改善、評価実行 |
| **write-a-skill** | mattpocock | 適切な構造・段階的開示・バンドルリソースを持つSkillの書き方 |

---

## 📐 Planning & Design 系

| Skill | 出典 | 役割 |
|---|---|---|
| **grill-me** | mattpocock | 容赦ない質問で意思決定ツリーを追い詰める。新EP企画時に |
| **writing-plans** | Superpowers | 多段階タスクの実装計画を書く前に必ず |
| **brainstorming** | Superpowers | 創作作業前の意図・要件・設計探索 |
| **domain-model** | mattpocock | DDD的ドメインモデル定義 |

---

## ✍️ ドキュメント編集系

| Skill | 出典 | 役割 |
|---|---|---|
| **edit-article** | mattpocock | 記事/設計書の推敲・構造改善・明瞭化 |
| **ubiquitous-language** | mattpocock | DDD的用語集抽出。曖昧な用語を統一（例: モード呼称） |

---

## 🧠 思考・視点変換系

| Skill | 出典 | 役割 |
|---|---|---|
| **zoom-out** | mattpocock | 視野を広げてより高レベルな視点を得る |
| **dispatching-parallel-agents** | Superpowers | 独立タスク2つ以上を並列実行 |
| **subagent-driven-development** | Superpowers | 実装計画をサブエージェントに分散 |
| **using-superpowers** | Superpowers | 会話開始時の orientation（Skillsの使い方） |

---

## ✅ 品質保証系

| Skill | 出典 | 役割 |
|---|---|---|
| **verification-before-completion** | Superpowers | 「完了」宣言前に検証コマンド実行を強制 |

---

## 🌐 汎用（Claude Code ビルトイン）

以下はハーネス組み込みで常時使用可能:

- **loop**: 定期的なタスク実行
- **schedule**: cron スケジュールでリモートエージェント起動
- **update-config**: settings.json の編集
- **less-permission-prompts**: 許可プロンプトを減らす
- **keybindings-help**: キーボードショートカット

---

## 📚 web3game でのスキル活用フロー

### 新エピソード開始時
```
「EP04企画して」
  → manga-episode-plan 起動
    → brainstorming（アイデア探索）
    → writing-plans（構成計画）
    → grill-me（弱点潰し、必要なら）
    → episode-design.md 生成
```

### ページ設計時
```
「EP04 P01作って」
  → manga-page 起動
    → bible/technique-library.md を読む（強制）
    → 正解ver5枚を参照（強制）
    → pick-pattern.py でパターン候補
    → 3パスループで設計書作成
    → validate-pipeline.sh で検証
```

### プロンプト変換・画像生成
```
「プロンプト作って画像生成」
  → manga-prompt 起動
    → 適用技法をビジュアル言語に翻訳
    → build-prompt.sh で結合
    → gemini-image で生成
    → sync-dashboard.sh で index.html 同期
    → verification-before-completion で検証
```

### フィードバック処理
```
「○○は次から使わないで」
  → manga-feedback 起動
    → 分類 A-H に仕分け
    → 適切な bible ファイル更新
    → 既存ページへの遡及反映
```

### 自己採点
```
「採点して」
  → manga-review 起動
    → 10項目チェックリスト
    → 正解ver との比較
    → 差分ログに記録
    → 再生成判断
```

### 新キャラ追加時
```
「新キャラ追加」
  → manga-character-design 起動
    → 差別化マトリックス作成
    → strict-rules 生成
    → ubiquitous-language で既存用語との衝突確認
```

---

## 🚫 意図的に未インストールのスキル

本プロジェクトに不要 or 衝突するため除外:

- **TDD / QA / Triage Issue / Systematic Debugging** — コード開発系、本作はスクリプトのみで不要
- **Stripe / SEO / API Doc** — プロダクト要素なし
- **PDF/DOCX/PPTX** — Markdown + HTML のみ
- **Git Guardrails** — 既存の CLAUDE.md 運用ルールで代替
- **Auto-Commit Messages** — 既存の日本語コミット慣習（「EP03 P02 設計：Comfort 党台頭」等）と衝突
- **Conventional Commits 強制系** — 本作と合わない

---

## 更新ルール

- 新しく Skill を追加したら本ファイルに追記
- Skill を削除したら本ファイルから削除
- 起動トリガーを変更したら該当行を更新
- 月1回、実際に起動された頻度を監視して価値の低い Skill を整理
