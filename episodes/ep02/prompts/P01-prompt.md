# Nano Banana プロンプト — EP02 P01

## メタ情報
- ページID: P01
- エピソードID: EP02
- 変換元: pages/P01.md（Pass 1）
- 生成試行番号: 1

---

## プロンプト本文

```
Black-and-white manga art with a distinctive contrast style — loose confident sketchy lines for setup panels, explosive detailed precision for climax panels (Togashi hybrid method). Grey screentone shading. Single accent color: cyan (#00BCD4) ONLY for Kuro-chan's robot elements and smartphone screen glow. No other colors. Smartphone screens drawn at 10-15 degree tilt, never flat.

Japanese manga page, 3 panels layout.
[STYLE: Togashi hybrid method — Panel 1-2 loose sketchy setup（溜め）, Panel 3 sharper detail for reveal（ページ引き）]
[DENSITY LEVEL: Lv.2 (Panel 1-2), Lv.3 (Panel 3)]
Keep character identity consistent with reference image.

Panel 1 (top, large — 40%): Wide establishing shot of a quiet residential street at dusk. A 42-year-old Japanese man with rectangular black-framed glasses, short slightly messy black hair with grey mixed in, wearing T-shirt, light jacket, jeans, sneakers, walking a Pembroke corgi on leash. Wry smile, tired posture, low energy. Generous negative space conveying emptiness and ennui. Loose sketchy lines.
「GSTの日収、全盛期の1/10以下か……」

Panel 2 (middle — 30%): Close-up of smartphone screen at 10-15 degree tilt. STEPN app earning screen displaying modest numbers. Clean UI rendering with status bar. Cyan (#00BCD4) smartphone screen glow.
「Today: +3.2 GST」

Panel 3 (bottom — 30%): Split composition — smartphone screen showing official announcement text with headline visible, AND a small inset close-up of the man's eyes — surprised expression, wide eyes with curiosity, smartphone light reflected in pupils. Tight composition, minimal negative space. Sharper line detail than panels above.
スマホ画面テキスト「STEPN: GMTアーニング実装計画を発表」
「"片輪走行だったエコシステムが完成形に近づく"」
翔一「……GMT？」

Composition: Panel 1-2（溜め）establishes melancholy mood (wide, empty) and shows decline (small numbers) → Panel 3（ページ引き）delivers surprise twist (announcement + eye reaction). Eye flow: top-left to bottom-right.
Camera: wide establishing shot (Panel 1), close-up smartphone (Panel 2), close-up screen + eye inset (Panel 3).
Mood: Quiet melancholy and weariness transitioning to sudden curiosity and intrigue in final panel. Weariness, NOT despair.

Do not change: face shape, hairstyle, costume details, character age impression.
Do not add: extra characters, extra objects, text artifacts.
Do not use revelation mode expression (no flames or speedlines in eyes).
Smartphone screens must be drawn at 10-15 degree tilt, never flat.
Do not make the overall atmosphere too dark — this is weariness, not despair.
```

---

## 使用参照画像
- ref_hero_v1: 翔一の散歩カジュアルモード外見一致確認

## 変換者メモ
- 固定スタイルプロンプトを冒頭に配置（art-style.md準拠）。シアンルールも含む
- セリフは全て日本語のままプロンプトに記載（英語翻訳しない）
- 散歩カジュアルモード（T-shirt, light jacket, jeans, sneakers, corgi）の固定プロンプト使用
- コマ2のGST数値「+3.2 GST」は暴落後の低水準を示す（全盛期は+25 GST/日）。日本語テキストとして記載
- コマ3のスマホ画面テキスト「STEPN: GMTアーニング実装計画を発表」と翔一の「……GMT？」を日本語で記載
- 漫画文法: コマ1-2が溜め（虚脱・空虚）→ コマ3がページ引き（光が差す）
- スマホ画面のシアン発光を指定（作画ルール準拠）
- 「疲れた苦笑い」は wry smile + tired posture に変換。「dead fish eyes」(布団モード)は使用禁止のため回避

---

## 生成結果の記録

### 試行1
- 結果: [未実施]
- メモ:
