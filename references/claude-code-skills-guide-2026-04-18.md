# Claude Code Skills 導入ガイド — ユーザー共有資料

**記録日: 2026-04-18**
**出典: Claude Code Studio @ Japan (@ClaudeCode_love)**

ユーザーがターミナル版 Claude Code にも読ませたい、と共有した Skills カタログ。
本作（web3game 漫画制作ワークフロー）への適用可否は章末メモ参照。

---

## 主要な Skills のソース

- **Anthropic 公式**: https://github.com/anthropics/skills
- **Matt Pocock（15,000 スター超）**: https://github.com/mattpocock/skills
- **コミュニティマーケットプレイス（66,000 以上の Skills）**: https://skillsmp.com

---

## Meta Skills — まず最初に入れるべき「スキルを作るスキル」

他のすべての Skill の土台になるのが Meta Skills。

### Skill Creator（クッッッソ有益）
- タスクで Claude をベンチマークし、実際の実行結果に基づいて新しい Skill の作成と改善を支援
- 使い方: ワークフローを箇条書きで説明 → SKILL.md 案を提案させる → 3〜5 回テストして失敗を分析 → 改善させる
- リンク: https://github.com/anthropics/skills/tree/main/skills/skill-creator

### Write a Skill
- 適切な構造・段階的開示・バンドルリソースを備えた Skill の書き方をガイド
- Skill Creator で生の下書きができたら、これで構造を整える
- インストール: `npx skills@latest add mattpocock/skills/write-a-skill`
- リンク: https://github.com/mattpocock/skills/tree/main/write-a-skill

### Find Skills
- SkillsMP などの公開マーケットプレイスから、ユースケースに合った Skill を検索
- 新しい Skill を書く前に、まず既存のものを探してフォークするのが鉄則
- マーケットプレイス: https://skillsmp.com

---

## Planning & Design — 「間違ったものを作る」を防ぐスキル群

設計段階の Skills は、開発後の手戻りの 80% を防ぐ。

### Grill Me
- Claude が容赦なく質問を投げかけ、意思決定ツリーの全分岐が解決するまで追い詰める
- 新機能、リファクタ、リスクの高いマイグレーションに使う
- インストール: `npx skills@latest add mattpocock/skills/grill-me`
- データモデル、エッジケース、障害モード、既存システムとの関連について質問される

### Write a PRD
- インタラクティブなインタビュー、コードベース探索、モジュール設計を通じて PRD（プロダクト要件定義書）を作成し、GitHub イシューとして登録
- インストール: `npx skills@latest add mattpocock/skills/write-a-prd`

### PRD to Plan
- PRD をトレーサーバレット方式の垂直スライスで多段階の実装計画に変換
- 単なるタスク分解ではなく、統合リスクを実際に下げる順序
- インストール: `npx skills@latest add mattpocock/skills/prd-to-plan`

### PRD to Issues
- PRD を独立して着手可能な GitHub イシューに分解（垂直スライスとブロッキング関係付き）
- インストール: `npx skills@latest add mattpocock/skills/prd-to-issues`

### Design an Interface
- 並列サブエージェントを使い、1 つのモジュールに対して 3〜5 個の根本的に異なるインターフェース設計を生成
- インストール: `npx skills@latest add mattpocock/skills/design-an-interface`

### Request Refactor Plan
- ユーザーインタビューを通じて小さなコミット単位の詳細なリファクタ計画を作成し、GitHub イシューとして登録
- インストール: `npx skills@latest add mattpocock/skills/request-refactor-plan`

---

## Code Development — Claude Code を「規律ある開発パートナー」に変える

### TDD
- 厳格なテストファースト・red-green-refactor ループを強制
- まず失敗するテスト → それを通す最小のコード → テストを維持したままリファクタ
- インストール: `npx skills@latest add mattpocock/skills/tdd`

### Triage Issue
- 「なぜ壊れてるのか全くわからない」時のスキル
- コードベースを探索して根本原因を特定し、TDD ベースの修正計画を GitHub イシューとして登録
- インストール: `npx skills@latest add mattpocock/skills/triage-issue`

### QA
- 機能に対するフル QA パスを実行、ブロッキング関係付きのイシュー分解
- PR 前に毎回使うことで、エッジケースを洗い出してリグレッションなしで出荷
- インストール: `npx skills@latest add mattpocock/skills/qa`

### Improve Codebase Architecture
- アーキテクチャ改善ポイントを探索。ホットスポットの特定、2〜3 のリファクタ戦略の提案、各戦略のリスク・工数・インパクトの詳細
- インストール: `npx skills@latest add mattpocock/skills/improve-codebase-architecture`

### Systematic Debugging
- 「とりあえず変えてみる」を禁止する 4 段階デバッグ方法論
- 再現 → 最小の失敗テスト作成 → 根本原因の絞り込み → 単一修正 → テスト検証
- リンク: https://github.com/obra/superpowers/tree/main/skills/systematic-debugging

### Auto-Commit Messages
- ステージされた diff を読み、type・scope・body を含む Conventional Commit メッセージを自動生成
- 深夜 2 時に「fix stuff」と書く必要がなくなる
- リンク: https://github.com/anthropics/skills/tree/main/skills/auto-commit

### Code Review
- セキュリティ・パフォーマンス・エラーハンドリング・アーキテクチャの体系的レビュー
- 「セキュリティ重視レビュー」「パフォーマンス重視レビュー」など焦点を指定可
- リンク: https://github.com/anthropics/skills

### Superpowers
- TDD・デバッグ・リファクタリング・実行の実戦テスト済み Skill 一式
- デフォルトの「エンジニアリング脳」レイヤーとして使える
- リンク: https://github.com/obra/superpowers

---

## Tooling & Setup — 「一度やったら二度と触らない」系スキル

### Setup Pre-Commit
- Husky pre-commit フック + lint-staged + Prettier + 型チェック + テストをセットアップ
- 新しいリポジトリごとに実行すべき
- インストール: `npx skills@latest add mattpocock/skills/setup-pre-commit`

### Git Guardrails for Claude Code（本リポジトリでは要検討）
- push、reset --hard、clean などの危険な git コマンドを実行前にブロックするフックを設定
- 本番リポジトリで Claude Code を使うなら必須のセーフティネット
- インストール: `npx skills@latest add mattpocock/skills/git-guardrails-claude-code`

### Dependency Auditor
- package.json の古い・脆弱・放棄されたパッケージをスキャンし、優先度付きの修正リストを出力
- リンク: https://github.com/ComposioHQ/awesome-claude-skills

---

## Writing & Knowledge — ドキュメント・記事・用語定義

### Edit Article
- 「文法修正」ではなく、議論の再構成・不要部分のカット・各セクションの論点を研ぎ澄ませるレベルの編集
- インストール: `npx skills@latest add mattpocock/skills/edit-article`

### Ubiquitous Language
- DDD（ドメイン駆動設計）スタイルのユビキタス言語用語集を会話から抽出
- 「event」「order」「user」がチーム内で異なる意味で使われている問題を解決
- インストール: `npx skills@latest add mattpocock/skills/ubiquitous-language`

### API Documentation Generator
- ルートを読み取り、例・エラーコード・認証要件付きの OpenAPI/Swagger ドキュメントを生成
- リンク: https://github.com/ComposioHQ/awesome-claude-skills

### Obsidian Vault
- Obsidian Vault の検索・作成・管理を wikilinks とインデックスノート付きで行う
- インストール: `npx skills@latest add mattpocock/skills/obsidian-vault`

---

## UI / Design / Frontend

### Frontend Design
- モダンでクリーンな UI 生成をガイド
- リンク: https://github.com/anthropics/skills/tree/main/skills/frontend-design

### Theme Factory
- テキストプロンプト 1 つから完全なカラーパレットとテーマを生成
- 例: 「落ち着いたフィンテック、信頼感、ダークアクセント」→ トークン付きパレット → Tailwind/CSS 変数に適用
- リンク: https://github.com/anthropics/skills/tree/main/skills/theme-factory

### Web Artifacts Builder
- 自然言語からインタラクティブなダッシュボード・計算機・ツールを構築
- リンク: https://github.com/anthropics/skills/tree/main/skills/web-artifacts-builder

### Brand Guidelines
- 全ての新しいコンポーネントにブランドシステムを強制適用
- リンク: https://github.com/anthropics/skills/tree/main/skills/brand-guidelines

---

## Business / Sales / Marketing

### Stripe Integration
- 安全な決済フロー・Webhook・サブスクリプションのセットアップ
- リンク: https://github.com/wshobson/agents/tree/main/plugins/payment-processing/skills/stripe-integration

### Marketing Skills
- CRO・コピーライティング・メールフローなど 20 以上のスキル集
- リンク: https://github.com/coreyhaines31/marketingskills

### Claude SEO
- テクニカル SEO 監査、スキーマ、オンページ最適化の完全版
- リンク: https://github.com/AgriciDaniel/claude-seo

### Domain Name Brainstormer
- プロダクト名の生成とドメインの空き状況チェック
- リンク: https://github.com/Microck/ordinary-claude-skills/tree/main/skills_all/domain-name-brainstormer

---

## Office & Documents

### PDF / DOCX / PPTX / XLSX
- テーブル抽出・フォーム入力・PDF 結合、Word の変更履歴付き編集、スライドデッキの作成・編集、平文からの数式・ピボットテーブル・チャート作成
- 全て Anthropic 公式
- リンク: https://github.com/anthropics/skills/tree/main/skills/

### Doc Co-Authoring
- ユーザーと Claude のリアルタイム共同執筆
- リンク: https://github.com/anthropics/skills/tree/main/skills/doc-coauthoring

---

## Multi-Agent

### Stochastic Multi-Agent Consensus
- 多数のサブエージェントを生成して同じ問題を解かせ、回答を集約
- 戦略判断・アーキテクチャ選択・リスク分析に
- リンク: https://github.com/hungv47/meta-skills

### Model-chat（Debate）
- 複数の Claude インスタンスをディベートさせてアイデアをストレステスト
- 2〜3 の大きな賭けの間で迷っている時に
- リンク: https://github.com/tommasinigiovanni/conclave

### Firecrawl Skill
- 一般的なスクレイパーをブロックする複雑なサイトから構造化データを抽出
- リンク: https://github.com/mendableai/firecrawl

---

## おすすめの導入順序（元記事より）

1. **まず Meta Skills から** — Write a Skill と Skill Creator を入れて、Skills の作成と修正ができる状態にする
2. **Planning 系を追加** — Grill Me、Write a PRD、PRD to Plan、PRD to Issues、Design an Interface。これで手戻りの 80% を防止
3. **コードの安全装置** — Git Guardrails、Setup Pre-Commit、TDD、Systematic Debugging、Triage Issue。全リポジトリに入れる
4. **Superpowers をベースレイヤーとして追加** — https://github.com/obra/superpowers
5. **ビジネス系スキルを上に重ねる** — Marketing Skills、Claude SEO、Lead Research、Content Researcher
6. **SkillsMP で穴を埋める** — https://skillsmp.com で新しい課題に当たったら、作る前にまず検索

重要なのは、Skills は「全部入れる」ものではなく「必要なものを選んで入れる」ものだということ。
各セクションから 1 つずつ選んで今日インストールする。1 週間後には「これなしでは仕事できない」と感じるはず。

---

## 本リポジトリ（web3game 漫画制作）への適用メモ

ターミナル版 Claude Code が導入判断するための仮置きメモ。ユーザー承認なしで `npx skills@latest add` は**実行しない**。

### 即効性が高そうなもの
- **Skill Creator / Write a Skill**: `scripts/` に散らばっている運用ノウハウ（work.sh, validate-pipeline.sh, build-prompt.sh 等）を Skill 化して再利用性を上げる余地あり
- **Edit Article**: ページ設計書・episode-design.md の推敲に相性良し
- **Ubiquitous Language**: 「天啓モード」「布団モード」「シャーデンフロイデ」等の用語が肥大化しつつあるので、`bible/characters/` の定義統一に使える可能性

### 本作では不要 or 優先度低
- TDD / QA / Triage Issue / Systematic Debugging 等のコード開発系 — 本リポジトリはスクリプトが少数で、漫画制作が主目的
- Stripe / SEO / API Doc — プロダクト要素なし
- PDF/DOCX/PPTX 系 — 現状 Markdown + HTML のみ

### 要注意
- **Git Guardrails**: 現状 `CLAUDE.md` の運用ルールで代替済み（push 先ブランチ固定・プルリク禁止等）。フックで二重化する前にユーザー合意必須
- **Auto-Commit Messages**: 既存の日本語コミット慣習（例: 「EP03 P02 設計：Comfort 党台頭」）とぶつかる可能性。Conventional Commits 強制は本作と合わない

### ユーザー合意が必要な導入候補（提案ベース）
1. Skill Creator を一度走らせて、`scripts/` の操作群を Skill 化できるか実験する
2. Ubiquitous Language を `bible/` の用語集に適用してみる
3. Edit Article を試し読みで 1 ページの推敲に使ってみる

---

## 参考: Claude Code Studio @ Japan

- 運営: Claude Code ガチ勢 3 人
- X: @ClaudeCode_love
- 実務レベルの CLI 活用・自動化を発信
- 現在は上場企業と AI エージェントを共同開発中
