# Nano Banana プロンプト — EP02 P01

## メタ情報
- ページID: P01
- エピソードID: EP02
- 変換元: pages/P01.md（Pass 1）
- 生成試行番号: 1

---

## プロンプト本文

```
Vertical single-page manga layout, portrait orientation, taller than wide. Aspect ratio: portrait page (vertical manga page, NOT landscape, NOT 2x2 grid). All panels stacked top-to-bottom. Japanese manga reading direction: right-to-left, top-to-bottom.

Black-and-white manga art with a distinctive contrast style — loose confident sketchy lines for setup panels, explosive detailed precision for climax panels (Togashi hybrid method). Grey screentone shading. Single accent color: cyan (#00BCD4) ONLY for Kuro-chan's robot elements and smartphone screen glow. No other colors. Smartphone screens drawn at 10-15 degree tilt, never flat.

Japanese manga page, 3 panels stacked vertically (top to bottom).
Keep character identity consistent with reference image.

Panel 1 (top, large — 40% of page height): Wide establishing shot of a quiet residential street at dusk. A 42-year-old Japanese man with rectangular black-framed glasses, short slightly messy black hair with grey mixed in, wearing T-shirt, light jacket, jeans, sneakers, walking a Pembroke corgi on leash. Wry smile, tired posture, low energy. Generous negative space conveying emptiness. Loose sketchy lines.
「GSTの日収、全盛期の1/10以下か……」

Panel 2 (middle — 30% of page height): Close-up of smartphone screen at 10-15 degree tilt. STEPN app earning screen. Clean UI rendering with status bar. Cyan (#00BCD4) smartphone screen glow.
「Today: +3.2 GST」

Panel 3 (bottom — 30% of page height): Split composition. Smartphone screen showing announcement text, AND a small inset close-up of the man's eyes — surprised, wide eyes with curiosity, smartphone light reflected in pupils. Tight composition.
スマホ画面「STEPN: GMTアーニング実装計画を発表」
「"片輪走行だったエコシステムが完成形に近づく"」
「……GMT？」

Mood: Quiet melancholy and weariness transitioning to sudden curiosity. Weariness, NOT despair.

Do not change: face shape, hairstyle, costume details, character age impression.
Do not add: extra characters, extra objects, text artifacts.
Do not render the image as landscape, 2x2 grid, or wide-format. Vertical portrait page only.
Do not write English labels or annotations inside the panels (no "CLIMAX", "SETUP", etc.).
Do not use revelation mode expression (no flames or speedlines in eyes).
Smartphone screens must be drawn at 10-15 degree tilt, never flat.
Do not make the overall atmosphere too dark — this is weariness, not despair.
```

---

## 使用参照画像
- ref_hero_v1: 翔一の散歩カジュアルモード外見一致確認

## 変換者メモ
- **漫画文法**: コマ1-2が溜め（虚脱・空虚）→ コマ3がページ引き（光が差す）
- **読み方向**: 日本漫画は右上→左下、縦スタックなので上→下
- **密度**: Lv.2 (Panel 1-2), Lv.3 (Panel 3)
- **Togashi hybrid**: setupはloose sketchy、clmaxはsharper detail
- 散歩カジュアルモード（T-shirt, light jacket, jeans, sneakers, corgi）の固定プロンプト使用
- コマ2のGST数値「+3.2 GST」は暴落後の低水準を示す
- スマホ画面のシアン発光を指定（作画ルール準拠）
- 「疲れた苦笑い」は wry smile + tired posture に変換。「dead fish eyes」(布団モード)は使用禁止のため回避

---

## 生成結果の記録

### 試行1
- 結果: [未実施]
- メモ:
