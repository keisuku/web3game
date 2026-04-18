# 漫画文法ルール

<!-- EN: Fixed reference for manga composition rules. Claude must follow these when designing pages. These are non-negotiable production rules, not suggestions. -->

この文書に記載されたルールは、すべてのページ設計に適用される**絶対ルール**です。
提案ではなく、制作上の規則として扱ってください。

---

## 6つの基本原則

### 原則1: 見せ場の前に必ず溜めを入れる

<!-- EN: Always build tension before key scenes. Insert at least one "quiet" panel before impact. -->

- 見せ場（大ゴマ、感情のピーク、決めシーン）の直前に、最低1コマの「静」を挟む
- 溜めのコマは: 無言、引きの構図、余白多め、のいずれかで構成
- 溜めなしでいきなり見せ場に入るのは禁止

### 原則2: 1ページ内の視線誘導は**右上→左下**（日本漫画の読み順）

<!-- EN: CRITICAL — Japanese manga reads RIGHT-to-LEFT. Eye flow must go from top-RIGHT to bottom-LEFT within each page. Panel placement must guide this flow. Do NOT confuse with Western left-to-right order. -->

- 日本漫画は**右から左**へ読む。コマの順番は右上 → 右下/左上 → 左下と流れる
- ページを開いた瞬間の視線の入口は**右上**。そこに最も訴求したい「開幕の一撃」を置く
- ページの出口は**左下**。そこに「次ページへの引き」を置く
- 視線を自然に右上→左下の対角線で走らせる（小コマを斜めに並べると加速感）
- 視線の逆流（左上→右下の洋書的流れ）が発生するレイアウトは**禁止**
- プロンプト出力時は `right-to-left reading order (Japanese manga layout)` を必ず明記

### 原則3: 重要セリフは小コマで言わせる

<!-- EN: Important dialogue goes in small panels. Large panels are for emotion and action, not dialogue. -->

- 物語のキーとなるセリフは、小さなコマに配置する
- 大ゴマは感情・アクション・ビジュアルインパクト用
- 大ゴマに長文セリフを詰め込まない

### 原則4: 感情の変化は顔アップで固定する

<!-- EN: Emotion shifts are always shown in close-up face shots. Eye expression is the highest priority. -->

- キャラクターの感情が変わる瞬間は、必ず顔のクローズアップで見せる
- 目の表現を最も重視する
- 感情変化を引きの構図やロングショットで処理しない

### 原則5: 説明コマと感情コマを混ぜない

<!-- EN: Never mix exposition panels and emotion panels. One function per panel. -->

- 1つのコマには1つの機能だけを持たせる
- 状況説明（場所、時間、人物配置）と感情表現を同じコマに入れない
- 説明が必要なら説明専用のコマを設ける

### 原則6: オチ前は余白を増やす

<!-- EN: Increase whitespace before punchlines/endings. Give the reader breathing room. -->

- ページの最後のコマ（オチや引き）の前に、余白を意識的に増やす
- 読者に「間」を感じさせ、次のコマのインパクトを強める
- 余白は「何もない」のではなく「呼吸の間」

---

## 3パス生成ループ

<!-- EN: Every page goes through 3 passes. Do not try to finalize in a single pass. -->

すべてのページは3パスで制作します。1パスで完成を目指さないでください。

### Pass 1: 構図ラフ（構図優先）

- コマ割りと視線誘導の配置のみを決定する
- セリフは仮テキスト、表情は「怒り」「驚き」等のラベルのみ
- この段階では6原則のうち原則1・2・5を重点チェック
- **編集者の確認を取ってから次へ進む**

### Pass 2: 表情・流れ補正

- キャラクターの感情表現を確定する
- コマ間の時間の流れ（テンポ）を確認・調整する
- この段階では原則3・4を重点チェック
- **編集者の確認を取ってから次へ進む**

### Pass 3: セリフ・演出仕上げ

- セリフの文字数と配置を確定する
- 効果音（SE）の種類と配置を決定する
- 余白と黒ベタのバランスを最終調整する
- この段階では原則6を重点チェック
- 全6原則の最終確認チェックリストを実行する
- **編集者が承認したら、プロンプト変換（Thread B）に進む**

---

## 文法チェックリスト

ページ設計の最終確認に使用:

- [ ] 見せ場の前に溜めコマがある
- [ ] 視線誘導が右上→左下に通っている
- [ ] 重要セリフが小コマに入っている
- [ ] 感情変化が顔アップで描かれている
- [ ] 説明と感情が同一コマに混在していない
- [ ] オチ/引きの前に余白の間がある
- [ ] 1ページ内のコマ数が2〜6の範囲
- [ ] 各コマの機能が明確に1つに絞られている
