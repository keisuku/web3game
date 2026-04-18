# 漫画ページ規格（日本漫画B5準拠）

**最終更新日: 2026-04-18**
**ステータス: 正式版（本プロジェクトの絶対規格）**

---

## 1. 基本ページサイズ

### 標準（本プロジェクト採用）
- **判型**: B5単行本（週刊少年ジャンプコミックス等と同等）
- **仕上がりサイズ**: 182mm × 257mm
- **内枠（基本コマ領域）**: 150mm × 220mm
- **タチキリ（裁ち落とし）**: 仕上がり線から外側に3mm追加
- **原稿用紙サイズ**: B4（257mm × 364mm）

### Nano Bananaプロンプト用アスペクト比
- **縦長比率**: `aspect ratio 5:7 (B5 manga page proportions)` を必ず明記
- 数値としては `257/182 ≈ 1.41` の縦長
- 正方形（1:1）や横長（16:9）で生成してはいけない

---

## 2. 見開き前提のルール

### 見開き2ページ配置
- 日本漫画は**右ページと左ページ**の2枚1組で構成
- **奇数ページが右、偶数ページが左**に来る
- 右ページの左端は「綴じ（ノド）側」、左ページの右端が「綴じ側」
- 見開きまたぎの大ゴマ（見開き大ゴマ）はノドを避けた配置にする

### ページ番号（ノンブル）
- 右ページ: 下外側（右下）
- 左ページ: 下外側（左下）
- 本プロジェクトではページID（P01, P02...）で代替

---

## 3. 読み方向（**絶対ルール**）

### 右から左、上から下
- **ページの入口は右上、出口は左下**
- 右ページ → 左ページの順で読み進める
- 1ページ内のコマ順: 右上 → 右下 → 左上 → 左下（基本Z字の逆）
- 対角線誘導: 右上大ゴマ → 左下大ゴマ（小コマは対角線上に配置）

### 違反パターン（禁止）
- 西洋コミック風の左上→右下の流れ
- 視線が逆流するコマ配置
- 右ページと左ページで読みの流れが切れる配置

---

## 4. コマの設計原則

### コマ数
- **1ページあたり 2〜6コマ**（推奨: 3〜5）
- 見せ場/スプラッシュページは1〜2コマ
- 連続した3コマ以上の均等分割は避ける（単調になる）

### コマサイズと時間
- **大ゴマ = 停止**（読者が立ち止まる）
- **小ゴマ = 加速**（読者が高速で読む）
- リズムの基本: 大→小→小→大 または 小→小→小→大

### コマ間の溝（余白）
- 狭い溝（1〜2mm）= 時間の連続性（同時発生感）
- 広い溝（5mm以上）= 時間の飛躍
- タチキリ（枠線なし）= 感情/空間の解放

---

## 5. 禁止ページレイアウト

- 均等4分割（田の字）の連続使用
- 3段×2コマ（横長長方形が6個）の均等配置
- 画面を埋め尽くすだけのコラージュ（意図のないタチキリ)
- 縦長1:1の「画像1枚」構成（漫画ページではなくイラスト）

---

## 6. Nano Banana 用 必須プロンプトブロック

すべての本編ページプロンプトの先頭に**必ず**含める:

```
Japanese manga page, B5 manga page proportions (aspect ratio approximately 5:7, portrait orientation, taller than wide).
RIGHT-TO-LEFT reading order (Japanese manga layout). Panels flow from top-right to bottom-left.
Panel borders visible, clear gutters between panels. Black and white with grey screentone.
```

## 7. 見開きページ用プロンプトブロック

```
Japanese manga double-page spread (two B5 pages side by side, total aspect ratio approximately 10:7, landscape orientation).
RIGHT-TO-LEFT reading order: start from top-right of the right page, end at bottom-left of the left page.
Avoid placing critical detail across the center gutter (book binding).
```
