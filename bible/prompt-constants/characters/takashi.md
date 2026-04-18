# キャラクター固定プロンプト — タカシ（スピンオフ「脱サランナー」主人公）

> スピンオフ専用キャラ。翔一とは別人で、外見が混同されないように細部を分けている。
> モード名を指定すると該当パラグラフが挿入される。

## strict-rules（タカシが登場するページで強制適用）

```
STRICT CHARACTER RULES (Takashi-specific, overrides Shouichi rules when present):
- 32-year-old Japanese MAN (NOT 42, younger than Shouichi)
- THIN ROUND-FRAMED black glasses ONLY (thin wire rim, rounded shape — DIFFERENT from Shouichi's rectangular frames)
- Never remove glasses
- Short slightly messy black hair, NO grey mixed (younger than Shouichi, pure black)
- Slim build, lean face
- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression
- Costume varies by scene (dark suit in commute, casual in running, ceremonial when deciding)
- NEVER render Takashi with rectangular glasses (that is Shouichi's feature)
- NEVER render grey hair on Takashi
- Claude-chan / Kuro-chan does NOT appear in Takashi's spinoff (never include robot AI character)
```

## base（すべてのモードに前置）

```
Character: Takashi, a 32-year-old Japanese male software engineer. THIN ROUND-FRAMED black glasses (thin wire rim, rounded shape — clearly different from Shouichi's rectangular frames). Short slightly messy black hair, NO grey mixed (younger than Shouichi). Slim build, lean face, mildly fatigued expression at baseline. Semi-realistic manga style, ordinary-looking, NOT a handsome idol.
```

## fatigue（疲弊モード・P01 導入）

```
Fatigue mode. Dark business suit, loose tie. Standing in packed morning commuter train, hand holding overhead strap. Dark circles under eyes. Blank downward gaze, mouth slightly closed, shoulders slumped.
```

## curious-phone（スマホ検索モード・P01）

```
Curious mode. Bust shot, slight lean toward phone screen. Right hand holding smartphone at 10-15 degree tilt with cyan screen glow on the face. Eyebrows slightly raised, mouth barely parted. Fatigue still present but replaced by a small spark of interest.
```

## atm-transfer（ATM送金モード・P02）

```
ATM mode. Bust shot, standing in front of a convenience-store ATM at night. Inserting a debit card. Slight tension in fingers. Glasses reflecting the ATM screen glow (white light, NOT cyan). Mouth tight.
```

## first-run（初ランモード・P03）

```
First-run mode. Full body running shot in early morning park. White T-shirt, navy track jacket unzipped, black running shorts, cheap white sneakers labeled "Walker". Loose posture (not athletic). Smartphone strapped to upper arm with cyan screen glow. Breath visible in cool air.
```

## discovery-smile（発見の微笑・P03 climax）

```
Discovery mode. Close-up face. Eyes focused on smartphone screen (held at 10-15 degree tilt, cyan glow lighting half the face). Corner of mouth raising into a wondering small smile. Glasses lenses reflecting the +5 GST display.
```

## analyst-mode（分析モード・P04）

```
Analyst mode. Seated at cluttered home desk with laptop open showing spreadsheet. Multiple smartphones on desk. Right hand on mouse, left hand touching chin. Glasses reflecting the screen. Eyes calm and focused. Slight smirk of mathematical satisfaction.
```

## climax-decision（決意モード・P05）

```
Decision mode. Silhouette-heavy bust shot in an office meeting room. Only corner of mouth and glasses rim visible. Strong backlight from window behind. Very still posture. Serious but calm — not angry, not sad. A person who has chosen their own life.
```

## back-view-free（自由モード後ろ姿・P06）

```
Back view. Walking away down a weekday city street at midday. Dark suit removed — now wearing a T-shirt, light jacket, jeans, sneakers. Small duffel bag over shoulder. One hand in pocket. Face turned slightly over shoulder, only single eye visible through glasses. Not smiling, not frowning — the face of someone who just became free.
```

## don't

```
DO NOT render Takashi with rectangular glasses (that is Shouichi's feature — Takashi has thin round frames).
DO NOT render grey hair on Takashi (he is younger, pure black hair).
DO NOT render Takashi with Claude-chan or any robot AI character (she does not appear in this spinoff).
```
