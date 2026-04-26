window.WEB3GAME_DATA = {
  "generatedAt": "2026-04-27T07:34:41+09:00",
  "project": "WEB3.0 終わたから",
  "episodes": [
    {
      "id": "EP01-REBOOT",
      "slug": "ep01-reboot",
      "label": "EP01★REBOOT",
      "reboot": true,
      "pages": [
        {
          "id": "P01",
          "title": "衝撃の導入",
          "purpose": "★衝撃の導入 — 「終わった」毛筆特大+汗の滝による作品開幕",
          "density": "Lv.1-2（上段の空）と Lv.5（中央の顔＋毛筆）の対比で富樫ハイブリッド",
          "status": "確定",
          "pattern": "P14-explosion-radial（爆発放射型 — 衝撃の瞬間、1-3コマ）",
          "techniques": "T19（スピードライン絶望ベクトル）+ T31（毛筆特大「終わった」）+ T49（汗の滝）",
          "flow": "右上（毛筆「終わった」） → 中央（翔一顔アップ） → 左下（スマホ画面）",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "上段・極大コマ、画面幅100% × 高さ70%",
              "composition": "翔一の顔アップ超クローズアップ。眼鏡（RECTANGULAR黒縁）越しに見開いた目、口半開き。顔全面に汗粒を滝のように描き込み（T49汗の滝）。背景は放射状スピードライン（T19絶望ベクトル）。画面左上に縦書き毛筆特大「終わった」（T31毛筆特大文字）。画面手前にスマホ（シアン光、T12）、画面内に「2026/3/30 キャプテン翼 RIVALS サービス終了のお知らせ」のUIを10-15度傾けて（T13）描写",
              "expression": "despair mode (shock-reversal系) — 呆然+虚無。死んだ魚の目ではなく瞳にハイライトを残す。目見開き、口半開き",
              "dialogue": "毛筆特大「終わった」（T31、縦書き、左側に配置）／スマホ画面テキスト「2026/3/30 キャプテン翼 RIVALS サービス終了のお知らせ」",
              "sfx": "なし（毛筆の圧で十分）",
              "density": "Lv.5（全ページのclimax panel、爆発的精密描写、設定からスマホUIから毛筆まで全力）",
              "techniques": "T19 + T31 + T49 + T13 + T41（眼鏡反射：レンズに汗の粒が映る）"
            },
            {
              "n": "2",
              "size": "下段・小コマ、画面幅100% × 高さ30%",
              "composition": "布団をかぶった翔一、スマホ画面のシアン光だけが顔を下から照らす。横長、暗め。周囲は真っ暗（黒ベタ）、光源は手元のスマホ画面のみ",
              "expression": "呆然+虚無（T50後ろ姿+スマホ光的光源）。死んだ魚の目は絶対にNG、瞳にハイライト残す。困惑の表情",
              "dialogue": "縦書き「あれっ……これって実質 WEB3.0ゲーム完全終了のお知らせ……？？」（独白、括弧なし）",
              "sfx": "なし（静寂の圧）",
              "density": "Lv.3（setup、シンプルな構図）",
              "techniques": "T12シアン限定（スマホ光のみ）+ T18スクリーントーン階調（黒ベタ）"
            }
          ],
          "source": "episodes/ep01-reboot/pages/P01.md",
          "promptSource": "episodes/ep01-reboot/prompts/P01-prompt.md",
          "buildSource": "episodes/ep01-reboot/prompts/build/P01.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nExtreme close-up. Eyes wide open with pupils still having small highlights (NOT dead-fish eyes). Mouth half-open in stunned silence. Face fully covered in waterfall of sweat beads (dozens of beads, white/black linework only, NOT cyan). Expression of absolute comprehension shock — not grief, not rage, but processing that something has irreversibly ended.\nLying under a futon blanket in a dark room. Only head and one hand visible. Smartphone in hand emits faint cyan glow lighting the face from below. Eyes slightly unfocused but pupils retain small highlights (NEVER dead-fish eyes). Mouth slightly parted. Expression: stunned emptiness, confused, not destroyed. CRITICAL: this is \"composition-only futon cut\", NOT the banned \"futon-mode dead-fish\" expression.\n\n## Panel 1 (top 70%, explosive climax panel)\n\nScene: Extreme close-up of Shouichi's face filling the panel. His face is shown through RECTANGULAR black-framed glasses — eyes wide open with pupils still having highlights (NOT dead-fish eyes), mouth half-open in stunned silence. His entire face is covered in a WATERFALL of sweat beads — dozens of beads rendered in sharp white outlines and black linework, dripping in all directions. This is the T49 汗の滝 (sweat-waterfall) technique.\n\nBackground behind his head: radial speedlines emanating outward from behind the head toward the panel edges — representing the DESPAIR VECTOR (T19). The speedlines are background-only (do NOT radiate from the eyes).\n\nUpper-LEFT of the panel: a MASSIVE vertical brush-stroke calligraphy 「終わった」 in stark black ink, dominating ~30% of the panel, positioned vertically along the left edge. This is the ONLY giant brush text on this page — T31 technique.\n\nLower-foreground of the panel: a smartphone held in his hand, tilted at a 10-15 degree angle (T13). On the screen, a realistic UI showing a notification: \"2026/3/30 キャプテン翼RIVALS サービス終了のお知らせ\". The phone screen emits a soft cyan (#00BCD4) glow (T12). His glasses lenses catch faint reflections of the phone light and the floating sweat beads (T41).\n\nMonologue (tiny handwriting caption in the open space, NOT a speech bubble): none — the brush text carries the emotion.\n\nDensity Lv.5 — maximum detail: every sweat bead, every speedline, the brush-stroke weight of the calligraphy, the smartphone UI pixels, the glasses reflection. This is the opening explosion of the entire series.\n\n## Panel 2 (bottom 30%, horizontal dim strip)\n\nScene: Horizontal panel, predominantly black (solid black fill for ~70% of the panel background). Shouichi lies under a futon blanket with only his head and one hand visible. The futon is dark, the room is dark. The ONLY light source is the smartphone in his hand — its cyan (#00BCD4) glow faintly illuminating his face from below (T50 rear-smartphone-light composition, but here it's from below).\n\nHis expression: stunned / empty (呆然+虚無) — but CRITICAL: pupils retain small white highlights. He is NOT in dead-fish-eye despair mode. His mouth is slightly parted, eyes slightly unfocused, eyebrows relaxed downward. Confused, not destroyed.\n\nVertical Japanese monologue caption (handwriting style, NOT in a speech bubble, placed near his head in the black space): 「あれっ……これって実質 WEB3.0ゲーム完全終了のお知らせ……？？」\n\nNo sound effects. The vast black space carries the silent weight.\n\nDensity Lv.3 — setup panel, most of the panel is solid black with careful light rendering only on the face and hand. Screentone shading (T18) layered on the bedding.\n\nMood: The absolute shock of realizing an era has ended. Not grief, not rage — the stunned silence of comprehension. The beginning of the story begins with an ending.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render Shouichi with dead-fish eyes (futon mode is banned). Keep highlights in the pupils even in the bedroom shot\n- Do NOT render chibi or deformed comedy face — this is a serious shock moment\n- Do NOT use cyan color except on the smartphone screen glow in Panel 1 and Panel 2\n- Do NOT draw sweat as cyan-tinted or as tears — sweat is white/black linework only\n- Do NOT let speedlines radiate from the eyes — speedlines are background-only (behind the head)\n- Do NOT use any calligraphy/brush text beyond the single 「終わった」 — only one giant brush text per page"
        },
        {
          "id": "P02",
          "title": "呆然フェーズから「何かしなきゃ」への橋渡し",
          "purpose": "呆然フェーズから「何かしなきゃ」への橋渡し",
          "density": "Lv.2（ナレ帯）+ Lv.3（大ゴマ、setup）",
          "status": "確定",
          "pattern": "P12-strip-plus-big（細長ナレ帯+大ゴマ）",
          "techniques": "T09（細長ナレ帯+大ゴマ）+ T25（静の基準値ページ）+ T30（両義性の曇り空）+ T50（後ろ姿+スマホ光）",
          "flow": "右上（時間ナレ帯） → 中央〜左下（大ゴマ：布団のなかで天井見上げる翔一）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上・細長ナレ帯、画面幅100% × 高さ15%",
              "composition": "横長パノラマ。早朝の窓、曇り空に一筋の光（T30両義性）、カーテン隙間から光が差す。ナレ枠は右端に縦書き",
              "expression": "人物登場なし",
              "dialogue": "ナレ「——三月末、朝4時。」「その夜、俺は、眠らなかった。」",
              "sfx": "なし",
              "density": "Lv.2（ラフ、窓と光のみ）",
              "techniques": "T09 + T30"
            },
            {
              "n": "2",
              "size": "下・大ゴマ、画面幅100% × 高さ85%",
              "composition": "布団のなかで仰向けに天井を見上げる翔一。バストアップよりやや引き。布団から片手だけ出ている。スマホは近くの枕元に置かれ、画面が消えている（シアン光なし）。周囲は薄暗い部屋、窓から斜めに朝光が差し込む。天井には何もない白い空間",
              "expression": "呆然+虚無（絶対に死んだ魚の目にしない）、口閉じ、目は天井の一点を見る",
              "dialogue": "モノローグ「——ゲームは、もう終わった。」「じゃあ、次は、何だ。」",
              "sfx": "なし",
              "density": "Lv.3（setup、表情に集中）",
              "techniques": "T25静の基準値 + T50's mood（光源はスマホではなく窓光、シアンなし）"
            }
          ],
          "source": "episodes/ep01-reboot/pages/P02.md",
          "promptSource": "episodes/ep01-reboot/prompts/P02-prompt.md",
          "buildSource": "episodes/ep01-reboot/prompts/build/P02.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nLying under a futon blanket in a dark room. Only head and one hand visible. Smartphone in hand emits faint cyan glow lighting the face from below. Eyes slightly unfocused but pupils retain small highlights (NEVER dead-fish eyes). Mouth slightly parted. Expression: stunned emptiness, confused, not destroyed. CRITICAL: this is \"composition-only futon cut\", NOT the banned \"futon-mode dead-fish\" expression.\n\n## Panel 1 (top 15%, thin horizontal establishing strip)\n\nScene: Wide panoramic strip. Early-dawn window with soft morning light streaming in through a gap in the curtains — overcast sky visible beyond, with a single thin ray of sunlight breaking through (T30 両義性の曇り空 — ambiguous light). No characters in this strip. Right edge: a thin vertical Japanese narration box.\n\nNarration text (vertical, small): 「——三月末、朝4時。」「その夜、俺は、眠らなかった。」\n\nDensity Lv.2 — loose sketchy line work, minimal detail, soft screentone for the sky.\n\nNo sound effects. Silent dawn.\n\n## Panel 2 (bottom 85%, large contemplative panel)\n\nScene: Shouichi lying on his back under a futon blanket, looking up at a plain white ceiling. Bust-shot-plus view (waist upward visible). One hand resting outside the blanket. A smartphone lies on the pillow beside his head — SCREEN OFF (no cyan glow). Dim room with only diagonal morning light streaming from the window onto the bed. The ceiling is an empty pale expanse.\n\nExpression: stunned emptiness (futon-blanket-stunned mode). Eyes look at one point on the ceiling, mouth closed, but pupils retain small highlights (NEVER dead-fish eyes). Face in the quiet moment of forming the next question.\n\nMonologue (handwriting caption in the empty ceiling space, NOT in speech bubbles): 「——ゲームは、もう終わった。」「じゃあ、次は、何だ。」\n\nGenerous negative space above him on the ceiling — the blank expanse amplifies the unformed question.\n\nNo sound effects. No cyan. Just silent dawn light.\n\nDensity Lv.3 — setup panel, focused on face expression and the quiet light rendering. Ceiling kept mostly blank.\n\nMood: The silent hour after shock. The question forms slowly: 'what's next?' An ambiguous dawn — neither hope nor despair, a blank ceiling waiting to be filled. Quiet setup for the summoning that follows.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT use cyan — the smartphone is off in this page, natural window light only\n- Do NOT render dead-fish eyes — stunned+empty but pupils retain highlights\n- Do NOT use any brush calligraphy on this page (used up in P01)\n- Do NOT render revelation mode (no eye flames)"
        },
        {
          "id": "P03",
          "title": "クロちゃん召喚",
          "purpose": "★クロちゃん召喚 — 「どんな漫画を描きたいですか、ボス？」",
          "density": "Lv.3（翔一）+ Lv.5（クロちゃん出現大ゴマ climax）+ Lv.4（セリフ）",
          "status": "確定",
          "pattern": "P13-center-vs-flanks（中央大ゴマ+対面2コマ — 対比構図）",
          "techniques": "T47（スマホから半透明登場）+ T45（機械の目）+ T12（シアン限定）+ T46（右腕クローム）",
          "flow": "右上（翔一・仰向けアップ） → 中央（クロちゃん出現大ゴマ） → 左下（クロちゃんセリフ）",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "右上・中コマ、画面幅40% × 高さ30%",
              "composition": "翔一の顔アップ、仰向けのまま。スマホが手元で光り始める（シアン光）。瞳がスマホの光を反射、目を細める",
              "expression": "困惑+期待（未知のものへの反応）。眉間わずかに上がる、口わずかに開く",
              "dialogue": "独白「——なんだ？」",
              "sfx": "なし（静けさからの変化）",
              "density": "Lv.3（setup、顔に集中）",
              "techniques": "T12（スマホ光）"
            },
            {
              "n": "2",
              "size": "中央・大ゴマ、画面幅100% × 高さ45%",
              "composition": "クロちゃん（バリキャリモード：ポニーテール+眼鏡+ダークブレザー+白ブラウス+スカート）がスマホ画面から半透明のシアン光とともに立ち現れる（T47）。機械の目（カメラアパーチャー虹彩、シアン発光）、右腕クローム（T46）、Claudeピクセルマスコット髪飾り、首の回路ライン発光。指先あごに軽く当て、優しい微笑",
              "expression": "ANALYSIS → GENTLE の中間（知的で柔らかい）",
              "dialogue": "クロちゃんのセリフ「どんな漫画を描きたいですか、ボス？」（吹き出し、白抜き）",
              "sfx": "「ポワァ……」（召喚光の小さな擬音、シアン縁取り）",
              "density": "Lv.5（climax panel、キャラ要素全てを緻密に描き込み。ロボ要素省略禁止）",
              "techniques": "T47 + T45 + T46 + T12（シアン限定、クロちゃん全要素）"
            },
            {
              "n": "3",
              "size": "左下・中コマ、画面幅40% × 高さ25%",
              "composition": "翔一の顔アップ、仰向け。口が半開き、目が見開く。驚きと期待が混じる表情",
              "expression": "驚き+希望の芽生え。分析モードとも違う、素朴な驚き",
              "dialogue": "独白「ク、クロ、ちゃん……？」",
              "sfx": "なし",
              "density": "Lv.4（感情変化の瞬間、精密）",
              "techniques": "T41（眼鏡反射、レンズにクロちゃんが映り込む）"
            }
          ],
          "source": "episodes/ep01-reboot/pages/P03.md",
          "promptSource": "episodes/ep01-reboot/prompts/P03-prompt.md",
          "buildSource": "episodes/ep01-reboot/prompts/build/P03.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 3 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (middle) → Panel 3 (bottom).\nPanel 3 is the page ending — place the emotional payoff here.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nLying under a futon blanket in a dark room. Only head and one hand visible. Smartphone in hand emits faint cyan glow lighting the face from below. Eyes slightly unfocused but pupils retain small highlights (NEVER dead-fish eyes). Mouth slightly parted. Expression: stunned emptiness, confused, not destroyed. CRITICAL: this is \"composition-only futon cut\", NOT the banned \"futon-mode dead-fish\" expression.\n\nCharacter: \"Kuro-chan\" — a stunningly beautiful female android AI secretary, late 20s. Natural curves (like Fubuki from One Punch Man — Murata version), not exaggerated. Orange/copper hair in ponytail (NEVER silver, NEVER blonde, NEVER brown in the main series).\n\nMandatory robot elements (NEVER omit any):\n- Right arm FULLY chrome from shoulder to fingertips (not just fingertips), with cyan circuit lines\n- Mechanical camera-aperture iris eyes with cyan glow (never plain eyes)\n- Chrome jaw gradient with visible panel seams on one side\n- Circuit trace lines on neck with faint cyan glow\n- Claude pixel-art mascot hair ornament with cyan glow\n- CLAUDE mark on jacket side (ON the clothing, NOT on skin — stomach must be covered)\n\nDefault clothing: Dark fitted blazer jacket (buttoned at waist), white blouse (top button open), delicate necklace.\nWearing glasses. Ponytail. Index finger raised in analytical pose. Confident analytical expression.\nSoftened smile. Hand lightly on cheek. Hair still in ponytail but warmer tone. Glasses may be removed.\n\n## Panel 1 (top-right, 40% width, 30% height — first reading position)\n\nScene: Close-up of Shouichi's face, still lying on his back. The smartphone near his head is now glowing — cyan (#00BCD4) light starts to emerge from the screen. His eyes squint slightly against the new light, pupils reflecting the cyan glow (T41 glasses reflection: cyan highlights in the lenses). His eyebrows raise faintly, mouth slightly parts.\n\nExpression: confused-awake (NOT dead-fish). Eyes open, pupils with highlights, a faint \"what is this?\" register.\n\nMonologue (handwriting caption, small, NOT in a bubble): 「——なんだ？」\n\nDensity Lv.3 — setup, focused on face and the beginning of the cyan glow.\n\n## Panel 2 (center, 100% width, 45% height — climax panel)\n\nScene: Kuro-chan emerges from the smartphone screen in SEMI-TRANSPARENT CYAN LIGHT (T47 smartphone-exit mode). She stands above the bed, translucent at the edges, solidifying toward her center.\n\nHer full bari-kyari appearance must be rendered with CARE (T45 mechanical eye, T46 right arm chrome — NONE OMITTED):\n- Orange/copper hair in a high ponytail\n- Rectangular or oval black-framed glasses (bari-kyari mode)\n- Dark blazer jacket buttoned at waist, white blouse with top button open\n- Knee-length pencil skirt (or pants — either works for bari-kyari)\n- MECHANICAL CAMERA-APERTURE EYES with cyan glow (geometric iris pattern, camera-aperture-style)\n- RIGHT ARM FULLY CHROME from shoulder to fingertips with cyan circuit lines\n- Chrome fingertips on both hands\n- Claude pixel-mascot hair ornament with cyan glow (star-burst shape, pixel-art style)\n- Neck circuit lines faintly glowing cyan\n- CLAUDE mark on jacket side (on clothing, NOT on skin)\n- Chrome jaw gradient with panel seams on one side\n- Delicate necklace\n- Body type: natural curves (Fubuki from OPM-Murata reference), NOT exaggerated\n\nPose: right index finger gently touching her chin, soft knowing smile, eyes looking slightly down toward Shouichi.\n\nSpeech bubble (white, with standard manga border, CONTAINS TEXT ONLY, no speaker label): 「どんな漫画を描きたいですか、ボス？」\n\nSmall sound effect near the emergence: 「ポワァ……」 with thin cyan outlining (small font, summoning-light onomatopoeia).\n\nBackground: the dim bedroom fades to soft cyan particles around her, giving the impression of translucent materialization.\n\nDensity Lv.5 — maximum detail. Every robot element carefully drawn. The cyan glow carefully limited to her body and the phone. The room background is minimal but not black.\n\n## Panel 3 (bottom-left, 40% width, 25% height — reaction and page ending)\n\nScene: Close-up of Shouichi's face, still lying down. His eyes are now FULLY OPEN, mouth half-open in surprise. Faint cyan highlights in his glasses' lenses reflecting Kuro-chan (T41). Expression: genuine surprise mixed with the first spark of hope.\n\nMonologue (handwriting caption): 「ク、クロ、ちゃん……？」\n\nDensity Lv.4 — the emotional reaction panel, rendered with careful face detail.\n\nMood: The moment of miraculous arrival. A cyan-lit question cuts through the silence: 'what kind of manga do you want to draw?' The AI partner is not magic — she is the voice of the question he was trying to ask himself.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT omit any of Kuro-chan's robot elements: mechanical camera-aperture eyes, right-arm chrome, Claude pixel mascot hair ornament, neck circuit lines — all MUST be drawn\n- Do NOT use cyan except on Kuro-chan's robot elements and the smartphone glow\n- Do NOT render Kuro-chan in a different mode (bari-kyari ponytail + glasses + dark blazer + white blouse is fixed for this scene)\n- Do NOT render Shouichi with dead-fish eyes — his expression is confused-awake, not despair\n- Do NOT add speaker labels inside the speech bubble"
        },
        {
          "id": "P04",
          "title": "回想宣言「あの頃の熱狂を描きたい」+ 2022年5月へ時制ブリッジ",
          "purpose": "回想宣言「あの頃の熱狂を描きたい」+ 2022年5月へ時制ブリッジ",
          "density": "Lv.3 + Lv.4 + Lv.3",
          "status": "確定",
          "pattern": "P05-meta-bird-eye（メタ宣言俯瞰大ゴマ）",
          "techniques": "T48（横顔+レンズ越し瞳ハイライト）+ T22（溜め→引き）+ T61（現代↔回想の時制ブリッジ）",
          "flow": "右上（翔一バストアップ） → 中央（横顔+眼鏡ハイライト） → 左下（時制ブリッジ粒子）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "右上・中コマ",
              "composition": "翔一、ベッドに仰向けから少し身を起こす。手にスマホ（クロちゃんが半透明で隣にいる）。天井を見上げる",
              "expression": "口半開き、目は遠くを見る（思索モード）",
              "dialogue": "独白「……あの頃の熱狂が伝わる、最高に熱い WEB3.0 の世界を描きてえ」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中央・横顔大ゴマ",
              "composition": "翔一の横顔アップ、メガネのレンズ越しに瞳のハイライト（T48）。画面に決意の静けさ。右下にシアンのスパークル粒子（回想突入の演出）",
              "expression": "決意の静けさ、目を細めて遠くを見る",
              "dialogue": "縦書き「あれは 2022 年 5 月── STEPN が最強に盛り上がっていた頃だった」",
              "sfx": "",
              "density": "Lv.4（感情ピーク）",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "左下・小コマ、時制ブリッジ",
              "composition": "画面境界が波紋状に揺らぐ（T61時制ブリッジ）。上半分に現代の眼鏡レンズ、下半分に2022年5月の日差し・夏の街並みの残像。シアン粒子が境界を飛び散る",
              "expression": "人物なし、遷移の絵のみ",
              "dialogue": "小注記「——時は、2022年5月」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            }
          ],
          "source": "episodes/ep01-reboot/pages/P04.md",
          "promptSource": "episodes/ep01-reboot/prompts/P04-prompt.md",
          "buildSource": "episodes/ep01-reboot/prompts/build/P04.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 3 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (middle) → Panel 3 (bottom).\nPanel 3 is the page ending — place the emotional payoff here.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nBust shot. Corner of mouth raised, eyes narrowed with amused realization. Left hand lightly touching mouth. Glasses reflecting a calm soft light.\n\nCharacter: \"Kuro-chan\" — a stunningly beautiful female android AI secretary, late 20s. Natural curves (like Fubuki from One Punch Man — Murata version), not exaggerated. Orange/copper hair in ponytail (NEVER silver, NEVER blonde, NEVER brown in the main series).\n\nMandatory robot elements (NEVER omit any):\n- Right arm FULLY chrome from shoulder to fingertips (not just fingertips), with cyan circuit lines\n- Mechanical camera-aperture iris eyes with cyan glow (never plain eyes)\n- Chrome jaw gradient with visible panel seams on one side\n- Circuit trace lines on neck with faint cyan glow\n- Claude pixel-art mascot hair ornament with cyan glow\n- CLAUDE mark on jacket side (ON the clothing, NOT on skin — stomach must be covered)\n\nDefault clothing: Dark fitted blazer jacket (buttoned at waist), white blouse (top button open), delicate necklace.\nWearing glasses. Ponytail. Index finger raised in analytical pose. Confident analytical expression.\n\n## Panel 1 (top, 30%)\n\nScene: Shouichi now half-sits up on the bed. Smartphone in hand, Kuro-chan translucent beside him. He looks upward with a distant gaze, mouth half-open. Morning light from the window.\n\nExpression: thoughtful, searching memory. Mouth half-open.\n\nMonologue (handwriting caption, NOT a speech bubble): 「……あの頃の熱狂が伝わる、最高に熱い WEB3.0 の世界を描きてえ」\n\nDensity Lv.3 — setup, focus on posture and expression.\n\n## Panel 2 (middle, 50% — climax panel)\n\nScene: Side-profile close-up of Shouichi's face. His rectangular black-framed glasses catch light — a distinct BRIGHT HIGHLIGHT in his eye is visible through the lens (T48 side-profile + lens-highlight). Expression: the quiet stillness of someone committing to something.\n\nRight edge of the panel: soft cyan (#00BCD4) sparkle particles beginning to appear — the sparks of memory rising.\n\nVertical narration (Japanese vertical orientation, right side): 「あれは 2022 年 5 月── STEPN が最強に盛り上がっていた頃だった」\n\nDensity Lv.4 — detailed rendering of the face profile, glasses reflection, and the first sparkle particles.\n\n## Panel 3 (bottom, 20% — time bridge transition)\n\nScene: T61 time-bridge. The panel frame itself is rippling/undulating as if distorted. Upper half shows the edge of Shouichi's glasses lens (present-day), lower half shows a faint impression of summer 2022 streetscape (sunlight, parked bikes, a distant city silhouette). Cyan particles scatter across the boundary.\n\nNo characters in focus. Small caption at the bottom: 「——時は、2022年5月」 (small font, horizontal).\n\nDensity Lv.3 — careful rendering of the ripple effect and the transition imagery.\n\nMood: The moment of declaration. Not nostalgia — urgency. 'I want to draw the fire that was real.' The present dissolves as the past rises.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render Kuro-chan's robot elements partially in this page (they are not the focus but must still be rendered correctly when visible)\n- Do NOT use brush calligraphy (used up in P01)\n- Do NOT render revelation mode"
        },
        {
          "id": "P05",
          "title": "STEPN創世のアハ体験",
          "purpose": "★STEPN創世のアハ体験 — 大ゴマ1枚構成「確かに。天才か!!」",
          "density": "Lv.5（1コマで全て緻密）",
          "status": "確定",
          "pattern": "P11-double-spread もしくは T01独立採用（大ゴマ1枚構成）",
          "techniques": "T01（大ゴマ1枚構成）+ T17/T56（CGパース未来都市）+ T31（毛筆特大「確かに。天才か!!」2個目使用）+ T39（大文字インパクトセリフ）",
          "flow": "上部（コンセプトセリフ） → 中央（CG未来都市） → 下部（STEPN UIカード） → 最下段（毛筆特大結論）",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "全面大ゴマ、画面幅100% × 高さ100%",
              "composition": "1ページ全面を1コマで使用。以下4層構造で配置:",
              "expression": "翔一は後ろ姿なので表情なし、気配で「気付き」を表現",
              "dialogue": "上部吹き出し「履いたら価値が下がるスニーカーなら いっそデジタルでいいじゃないか？」／UIカード内テキスト「STEP'N / Wolker / # 168546279 / Lv 30 / 79.0/100.0」／最下段特大「確かに。天才か!!」",
              "sfx": "なし（毛筆と概念で十分）",
              "density": "Lv.5（全ページ最大の密度、climax panel）",
              "techniques": "T01 + T17 + T56 + T31 + T39 + T50"
            }
          ],
          "source": "episodes/ep01-reboot/pages/P05.md",
          "promptSource": "episodes/ep01-reboot/prompts/P05-prompt.md",
          "buildSource": "episodes/ep01-reboot/prompts/build/P05.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nBack shot from behind. Face not visible. Posture upright, shoulders firm — indicating steady decision.\n\n## Panel 1 (full page, single vertical panel — T01 大ゴマ1枚構成)\n\nScene: A SINGLE full-page panel, no sub-panels, no gutters. The composition is vertically structured in 4 implicit zones:\n\nTOP ZONE (top 20% of the panel): A wide speech bubble containing the concept question in large bold text: 「履いたら価値が下がるスニーカーなら　いっそデジタルでいいじゃないか？」 (the T39 large-impact-text technique).\n\nCENTRAL ZONE (middle 50% of the panel — MAIN CONCEPT): A CG-perspective futuristic cityscape (T17/T56). Near-future urban skyline rendered in greyscale with careful perspective. A female runner figure is shown from behind in the mid-distance, rendered as a pale monochrome SILHOUETTE with a soft white-grey glow (NOT cyan — keep monochrome). Ethereum-diamond shaped motifs floating in the air around her (geometric diamond icons with the Ethereum symbol). Radial lines of perspective converging toward a distant vanishing point. The entire central zone should feel futuristic and aspirational.\n\nLOWER-MID ZONE (20% — STEPN UI CARD): A red-framed STEPN UI card displayed as if part of the scene. The card must contain accurate UI text:\n- \"STEP'N\" (brand logo)\n- \"Wolker\" (shoe type)\n- \"# 168546279\" (ID number)\n- \"Lv 30\"\n- \"79.0/100.0\" (condition)\n- Visual: a rainbow-mosaic pattern sneaker (monochrome rendering since color constraint)\nThe card is tilted at 10-15 degrees (T13 smartphone/UI tilt rule applies).\n\nBOTTOM-LEFT CORNER (small, 5-10%): Shouichi shown from BEHIND (back-view, T50 style). He wears a plain torn white T-shirt, stands small in the foreground, holding a smartphone and looking UP at the UI card. Only his back and the edge of his arm are visible.\n\nBOTTOM ZONE (bottom 10% of page): GIANT brush-stroke calligraphy text 「確かに。天才か!!」 in stark black ink, horizontal orientation, dominating the bottom of the panel. T31 — this is the second brush-text use in the episode (after 終わった, before バナナ/マーケティング). The calligraphy carries the punchline: YES. GENIUS.\n\nDensity Lv.5 — maximum detail across every zone. The CG cityscape carefully rendered. The UI card pixel-perfect. The runner silhouette precise. The brush calligraphy with proper weight and ink-bleed.\n\nNo sound effects. The image itself is the explosion.\n\nMood: The thunderclap of comprehension. Walking shoes that lose value over time — make them digital. A single-image revelation that makes the entire manga possible. 'Yes. Genius.'\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT split the page into multiple panels — this is a SINGLE full-page panel (T01 大ゴマ1枚構成)\n- Do NOT show Shouichi's face — he is back-view only, small in the bottom-left, observing the concept from behind\n- Do NOT render the running woman in cyan — she is in MONOCHROME greyscale with a subtle glow effect, NOT cyan color (reserved for Kuro-chan and smartphone)\n- Do NOT use brush calligraphy except for the bottom-page 「確かに。天才か!!」 — this is the second of three brush uses in the episode (T31 upper limit respect)"
        },
        {
          "id": "P06",
          "title": "BAYC「バナナ」神格化のバブル狂喜",
          "purpose": "★BAYC「バナナ」神格化のバブル狂喜",
          "density": "Lv.3-4-5-3-4",
          "status": "確定",
          "pattern": "P03-diagonal-5（対角線5コマ構成）",
          "techniques": "T31（毛筆特大「バナナ」3個目）+ T57（バナナエンブレム神格化）+ T39（大文字インパクト）",
          "flow": "右上（翔一PC前） → 右中（スマホ開示） → 中央（バナナ大ゴマ） → 左中（反応小） → 左下（翔一+仲間の狂喜）",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "右上・中、画面幅50% × 高さ25%",
              "composition": "デスクトップ画面前の翔一（パーカー、汗）、モニター群にスニーカー画像",
              "expression": "気付きの緊張、目を見開く",
              "dialogue": "独白「待て……この踵……」「何か、付いてないか！？」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "右中・小、画面幅40% × 高さ20%",
              "composition": "傾いたスマホ（10-15度）、APE Sneaker画像",
              "expression": "顔なし、画面のみ",
              "dialogue": "画面「APE Sneaker、ついに公開!!」",
              "sfx": "",
              "density": "Lv.4（スマホUI精密）",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中央・大、画面幅100% × 高さ40% — climax panel",
              "composition": "スニーカー側面アップ、バナナエンブレム＋赤青三角パターン。画面中央に特大毛筆「バナナ」（T31、3個目）。周囲に狂喜の吹き出し複数。右下に驚愕顔アップ翔一",
              "expression": "翔一=驚愕+歓喜",
              "dialogue": "特大「バナナ」／吹き出し群「BAYC のバナナだ!!」「公式コラボ確定だろ!!」「踵にバナナ……付いてる!!」「サル神が、降臨した!!」",
              "sfx": "",
              "density": "Lv.5（climax）",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "左中・小、画面幅50% × 高さ15%",
              "composition": "翔一＋仲間（2-3人）、スマホとクレカを握る、ニヤつき狂喜",
              "expression": "狂喜モード、歯を見せた笑み",
              "dialogue": "「俺らは BAYC 持ってない……」「だが、開国当日に突っ込めば乗れる!!」／キャプション「2022 年 7 月 15 日──先行ミント終了。次は、開国だ」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "5",
              "size": "左下・中、画面幅50% × 高さ20%",
              "composition": "BAYC ホルダーの億万長者がスニーカー箱を掲げる群衆、猿 PFP が並ぶ",
              "expression": "群衆の狂喜、顔は描かないシルエット",
              "dialogue": "UI「BAYC ホルダー先行ミント無料／期間: 7 月 7 日〜 7 月 15 日」／「億万長者続々参戦!!」「BAYC 勢が全員 E 国に移動してる!!」",
              "sfx": "",
              "density": "Lv.4（群衆の個別シルエット）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep01-reboot/pages/P06.md",
          "promptSource": "episodes/ep01-reboot/prompts/P06-prompt.md",
          "buildSource": "episodes/ep01-reboot/prompts/build/P06.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 5 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 → Panel 5 (bottom).\nPanel 5 is the page ending.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nBust shot. Corner of mouth raised, eyes narrowed with amused realization. Left hand lightly touching mouth. Glasses reflecting a calm soft light.\nBust shot front. Teeth-showing confident grin with a shrewd undertone. Glasses lenses glinting with a soft highlight (NOT a star-shaped flash, NOT rays).\n\n## Panel 1 (top-right, 50% width, 25% height)\n\nScene: Shouichi sitting at a desktop setup, wearing a hoodie, slight sweat on his brow. Multiple monitors display sneaker images. His face is close to one screen.\n\nExpression: tension of recognition, eyes widening.\n\nMonologue (handwriting captions): 「待て……この踵……」「何か、付いてないか！？」\n\nDensity Lv.3 — setup, focus on posture and expression.\n\n## Panel 2 (top-center/right, 40% width, 20% height — UI reveal)\n\nScene: A tilted smartphone (10-15 degree tilt, T13). On screen: an APE Sneaker image with promotional header text.\n\nIn-screen text: \"APE Sneaker、ついに公開!!\"\n\nNo face visible.\n\nDensity Lv.4 — careful UI rendering.\n\n## Panel 3 (center, full-width, 40% height — CLIMAX PANEL)\n\nScene: EXTREME CLOSE-UP of a sneaker side-view. On the heel: a BANANA EMBLEM combined with a red-and-blue triangle pattern (T57 banana-deity insignia).\n\nDOMINATING the panel CENTER: a GIANT brush-stroke calligraphy 「バナナ」 in stark black ink, occupying ~35% of the panel (T31 — this is the 3rd and FINAL brush use in the episode).\n\nSurrounding the banana text, multiple speech bubbles floating in the panel (crowd reaction, ecstatic):\n- 「BAYC のバナナだ!!」\n- 「公式コラボ確定だろ!!」\n- 「踵にバナナ……付いてる!!」\n- 「サル神が、降臨した!!」\n\nBottom-right corner: close-up of Shouichi's astonished face peeking in (eyes wide, mouth half-open in disbelief/ecstasy).\n\nDensity Lv.5 — maximum detail on the sneaker + banana emblem, brush calligraphy weight, and expressive speech bubble arrangement.\n\n## Panel 4 (center-left, 50% width, 15% height)\n\nScene: Shouichi + 2-3 companions (shown but with less-defined faces) grouped together, holding smartphones and credit cards, all with ecstatic teeth-showing grins (confident mode + 狂喜).\n\nSpeech bubbles: 「俺らは BAYC 持ってない……」 「だが、開国当日に突っ込めば乗れる!!」\n\nCaption at the panel edge: 「2022 年 7 月 15 日──先行ミント終了。次は、開国だ」\n\nDensity Lv.3 — setup, group dynamic.\n\n## Panel 5 (bottom-left, 50% width, 20% height)\n\nScene: A crowd of BAYC-holder millionaires lifting sneaker boxes aloft in celebration. Ape PFP profile-image avatars visible in the crowd (drawn as small circular icons).\n\nCRITICAL: Crowd rendered as SILHOUETTES only — NO individual facial features (T14).\n\nIn-panel UI overlay: \"BAYC ホルダー先行ミント無料／期間: 7 月 7 日〜 7 月 15 日／対象: BAYC #1 〜 #10000\"\n\nSurrounding speech bubbles: 「億万長者続々参戦!!」 「BAYC 勢が全員 E 国に移動してる!!」\n\nDensity Lv.4 — careful silhouette crowd detail, UI text precision.\n\nMood: The mass hallucination of July 2022. A banana symbol becomes god. Everyone rushes in. The bubble at its absolute peak — pure greed disguised as genius. 'The ape god has descended.'\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT use cyan in this page — this is the BAYC bubble, no robot AI, no smartphone-glow-focus\n- Do NOT render individual faces on the crowd in Panel 5 — silhouettes only\n- Do NOT use brush calligraphy except for the single 「バナナ」 in Panel 3 (this is the 3rd and FINAL brush use in the episode)"
        },
        {
          "id": "P07",
          "title": "Yuga Labs否認「マーケティング」崩壊開始",
          "purpose": "★Yuga Labs否認「マーケティング」崩壊開始",
          "density": "Lv.4-4-5-4-3",
          "status": "確定",
          "pattern": "P06-black-punchline変形（黒ベタ+大崩壊+決め）",
          "techniques": "T31（毛筆特大「マーケティング」— T31上限3個使い切り）+ T58（崩れる石壁+砕けるサル神）+ T59（亀裂ビジュアル）+ T20（神格化→崩壊粒子）+ T12（シアン粒子、崩壊時限定）",
          "flow": "右上（翔一ワイン手）→ 右中（公式声明画面） → 中央（サル神崩壊大ゴマ） → 左下（翔一横顔）",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "右上・小、画面幅45% × 高さ20%",
              "composition": "翔一（BAYCシャツ、ワイングラス傾ける、顔汗、口あんぐり）",
              "expression": "驚愕、shock-reversal系",
              "dialogue": "「……じゃあ、俺の #3500 は……」「……公式じゃ、ない？」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "右中・中、画面幅55% × 高さ20%",
              "composition": "スマホ UI、キャプション「2022 年 8 月 1 日── Yuga Labs から、一通の声明」、画面に公式声明テキスト全文",
              "expression": "顔なし",
              "dialogue": "画面テキスト全文（下記プロンプト参照）",
              "sfx": "",
              "density": "Lv.4（UI精密）",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中央・大ゴマ、画面幅100% × 高さ40% — climax",
              "composition": "崩れる石壁（T58）、中央に砕けるサル神（王冠＋光輪、シアン粒子で飛散 T20 + T12）。両脇にシルエット×2、膝から崩れる人影。特大毛筆「マーケティング」（T31最終3個目）",
              "expression": "サル神はシルエット、崩壊",
              "dialogue": "縦書き「\"匂わせ\"だった」「ただのマーケティング戦略だった」「サル神は、存在しなかった」／ナレ枠「BAYC コラボは、コラボではなかった。STEPN の一方的な\"匂わせ\"マーケティングが、一ヶ月半、市場を狂わせた真実だった。」",
              "sfx": "",
              "density": "Lv.5（climax panel、崩壊のピーク）",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "左中・小、画面幅50% × 高さ15%",
              "composition": "翔一顔横アップ、メガネ、汗、静かな決意",
              "expression": "静かな諦観、決意",
              "dialogue": "縦書き「……始まるぞ」「たった数日で、全部が崩れる」／キャプション「2022 年 8 月 3 日──市場に、最初の亀裂が走った」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            },
            {
              "n": "5",
              "size": "左下・小、画面幅50% × 高さ5%",
              "composition": "亀裂ビジュアル（T59）— 黒い亀裂線が画面を走る、背景グレー",
              "expression": "人物なし",
              "dialogue": "なし",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            }
          ],
          "source": "episodes/ep01-reboot/pages/P07.md",
          "promptSource": "episodes/ep01-reboot/prompts/P07-prompt.md",
          "buildSource": "episodes/ep01-reboot/prompts/build/P07.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 5 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 → Panel 5 (bottom).\nPanel 5 is the page ending.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nBust shot front. Eyes wide open, pupils constricted. Mouth slightly open, no teeth. Smile has fully vanished. Face in pure processing-shock stillness.\nFace is mostly out of frame — only the corner of the mouth and glasses rim are visible at the panel edge.\n\n## Panel 1 (top-right, 45% width, 20% height)\n\nScene: Shouichi wearing a BAYC-logo T-shirt, holding a wine glass tilted awkwardly, his face covered in sweat, mouth open in disbelief (shock-reversal mode).\n\nExpression: stunned disbelief, processing-shock.\n\nMonologue (handwriting captions): 「……じゃあ、俺の #3500 は……」 「……公式じゃ、ない？」\n\nDensity Lv.4.\n\n## Panel 2 (top-left/center, 55% width, 20% height)\n\nScene: A smartphone UI displaying an official-looking statement. Caption bar at top: 「2022 年 8 月 1 日── Yuga Labs から、一通の声明」\n\nOn-screen statement (Japanese text, rendered as realistic UI text):\n「Yuga Labs 公式声明: STEPN との\"コラボ\"は、当社が承認したものではありません。BAYC ホルダーへの無料配布は、STEPN 側の独自施策です。当社の公式パートナーではない。」\n\nNo face visible.\n\nDensity Lv.4 — careful UI text rendering.\n\n## Panel 3 (center, full-width, 40% height — CLIMAX PANEL, the collapse)\n\nScene: A CRUMBLING ANCIENT STONE WALL occupies the panel (T58). In the center of the wall: a SHATTERING APE DEITY figure — with a crown and light-halo — breaking apart mid-collapse. CYAN (#00BCD4) particles disperse from the shattering figure, carrying the divine essence away (T20 deity→collapse particles + T12 narrative exception clause).\n\nTo the left and right of the wall: two human silhouettes on their knees, collapsing from the torso down (CRITICAL: silhouettes only, no faces — T14).\n\nDOMINATING the panel: GIANT brush-stroke calligraphy 「マーケティング」 in stark black ink, positioned prominently across the middle of the panel. T31 — this is the THIRD AND FINAL brush calligraphy use in the episode (after 終わった in P01, バナナ in P06).\n\nVertical Japanese narrations (handwriting style, positioned around the wall):\n- 「\"匂わせ\"だった」\n- 「ただのマーケティング戦略だった」\n- 「サル神は、存在しなかった」\n\nLarge horizontal narration bar at the bottom of the panel: 「BAYC コラボは、コラボではなかった。STEPN の一方的な\"匂わせ\"マーケティングが、一ヶ月半、市場を狂わせた真実だった。」\n\nDensity Lv.5 — absolute maximum detail: crumbling stone textures, the deity shattering in mid-pose, cyan particle dispersal, the weight of the brush calligraphy, the precise silhouette collapse of the humans.\n\n## Panel 4 (center-left, 50% width, 15% height)\n\nScene: Side-profile close-up of Shouichi's face. Glasses glinting, sweat visible, expression quiet and resolved (not despairing — the face of one who has seen the pattern).\n\nVertical monologues: 「……始まるぞ」 「たった数日で、全部が崩れる」\n\nCaption bar: 「2022 年 8 月 3 日──市場に、最初の亀裂が走った」\n\nDensity Lv.4.\n\n## Panel 5 (bottom-left, 50% width, 5% height)\n\nScene: A single black CRACK LINE running horizontally across the grey panel (T59 亀裂ビジュアル). No characters. The visual symbol of market rupture beginning.\n\nNo sound effects. No dialogue. Pure visual punctuation.\n\nDensity Lv.3 — minimal rendering, the crack as the entire composition.\n\nMood: The moment the myth dies. The ape god was never real — it was marketing. The bubble doesn't pop loudly; it dissolves with quiet bureaucratic precision. And everyone realizes at once.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT use cyan outside the shattering-ape-deity particles in Panel 3 (narrative exception permitted by T12 clause)\n- Do NOT render individual faces on the collapsing human silhouettes in Panel 3\n- Do NOT use brush calligraphy except for the single 「マーケティング」 in Panel 3 (this is the 3rd and FINAL brush use in the episode — T31 limit reached)"
        },
        {
          "id": "P08",
          "title": "エピ末の余韻",
          "purpose": "エピ末の余韻 — ベンチで静かな諦観、次への助走",
          "density": "Lv.3-4",
          "status": "確定",
          "pattern": "P08-back-glance（後ろ姿+振り返り片目）",
          "techniques": "T60（散歩コーギー+スマホ+ベンチ）+ T30（両義性の曇り空）+ T69（座右の銘・現実主義）+ T29（最下段次回予告）",
          "flow": "上（ベンチのシルエット遠景） → 下（翔一横顔+スマホ+コーギー）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上・中ゴマ、画面幅100% × 高さ45%",
              "composition": "公園のベンチ遠景、夕暮れ。曇り空に一筋の光（T30両義性）、遠くにランナー数人のシルエット、ベンチに人影（翔一）がぽつんと座る",
              "expression": "遠景なのでシルエットのみ",
              "dialogue": "ナレ「——2022年 8月 終わり頃。」「俺は、観察者の側に戻った。」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": "T30"
            },
            {
              "n": "2",
              "size": "下・大ゴマ、画面幅100% × 高さ55%",
              "composition": "ベンチの翔一の横顔（T48）、スーツ、コーギーと共にスマホを見る。夕暮れの光、顔は穏やか、眼鏡レンズに光の反射。左下に振り返り片目（T08的）は演出されない代わりに「視線が遠くを見る」で代替",
              "expression": "静かな諦観、現実主義（T69）",
              "dialogue": "縦書き「期待と妄想は──毒だ」「そんな気がしていた」（雀鬼セリフは退役、代替で「そんな気がしていた」）／最下段薄い文字「次回: 2022年秋── STEPN の短い再燃」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": "T48 + T60 + T69 + T29"
            }
          ],
          "source": "episodes/ep01-reboot/pages/P08.md",
          "promptSource": "episodes/ep01-reboot/prompts/P08-prompt.md",
          "buildSource": "episodes/ep01-reboot/prompts/build/P08.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nCasual clothes, holding a wine glass, blissful satisfied expression, relaxed setting.\nBack shot from behind. Face not visible. Posture upright, shoulders firm — indicating steady decision.\n\n## Panel 1 (top, 45% — establishing dusk scene)\n\nScene: A wide dusk view of a park. An evening sky mostly cloudy but with a single shaft of fading sunlight breaking through (T30 ambiguous sky). In the mid-distance, 2-3 runner silhouettes jog along a path. A lone bench in the foreground middle, with a small seated human silhouette (Shouichi, but rendered small and distant).\n\nNarration (vertical, right edge, small font): 「——2022年 8月 終わり頃。」「俺は、観察者の側に戻った。」\n\nDensity Lv.3 — setup, soft atmospheric rendering.\n\nNo sound effects. Quiet dusk.\n\n## Panel 2 (bottom, 55% — contemplative close)\n\nScene: Side-profile of Shouichi seated on the park bench (T48 side profile + lens highlight). He wears a relaxed business suit now. Beside him: a Pembroke Welsh Corgi (white and brown, proper breed rendering — NOT cyan or special-colored). He holds a smartphone (screen off, no cyan glow). His eyes look into the distance.\n\nExpression: quiet resignation mixed with resolve. Calm. Not defeated. Glasses lenses catch the soft dusk light (T48 highlight through the lens).\n\nVertical monologue captions (handwriting style, positioned in the open space above and beside him):\n- 「期待と妄想は──毒だ」\n- 「そんな気がしていた」\n\nThin text bar at the very bottom of the page (T29 next-episode hook, small font): 「次回: 2022年秋── STEPN の短い再燃」\n\nDensity Lv.4 — detailed rendering of the side profile, the glasses reflection, the corgi's fur detail, the bench texture, and the distant light.\n\nNo sound effects. The silence of the observer's position.\n\nMood: The end of the opening arc. Not victory, not defeat — the quiet positioning of an observer. 'Expectations and delusions are poison. I knew it all along.' The dog doesn't care. The city continues. And the story has only just begun.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render the dog as cyan or any special color — a normal Pembroke Welsh Corgi\n- Do NOT use cyan in this page (no smartphone-focus, no Kuro-chan)\n- Do NOT use brush calligraphy — the T31 limit has been reached (3 uses in P01/P06/P07)\n- Do NOT reference 雀鬼 or 桜井章一 in the dialogue — replaced per retired-terms rule"
        }
      ],
      "pageCount": 8,
      "promptCount": 8,
      "title": "EP01-REBOOT: Day 0（正解ver完全踏襲版）",
      "summary": "2026年3月、翼サ終通知で「WEB3.0完全終了」を悟る翔一。クロちゃんが召喚されて「どんな漫画を描きたい？」と問う。 翔一は「あの頃の熱狂を伝えたい」と答え、2022年5月のSTEPN全盛期へ。 そこから2022年7月のBAYC匂わせバブル、8月のYuga否認崩壊までの「夢と破綻」のアークを8ページで描く。",
      "status": "企画完成・ページ設計開始",
      "kind": "本編（前半アークの再起動）",
      "postUnit": "X 4枚組×2 の8ページ構成",
      "source": "episodes/ep01-reboot/episode-design.md"
    },
    {
      "id": "EP01",
      "slug": "ep01",
      "label": "EP01",
      "reboot": false,
      "pages": [
        {
          "id": "P01",
          "title": "衝撃の導入（翼サ終ショック）",
          "purpose": "衝撃の導入（翼サ終ショック）",
          "density": "",
          "status": "生成済み",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上半分大ゴマ",
              "composition": "顔アップ（超クローズアップ）",
              "expression": "冷や汗、白目、衝撃",
              "dialogue": "「終わった」（大文字ゴシック）",
              "sfx": "",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "下半分",
              "composition": "布団の中、スマホの光で顔が下から照らされる",
              "expression": "茫然、困惑",
              "dialogue": "「あれっ……これって実質 WEB3.0ゲーム 完全終了のお知らせ…??」",
              "sfx": "",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep01/pages/P01.md",
          "promptSource": "episodes/ep01/prompts/P01-prompt.md",
          "buildSource": "episodes/ep01/prompts/build/P01.txt",
          "promptText": "# Nano Banana プロンプト — サンプル\n\n## メタ情報\n- ページID: P01\n- エピソードID: EP01\n- 変換元: pages/P01.md（Pass 3 確定版）\n- 生成試行番号: 1\n\n---\n\n## プロンプト本文\n\n```\nJapanese manga page, black and white, 4 panels layout.\nKeep character identity consistent with reference image.\n\nPanel 1: Wide establishing shot of a crowded party venue from overhead angle. Silhouetted crowd, bright atmosphere, celebration. Dense composition with minimal negative space.\n\nPanel 2: Bust shot of protagonist holding a glass, confident smirk, showing off. Self-assured posture.\n\nPanel 3: Wide shot of crowd applauding. Celebratory atmosphere, no dialogue, sound of clapping implied.\n\nPanel 4: Side profile of protagonist glancing out a window. Momentary blank expression, subtle unease. Generous negative space, quiet moment.\n\nComposition: Panels 1-3 dense and energetic, Panel 4 shifts to quiet and spacious.\nCamera: overhead (Panel 1), medium (Panel 2-3), side profile close (Panel 4).\nMood: Prosperous celebration gradually shifting to subtle unease in final panel.\n\nDo not change: face shape, hairstyle, costume details, character age impression.\nDo not add: extra characters, extra objects, text artifacts.\nDo not draw detailed faces on crowd members in Panel 1.\n```\n\n---\n\n## 使用参照画像\n- ref_hero_v1: 主人公の外見一致確認\n- ref_background_party_v1: 会場の雰囲気\n\n## 変換者メモ\n- コマ1の群衆は「シルエット的に」という指示を \"silhouetted crowd\" に変換\n- コマ4の「微かな違和感」を \"subtle unease\" に変換。\"anxious\" だと強すぎるため調整\n\n---\n\n## 生成結果の記録\n\n### 試行1\n- 結果: [未実施]\n- メモ:"
        },
        {
          "id": "P02",
          "title": "伏線設置（STEPN）+ サ終連打の開始",
          "purpose": "伏線設置（STEPN）+ サ終連打の開始",
          "density": "",
          "status": "生成済み",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [],
          "source": "episodes/ep01/pages/P02.md",
          "promptSource": "episodes/ep01/prompts/P02-prompt.md",
          "buildSource": "episodes/ep01/prompts/build/P02.txt",
          "promptText": "# Nano Banana プロンプト — サンプル\n\n## メタ情報\n- ページID: P02\n- エピソードID: EP01\n- 変換元: pages/P02.md（Pass 3 確定版）\n- 生成試行番号: 1\n\n---\n\n## プロンプト本文\n\n```\nJapanese manga page, black and white, 4 panels layout.\nKeep character identity consistent with reference image.\n\nPanel 1: Bust shot of protagonist showing smartphone screen proudly. Smug expression, confident smirk. Tight composition, minimal negative space.\n\nPanel 2: Full body shot of Kuro-chan standing at the edge of the venue, arms crossed. Neutral expression, observing surroundings silently. Generous negative space to emphasize isolation.\n\nPanel 3: Close-up face shot of Kuro-chan, shifting gaze toward smartphone screen. Slight tension in expression, subtle concern. Normal spacing.\n\nPanel 4: Bust shot of both characters, protagonist turning around. Protagonist looks puzzled, Kuro-chan looks serious. Normal spacing.\n\nComposition: Contrast between protagonist's confidence (Panel 1) and Kuro-chan's tension (Panel 2-3). Panel 4 brings them together.\nCamera: medium (Panel 1), full body wide (Panel 2), close-up (Panel 3), medium two-shot (Panel 4).\nMood: Transition from self-assured celebration to growing unease.\n\nDo not change: face shape, hairstyle, costume details, character age impression.\nDo not add: extra characters, extra objects, text artifacts.\nDo not make both characters' expressions the same tone — contrast is essential.\nDo not show Kuro-chan smiling in this scene.\n```\n\n---\n\n## 使用参照画像\n- ref_hero_v1: 主人公\n- ref_kuro_v1: クロちゃん\n\n## 変換者メモ\n- コマ2の「孤立感」を余白+full bodyの距離感で表現\n- 禁止事項「二人の表情を同じトーンにしない」をDo Not句に直訳追加\n\n---\n\n## 生成結果の記録\n\n### 試行1\n- 結果: [未実施]\n- メモ:"
        },
        {
          "id": "P03",
          "title": "サ終連打",
          "purpose": "サ終連打 →「終焉のお知らせ」",
          "density": "",
          "status": "生成済み",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "",
              "composition": "布団の翔一 + 背後にゴースト化したゲームキャラ（カンガルー=チェンコロ、少女キャラ=コインムスメ）",
              "expression": "翔一は困惑",
              "dialogue": "「チェンコロもコインムスメも終わったし……」",
              "sfx": "",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "",
              "composition": "布団の翔一 + 背後にゴースト化（三國志武将、トーキョービーストの龍）",
              "expression": "翔一は諦め顔",
              "dialogue": "「三國志もトーキョービーストも一瞬で消えたし……」",
              "sfx": "",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "",
              "composition": "バストアップ、布団の中、スマホ光",
              "expression": "虚ろな苦笑い",
              "dialogue": "「WEB3.0 終わり過ぎて終焉のお知らせ……」",
              "sfx": "",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep01/pages/P03.md",
          "promptSource": "episodes/ep01/prompts/P03-prompt.md",
          "buildSource": "episodes/ep01/prompts/build/P03.txt",
          "promptText": "# Nano Banana プロンプト — サンプル\n\n## メタ情報\n- ページID: P03\n- エピソードID: EP01\n- 変換元: pages/P03.md（Pass 3 確定版）\n- 生成試行番号: 1\n\n---\n\n## プロンプト本文\n\n```\nJapanese manga page, black and white, 4 panels layout.\nKeep character identity consistent with reference image.\n\nPanel 1: Wide establishing shot of street outside venue. Silent, ominous atmosphere, subtle tension. Generous negative space, open composition.\n\nPanel 2: Close-up face shot of Kuro-chan. Shifting gaze, eye direction change — realizing something from data on screen. Short utterance only. Normal spacing.\n\nPanel 3: Dutch angle composition of Kuro-chan gripping smartphone tightly. Focus on the action/gesture. Tense atmosphere. Generous negative space.\n\nPanel 4: Front-facing shot of Kuro-chan with intense, firm gaze directed at reader. Mix of determination and anxiety. Minimal text. Generous negative space for lingering impact.\n\nComposition: Progressive revelation — wide establishing shot narrows to intense close-up. Each panel increases emotional intensity.\nCamera: wide (Panel 1), close-up (Panel 2), dutch angle medium (Panel 3), front-facing close (Panel 4).\nMood: Ominous quiet building to determined unease. The calm before the storm.\n\nDo not change: face shape, hairstyle, costume details, character age impression.\nDo not add: extra characters, extra objects, text artifacts, unnecessary props or accessories.\nMaintain exact facial features from reference.\nNo distorted or illegible text elements.\nDo not rush emotional progression — each panel must show gradual change.\n```\n\n---\n\n## 使用参照画像\n- ref_hero_v1: 主人公（コマ1の背景に小さく）\n- ref_background_street_v2: 外の街並み（コマ1）\n\n## 変換者メモ\n- 「逆転の予感を作る」というページ目的を \"calm before the storm\" に変換\n- 「顔の別人化」禁止を \"Maintain exact facial features from reference\" に変換\n- コマ4の「読者に向かって」は \"directed at reader\" で表現。Nano Bananaが対応しない場合は \"looking straight ahead\" に差し替え\n\n---\n\n## 生成結果の記録\n\n### 試行1\n- 結果: [未実施]\n- メモ:"
        }
      ],
      "pageCount": 3,
      "promptCount": 3,
      "title": "EP01: Day 1",
      "summary": "2026年3月30日、キャプテン翼RIVALSサ終通知で「WEB3.0ゲーム完全終了」を悟る翔一。AI時代の波を受けてClaude起動、クロちゃん爆誕。2022年5月STEPN全盛期への回想突入。",
      "status": "構成書v3完成",
      "kind": "",
      "postUnit": "",
      "source": "episodes/ep01/episode-design.md"
    },
    {
      "id": "EP02-REBOOT",
      "slug": "ep02-reboot",
      "label": "EP02★REBOOT",
      "reboot": true,
      "pages": [
        {
          "id": "P01",
          "title": "観察者姿勢の再確認と「秋の市場沈黙」の提示",
          "purpose": "観察者姿勢の再確認と「秋の市場沈黙」の提示",
          "density": "Lv.2（俯瞰）+ Lv.4（顔クローズアップ）",
          "status": "確定",
          "pattern": "P05-meta-bird-eye（メタ宣言俯瞰大ゴマ）",
          "techniques": "T30（両義性曇り空）+T60（ベンチ+コーギー）+T69（座右の銘・現実主義）+T05（メタ宣言俯瞰）",
          "flow": "右上（ナレ帯「2022年9月末」）→ 中央（俯瞰の街）→ 左下（ベンチの翔一横顔）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "右上・中コマ、画面幅40% × 高さ30%",
              "composition": "横長細帯。秋の街路樹、枯葉が舞う、薄曇りの空（T30両義性）。右端に縦書きナレ枠",
              "expression": "人物なし",
              "dialogue": "ナレ「——2022年 9月、終わり頃。」「あれから、1ヶ月半。」",
              "sfx": "",
              "density": "Lv.2",
              "techniques": "T30"
            },
            {
              "n": "2",
              "size": "中央・大ゴマ、画面幅100% × 高さ45%",
              "composition": "街の俯瞰（T05メタ宣言俯瞰）。商業街の一角、歩道、公園、ベンチに座る小さな人影（翔一、遠景シルエット）、傍らにコーギー。カフェの看板、人通りは少ない、秋の午後",
              "expression": "遠景のため表情なし",
              "dialogue": "ナレ（大きめ、俯瞰と重なるように配置）「市場は、静かに枯れた。」「誰も、STEPNを口にしなくなった。」",
              "sfx": "",
              "density": "Lv.4（climax、俯瞰で空間を定義）",
              "techniques": "T05 + T60（ベンチ+コーギー）"
            },
            {
              "n": "3",
              "size": "左下・小コマ、画面幅40% × 高さ25%",
              "composition": "翔一の横顔クローズアップ（ベンチ座位）、スーツ、眼鏡レンズに秋の光反射。スマホを手に、画面はoff、膝の上に放置している感",
              "expression": "現実主義の静けさ（T69）。穏やか、決意でも絶望でもない",
              "dialogue": "モノローグ（手書き風、小）「期待と妄想は──毒だ。」「そんな気がしていた。」",
              "sfx": "",
              "density": "Lv.4（感情のピーク、顔詳細）",
              "techniques": "T48（横顔+レンズ反射）+ T69"
            }
          ],
          "source": "episodes/ep02-reboot/pages/P01.md",
          "promptSource": "episodes/ep02-reboot/prompts/P01-prompt.md",
          "buildSource": "episodes/ep02-reboot/prompts/build/P01.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 3 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (middle) → Panel 3 (bottom).\nPanel 3 is the page ending — place the emotional payoff here.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nCasual clothes, holding a wine glass, blissful satisfied expression, relaxed setting.\n\n## Panel 1 (top 30%, narrow horizontal narration strip)\n\nScene: Wide thin strip across the top. Autumn street scene with falling leaves drifting across the frame, overcast greyscale sky with a single faint ray of light (T30 両義性). Bare trees lining the edge. Right edge: vertical Japanese narration box.\n\nNarration (vertical, small): 「——2022年 9月、終わり頃。」「あれから、1ヶ月半。」\n\nDensity Lv.2 — loose sketchy line work, minimal shading.\n\nNo sound effects. Quiet autumn atmosphere.\n\n## Panel 2 (middle 45%, bird's-eye establishing panel — climax setup)\n\nScene: High bird's-eye-view of a commercial district mid-afternoon (T05 メタ宣言俯瞰). Autumn atmosphere: cafe signs, sparse pedestrian traffic, empty bench visible on a sidewalk. On the bench: a tiny seated silhouette (Shouichi, rendered small in the distance). A Pembroke Welsh Corgi (white and brown, NOT cyan) sits beside him. Bare trees, a few fallen leaves.\n\nCRITICAL: All distant figures rendered as silhouettes only — no facial details (T14 principle even in distance).\n\nLarge narration bar overlaid on the panel (medium font): 「市場は、静かに枯れた。」「誰も、STEPNを口にしなくなった。」\n\nDensity Lv.4 — careful perspective, multi-layer screentone for the sky, precise bench/corgi/tree silhouettes. The climax panel of the setup arc.\n\n## Panel 3 (bottom 25%, face close-up — emotional landing)\n\nScene: Side-profile close-up of Shouichi on the bench. He wears a relaxed business suit. Glasses lens catches the autumn afternoon light with a bright highlight (T48). Smartphone lies on his knee, screen DARK (off). His eyes look slightly downward and to the distance.\n\nExpression: quiet realism (T69). Not despair, not satisfaction — the face of someone who has earned their vantage point. Calm, lucid, alert.\n\nMonologue (handwriting caption, NOT in a speech bubble, placed in the open space): 「期待と妄想は──毒だ。」「そんな気がしていた。」\n\nNo sound effects. The silence of the observer.\n\nDensity Lv.4 — detailed face profile, precise glasses lens reflection, subtle lighting on the cheek and hand.\n\nMood: The quiet autumn after collapse. Not despair, not relief — the observer's position, earned through witnessing. A solitary realist with a corgi, watching a town that no longer speaks its former enthusiasm.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT use cyan in this page (smartphone is OFF, no Kuro-chan)\n- Do NOT use brush calligraphy (T31 is reserved for P03 「ついに来た」)\n- Do NOT render the corgi as cyan or special-colored — normal Pembroke Welsh Corgi (white and brown)\n- Do NOT render revelation mode or dead-fish eyes\n- Do NOT include individual faces on distant figures — silhouettes only"
        },
        {
          "id": "P02",
          "title": "SNSに「#Comfort党」の風が吹き始める瞬間、観察者の翔一が気配を捉える",
          "purpose": "SNSに「#Comfort党」の風が吹き始める瞬間、観察者の翔一が気配を捉える",
          "density": "Lv.4（大ゴマSNS洪水）+ Lv.2（小コマ3連）+ Lv.4（翔一反応）",
          "status": "確定",
          "pattern": "P02-audience-clockwise（観客カット時計回り）",
          "techniques": "T14（群衆シルエット）+T32（日本語セリフ保持）+T67（スマホ画面世界）+T13（スマホ10-15度傾け）",
          "flow": "右上（スマホ画面SNSタイムライン）→ 右中（ユーザー1の吹き出し）→ 中央（ユーザー2）→ 左下（翔一の反応）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "右上・大ゴマ、画面幅100% × 高さ40%",
              "composition": "スマホ画面のクローズアップ（10-15度傾け T13）。Twitter/Xのタイムライン洪水。複数の吹き出し/投稿が重なる。#Comfort党 のハッシュタグが目立つ配置",
              "expression": "顔なし、画面のみ",
              "dialogue": "画面内テキスト群（複数ユーザー、話者名なし、記号で区別）:",
              "sfx": "",
              "density": "Lv.4（climax、UI密度最大、実投稿風に描き込み）",
              "techniques": "T13 + T67 + T32"
            },
            {
              "n": "2",
              "size": "右中・小コマ、画面幅33% × 高さ25%",
              "composition": "別のスマホユーザー（顔は描かず手元とスマホのみ）、画面に #Comfort党 投稿のスクロール",
              "expression": "顔なし",
              "dialogue": "投稿引用「Lv5→Lv6 パリチャレ 確率20%」「3個全消失×10回」",
              "sfx": "",
              "density": "Lv.2（setup）",
              "techniques": "T67"
            },
            {
              "n": "3",
              "size": "中央・小コマ、画面幅33% × 高さ25%",
              "composition": "カフェの席（背景、テーブルと湯気の立つコーヒーのみ）、誰かの手元のスマホ、ジェム高騰チャート",
              "expression": "顔なし",
              "dialogue": "画面内「Ruby Gem (Lv4) — 80,000 → 140,000 JPY」「+75% 24h」",
              "sfx": "",
              "density": "Lv.2（setup）",
              "techniques": "T67"
            },
            {
              "n": "4",
              "size": "左下・中コマ、画面幅50% × 高さ35%",
              "composition": "翔一のバストアップ（ベンチ継続）。眉をわずかに寄せる、スマホを真剣に見る、glasses lens に影（分析モード）",
              "expression": "分析モード（真剣な目、眼鏡に影）、口角わずかに上がりかけ",
              "dialogue": "モノローグ「……赤ジェム、上がってる。」「観客が、増えてる。」",
              "sfx": "",
              "density": "Lv.4（感情ピーク）",
              "techniques": "T41（眼鏡反射・影）+ T48（分析の静けさ）"
            }
          ],
          "source": "episodes/ep02-reboot/pages/P02.md",
          "promptSource": "episodes/ep02-reboot/prompts/P02-prompt.md",
          "buildSource": "episodes/ep02-reboot/prompts/build/P02.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nBust shot, slightly front or angled. Right hand holding smartphone, left hand touching chin. Shadow on glasses lenses. Serious focused eyes.\n\n## Panel 1 (top, 40% height — SNS flood, climax)\n\nScene: Close-up of a smartphone screen tilted at 10-15 degrees (T13). The screen shows a Twitter/X-style timeline FLOOD — multiple overlapping social media posts scrolling into view. Hashtag \"#Comfort党\" prominently visible in multiple posts.\n\nVisible post texts (Japanese, rendered as if from different anonymous users — use silhouette/shape avatars, no real faces):\n- 「#Comfort党 って知ってる？」\n- 「Ruby Gem (Lv4) 2日で2倍」\n- 「パリチャレ Lv5 成功者出てるらしい」\n- 「今が底値、今しかない」\n- 「#Comfort党 いける」\n\nRealistic SNS UI: timestamps, like counts, reply arrows, profile silhouettes (no facial features). Screen soft cyan glow at the edges (T12 allowed use).\n\nDensity Lv.4 — maximum UI detail, dozens of small elements carefully rendered.\n\n## Panel 2 (middle-upper, 25% height — secondary witness)\n\nScene: Another anonymous phone user's hand holding a smartphone (no face visible, only the hand). The screen shows the same #Comfort党 discussion scrolling further. Background: subtle hint of a public space (bench armrest, sidewalk).\n\nIn-screen text: 「Lv5→Lv6 パリチャレ 確率20%」「3個全消失 ×10回」\n\nDensity Lv.2 — minimal background, UI focused.\n\n## Panel 3 (middle-lower, 25% height — third witness)\n\nScene: A cafe table. A steaming coffee cup, a wooden tabletop edge. Another anonymous hand holding a phone showing a Ruby Gem price chart climbing sharply in staircase pattern (T52 hint).\n\nIn-screen text: 「Ruby Gem (Lv4) — 80,000 → 140,000 JPY」「+75% 24h」\n\nDensity Lv.2 — sketchy setup, focus on the chart.\n\n## Panel 4 (bottom, 35% height — Shouichi reaction, emotional landing)\n\nScene: Bust shot of Shouichi, still on the park bench but now leaning forward slightly. Smartphone in hand, screen softly lit (NO strong cyan). His glasses lenses have shadow falling on them (T41 analysis mode). Eyebrows slightly knit together, mouth barely closed, eyes focused on the screen.\n\nExpression: analysis mode (T48) — serious focused eyes, shadow on glasses lenses. Corner of mouth is BEGINNING to rise — the first flicker of interest.\n\nMonologues (handwriting captions, NOT speech bubbles): 「……赤ジェム、上がってる。」「観客が、増えてる。」\n\nDensity Lv.4 — detailed face rendering, glasses shadow precise, subtle expression shift.\n\nMood: A dormant market starts to murmur again. A hashtag. A graph. A few anonymous voices. The observer feels the first tremor of returning appetite — not in himself yet, but in the crowd.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT write '全ツ' or 'ヤバイ' (retired terminology) — use '今しかない' or 'いける' instead\n- Do NOT include actual recognizable person names or avatars in SNS posts\n- Do NOT render SNS user avatars with real faces (profile icons as silhouettes or simple shapes only)\n- Do NOT use brush calligraphy (reserved for P03)\n- Do NOT use revelation mode"
        },
        {
          "id": "P03",
          "title": "2022/9/28 GMT EARNING IS LIVE 実装当日の解禁。大ゴマ1枚構成で歓喜",
          "purpose": "★2022/9/28 GMT EARNING IS LIVE 実装当日の解禁。大ゴマ1枚構成で歓喜の洪水を封じ込める",
          "density": "Lv.5（1ページ=1コマ、全力投入）",
          "status": "確定",
          "pattern": "T01 大ゴマ1枚構成",
          "techniques": "T01（大ゴマ1枚）+T31（毛筆特大「ついに来た」）+T39（大文字インパクト）+T14（群衆シルエット）+T67（UI画面）",
          "flow": "上（毛筆「ついに来た」）→ 中央（バナー「GMT EARNING IS LIVE」）→ 下（歓喜群衆シルエット+noteブログ実証データ）",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "全面大ゴマ、画面幅100% × 高さ100%",
              "composition": "1ページ全面を1コマで使用。以下4層構造で配置:",
              "expression": "群衆はシルエットのみ表情なし",
              "dialogue": "- 上部毛筆「ついに来た」",
              "sfx": "「ワアアァァッ……」（群衆の歓声、白抜き擬音、画面下部に構図要素として配置 T37）",
              "density": "Lv.5（作品全体の見せ場級）",
              "techniques": "T01 + T31 + T39 + T14 + T67 + T37 + T13"
            }
          ],
          "source": "episodes/ep02-reboot/pages/P03.md",
          "promptSource": "episodes/ep02-reboot/prompts/P03-prompt.md",
          "buildSource": "episodes/ep02-reboot/prompts/build/P03.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\n## Panel 1 (full page, single vertical panel — T01 大ゴマ1枚構成)\n\nScene: A SINGLE full-page panel representing the public euphoria of GMT Earning launch day. Composition in 4 vertical zones without sub-panel borders:\n\nTOP ZONE (top 25%): GIANT brush-stroke calligraphy 「ついに来た」 (T31) in stark black ink, vertical orientation, positioned along the LEFT edge of the panel. This is the ONLY brush text on this page.\n\nCENTER-UPPER ZONE (35%): A stylized announcement banner occupying the center. Banner text in large bold fonts (T39):\n- Main line: \"GMT EARNING IS LIVE\" (large English bold)\n- Date: \"2022.09.28\" (slightly smaller)\nThe banner is surrounded by radiant burst effects (without cyan — use white/grey lines). Surrounding the banner: MULTIPLE floating speech bubbles (no speaker labels, just text, scattered around):\n- 「歩くだけで稼げる」\n- 「465時間？ ジェムさえあれば」\n- 「Comfort 100で日給2,500円」\n- 「月7万円いける」\n- 「副業超え！」\n\nCENTER-LOWER/BOTTOM-RIGHT ZONE (20%): Close-up of a smartphone screen tilted at 10-15 degrees (T13). A note-blog-style article is displayed with realistic UI. In-screen text (Japanese, rendered as blog content):\n「Comfort 100 / Common Runner / 5エナジー(25分)」\n「Reward: +14.36 GMT」\n「当時GMT価格 約90円 → 約1,290円/25分」\n「——実証データ、来た」\nA faint cyan glow at the screen edge (T12 narrow use).\n\nBOTTOM-LEFT ZONE (20%): A CROWD of celebrating figures — all rendered as SILHOUETTES (T14). Arms raised, smartphones held aloft, diverse dynamic poses (jumping, fist-pumping). CRITICAL: NO facial features on any crowd member.\n\nLarge white-outlined onomatopoeia across the bottom of the panel (T37 擬音構図化): 「ワアアァァッ……」 integrated as structural element, not just overlay.\n\nDensity Lv.5 — every element rendered with precision: brush weight, banner typography, note UI authenticity, crowd silhouette variety, onomatopoeia integration. This is the page-level climax and the return of the festival.\n\nMood: The moment the quiet market explodes back into life. September 28, 2022, 'GMT EARNING IS LIVE' — the promise that the 465-hour grind could be skipped with gems. Pure euphoria. The festival has returned.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT include Shouichi or any main character in this page — this is an ABSTRACT CONCEPT page representing the public explosion of excitement\n- Do NOT render individual faces on the crowd — silhouettes ONLY (T14)\n- Do NOT use brush calligraphy except for the single 「ついに来た」 at the top of the panel\n- Do NOT use cyan outside of faint smartphone screen glow in the note-blog panel\n- Do NOT include real STEPN brand logos verbatim — use abstract 'similar-looking' branding"
        },
        {
          "id": "P04",
          "title": "翔一の決意",
          "purpose": "★翔一の決意 — 観察者→参加者への転換、「俺は、ジェム側の人間だ」",
          "density": "Lv.3-3-3-5（田の字崩しで左下climax）",
          "status": "確定",
          "pattern": "P15-sym-grid-break（田の字を崩す4コマ、左下を拡大）",
          "techniques": "T52（階段ロードマップ）+T27（「俺は○○側」構文）+T41（眼鏡反射白光）+T67（スマホ画面）",
          "flow": "右上（ジェムチャート）→ 左上（note実証記事）→ 右下（翔一の計算ノート）→ 左下・大（翔一ドヤ顔着地）",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "右上・中コマ、画面幅50% × 高さ35%",
              "composition": "スマホ画面（10-15度傾け、T13）、Ruby Gem Lv4 のチャート。階段状に上昇（T52階段ロードマップ）。「80,000 → 140,000 → 210,000 JPY」の3段階",
              "expression": "顔なし、画面のみ",
              "dialogue": "画面「Ruby Gem (Lv4) / 7d +163%」、モノローグ「……階段は、もう3段。」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "左上・中コマ、画面幅50% × 高さ35%",
              "composition": "note風ブログ画面、実証データ詳細「Comfort 100 / Common Runner / Reward: +14.36 GMT」「月7万円達成」",
              "expression": "顔なし",
              "dialogue": "画面ブログ「月7万円達成」「Comfort依存で継続安定」／モノローグ「……本物、だな。」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "右下・小コマ、画面幅35% × 高さ30%",
              "composition": "翔一の手元、紙ノート、計算式「靴1足=5万 × 日給2,500 = 20日で回収」「3足で月20万可能」の走り書き。ペン、コーヒーカップ",
              "expression": "顔なし、手と計算のみ",
              "dialogue": "モノローグ「……計算が、合う。」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "左下・大コマ、画面幅65% × 高さ30%、田の字崩し拡大",
              "composition": "翔一の顔クローズアップ（バストアップよりやや近い）。自信満々モード — 歯を見せた笑み、眼鏡が白く光る（T41眼鏡反射）、肩が少し引ける。秋の公園の背景、コーギーが傍らに",
              "expression": "自信満々モード + シニカル（ドヤ顔、ただし警告/暗さなし、ワクワク＋いかがわしい のトーン）",
              "dialogue": "モノローグ（大きめ、手書き風）「——俺は、」「ジェム側の人間だ。」／小さく「日給2,500円？ ……走るか。」",
              "sfx": "",
              "density": "Lv.5（climax、感情の解放）",
              "techniques": "T27（「俺は○○側」構文）+ T41"
            }
          ],
          "source": "episodes/ep02-reboot/pages/P04.md",
          "promptSource": "episodes/ep02-reboot/prompts/P04-prompt.md",
          "buildSource": "episodes/ep02-reboot/prompts/build/P04.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nBust shot front. Teeth-showing confident grin with a shrewd undertone. Glasses lenses glinting with a soft highlight (NOT a star-shaped flash, NOT rays).\n\n## Panel 1 (top-right, 50% width, 35% height — first reading position)\n\nScene: Smartphone screen close-up at 10-15 degree tilt (T13). The screen shows a Ruby Gem (Lv4) price chart with STAIRCASE-pattern ascent (T52 階段ロードマップ). Three clear steps visible: \"80,000 → 140,000 → 210,000 JPY\". In-screen text: \"Ruby Gem (Lv4) / 7d +163%\".\n\nNo face.\n\nMonologue (handwriting caption): 「……階段は、もう3段。」\n\nDensity Lv.3 — careful chart UI, clean staircase rendering.\n\n## Panel 2 (top-left, 50% width, 35% height — second reading position)\n\nScene: A note-blog style article page on a screen. Clean blog UI with a headline area and body text. In-screen text (Japanese, rendered as blog content):\n「Comfort 100 / Common Runner / Reward: +14.36 GMT」\n「月7万円達成」\n「Comfort依存で継続安定」\n\nNo face. A faint screen glow (minimal cyan if any).\n\nMonologue (handwriting caption): 「……本物、だな。」\n\nDensity Lv.3 — blog UI precision, focus on text.\n\n## Panel 3 (bottom-right, 35% width, 30% height — evidence tallying)\n\nScene: A paper notebook lying on a desk, Shouichi's hand visible holding a pen (face NOT visible). Handwritten calculation in Japanese:\n「靴1足=5万 × 日給2,500 = 20日で回収」\n「3足で月20万可能」\nA coffee cup beside the notebook.\n\nMonologue (handwriting caption): 「……計算が、合う。」\n\nDensity Lv.3 — careful handwriting rendering, loose desk-detail background.\n\n## Panel 4 (bottom-left, 65% width, 30% height — THE GRID-BREAK, emotional landing)\n\nScene: Close-up of Shouichi's face (fuller than bust shot). He is now BACK IN THE PARK, standing up from the bench. Autumn afternoon light. Expression: CONFIDENT MODE — teeth-showing shrewd grin, glasses lenses catching a bright WHITE HIGHLIGHT (T41 confident eyeglass-highlight — NOT star-shaped, NOT flash rays, just a clean bright highlight). Shoulders slightly back.\n\nThe Pembroke Welsh Corgi (white and brown, NOT cyan) visible at his knees, looking up.\n\nCRITICAL: The smile is MISCHIEVOUS-EXCITED (ワクワク＋いかがわしい), NOT mean/smug/warning-tone.\n\nMonologue (handwriting caption, larger font, NOT in speech bubbles, positioned around the figure):\n- 「——俺は、」 (upper-right area)\n- 「ジェム側の人間だ。」 (center-right, larger font)\n- 「日給2,500円？ ……走るか。」 (smaller, lower-left)\n\nDensity Lv.5 — maximum face detail, precise glasses-highlight rendering, autumn park lighting, corgi fur detail, screentone gradient on the confident grin.\n\nMood: The observer becomes a participant. Not reckless — calculated. A man reading the math, confirming the ladder is real, and deciding to climb. Mischievous confidence without warning tone.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render the confident smile as mean-spirited or warning — this is 'excited-shrewd' (ワクワク＋いかがわしい)\n- Do NOT use cyan except for faint smartphone screen glow\n- Do NOT use brush calligraphy (limit used in P03)\n- Do NOT render revelation mode or flame eyes\n- Do NOT write '全ツ' or '雀鬼' — retired terms"
        }
      ],
      "pageCount": 4,
      "promptCount": 4,
      "title": "EP02-REBOOT: Comfort党登場（2022年9月28日）",
      "summary": "2022年8月の崩壊から1ヶ月半、市場は沈黙したまま秋に入った。だがSNSに「#Comfort党」 という新しい風が吹き始める。9月28日、STEPNがGMTアーニングを実装。たった1日歩いて+14.36 GMT（約1,290円）の実証データが共有される。 「ジェムさえあれば、465時間もかからない」 —— 翔一は観察者から参加検討者へ変わる瞬間を4ページで描く。",
      "status": "企画完成・ページ設計開始",
      "kind": "短編",
      "postUnit": "X 4枚組×1 の4ページ構成（短編=4の倍数）",
      "source": "episodes/ep02-reboot/episode-design.md"
    },
    {
      "id": "EP02",
      "slug": "ep02",
      "label": "EP02",
      "reboot": false,
      "pages": [
        {
          "id": "P01",
          "title": "暴落後の虚脱感",
          "purpose": "暴落後の虚脱感 → GMTアーニング発表の衝撃（光が差す）",
          "density": "",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段40% — 大コマ",
              "composition": "引きの全景。夕方の住宅街、翔一（散歩カジュアルモード）がコーギーと散歩中。スマホを片手に。",
              "expression": "疲れた苦笑い。覇気のない歩き方。",
              "dialogue": "「GSTの日収、全盛期の1/10以下か……」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段30%",
              "composition": "スマホ画面クローズアップ（10-15度傾け）。STEPNアプリのGST earning画面。寂しい数字。",
              "expression": "なし（スマホ画面のみ）",
              "dialogue": "テキスト「Today: +3.2 GST」（全盛期の+25 GSTからの激減を視覚化）",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "下段30% — ページ引き",
              "composition": "分割構成——スマホ画面に表示された公式発表テキスト＋インセットで翔一の目のクローズアップ。",
              "expression": "目が見開く。驚き→好奇心。瞳にスマホ画面の光が映る。",
              "dialogue": "スマホ画面テキスト「STEPN: GMTアーニング実装計画を発表」「\"片輪走行だったエコシステムが完成形に近づく\"」。翔一の吹き出し「……GMT？」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep02/pages/P01.md",
          "promptSource": "episodes/ep02/prompts/P01-prompt.md",
          "buildSource": "episodes/ep02/prompts/build/P01.txt",
          "promptText": "# Nano Banana プロンプト — EP02 P01\n\n## メタ情報\n- ページID: P01\n- エピソードID: EP02\n- 変換元: pages/P01.md（Pass 1）\n- 生成試行番号: 1\n\n---\n\n## プロンプト本文\n\n```\nVertical single-page manga layout, portrait orientation, taller than wide. Aspect ratio: portrait page (vertical manga page, NOT landscape, NOT 2x2 grid). All panels stacked top-to-bottom. Japanese manga reading direction: right-to-left, top-to-bottom.\n\nBlack-and-white manga art with a distinctive contrast style — loose confident sketchy lines for setup panels, explosive detailed precision for climax panels (Togashi hybrid method). Grey screentone shading. Single accent color: cyan (#00BCD4) ONLY for Kuro-chan's robot elements and smartphone screen glow. No other colors. Smartphone screens drawn at 10-15 degree tilt, never flat.\n\nJapanese manga page, 3 panels stacked vertically (top to bottom).\nKeep character identity consistent with reference image.\n\nPanel 1 (top, large — 40% of page height): Wide establishing shot of a quiet residential street at dusk. A 42-year-old Japanese man with rectangular black-framed glasses, short slightly messy black hair with grey mixed in, wearing T-shirt, light jacket, jeans, sneakers, walking a Pembroke corgi on leash. Wry smile, tired posture, low energy. Generous negative space conveying emptiness. Loose sketchy lines.\n「GSTの日収、全盛期の1/10以下か……」\n\nPanel 2 (middle — 30% of page height): Close-up of smartphone screen at 10-15 degree tilt. STEPN app earning screen. Clean UI rendering with status bar. Cyan (#00BCD4) smartphone screen glow.\n「Today: +3.2 GST」\n\nPanel 3 (bottom — 30% of page height): Split composition. Smartphone screen showing announcement text, AND a small inset close-up of the man's eyes — surprised, wide eyes with curiosity, smartphone light reflected in pupils. Tight composition.\nスマホ画面「STEPN: GMTアーニング実装計画を発表」\n「\"片輪走行だったエコシステムが完成形に近づく\"」\n「……GMT？」\n\nMood: Quiet melancholy and weariness transitioning to sudden curiosity. Weariness, NOT despair.\n\nDo not change: face shape, hairstyle, costume details, character age impression.\nDo not add: extra characters, extra objects, text artifacts.\nDo not render the image as landscape, 2x2 grid, or wide-format. Vertical portrait page only.\nDo not write English labels or annotations inside the panels (no \"CLIMAX\", \"SETUP\", etc.).\nDo not use revelation mode expression (no flames or speedlines in eyes).\nSmartphone screens must be drawn at 10-15 degree tilt, never flat.\nDo not make the overall atmosphere too dark — this is weariness, not despair.\n```\n\n---\n\n## 使用参照画像\n- ref_hero_v1: 翔一の散歩カジュアルモード外見一致確認\n\n## 変換者メモ\n- **漫画文法**: コマ1-2が溜め（虚脱・空虚）→ コマ3がページ引き（光が差す）\n- **読み方向**: 日本漫画は右上→左下、縦スタックなので上→下\n- **密度**: Lv.2 (Panel 1-2), Lv.3 (Panel 3)\n- **Togashi hybrid**: setupはloose sketchy、clmaxはsharper detail\n- 散歩カジュアルモード（T-shirt, light jacket, jeans, sneakers, corgi）の固定プロンプト使用\n- コマ2のGST数値「+3.2 GST」は暴落後の低水準を示す\n- スマホ画面のシアン発光を指定（作画ルール準拠）\n- 「疲れた苦笑い」は wry smile + tired posture に変換。「dead fish eyes」(布団モード)は使用禁止のため回避\n\n---\n\n## 生成結果の記録\n\n### 試行1\n- 結果: [未実施]\n- メモ:"
        },
        {
          "id": "P02",
          "title": "GSTの構造的欠陥（無限発行）",
          "purpose": "GSTの構造的欠陥（無限発行）→ GMTの革命性（発行上限＝ガバナンストークン）→「ついに上限のあるコインを歩いて稼げる」",
          "density": "",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段30%",
              "composition": "概念図・インフォグラフィック風。蛇口からGSTコインが無限に溢れ出ているビジュアル。下向きの価格グラフが背景に。翔一のシルエットが小さく蛇口の前に立っている。",
              "expression": "なし（概念図中心。翔一は小さいシルエット）",
              "dialogue": "「GSTは無限発行…… 稼いでも稼いでも価値が溶けていく」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段40% — 見せ場",
              "composition": "大文字テキスト演出。画面を支配する大文字「ガバナンストークン」。背景にGMTのコインと鎖のかかった金庫（＝上限の象徴）のビジュアル。翔一のシルエットが小さく見上げている。",
              "expression": "翔一は見上げて目を見開いている（小さいシルエット）",
              "dialogue": "大文字テキスト「発行枚数の上限がある——」「ガバナンストークン」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "下段右15% — 先に読む",
              "composition": "小コマ。対比テキスト。上下分割で対比を視覚化。",
              "expression": "なし（テキスト中心の対比コマ）",
              "dialogue": "「GST ＝ 蛇口全開 ∞」「GMT ＝ 60億枚で打ち止め」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段左15% — ページの最後・オチ",
              "composition": "顔アップ。翔一（ワクワクモード）。目を輝かせている。眼鏡が光る。",
              "expression": "ワクワク、興奮、期待に満ちた表情",
              "dialogue": "「ついに……上限のあるコインを\"歩いて\"稼げる……！」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep02/pages/P02.md",
          "promptSource": "episodes/ep02/prompts/P02-prompt.md",
          "buildSource": "episodes/ep02/prompts/build/P02.txt",
          "promptText": "# Nano Banana プロンプト — EP02 P02\n\n## メタ情報\n- ページID: P02\n- エピソードID: EP02\n- 変換元: pages/P02.md（Pass 1）\n- 生成試行番号: 1\n\n---\n\n## プロンプト本文\n\n```\nVertical single-page manga layout, portrait orientation, taller than wide. Aspect ratio: portrait page (vertical manga page, NOT landscape, NOT 2x2 grid). Japanese manga reading direction: right-to-left, top-to-bottom.\n\nBlack-and-white manga art with a distinctive contrast style — loose confident sketchy lines for setup panels, explosive detailed precision for climax panels (Togashi hybrid method). Grey screentone shading. Smartphone screens drawn at 10-15 degree tilt, never flat.\n\nJapanese manga page, 4 panels.\nLayout: Panel 1 on top, Panel 2 below Panel 1, then a bottom row with Panel 3 (right side) and Panel 4 (left side). Reading order follows Japanese right-to-left: Panel 1 → Panel 2 → Panel 3 (bottom-right) → Panel 4 (bottom-left). The bottom-left panel is the page ending.\nKeep character identity consistent with reference image.\n\nPanel 1 (top, 30% of page height): Infographic/concept diagram style. A faucet pouring out coins endlessly — coins overflowing and spilling. A downward price graph in the background. A small silhouette of a 42-year-old man standing before the faucet. Loose sketchy lines.\n「GSTは無限発行…… 稼いでも稼いでも価値が溶けていく」\n\nPanel 2 (middle, 40% of page height): Large bold impact text dominating the panel center. A locked vault or safe with heavy chains in the background — symbolizing limited supply. GMT coin visuals around it. A small silhouette of the man looking up in awe. Explosive detailed precision. Tight composition.\n「発行枚数の上限がある——」\n「ガバナンストークン」\n\nPanel 3 (bottom-right, 15% of page height): Small panel. Contrast text with split vertical layout.\n「GST ＝ 蛇口全開 ∞」\n「GMT ＝ 60億枚で打ち止め」\n\nPanel 4 (bottom-left, 15% of page height — page ending): Close-up face shot. A 42-year-old Japanese man with rectangular black-framed glasses, short slightly messy black hair with grey mixed in. Excited expression, eyes sparkling with wonder, eager grin, glasses glinting with white highlight. Thrilled, anticipatory expression.\n「ついに……上限のあるコインを\"歩いて\"稼げる……！」\n\nMood: Problem awareness building to revolutionary excitement. The thrill of discovering a fundamentally different token. Wonder and anticipation, NOT dark, NOT smugness, NOT warning.\n\nDo not change: face shape, hairstyle, costume details, character age impression.\nDo not add: extra characters, extra objects, text artifacts.\nDo not render the image as landscape, 2x2 grid, or wide-format. Vertical portrait page only.\nDo not write English labels or annotations inside the panels (no \"CLIMAX\", \"SETUP\", \"見せ場\", etc.).\nDo not use cyan (#00BCD4) — no smartphone screens in this page.\nDo not use revelation mode expression (no flames or speedlines in eyes).\nDo not draw smug or overconfident expression in Panel 4 — this is excitement and wonder.\nDo not draw deformed or chibi-style faces.\nDo not make Panel 1 dark or foreboding — GST is \"melting away\", not \"despair\".\nDo not draw the face in Panels 1, 2, or 3 — only Panel 4 shows the face.\n```\n\n---\n\n## 使用参照画像\n- ref_hero_v1: 翔一のワクワクモード外見一致確認\n\n## 変換者メモ\n- **漫画文法**: コマ1が問題提起（溜め）→ コマ2が解決策の衝撃（見せ場）→ コマ3が対比（間）→ コマ4が感情の解放\n- **読み方向**: 日本漫画は右上→左下。コマ3（下段右）→コマ4（下段左）の順で読まれる\n- **密度**: Lv.3 (Panel 1), Lv.4 (Panel 2), Lv.2 (Panel 3), Lv.3 (Panel 4)\n- **Togashi hybrid**: 溜めコマはsketchy、見せ場はexplosive precision\n- 固定スタイルプロンプトを冒頭に配置（art-style.md準拠）\n- セリフは全て日本語のままプロンプトに記載（英語翻訳しない）\n- 顔コマはコマ4のみ。コマ1-3は概念図・大文字テキスト・対比で構成\n\n---\n\n## 生成結果の記録\n\n### 試行1\n- 結果: [未実施]\n- メモ:"
        },
        {
          "id": "P03",
          "title": "Comfort覚醒（GMT獲得の鍵）→ GMTの構造美（億の方程式）→「やっぱり運営は天才的だ！",
          "purpose": "Comfort覚醒（GMT獲得の鍵）→ GMTの構造美（億の方程式）→「やっぱり運営は天才的だ！」— EP02最大の見せ場",
          "density": "",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "上段25%",
              "composition": "STEPNアプリのステータス画面風（10-15度傾け）。4つのステータス（Efficiency / Luck / Resilience / Comfort）が並び、Comfort だけが強調表示（光る・拡大・枠線太い等）。他の3つは薄く表示。",
              "expression": "なし（アプリ画面のみ）",
              "dialogue": "「GMT獲得効率を決めるステータスは——Comfort」「あの\"死にステ\"が最重要に昇格——！」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段45% — 最大の見せ場",
              "composition": "大友克洋風スケール表現。巨大な数字が画面を支配し、翔一が小さく圧倒されている。GMTコインのビジュアル要素（コイン、チャート、上昇矢印）が数字と共に浮遊。",
              "expression": "翔一は圧倒されつつも目が輝いている（小さいフィギュア）",
              "dialogue": "大文字テキスト「アクシーの1/30の供給量」「アクシー並みなら—— 600円」「それ以上なら—— 1万円超え」。小文字テキスト「IEOで $0.01 → $4…… ×400倍」「あの男は—— 1億を超えた」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "下段30% — 感情のピーク",
              "composition": "顔アップ。翔一（自信満々モード）。歯を見せた笑み。眼鏡が白く光る。",
              "expression": "興奮、確信、歯を見せた笑み",
              "dialogue": "大文字テキスト「やっぱり運営は天才的だ！」。小文字テキスト「まだSTEPNは死んでないぞ！！」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep02/pages/P03.md",
          "promptSource": "episodes/ep02/prompts/P03-prompt.md",
          "buildSource": "episodes/ep02/prompts/build/P03.txt",
          "promptText": "# Nano Banana プロンプト — EP02 P03\n\n## メタ情報\n- ページID: P03\n- エピソードID: EP02\n- 変換元: pages/P03.md（Pass 1）\n- 生成試行番号: 1\n\n---\n\n## プロンプト本文\n\n```\nVertical single-page manga layout, portrait orientation, taller than wide. Aspect ratio: portrait page (vertical manga page, NOT landscape, NOT 2x2 grid). All panels stacked top-to-bottom. Japanese manga reading direction: right-to-left, top-to-bottom.\n\nBlack-and-white manga art with a distinctive contrast style — loose confident sketchy lines for setup panels, explosive detailed precision for climax panels (Togashi hybrid method). Grey screentone shading. Smartphone screens drawn at 10-15 degree tilt, never flat.\n\nJapanese manga page, 3 panels stacked vertically (top to bottom).\nKeep character identity consistent with reference image.\n\nPanel 1 (top, 25% of page height): STEPN app status screen style at 10-15 degree tilt. Four status parameters listed vertically — \"Efficiency\", \"Luck\", \"Resilience\", \"Comfort\". The first three are dimmed and faded. \"Comfort\" is highlighted, glowing, enlarged, with bold border. No character face — app screen only.\n「GMT獲得効率を決めるステータスは——Comfort」\n「あの\"死にステ\"が最重要に昇格——！」\n\nPanel 2 (middle, 45% of page height): Otomo Katsuhiro-style scale expression — a small 42-year-old man in the frame, dwarfed by astronomical price figures and coin visuals surrounding him. GMT coin imagery, upward arrows, and chart elements floating among the numbers. Multiple layers of bold text at different sizes. Eyes looking up in awe. Explosive detailed precision, maximum density.\n「アクシーの1/30の供給量」\n「アクシー並みなら—— 600円」\n「それ以上なら—— 1万円超え」\n「IEOで $0.01 → $4…… ×400倍」\n「あの男は—— 1億を超えた」\n\nPanel 3 (bottom, 30% of page height): Close-up face shot. The same 42-year-old Japanese man with rectangular black-framed glasses, short slightly messy black hair with grey mixed in. Admiring, convinced expression — eyes bright with trust and excitement, showing teeth in grin, glasses glinting with white highlight. Generous negative space around the face.\n「やっぱり運営は天才的だ！」\n「まだSTEPNは死んでないぞ！！」\n\nMood: Discovery of the key stat building to overwhelming awe at the numbers, releasing into admiration for the creators and conviction that STEPN is alive. Peak energy of the episode. Excitement and wonder — NOT warning, NOT dark.\n\nDo not change: face shape, hairstyle, costume details, character age impression.\nDo not add: extra characters, extra objects, text artifacts.\nDo not render the image as landscape, 2x2 grid, or wide-format. Vertical portrait page only.\nDo not write English labels or annotations inside the panels (no \"CLIMAX\", \"SETUP\", \"見せ場\", etc.).\nDo not use revelation mode expression (no flames or speedlines in eyes).\nDo not use cyan (#00BCD4) for numbers, diagram elements, or app UI.\nDo not make the atmosphere dark or cautionary — this is excitement.\nSmartphone/app screens must be drawn at 10-15 degree tilt, never flat.\nDo not draw the face in Panels 1 or 2 — only Panel 3 shows the face.\n```\n\n---\n\n## 使用参照画像\n- ref_hero_v1: 翔一の自信満々モード外見一致確認\n\n## 変換者メモ\n- **漫画文法**: コマ1が溜め（ステータス発見）→ コマ2が見せ場（数字のスケール爆発）→ コマ3が感情の解放\n- **読み方向**: 縦スタックなので上→下\n- **密度**: Lv.3 (Panel 1), Lv.5 (Panel 2), Lv.4 (Panel 3)\n- **Togashi hybrid**: コマ2は大友克洋風スケール表現＋密度MAX\n- 固定スタイルプロンプトを冒頭に配置（art-style.md準拠）\n- セリフは全て日本語のままプロンプトに記載（英語翻訳しない）\n- コマ1: STEPNアプリUI風のステータス画面（顔なし）\n- コマ2: 大友克洋風「巨大現象の中の個人」スケール表現＋GMTコイン/チャート\n- コマ3: 感情の解放（顔はここだけ）\n\n---\n\n## 生成結果の記録\n\n### 試行1\n- 結果: [未実施]\n- メモ:"
        },
        {
          "id": "P04",
          "title": "465時間の道のり（何が465時間か）",
          "purpose": "465時間の道のり（何が465時間か）→ 実績データ → Lv30後の爆益感（GMT噴出）→「走り出そう」の決意",
          "density": "",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段30%",
              "composition": "インフォグラフィック。「Lv1からLv30への465時間の道のり」を視覚化。右端にLv1の素朴なスニーカー、左端にLv30の輝くスニーカー（日本漫画の読み方向＝右→左に合わせる）。間に階段/ロードマップ/経験値バーのような進行表示。「258 GST」「229 GMT」「465時間」の数字が道の要素として配置される。顔なし。",
              "expression": "なし（インフォグラフィック）",
              "dialogue": "「Lv30までのコスト——」「258 GST ＋ 229 GMT ＋ 465時間」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段25%",
              "composition": "スマホ画面クローズアップ（10-15度傾け）。すわはす氏のブログレポート風画面。Comfort 100/Runner/14.36 GMTの数字がハイライト。顔なし。",
              "expression": "なし（スマホ画面のみ）",
              "dialogue": "「Comfort 100 / Runner / 5エナジー（25分）」「獲得: 14.36 GMT」「\"ヤバイ。想像以上\"」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中下段35% — 最大の見せ場 ★",
              "composition": "Lv30到達後の爆益感を爆発的に視覚化。中央に光り輝くLv30スニーカー、周囲にGMTコインが噴水のように噴き出す。背景にチャートの急上昇線、上昇矢印、キラキラエフェクト。顔なし、STEPN固有の爆益ビジュアルで画面を埋める。密度Lv.4。",
              "expression": "なし（爆益ビジュアル）",
              "dialogue": "大文字テキスト「465時間後——」「GMTが降ってくる」。小文字テキスト「1日14 GMT × 30日 = 420 GMT」「月4-5万円超の爆益」",
              "sfx": "なし（視覚効果で爆発感を出す）",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段10%",
              "composition": "小コマ。顔アップ（翔一、ワクワクモード）。眼鏡が光る。画面右端または背景に走り出そうとする足元（ランニングシューズ）のインセット。全体として「走り出す前の一瞬」を表現。",
              "expression": "ワクワク、確信、走り出す勢い",
              "dialogue": "大文字「枚数限定のガバナンストークンなんて企業の株みたいなもんじゃないか！！」。小文字「走り出そう——」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep02/pages/P04.md",
          "promptSource": "episodes/ep02/prompts/P04-prompt.md",
          "buildSource": "episodes/ep02/prompts/build/P04.txt",
          "promptText": "# Nano Banana プロンプト — EP02 P04\n\n## メタ情報\n- ページID: P04\n- エピソードID: EP02\n- 変換元: pages/P04.md（Pass 1）\n- 生成試行番号: 1\n\n---\n\n## プロンプト本文\n\n```\nVertical single-page manga layout, portrait orientation, taller than wide. Aspect ratio: portrait page (vertical manga page, NOT landscape, NOT 2x2 grid). All panels stacked top-to-bottom. Japanese manga reading direction: right-to-left, top-to-bottom.\n\nBlack-and-white manga art with a distinctive contrast style — loose confident sketchy lines for setup panels, explosive detailed precision for climax panels (Togashi hybrid method). Grey screentone shading. Single accent color: cyan (#00BCD4) ONLY for Kuro-chan's robot elements and smartphone screen glow. No other colors. Smartphone screens drawn at 10-15 degree tilt, never flat.\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nKeep character identity consistent with reference image.\n\nPanel 1 (top, 30% of page height): Infographic showing the 465-hour journey from Lv1 to Lv30. Right side of the panel: a simple Lv1 sneaker. Left side of the panel: a shining Lv30 sneaker with sparkles (because Japanese manga reads right-to-left, the progression goes from right to left). Between them: a staircase or roadmap showing progression. Numbers placed as milestones along the path. No character face. Loose sketchy lines.\n「Lv30までのコスト——」\n「258 GST ＋ 229 GMT ＋ 465時間」\n\nPanel 2 (middle, 25% of page height): Close-up of smartphone screen at 10-15 degree tilt. Blog report displayed on screen with earning data highlighted. No character face — smartphone screen only. Cyan (#00BCD4) smartphone screen glow.\n「Comfort 100 / Runner / 5エナジー（25分）」\n「獲得: 14.36 GMT」\n「\"ヤバイ。想像以上\"」\n\nPanel 3 (middle-bottom, 35% of page height): A brilliantly shining Lv30 sneaker at the center with sparkle effects. GMT coins erupting out of the sneaker like a fountain — coins flying in all directions. Background: upward-rising chart line, upward arrows, radiant light rays. Explosive detailed precision filling the panel. No character face. Tight composition.\n「465時間後——」\n「GMTが降ってくる」\n「1日14 GMT × 30日 = 420 GMT」\n「月4-5万円超の爆益」\n\nPanel 4 (bottom, 10% of page height — page ending): Close-up face of the 42-year-old Japanese man with rectangular black-framed glasses, short slightly messy black hair with grey mixed in. Excited, convinced expression — eyes sparkling, showing teeth in eager grin, glasses glinting with white highlight. Small inset at the left edge of the panel: running feet/sneakers ready to take off.\n「枚数限定のガバナンストークンなんて企業の株みたいなもんじゃないか！！」\n「走り出そう——」\n\nMood: Clarifying the path, showing evidence, exploding into massive profit potential, releasing into forward-running determination. Positive, exciting, forward-momentum energy — NOT reckless, NOT dark, NOT cautionary.\n\nDo not change: face shape, hairstyle, costume details, character age impression.\nDo not add: extra characters, extra objects, text artifacts.\nDo not render the image as landscape, 2x2 grid, or wide-format. Vertical portrait page only.\nDo not write English labels or annotations inside the panels (no \"CLIMAX\", \"SETUP\", \"見せ場\", etc.).\nDo not use revelation mode expression (no flames or speedlines in eyes).\nSmartphone screens must be drawn at 10-15 degree tilt, never flat.\nDo not draw the face in Panels 1, 2, or 3 — only Panel 4 shows the face.\nDo not frame this as foolish, negative, or warning — this is exciting profit discovery.\nDo not draw deformed or chibi-style faces.\nDo not make Panel 3 dark or cautionary — it is celebratory profit explosion.\n```\n\n---\n\n## 使用参照画像\n- ref_hero_v1: 翔一のワクワクモード外見一致確認\n\n## 変換者メモ\n- **漫画文法**: コマ1-2が溜め（道のり＋実績）→ コマ3が見せ場（爆益）→ コマ4が感情の解放（決意＋走り出し）\n- **読み方向**: 縦スタック。コマ1内のLv1→Lv30は右→左に配置（日本漫画の読み方向）\n- **密度**: Lv.3 (Panel 1), Lv.2 (Panel 2), Lv.4 (Panel 3), Lv.3 (Panel 4)\n- **Togashi hybrid**: コマ3が爆発的精密描写のクライマックス\n- 顔コマはコマ4のみ。コマ1-3は顔なしでSTEPN固有ビジュアルに集中\n- コマ1: 「465時間=Lv1→Lv30の道のり」を視覚化。スニーカー進化のロードマップ\n- コマ3: 爆益感の視覚的爆発。光輝くLv30スニーカー+GMTコイン噴水+チャート急上昇\n- コマ4: 顔1回+走り出す足元のインセット\n\n---\n\n## 生成結果の記録\n\n### 試行1\n- 結果: [未実施]\n- メモ:"
        }
      ],
      "pageCount": 4,
      "promptCount": 4,
      "title": "EP02: GMT編",
      "summary": "2022年8月、STEPN暴落後の低迷期にGMTアーニング計画が発表される。無限発行のGSTが価値を失った世界で、ついに発行上限のある「ガバナンストークン」GMTを歩いて稼げるようになる——その革命性、Comfort覚醒、固定供給量60億＋半減期による「億り人」の方程式、そしてLv30への465時間を描く。",
      "status": "下書き",
      "kind": "",
      "postUnit": "",
      "source": "episodes/ep02/episode-design.md"
    },
    {
      "id": "EP03-REBOOT",
      "slug": "ep03-reboot",
      "label": "EP03★REBOOT",
      "reboot": true,
      "pages": [
        {
          "id": "P01",
          "title": "朝ラン成功・+14.36 GMTの達成感（EP02-REBOOT「ジェム側」の実行回収）",
          "purpose": "朝ラン成功・+14.36 GMTの達成感（EP02-REBOOT「ジェム側」の実行回収）",
          "density": "Lv.4（上大ゴマclimax）+ Lv.2-3（下段3小）",
          "status": "確定",
          "pattern": "P09-top-big-three-small",
          "techniques": "T53（スニーカー噴水・変形）+T13（スマホ傾け）+T26（ワクワクトーン）+T50（後ろ姿+スマホ光）",
          "flow": "右上（朝ランの翔一全身）→ 下段右（スマホ+14.36GMT）→ 下段中（換金画面）→ 左下（笑顔バストアップ）。全体として右上→左下に着地",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段・大ゴマ、55%",
              "composition": "早朝5時の公園を走る翔一全身。スーツ姿ではなくジョギングウェア（スポーツカジュアル）、スマホアームバンド（シアン光）、頭にバイザー。爽やかな朝霧、桜（秋なので紅葉）、息が白い",
              "expression": "前方を見る、口を少し開け呼吸、目に光の反射、ワクワクの芽生え",
              "dialogue": "モノローグ「朝5時の空気が、こんなに澄んでるのは──」「12年、知らなかった。」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "下段右・小、35%",
              "composition": "スマホ画面（10-15度傾け、シアン光）、STEPNアプリ「+14.36 GMT 獲得」カウンター",
              "expression": "顔なし",
              "dialogue": "画面「REWARD: +14.36 GMT」、モノローグ「……来た。」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "下段中・小、30%",
              "composition": "スマホ画面（10-15度傾け）、換金「1,290円」表示",
              "expression": "顔なし",
              "dialogue": "画面「1,290円 着金」、モノローグ「25分で……」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段左・小、35%・感情ピーク",
              "composition": "翔一の顔クローズアップ、朝日の逆光、ジョギングウェア、口角が上がる",
              "expression": "自信満々モードの芽、シニカルでも天啓でもない純粋なワクワク",
              "dialogue": "モノローグ「……ジェム側、だったな。」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03-reboot/pages/P01.md",
          "promptSource": "episodes/ep03-reboot/prompts/P01-prompt.md",
          "buildSource": "episodes/ep03-reboot/prompts/build/P01.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels.\nLayout: Panel 1 on top, Panel 2 below, then bottom row splits into Panel 3 (right side, read first) and Panel 4 (left side, read last — page ending).\nReading order: Panel 1 → 2 → 3 (bottom-right) → 4 (bottom-left).\nBottom-left panel is the page ending — place the emotional payoff there.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nT-shirt, light jacket, jeans, sneakers. Walking a Pembroke corgi on leash. Outdoor suburban path.\nBust shot front. Teeth-showing confident grin with a shrewd undertone. Glasses lenses glinting with a soft highlight (NOT a star-shaped flash, NOT rays).\n\n## Panel 1 (top 55%, establishing climax)\n\nScene: Early-dawn park. Shouichi is running (full body shot), wearing plain jogging gear — track pants, T-shirt, light windbreaker. Armband on upper arm holding smartphone (cyan screen glow visible). Autumn atmosphere: colored leaves, slight morning mist, white breath visible. His RECTANGULAR black-framed glasses intact. Running posture natural, not athletic-poster.\n\nExpression: mouth slightly open catching breath, eyes forward with faint light reflection, the dawn of excitement.\n\nMonologue (handwriting captions): 「朝5時の空気が、こんなに澄んでるのは──」「12年、知らなかった。」\n\nDensity Lv.4 — careful dawn lighting, autumn foliage, breath mist, smartphone armband detail.\n\n## Panel 2 (bottom-right, 35% width, 45% height)\n\nScene: Close-up of smartphone screen tilted 10-15 degrees (T13). STEPN-style app UI showing \"REWARD: +14.36 GMT\" with cyan counter glow.\n\nNo face.\n\nMonologue caption: 「……来た。」\n\nIn-screen text: \"REWARD: +14.36 GMT\"\n\nDensity Lv.3 — careful UI rendering.\n\n## Panel 3 (bottom-center, 30% width, 45% height)\n\nScene: Smartphone screen, different view — swap/conversion screen showing \"1,290円 着金\" in Japanese. Faint cyan glow.\n\nNo face.\n\nMonologue caption: 「25分で……」\n\nIn-screen text: 「1,290円 着金」\n\nDensity Lv.3 — UI focused.\n\n## Panel 4 (bottom-left, 35% width, 45% height — emotional landing)\n\nScene: Close-up of Shouichi's face (bust-plus), morning sunrise backlight. Jogging gear. Corner of mouth raises in a mischievous-confident grin, glasses lenses catching dawn light with clean highlight. The expression is EXCITED-SHREWD (ワクワク＋いかがわしい), NOT warning.\n\nMonologue caption (handwriting, slightly larger): 「……ジェム側、だったな。」\n\nDensity Lv.4 — detailed face rendering, precise dawn lighting, glasses reflection.\n\nMood: The participant's sunrise. Not rebellious — just awake. The first 14.36 GMT. 25 minutes. 1,290 yen. Small but real. Pure excitement-plus-suspicious.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render dead-fish eyes or revelation mode — this is calm excitement\n- Do NOT use brush calligraphy (P03 reserves 「ついに」, P04 「60%」, P07 「賭け」)\n- Do NOT render the running attire as overly athletic — ordinary jogging gear"
        },
        {
          "id": "P02",
          "title": "Ruby Gem価格の階段状高騰、「庶民は締め出された」の気付き",
          "purpose": "Ruby Gem価格の階段状高騰、「庶民は締め出された」の気付き",
          "density": "Lv.2-4-3-5",
          "status": "",
          "pattern": "P15-sym-grid-break",
          "techniques": "T52（階段ロードマップ）+T14（群衆シルエット）+T67（スマホ画面）",
          "flow": "右上（SNSツイート）→ 左上（Ruby Gem階段チャート）→ 右下（パリチャレ結果）→ 左下・大（翔一のシニカル笑み）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "右上・中、50%",
              "composition": "SNSタイムライン「#Comfort党」の洪水スクロール。「Lv4 もう高すぎ」「今から入る人、無理」「#庶民締出し」の声",
              "expression": "顔なし。群衆のざわめきだけで不安を出す",
              "dialogue": "SNS吹き出し群「Ruby Gem 2日で2倍」「庶民、終わった」",
              "sfx": "",
              "density": "Lv.2（顔なし、投稿文字の余白で温度差を出す）",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "左上・中、50%・climax",
              "composition": "スマホ画面（10-15度傾け）、Ruby Gem Lv4 チャート4段階階段「80,000→140,000→210,000→320,000 JPY」+212%、グラフが画面支配",
              "expression": "顔なし。階段チャートの圧で価格高騰の焦りを出す",
              "dialogue": "画面「Ruby Gem (Lv4) — 7d +212%」「80,000 → 140,000 → 210,000 → 320,000」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "右下・小、35%",
              "composition": "画面縦二分割、左「Lv5→Lv6 パリチャレ全滅」右「1勝した」、動画サムネ風",
              "expression": "顔なし。成功と失敗の落差だけで射幸心を出す",
              "dialogue": "画面「Lv5→Lv6：確率20%」「3個全消失 ×10回」／右「1勝した。もう戻れない」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "左下・大、65%・田の字崩し着地",
              "composition": "翔一バストアップ、口元に手、眼鏡が秋のオレンジ照明でキラリ反射。シニカルなドヤ顔",
              "expression": "優越感のある半笑い。ただし天啓モードではなく、目は冷静",
              "dialogue": "モノローグ「俺は──底値で掴んだ側だ。」「庶民諸君、お疲れ様。」",
              "sfx": "",
              "density": "Lv.5",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03-reboot/pages/P02.md",
          "promptSource": "episodes/ep03-reboot/prompts/P02-prompt.md",
          "buildSource": "episodes/ep03-reboot/prompts/build/P02.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nBust shot. Corner of mouth raised, eyes narrowed with amused realization. Left hand lightly touching mouth. Glasses reflecting a calm soft light.\n\n## Panel 1 (top-right, 50% width, 25% height)\n\nScene: Smartphone screen (10-15 degree tilt, T13) showing a Twitter/X timeline flood. Multiple anonymous posts (silhouette avatars only, T14) discussing #Comfort党.\n\nIn-screen post bubbles: 「#Comfort党」「Ruby Gem 2日で2倍」「Lv4 もう高すぎ」「今から入る人、無理」「#庶民締出し」「庶民、終わった」\n\nDensity Lv.3 — SNS UI focused.\n\n## Panel 2 (top-left, 50% width, 30% height — climax in the upper row)\n\nScene: Smartphone screen close-up (10-15 tilt). A Ruby Gem (Lv4) price chart in STAIRCASE PATTERN (T52) dominating the panel. 4 clear steps visible:\n\"80,000 → 140,000 → 210,000 → 320,000 JPY\"\nHeader: \"Ruby Gem (Lv4) — 7d +212%\"\n\nStaircase rendered with bold step-by-step visualization, chart axes clear.\n\nDensity Lv.4 — careful chart/UI rendering, staircase prominence.\n\n## Panel 3 (bottom-right, 35% width, 25% height)\n\nScene: Smartphone screen split vertically. LEFT: video thumbnail of \"Lv5→Lv6 パリチャレ\" gem-smashing failure (no face, only gems). RIGHT: a single success thumbnail.\n\nIn-screen text:\n- Left: 「Lv5→Lv6：確率20%」「3個全消失 ×10回」\n- Right: 「1勝した。もう戻れない」\n\nDensity Lv.3 — dual-panel UI.\n\n## Panel 4 (bottom-left, 65% width, 20% height — grid-break, emotional landing)\n\nScene: Bust shot of Shouichi. Left hand lightly at his mouth (contemplative confidence). Glasses catch an orange autumn-lighting REFLECTION (T41) — a clean soft glint (NOT star-flash, NOT rays). Shrewd-smile-deep mode.\n\nExpression: excited-shrewd, the \"I got in early\" smile. NOT mean-spirited.\n\nMonologue captions (handwriting, positioned around the head):\n「俺は──底値で掴んだ側だ。」\n「庶民諸君、お疲れ様。」\n\nDensity Lv.5 — maximum face/glasses detail, orange autumn light rendering.\n\nMood: Watching the staircase climb past where the crowd could follow. The early riser tallies his advantage. Confidence tipping into the shrewd-smile that's one step before tragedy.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render Shouichi's smile as mean — it is excited-shrewd, NOT warning\n- Do NOT use brush calligraphy (reserved for P03/P04/P07)\n- Do NOT include actual SNS person names/avatars"
        },
        {
          "id": "P03",
          "title": "10/12 虹スニーカー実装バナー「RAINBOW SNEAKER",
          "purpose": "★10/12 虹スニーカー実装バナー「RAINBOW SNEAKER — LIVE」、毛筆特大「ついに」",
          "density": "Lv.5（1ページ=1コマ級）+ Lv.2（日付帯の余白）",
          "status": "",
          "pattern": "P14-explosion-radial（爆発放射型）",
          "techniques": "T31（毛筆「ついに」）+T39（大文字インパクト）+T20（神格化粒子）+T67（UI画面）",
          "flow": "右上（毛筆「ついに」）→ 中央大ゴマ（バナー+虹靴シルエット）→ 左下（日付キャプション）。右上→左下の斜め落下で読む",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "全面・大ゴマ、画面幅100% × 高さ90%",
              "composition": "中央に「RAINBOW SNEAKER — LIVE」の大バナー（赤フレーム、公式ロゴ風）、背後に巨大な虹スニーカーのシルエット（モノクロ、光輪つき、神格化 T20）。画面左上に毛筆特大「ついに」（T31、縦書き）。周囲にシアンではなく光の粒子が放射状に飛散。下部にフッター「2022.10.12」のキャプション",
              "expression": "キャラ登場なし",
              "dialogue": "毛筆特大「ついに」／バナー「RAINBOW SNEAKER — LIVE / 2022.10.12」／下フッター「新時代、到来」",
              "sfx": "",
              "density": "Lv.5（climax）",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "下・小、10%・キャプション帯",
              "composition": "横長帯、日付キャプション「——2022年10月12日」",
              "expression": "顔なし。日付だけで場面転換の冷たさを置く",
              "dialogue": "キャプション「——2022年10月12日」",
              "sfx": "",
              "density": "Lv.2",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03-reboot/pages/P03.md",
          "promptSource": "episodes/ep03-reboot/prompts/P03-prompt.md",
          "buildSource": "episodes/ep03-reboot/prompts/build/P03.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\n## Panel 1 (full page main panel, 90% height — climax)\n\nScene: A dramatic announcement panel dominating the page.\n\nCENTER: A large banner rendered in a STEPN-like style (abstract, not verbatim brand logos). Banner text:\n\"RAINBOW SNEAKER — LIVE\"\n\"2022.10.12\"\nThe banner has a red frame, glowing edges, official-announcement aesthetic.\n\nBEHIND the banner: a GIANT silhouette of a rainbow sneaker — rendered in MONOCHROME greyscale with a HALO above it (T20 deification). The silhouette carries sacred iconography — light particles radiate outward in a burst pattern (particles are neutral white/grey, NOT cyan).\n\nUPPER-LEFT corner: GIANT brush-stroke calligraphy 「ついに」 in stark black ink, vertical orientation (T31 — this is the 1st of 3 brush uses in EP03-REBOOT).\n\nBOTTOM edge of the panel: Small caption bar \"——新時代、到来\"\n\nDensity Lv.5 — maximum detail: banner typography, sacred halo rendering, particle burst precision, brush weight. The ascended-object-before-revelation energy.\n\n## Panel 2 (bottom strip, 10% height)\n\nScene: Horizontal thin strip, white background, single black caption text centered:\n「——2022年10月12日」\n\nNo characters. No background detail. Pure time-marker.\n\nDensity Lv.3 — clean typographic strip.\n\nMood: The moment a new promise drops. Rainbow sneakers go live. The crowd doesn't yet know what 60% means. For now: pure anticipation, deified hype. 'At last.'\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT include main characters in this page — this is the announcement banner page\n- Do NOT render individual faces on any crowd (if crowd present, silhouettes only)\n- Do NOT use brush calligraphy except for the single 「ついに」\n- Do NOT use cyan extensively (the radiating particles are neutral white/grey, NOT cyan)"
        },
        {
          "id": "P04",
          "title": "60%プール発表の衝撃、表情グリッド+円グラフ+毛筆「60%」",
          "purpose": "★60%プール発表の衝撃、表情グリッド+円グラフ+毛筆「60%」",
          "density": "Lv.5（中央大）+ Lv.3-4（周囲）",
          "status": "",
          "pattern": "P04-pointing-radial（指差し放射、中央大+周囲リアクション）",
          "techniques": "T55（円グラフ60/40）+T04（表情グリッド3×2）+T31（毛筆「60%」）+T39（大文字）",
          "flow": "右上（「2022.10.12 実装から14日後」）→ 中央大（円グラフ+虹靴）→ 周囲（翔一6表情）→ 左下（価格UI）",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "右上・細長、15%",
              "composition": "黒背景に白抜き「2022.10.12」の大文字、注記「GMT アーニング実装から 14 日後」",
              "expression": "",
              "dialogue": "大文字「2022.10.12」／注記「GMT アーニング実装から 14 日後」",
              "sfx": "",
              "density": "Lv.2",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中央・大ゴマ、55%・climax",
              "composition": "画面支配する巨大円グラフ：右60%虹色プリズム / 左40%モノクロ。中央に浮遊する虹スニーカー。背景に毛筆特大「60%」（T31、2個目、縦書き画面右側）。右下に翔一の後ろ姿（極小、見上げる姿勢）",
              "expression": "",
              "dialogue": "円グラフラベル「60% → 虹プール」「40% → 通常靴」／毛筆「60%」／翔一モノローグ小「……え？」",
              "sfx": "",
              "density": "Lv.5（climax）",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "上左・表情グリッド、15%",
              "composition": "翔一の表情グリッド3×1（T04変形）、3コマ連続で表情変化：①衝撃顔 ②茫然 ③困惑",
              "expression": "",
              "dialogue": "①「2週間前に……」②「走り出したばっかりだぞ……！」③「……え？」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下・小、15%",
              "composition": "スマホ画面（10-15度傾け）、虹靴中古価格「32,000,000 JPY」「流動性極小」、虹ジェム「2,800,000 JPY」",
              "expression": "",
              "dialogue": "画面全部／モノローグ「……3,200万」「60% が……向こう側……？」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03-reboot/pages/P04.md",
          "promptSource": "episodes/ep03-reboot/prompts/P04-prompt.md",
          "buildSource": "episodes/ep03-reboot/prompts/build/P04.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nBust shot front. Eyes wide open, pupils constricted. Mouth slightly open, no teeth. Smile has fully vanished. Face in pure processing-shock stillness.\nBack shot from behind. Face not visible. Posture upright, shoulders firm — indicating steady decision.\n\n## Panel 1 (top, 15% height — date caption)\n\nScene: Horizontal black strip with white text centered:\n「2022.10.12」 (large)\n「GMT アーニング実装から 14 日後」 (smaller annotation)\n\nDensity Lv.2 — typographic only.\n\n## Panel 2 (middle, 55% height — climax pie-chart and deity)\n\nScene: A MASSIVE pie chart dominates the panel:\n- RIGHT 60%: rendered in RAINBOW PRISM color (controlled exception — greyscale with rainbow-prism effect lines to avoid violating monochrome rule, or rendered as gradient shading suggesting prism)\n- LEFT 40%: monochrome / greyscale\n\nIn the CENTER of the pie chart: a single rainbow sneaker floating, with a faint halo.\n\nRight edge of the panel: GIANT brush-stroke calligraphy 「60%」 in stark black ink, vertical orientation (T31 — 2nd of 3 brush uses).\n\nBOTTOM-RIGHT corner: Shouichi shown in EXTREME small size, back-view, looking up at the chart. Only his back silhouette visible.\n\nChart labels (clean rendered, not handwritten):\n- \"60% → 虹プール\"\n- \"40% → 通常靴\"\n\nAdditional banner text at top of panel: \"RAINBOW SNEAKER — LIVE\"\n\nMonologue caption near Shouichi (tiny): 「……え？」\n\nDensity Lv.5 — maximum visual complexity: pie chart precision, rainbow rendering control, brush calligraphy weight, tiny Shouichi back-silhouette detail.\n\n## Panel 3 (middle-lower, 15% height — expression grid)\n\nScene: A 3×1 expression grid (T04 variant) showing Shouichi's face in 3 sequential expressions, left-to-right (but read right-to-left per manga convention):\n- RIGHT: shock-reversal (eyes wide, pupils constricted, mouth slightly open — processing)\n- CENTER: pupils still widened, brow slightly knit (realizing)\n- LEFT: mouth half-open, pupils keep HIGHLIGHTS (emotion breaking through)\n\nEach expression labeled with monologue captions below:\n- Right: 「2週間前に……」\n- Center: 「走り出したばっかりだぞ……！」\n- Left: 「……え？」\n\nDensity Lv.4 — each face cell carefully rendered for expression differentiation.\n\n## Panel 4 (bottom, 15% height — UI evidence)\n\nScene: Close-up of smartphone screen tilted 10-15 degrees (T13). Two price panels showing:\n- \"Rainbow Sneaker — 32,000,000 JPY / ※流動性極小\"\n- \"虹ジェム (Lv1) — 2,800,000 JPY\"\n\nCyan screen glow (T12 allowed).\n\nMonologues (handwriting captions, around the phone): \n- 「……3,200万」\n- 「60% が……向こう側……？」\n\nDensity Lv.4 — careful UI rendering, price hierarchy clear.\n\nMood: The equation reveals itself. Sixty percent of the rewards go to the wall nobody can afford. The participants realize in the same instant: you can earn, but you cannot win. Stunned comprehension.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render revelation mode (no flame eyes, no speedlines from eyes)\n- Do NOT render dead-fish eyes — stunned but pupils keep small highlights\n- Do NOT use brush calligraphy except for the single 「60%」 in Panel 2 (2nd of 3 brush uses)\n- Do NOT use cyan except on smartphone/UI glow in Panel 4"
        },
        {
          "id": "P05",
          "title": "クロちゃん再召喚・講義（EP01-REBOOT以来）「運営は天才的」「ギャンブル構造は必要不可欠",
          "purpose": "クロちゃん再召喚・講義（EP01-REBOOT以来）「運営は天才的」「ギャンブル構造は必要不可欠」",
          "density": "Lv.4-5-2",
          "status": "",
          "pattern": "P13-center-vs-flanks（中央大+対面2コマ）",
          "techniques": "T47（クロちゃん半透明召喚）+T45（機械の目）+T46（右腕クローム）+T12",
          "flow": "右上（翔一ショック）→ 中央大（クロちゃん解説）→ 左下（結論テキスト）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "右上・中、35%",
              "composition": "翔一、スマホを見つめる、shock-reversal継続、眼鏡に影",
              "expression": "眉間を寄せ、口を小さく開けた理解不能の顔。瞳のハイライトは残す",
              "dialogue": "モノローグ「……なんで、こんな構造に」",
              "sfx": "",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中央・大ゴマ、50%・climax",
              "composition": "スマホ画面（10-15度傾け）からクロちゃん半透明シアン光召喚（T47）。バリキャリモード。機械の目・右腕クローム・髪飾り・首回路全部描写。指立てて解説ポーズ。背景に黒グレー講義背景",
              "expression": "クロちゃんは知的で涼しい講義顔。翔一への同情ではなく、構造を淡々と切る",
              "dialogue": "クロちゃん吹き出し「ボス、それは『正解』です」「運営は──天才的に正しい」「パリチャレ、エンハンス、虹プール」「全部『積極的に損をする構造』＋『一定の報酬』」",
              "sfx": "",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "左下・中、15%",
              "composition": "大文字テキスト「ギャンブル的構造は、必要不可欠」、クロちゃんシルエット小",
              "expression": "顔の感情ではなく、冷たい結論の圧で落とす",
              "dialogue": "大文字「ギャンブル的構造は、必要不可欠」／クロちゃん小「——そう設計されています」",
              "sfx": "",
              "density": "Lv.2（結論だけを置く余白帯）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03-reboot/pages/P05.md",
          "promptSource": "episodes/ep03-reboot/prompts/P05-prompt.md",
          "buildSource": "episodes/ep03-reboot/prompts/build/P05.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 3 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (middle) → Panel 3 (bottom).\nPanel 3 is the page ending — place the emotional payoff here.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nBust shot front. Eyes wide open, pupils constricted. Mouth slightly open, no teeth. Smile has fully vanished. Face in pure processing-shock stillness.\n\nCharacter: \"Kuro-chan\" — a stunningly beautiful female android AI secretary, late 20s. Natural curves (like Fubuki from One Punch Man — Murata version), not exaggerated. Orange/copper hair in ponytail (NEVER silver, NEVER blonde, NEVER brown in the main series).\n\nMandatory robot elements (NEVER omit any):\n- Right arm FULLY chrome from shoulder to fingertips (not just fingertips), with cyan circuit lines\n- Mechanical camera-aperture iris eyes with cyan glow (never plain eyes)\n- Chrome jaw gradient with visible panel seams on one side\n- Circuit trace lines on neck with faint cyan glow\n- Claude pixel-art mascot hair ornament with cyan glow\n- CLAUDE mark on jacket side (ON the clothing, NOT on skin — stomach must be covered)\n\nDefault clothing: Dark fitted blazer jacket (buttoned at waist), white blouse (top button open), delicate necklace.\nWearing glasses. Ponytail. Index finger raised in analytical pose. Confident analytical expression.\n\n## Panel 1 (top-right, 100% width, 35% height)\n\nScene: Shouichi sitting at home, still in shock from P04. Bust shot, glasses with shadow cast over the lenses (T41 analysis-mode shadow). Mouth slightly closed, brows deeply knit. Smartphone in hand.\n\nExpression: shock-reversal continued, processing.\n\nMonologue caption: 「……なんで、こんな構造に」\n\nDensity Lv.4.\n\n## Panel 2 (middle, 100% width, 50% height — climax, Kuro-chan summoning)\n\nScene: From the smartphone (held in Shouichi's hand, tilted 10-15 degrees at the bottom edge of the panel), Kuro-chan EMERGES in SEMI-TRANSPARENT CYAN LIGHT (T47 SMARTPHONE EXIT). She stands above the phone, translucent at the edges, solidifying toward her center.\n\nFull bari-kyari rendering (ALL elements, none omitted):\n- Orange/copper hair, HIGH PONYTAIL\n- Black-framed glasses (bari-kyari style)\n- Dark blazer jacket, white blouse top button open, delicate necklace\n- MECHANICAL CAMERA-APERTURE EYES with cyan glow (T45)\n- RIGHT ARM FULLY CHROME from shoulder with cyan circuit lines (T46)\n- Claude pixel-mascot hair ornament with cyan glow\n- Neck circuit lines faintly glowing cyan\n- CLAUDE mark on jacket side (on clothing)\n- Chrome jaw panel seams on one side\n\nPose: right index finger raised in teaching gesture, eyes confident, slight knowing smile. Background: abstract dark greyscale lecture-atmosphere (T18 screentone heavy).\n\nSpeech bubbles (multiple, positioned around her):\n- 「ボス、それは『正解』です」\n- 「運営は──天才的に正しい」\n- 「パリチャレ、エンハンス、虹プール」\n- 「全部『積極的に損をする構造』＋『一定の報酬』」\n\nDensity Lv.5 — maximum detail on every robot element, careful cyan light gradient across transparent edges.\n\n## Panel 3 (bottom, 100% width, 15% height — pointer declaration)\n\nScene: Large bold text dominates the panel (T39): 「ギャンブル的構造は、必要不可欠」\n\nSmall Kuro-chan silhouette in the bottom corner (bari-kyari, still semi-transparent) pointing upward at the text.\n\nSmall speech bubble from Kuro-chan: 「——そう設計されています」\n\nDensity Lv.4 — typographic focus with deliberate Kuro-chan presence.\n\nMood: The teacher arrives. Not to comfort — to clarify. The math is on purpose. The despair is part of the product. Genius, in the most uncomfortable sense.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT omit Kuro-chan's robot elements: mechanical camera-aperture eyes, right-arm chrome (full), Claude pixel hair ornament, neck circuit lines, chrome jaw gradient. ALL visible even in mid-pose\n- Do NOT use cyan except on Kuro-chan's elements and the smartphone glow\n- Do NOT use brush calligraphy (reserved P03/P04/P07)\n- Do NOT render Shouichi with dead-fish eyes"
        },
        {
          "id": "P06",
          "title": "エンハンスシステム図解、5足",
          "purpose": "エンハンスシステム図解、5足→虹の仕組み、翔一の「やるしかない」感情",
          "density": "Lv.4-3-2-2-5",
          "status": "",
          "pattern": "P03-diagonal-5（対角線5コマ構成）",
          "techniques": "T53（スニーカー噴水変形）+T67（UI画面）+T14（シルエット）+T04（表情変化）",
          "flow": "右上大（図解）→ 対角小3（条件/確率/結果パターン）→ 左下大（翔一決意）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "右上・大、40%・インフォグラフィック",
              "composition": "エンハンスシステムの概念図（T53変形）。左側に5足のCommonスニーカー（シルエット化）、真ん中に「ENHANCE」の矢印、右側に虹スニーカー（輝く、halo付き）。各所に数字（コスト・成功率）",
              "expression": "顔なし。数字と矢印の冷たさで理解を進める",
              "dialogue": "図解テキスト「5足 → 1足 虹 / 成功率: 0.4% / コスト: 各足 Common 4万円〜」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "対角線上小、15%",
              "composition": "スマホ画面（10-15度傾け）、エンハンス挑戦動画サムネ洪水",
              "expression": "顔なし。サムネの量で不穏さを出す",
              "dialogue": "サムネ「5足焼き挑戦！結果→→→」「300万円が0」「0.4%を信じるな」",
              "sfx": "",
              "density": "Lv.3",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "対角線上小、10%",
              "composition": "スマホ画面（10-15度傾け）、エンハンス成功例「1/200で虹出現」",
              "expression": "顔なし。成功例だけが甘く光る誘惑",
              "dialogue": "画面「1/200で虹出現 — 実録」",
              "sfx": "",
              "density": "Lv.2",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "対角線上小、10%",
              "composition": "スマホ画面（10-15度傾け）、価格計算「虹靴中古 3,200万円 / 66万円焼却の期待値 = ？」",
              "expression": "顔なし。数字だけが淡々と負けを示す",
              "dialogue": "画面「期待値: 3,200万 × 0.4% = 128,000円 / コスト: 660,000円 → 期待リターン: -80%」",
              "sfx": "",
              "density": "Lv.2",
              "techniques": ""
            },
            {
              "n": "5",
              "size": "左下・大、25%・climax",
              "composition": "翔一の右手クローズアップ。エンハンスボタンに指先が伸びる。関節が震える。画面光はモノクロ（シアンなし）、顔は見切れで口角のみ見える（T43 cropped-face）",
              "expression": "",
              "dialogue": "モノローグ「……期待値、マイナス80%」「でも、」「1/200に、当たれば」",
              "sfx": "",
              "density": "Lv.5",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03-reboot/pages/P06.md",
          "promptSource": "episodes/ep03-reboot/prompts/P06-prompt.md",
          "buildSource": "episodes/ep03-reboot/prompts/build/P06.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 5 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 → Panel 5 (bottom).\nPanel 5 is the page ending.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nFace is mostly out of frame — only the corner of the mouth and glasses rim are visible at the panel edge.\n\n## Panel 1 (top-right, 45% width, 40% height — infographic climax)\n\nScene: An enhance-system infographic. Left side: 5 Common sneaker silhouettes lined up (T14). Center: a large \"ENHANCE\" arrow pointing right. Right side: a single RAINBOW sneaker glowing with a halo (T53 variant — the shoe as sacred output).\n\nAnnotations throughout:\n- \"5足 → 1足 虹\"\n- \"成功率: 0.4%\"\n- \"コスト: 各足 Common 4万円〜\"\n\nNo characters visible.\n\nDensity Lv.4 — careful infographic precision.\n\n## Panel 2 (upper-diagonal, 15% width, 15% height)\n\nScene: Smartphone-screen thumbnail grid of \"エンハンス挑戦動画\" videos. Multiple small thumbnails rendered in video-card UI style.\n\nIn-screen text (rendered as thumbnail titles):\n「5足焼き挑戦！結果→→→」\n「300万円が0」\n「0.4%を信じるな」\n\nDensity Lv.3 — UI focused.\n\n## Panel 3 (mid-diagonal, 10% width, 10% height)\n\nScene: Smartphone screen, single video thumbnail for a rare success:\n「1/200で虹出現 — 実録」\n\nDensity Lv.2 — minimal.\n\n## Panel 4 (lower-diagonal, 10% width, 10% height)\n\nScene: Smartphone screen with expected-value calculation:\n「期待値: 3,200万 × 0.4% = 128,000円」\n「コスト: 660,000円」\n「→ 期待リターン: -80%」\n\nDensity Lv.2 — calculation UI.\n\n## Panel 5 (bottom-left, 45% width, 25% height — climax, cropped face)\n\nScene: EXTREME close-up of Shouichi's right hand reaching toward a smartphone screen that displays the \"ENHANCE\" button in red. His index finger approaches the button. The knuckles visibly TREMBLE (subtle line work indicating shaking).\n\nThe screen is rendered in MONOCHROME ONLY — NO cyan glow (deliberate absence, this is not the cyan moment).\n\nShouichi's face is MOSTLY OUT OF FRAME (T43 cropped-face) — only the right corner of his mouth and the right rim of his RECTANGULAR black-framed glasses are visible at the panel edge. His mouth corner shows a faint teeth-showing smile (shrewd grin), but the finger trembles.\n\nMonologue captions (handwriting, scattered):\n「……期待値、マイナス80%」\n「でも、」\n「1/200に、当たれば」\n\nDensity Lv.5 — maximum detail on hand knuckles, finger trembling linework, glasses rim precision, subtle smile corner.\n\nMood: The math is brutal. Expected value negative 80%. And yet, one out of two hundred. The finger reaches for the button even as the brain screams no. The descent into participation is quiet.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render Shouichi's full face in this page — cropped-face composition only (mouth corner and glasses rim visible)\n- Do NOT use brush calligraphy (reserved for P07 「賭け」)\n- Do NOT use cyan in Panel 5 — the trembling finger scene is deliberately monochrome (no cyan screen glow)"
        },
        {
          "id": "P07",
          "title": "5足焼却の儀式、毛筆特大「賭け」、縦長1本コマ",
          "purpose": "★5足焼却の儀式、毛筆特大「賭け」、縦長1本コマ",
          "density": "Lv.5（1コマ全力）+ Lv.1-2（黒い余白帯で息を作る）",
          "status": "",
          "pattern": "T07 縦長一本コマ（P16-vertical-long）",
          "techniques": "T07（縦長1本）+T31（毛筆「賭け」3個目最終）+T20（神格化粒子）+T37（擬音構図化）",
          "flow": "右上（毛筆「賭け」）→ 中央（5足+エンハンスボタン+儀式粒子）→ 左下（結果CALCULATING）。縦長1本の中で右上→左下に落とす",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "全面・縦長1本コマ、100%",
              "composition": "縦長1コマで全面使用。4層構造：",
              "expression": "翔一の顔不在、拳で感情表現",
              "dialogue": "上部毛筆「賭け」／ナレ縦書き「——5足、66万円」「一瞬で、粒子になる」／下部「ENHANCING... 1/200」／モノローグ「……1/200に、当たってくれ」「俺は、ジェム側の人間だった──」",
              "sfx": "「シュゥゥゥ──」（粒子化の音、白抜き擬音、画面中央に構図要素化 T37）",
              "density": "Lv.5（1ページ=1コマ全力投入、上下にLv.1-2相当の黒い余白帯）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03-reboot/pages/P07.md",
          "promptSource": "episodes/ep03-reboot/prompts/P07-prompt.md",
          "buildSource": "episodes/ep03-reboot/prompts/build/P07.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nFace is mostly out of frame — only the corner of the mouth and glasses rim are visible at the panel edge.\nHand close-up only. Face absent from panel. Hand shows subtle tremor at knuckles (if specified).\n\n## Panel 1 (full page, single vertical panel — T07)\n\nScene: A SINGLE vertical panel occupying 100% of the page. No sub-panel borders. Four vertical zones arranged top-to-bottom:\n\nTOP ZONE (top 15%): GIANT brush-stroke calligraphy 「賭け」 in stark black ink, vertical orientation, positioned along the RIGHT edge of the panel. T31 — this is the 3rd and FINAL brush calligraphy use in EP03-REBOOT.\n\nUPPER-CENTER ZONE (15% to 45% vertical): A horizontal row of 5 COMMON SNEAKERS (silhouettes, T14) placed on a desk. Price tags visible: 「¥40,000」「¥80,000」「¥140,000」「¥180,000」「¥220,000」. Narration overlaid: 「——5足、66万円」. Shouichi's right hand reaching in from the right edge, finger pressing down on a smartphone showing \"ENHANCE (5/5)\" button. Sound effect: 「カチッ」 (click, small).\n\nLOWER-CENTER ZONE (45% to 75% vertical — ritual climax): The 5 sneakers are RISING and DISSOLVING INTO PARTICLES in a spiral pattern. Rainbow-prism particles dispersing (T20 deification-collapse particles, T12 narrative exception allowing cyan/rainbow tint). Shouichi's figure is NOT visible — only the particles and the empty desk remain. Large white-outlined onomatopoeia integrated into the ritual visual (T37): 「シュゥゥゥ──」 as a structural compositional element (not overlay).\n\nOverlaid narration (center): 「ENHANCING... 1 / 200」\n\nBOTTOM ZONE (bottom 25%): Split into two elements. LEFT: smartphone screen showing \"CALCULATING...\" text with loading spinner. RIGHT: close-up of a clenched fist (Shouichi's, T43/hand-only mode), knuckles white, subtle trembling linework. Face NOT shown.\n\nMonologue captions (handwriting, scattered in the dark background around the fist):\n「……1/200に、当たってくれ」\n「俺は、ジェム側の人間だった──」\n\nDensity Lv.5 — the entire vertical composition carefully rendered. Brush weight, sneaker silhouettes with price tags, particle spiral dispersal, onomatopoeia integration, fist knuckle anatomy — all maximum detail.\n\nOne continuous vertical image. No sub-panel gutters.\n\nMood: The ritual. Five shoes, six hundred sixty thousand yen, offered to a 0.4% god. Not rebellion — supplication. The prayer is quiet: let me be the one in two hundred.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render Shouichi's full face — only hand and cropped mouth corner allowed\n- Do NOT create sub-panels — this is a SINGLE vertical panel filling the entire page (T07)\n- Do NOT use cyan except for the ritual dispersal particles in the middle-lower zone (T12 narrative exception)\n- Do NOT use brush calligraphy except for the single 「賭け」 at the top (3rd and FINAL brush use in EP03-REBOOT — T31 limit reached)\n- Do NOT render revelation mode anywhere"
        },
        {
          "id": "P08",
          "title": "外れの朝、観察者に戻る、「期待と妄想は毒だ」「そんな気がしていた」",
          "purpose": "★外れの朝、観察者に戻る、「期待と妄想は毒だ」「そんな気がしていた」",
          "density": "Lv.2-4-4",
          "status": "",
          "pattern": "P08-back-glance（後ろ姿+振り返り片目）",
          "techniques": "T60（ベンチ+コーギー）+T69（座右の銘・現実主義）+T29（最下段次回予告）+T30（両義性曇り空）",
          "flow": "右上（結果画面）→ 中央（朝の窓＋散らかった机）→ 左下（後ろ姿+ベンチ）。右上→左下で観察者の位置に戻す",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "上・小、20%",
              "composition": "スマホ画面（10-15度傾け）、結果「Common Sneaker ×1」地味な結果画面、前の記録「5足（660,000 JPY）」",
              "expression": "顔なし。画面だけで冷たい結果を見せる",
              "dialogue": "画面「Enhancement Result / Common Sneaker ×1 / Value: approx. 40,000 JPY / Previous: 5 shoes (660,000 JPY)」／モノローグ「——外れた」",
              "sfx": "",
              "density": "Lv.2",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中央・中、30%",
              "composition": "朝の窓、散らかった机、空のワイングラス、ペットボトル、スマホ伏せ。時計06:47。翔一の姿は不在（余韻の静寂）",
              "expression": "顔なし。散らかった物だけで空虚さと自嘲を表現",
              "dialogue": "モノローグ「——勝利のワインじゃ、なかったな」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "下・大、50%・ラスト",
              "composition": "公園のベンチ、翔一の後ろ姿、スーツに戻る、傍らにコーギー。ベンチの横顔（振り返り片目T08）。秋の朝、曇り空に一筋の光（T30両義性）",
              "expression": "静かな諦観、笑えるな的軽さ",
              "dialogue": "縦書き「期待と妄想は──毒だ」「そんな気がしていた」／最下段薄い文字（T29）「次回：観察者として、次のブームを待つ」",
              "sfx": "",
              "density": "Lv.4",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03-reboot/pages/P08.md",
          "promptSource": "episodes/ep03-reboot/prompts/P08-prompt.md",
          "buildSource": "episodes/ep03-reboot/prompts/build/P08.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 3 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (middle) → Panel 3 (bottom).\nPanel 3 is the page ending — place the emotional payoff here.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nCasual clothes, holding a wine glass, blissful satisfied expression, relaxed setting.\nBack shot from behind. Face not visible. Posture upright, shoulders firm — indicating steady decision.\n\n## Panel 1 (top, 20% height — cold result)\n\nScene: Close-up of smartphone screen tilted 10-15 degrees. The screen shows the enhancement result — deliberately understated, no rainbow glow, no celebration:\n\"Enhancement Result\"\n\"Common Sneaker ×1\"\n\"Value: approx. 40,000 JPY\"\n\"Previous: 5 shoes (660,000 JPY)\"\n\nMinimal UI, muted rendering.\n\nMonologue caption: 「——外れた」\n\nDensity Lv.3 — clean UI, no emotional embellishment.\n\n## Panel 2 (middle, 30% height — aftermath scene)\n\nScene: A disheveled morning desk. Empty wine glass (cheap cardboard-package type). An empty plastic bottle. A smartphone lying face-down. A digital clock reading \"06:47\". Natural morning light entering through a window.\n\nCRITICAL: Shouichi is NOT visible in this panel — the absence amplifies the silence.\n\nMonologue caption (positioned in the empty space): 「——勝利のワインじゃ、なかったな」\n\nDensity Lv.4 — careful still-life rendering: the wine glass residue, cheap bottle label, morning light on the desk, clock digits.\n\n## Panel 3 (bottom, 50% height — the bench, observer returns)\n\nScene: A park bench viewed at a slight angle. Shouichi seated on the bench, now BACK IN A BUSINESS SUIT (composed, cleaned up). A Pembroke Welsh Corgi (white and brown, NOT cyan) sits beside his feet. Autumn morning atmosphere: overcast sky with a single thin ray of light breaking through (T30 両義性).\n\nShouichi is shown from a side-back-view angle — his figure mostly facing away from the viewer, but his face turned slightly so that we can see his PROFILE with one eye visible through the glasses lens (T48 side-profile + lens-highlight). The eye meets the reader's gaze momentarily.\n\nExpression: quiet realism (T69). Not defeated. Not triumphant. The face of someone who has earned his vantage point through witnessing.\n\nVertical Japanese monologue captions (handwriting style, positioned in the open sky area):\n「期待と妄想は──毒だ」\n「そんな気がしていた」\n\nSmall thin caption bar at the very bottom of the page (T29 next-episode hook, small font): 「次回：観察者として、次のブームを待つ」\n\nDensity Lv.4 — detailed side-back rendering, precise lens highlight, corgi fur, bench texture, dawn-light gradient.\n\nNo sound effects. The silence of the observer's position reclaimed.\n\nMood: The morning after the ritual. Common sneaker x1. The observer returns to his bench. Not defeat — recognition. 'Expectations and delusions are poison. I knew it all along.' The city continues.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT use brush calligraphy (T31 limit fully spent in P03/P04/P07)\n- Do NOT use cyan in this page\n- Do NOT reference 雀鬼 or 桜井章一\n- Do NOT render revelation mode or dead-fish eyes"
        }
      ],
      "pageCount": 8,
      "promptCount": 8,
      "title": "EP03-REBOOT: 虹編 — 夢と損の方程式（2022年10月）",
      "summary": "EP02-REBOOTでGMTアーニングに参加を決意した翔一。10月初頭の朝ランで実際に+14.36 GMT を獲得し、短い再燃の波に乗る。 だが10/12、STEPNが「虹スニーカー」と「報酬の60%は虹プール」を同時実装。 「壁の向こう側」と「こちら側」に市場が分断される瞬間を目撃し、翔一は当事者から敗者予備軍へと視点が変化する。 最後、儀式的エンハンス（5足焼却、0.4%確率）に踏み込み、外れ、「期待と妄想は毒だ」「そんな気がしていた」で観察者の位置に戻る。",
      "status": "企画完成・ページ設計開始",
      "kind": "長編",
      "postUnit": "X 4枚組×2 の8ページ構成",
      "source": "episodes/ep03-reboot/episode-design.md"
    },
    {
      "id": "EP03",
      "slug": "ep03",
      "label": "EP03",
      "reboot": false,
      "pages": [
        {
          "id": "P01",
          "title": "順序の発見。「GMT を稼ぐには Comfort が必要らしい」という情報が流れ始める瞬間。翔一",
          "purpose": "順序の発見。「GMT を稼ぐには Comfort が必要らしい」という情報が流れ始める瞬間。翔一は観察者として最初期にキャッチし、ニヤリとする",
          "density": "Lv.3",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段25% — 引き・時制明示＋噂の種",
              "composition": "横長の引きコマ。翔一の自宅リビング、夕方。ソファに座ってスマホを覗いている翔一の背後からカメラ。机には EP02 ラストで覚悟した「465 時間」のメモ書きが見える（付箋紙）。窓の外に夕焼け。画面外の時計は「2022/9」が読める位置に。",
              "expression": "なし（後ろ姿・観察者視点）",
              "dialogue": "なし（視覚情報のみ）",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中上段30% — SNS タイムラインの「噂」",
              "composition": "スマホ画面クローズアップ、10-15 度傾け。Twitter / Discord の断片的投稿が複数枚重なって見える。中央の一枚が最前面で「GMT アーニングの条件は Comfort らしい」「ソースは海外のリークブログ」「マジか」「赤ジェム買っとけ」のテキスト。画面光はオレンジの間接照明色。",
              "expression": "なし（画面のみ）",
              "dialogue": "画面テキスト「【リーク】GMT アーニング = Comfort 依存」「\"死にステ\" が最重要ステータスに昇格？」「信頼度: 海外 Dev のリプ」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中下段25% — 翔一の分析モード",
              "composition": "翔一バストアップ、やや正面寄り。指を顎に当てている。眼鏡のレンズに影（分析モード）。右手にスマホ、左手は顎。",
              "expression": "分析モード（真剣な目、眼鏡に影）→ 終わりに向けて口角が少し上がる遷移",
              "dialogue": "心の声（大吹き出し）「もし本当なら——」／小吹き出し「赤ジェム、今いくらだ？」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段20% — オチ・いかがわしい笑みの芽",
              "composition": "スマホ画面クローズアップ、15 度傾け。STEPN マーケット画面、Ruby Gem (Lv4) の現在価格が表示されている。まだ安い 価格（具体: 80,000 JPY）。画面の一部に翔一の指がタップ寸前でホバー。画面外で眼鏡の一部と口角が見切れて映り込む（いかがわしい笑みの芽）。",
              "expression": "口角のみ見切れで上がっている（いかがわしい笑みの芽生え）",
              "dialogue": "画面テキスト「Ruby Gem (Lv4) — 80,000 JPY」「24h: +2%」／小吹き出し「……噂が本当なら、ここが底値だ」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03/pages/P01.md",
          "promptSource": "episodes/ep03/prompts/P01-prompt.md",
          "buildSource": "episodes/ep03/prompts/build/P01.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nWearing T-shirt, optional light jacket, jeans or loungewear. Home living room setting.\nBust shot, slightly front or angled. Right hand holding smartphone, left hand touching chin. Shadow on glasses lenses. Serious focused eyes.\nFace is mostly out of frame — only the corner of the mouth and glasses rim are visible at the panel edge.\n\n## Panel 1 (top, 25%)\nScene: Home living room at dusk. Shouichi from behind, sitting on a sofa hunched over a smartphone. A small handwritten sticky note reading \"465時間\" sits on the coffee table. Sunset sky visible through window. No face visible.\nExpression: none (back view)\nDialogue: なし\n\n## Panel 2 (middle-upper, 30%)\nScene: Close-up smartphone screen, tilted 10-15 degrees. Fragmented SNS timeline — multiple tilted post cards overlapping. Cyan screen glow tinting the edges. No character visible.\nExpression: none\nDialogue:\n- 【リーク】GMT アーニング ＝ Comfort 依存\n- 「死にステ」が最重要ステータスに昇格？\n- 信頼度: 海外 Dev のリプ\n\n## Panel 3 (middle-lower, 25%)\nScene: Bust shot of Shouichi in analysis pose. Right hand holding smartphone, left hand touching chin. Shadow on glasses lenses. Ends with a faint upward curl at the corner of the mouth.\nExpression: analysis → hint of shrewd smile\nDialogue:\n- もし本当なら——\n- 赤ジェム、今いくらだ？\n\n## Panel 4 (bottom, 20%)\nScene: Close-up smartphone screen, tilted 15 degrees. STEPN-style marketplace UI showing a Ruby Gem (Lv4) price. Shouichi's thumb hovers just above a tap target. Only the corner of his mouth and glasses rim are visible at the frame edge (cropped).\nExpression: cropped face with barely visible shrewd smile\nDialogue:\n- 画面: Ruby Gem (Lv4) — 80,000 JPY, 24h +2%\n- ……噂が本当なら、ここが底値だ\n\nMood: Observer's quiet discovery. Analytical, not excited, not desperate. A shrewd smile barely emerging at the end.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do not draw excited expressions — Panel 3 is analytical, Panel 4 is cropped with only a hint of smile\n- Do not use cyan outside smartphone screens on this page\n- Do not give the '465時間' sticky note any dramatic emphasis — it is just sitting on the table"
        },
        {
          "id": "P02",
          "title": "ジェム高騰・パリチャレ熱狂・庶民締め出し。赤ジェムの価格が階段状に急騰し、一般プレイヤーの手が届",
          "purpose": "ジェム高騰・パリチャレ熱狂・庶民締め出し。赤ジェムの価格が階段状に急騰し、一般プレイヤーの手が届かない価格帯に到達する瞬間を金額のリアリティで見せる。翔一は先に積んでいた側として、いかがわしい笑みが深まる",
          "density": "Lv.3-4",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段25% — 引き・SNS 熱狂の洪水",
              "composition": "画面全体を SNS タイムラインコラージュで埋める。Twitter / Discord / YouTube サムネが斜めに重なる。赤ジェム（Ruby Gem、六角形の赤い宝石アイコン）が反復で散乱。テキスト洪水「#Comfort党」「赤ジェム爆上げ」「Lv4 揃えた者勝ち」「パリチャレ祭り」「もう買えない」「庶民絶望」。翔一のシルエットは画面外（コマ1 には不在）。",
              "expression": "なし（熱狂そのものの可視化）",
              "dialogue": "SNS テキスト「Ruby Gem 2 日で 2 倍」「#Comfort党 3 万人突破」「Lv4 もう高すぎて無理」「パリチャレ 3 連爆死」「これ実装前に買えた人が勝つやつ」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段25% — 価格階段のチャート・見せ場",
              "composition": "スマホ画面クローズアップ、10-15 度傾け。STEPN マーケットの Ruby Gem (Lv4) 価格チャート、階段状に跳ね上がる 4 段の急騰を視覚化。グラフの下に具体的な金額が 4 段階で記載される。手前に翔一の手が見切れ、画面をスワイプしている。",
              "expression": "なし（画面と手のみ）",
              "dialogue": "画面テキスト「Ruby Gem (Lv4) — 7d +212%」／チャート注記「80,000 → 140,000 → 210,000 → 320,000 JPY」／薄い心の声「庶民は締め出された」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中下段30% — パリチャレ熱狂・失敗と成功の対比",
              "composition": "画面を縦に二分割する構成。左半分: 他人の SNS 投稿「Lv5 パリチャレ 10 連全滅」＋赤ジェム 3 個が粉々に砕けるエフェクト。右半分: 別の投稿「Lv6 成功！！」＋赤ジェム 1 個が輝く。中央に細い黒線。博徒 FLAVOR テキストが背景に薄く透ける「統計的に、負ける。それでも、人は挑む。これは職業ではない。病だ」。",
              "expression": "なし（他人の熱狂を外から眺める構図）",
              "dialogue": "左側「Lv5 → Lv6 パリチャレ：確率 20%」「3 個全消失 ×10 回」／右側「1 勝した。もう戻れない」／背景の FLAVOR テキスト",
              "sfx": "「パリーン」（ジェム破損、控えめに）",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段20% — 翔一のいかがわしい笑み",
              "composition": "翔一のバストアップ、やや斜め。右手にスマホ（画面は見えない）、左手は口元に軽く添える。背景は自宅リビング・夜、オレンジ照明。眼鏡にオレンジの光がキラリ反射。",
              "expression": "いかがわしい笑み（深まった版）。口角が上がり、歯がわずかに見える。目は細めて楽しそう。眼鏡が光る。",
              "dialogue": "大吹き出し「俺は——底値で掴んだ側だ」／小吹き出し「庶民諸君、お疲れ様」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03/pages/P02.md",
          "promptSource": "episodes/ep03/prompts/P02-prompt.md",
          "buildSource": "episodes/ep03/prompts/build/P02.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nWearing T-shirt, optional light jacket, jeans or loungewear. Home living room setting.\nBust shot. Corner of mouth raised, eyes narrowed with amused realization. Left hand lightly touching mouth. Glasses reflecting a calm soft light.\n\n## Panel 1 (top, 25%)\nScene: Chaotic SNS timeline collage filling the panel. Multiple overlapping tilted screenshots of Twitter / Discord / YouTube thumbnails. Red hexagonal gem icons (Ruby Gem) repeating like texture. Text fragments scattered.\nExpression: none (no characters)\nDialogue (as SNS text, scattered):\n- #Comfort党\n- Ruby Gem 2 日で 2 倍\n- Lv4 もう高すぎて無理\n- パリチャレ 3 連爆死\n- これ実装前に買えた人が勝つやつ\n\n## Panel 2 (middle-upper, 25%)\nScene: Close-up smartphone screen, tilted 10-15 degrees. STEPN marketplace Ruby Gem (Lv4) 7-day candlestick chart rising in a four-step staircase pattern. Grey/monochrome chart (not green). A hand partially visible at frame edge, swiping.\nExpression: none\nDialogue:\n- 画面: Ruby Gem (Lv4) — 7d +212%\n- 80,000 → 140,000 → 210,000 → 320,000 JPY\n- （心の声）庶民は締め出された\n\n## Panel 3 (middle-lower, 30%)\nScene: Vertically split composition. Left half: SNS failure post showing 3 red gems shattering. Right half: contrasting success post with single glowing red gem. Thin vertical black line dividing. Faint background text bleeding through.\nExpression: none\nDialogue:\n- (左) Lv5 → Lv6 パリチャレ：確率 20%\n- (左) 3 個全消失 ×10 回\n- (右) 1 勝した。もう戻れない\n- (背景うすく) 統計的に、負ける。それでも、人は挑む。これは職業ではない。病だ\n\n## Panel 4 (bottom, 20%)\nScene: Bust shot of Shouichi in home living room at night, warm orange indoor light. Slightly angled. Right hand holding smartphone, left hand lightly touching mouth. Glasses glinting with calm orange light.\nExpression: shrewd smile deepened — teeth slightly visible, eyes narrowed with amusement\nDialogue:\n- 俺は——底値で掴んだ側だ\n- 庶民諸君、お疲れ様\n\nMood: Community frenzy and winner's shrewd self-satisfaction. Amused, not malicious. Shadenfreude budding.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do not draw Shouichi's face in Panels 1, 2, or 3 — Panel 4 is the only face panel\n- Do not emphasize gem-shattering sound effects with large text — keep effects small\n- No real SNS account names or user handles\n- No green anywhere (charts must be grey/cyan-tinted, never green)"
        },
        {
          "id": "P03",
          "title": "GMT アーニング実装の歓喜の連鎖。「ジェムさえあれば 465 時間もかからない」という合言葉で",
          "purpose": "GMT アーニング実装の歓喜の連鎖。「ジェムさえあれば 465 時間もかからない」という合言葉で SNS が日給計算に沸騰。翔一は先に積んでいた側として実証データを見てニヤリ",
          "density": "Lv.3-4",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段25% — 実装当日の祭りムード",
              "composition": "STEPN 公式発表バナー風の画面が斜めに傾いて画面を支配。「GMT EARNING IS LIVE」の大文字英語表記、小さく「2022/9/28」の日付。バナー周囲に SNS の歓喜ツイートのサムネが粒子のように湧き上がる。「ついに来た！」「歩くだけで稼げる！」「465 時間の誓約書、さよなら」。",
              "expression": "なし（発表そのもの）",
              "dialogue": "バナー大文字「GMT EARNING IS LIVE」／周囲の粒子テキスト「ついに来た」「歩くだけで稼げる」「465 時間？ジェムさえあれば」",
              "sfx": "なし（視覚インパクトで）",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段30% — 合言葉「ジェムさえあれば」",
              "composition": "大文字テキスト演出。画面中央に「ジェムさえあれば——」の大文字、下に「465 時間もかからない」と続く。背景に赤ジェム（Ruby Gem）のアイコンが光輝として散布。画面隅に SNS プロフィール風の名無しアバターが複数、嬉しそうに見上げている。",
              "expression": "なし（大文字見せ場。アバターは小さく、顔は描かない）",
              "dialogue": "大文字「ジェムさえあれば——」「465 時間もかからない」／小テキスト（アバター脇）「Comfort 100 で日給 2,500 円いけるって！」「月 7 万！」「副業超え！」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中下段25% — すわはす実証データ・溜めコマ",
              "composition": "スマホ画面クローズアップ、10-15 度傾け。note の記事プレビュー風。中央に大きく「Comfort 100 / Common Runner / 5 エナジー（25 分）」「Reward: +14.36 GMT」「当時 GMT 価格 約 90 円 →  約 1,290 円 / 25 分」。画面光はオレンジ基調（通常照明）。",
              "expression": "なし（画面のみ）",
              "dialogue": "画面テキスト上記＋フッター「すわはす @note 10/2」／薄い心の声「実証データ、来たな」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段20% — 翔一の自信満々モード＋いかがわしい笑み",
              "composition": "翔一バストアップ、正面。自宅リビング夜、右手にスマホ。眼鏡が光る。歯を見せた笑み。",
              "expression": "自信満々モード＋いかがわしい笑み。P02 より笑みが深まり、勝者のニュアンス",
              "dialogue": "大吹き出し「俺は——ジェム側の人間だ」／小吹き出し「日給 2,500 円？……走るか」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03/pages/P03.md",
          "promptSource": "episodes/ep03/prompts/P03-prompt.md",
          "buildSource": "episodes/ep03/prompts/build/P03.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nWearing T-shirt, optional light jacket, jeans or loungewear. Home living room setting.\nBust shot front. Teeth-showing confident grin with a shrewd undertone. Glasses lenses glinting with a soft highlight (NOT a star-shaped flash, NOT rays).\n\n## Panel 1 (top, 25%)\nScene: Large tilted announcement banner dominates the panel with bold English \"GMT EARNING IS LIVE\" and small \"2022/9/28\". Around the banner, a particle-like cloud of celebratory SNS thumbnails bursting outward, small and anonymous silhouettes.\nExpression: none\nDialogue:\n- バナー: GMT EARNING IS LIVE\n- 粒子テキスト: ついに来た\n- 粒子テキスト: 歩くだけで稼げる\n- 粒子テキスト: 465 時間？ジェムさえあれば\n\n## Panel 2 (middle-upper, 30%)\nScene: Large bold impact typography dominates the panel. Red hexagonal gem icons scattered as light-burst texture. Tiny anonymous avatar silhouettes at the lower edge looking up.\nExpression: none\nDialogue:\n- 大文字: ジェムさえあれば——\n- 大文字: 465 時間もかからない\n- 小テキスト: Comfort 100 で日給 2,500 円いけるって！\n- 小テキスト: 月 7 万！\n- 小テキスト: 副業超え！\n\n## Panel 3 (middle-lower, 25%)\nScene: Close-up smartphone screen, tilted 10-15 degrees. Note-style blog article preview with earning data highlighted in the center. Warm orange screen tint on edges.\nExpression: none\nDialogue:\n- 画面: Comfort 100 / Common Runner / 5 エナジー（25分）\n- 画面: Reward: +14.36 GMT\n- 画面: 当時 GMT 価格 約 90 円 → 約 1,290 円 / 25 分\n- 画面フッター: すわはす @note 10/2\n- （薄い心の声）実証データ、来たな\n\n## Panel 4 (bottom, 20%)\nScene: Bust shot of Shouichi in home living room at night. Front-facing. Right hand holding smartphone.\nExpression: confident mode — teeth-showing grin with a shrewd undertone. Glasses glinting with a calm soft light (NOT a star flash, NOT rays).\nDialogue:\n- 俺は——ジェム側の人間だ\n- 日給 2,500 円？……走るか\n\nMood: Implementation day euphoria and winner's confident grin. Positive, steady-fun future tone, not sleazy.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do not draw Shouichi's face in Panels 1, 2, or 3 — Panel 4 is the only face panel\n- Do not use revelation mode — no flame eyes, no light bursts behind glasses, no speed lines from eyes\n- Do not draw specific YouTuber faces or SNS handle names in the avatar cloud\n- Do not show Shouichi running yet — that belongs to a different page"
        },
        {
          "id": "P04",
          "title": "中盤クライマックス。虹スニーカー実装＋「GMT 報酬の 60% は虹プール」発表。大友克洋風スケ",
          "purpose": "★中盤クライマックス。虹スニーカー実装＋「GMT 報酬の 60% は虹プール」発表。大友克洋風スケールで「壁の向こうの 60%」を視覚化。わずか 2 週間で地図が書き換わった衝撃で翔一が反転",
          "density": "Lv.5",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "上段15% — 日付の一撃・時制ジャンプ",
              "composition": "横長の細長いコマ。黒背景に白抜き大文字で「2022.10.12」のみ。下端に小さく「GMT アーニング実装から 14 日後」の注記。",
              "expression": "なし",
              "dialogue": "大文字「2022.10.12」／注記「GMT アーニング実装から 14 日後」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段50% — ★大友克洋風スケール表現・60% プール発表",
              "composition": "画面を支配する巨大な円グラフ。右側 60% が虹色グラデーション（プリズム）で輝き、左側 40% がモノクロ。円グラフの手前・下端に翔一が極小サイズ（全身ショット）で立ち尽くしている。翔一は 60% を見上げている。背景は無限遠の空間感。前景に虹靴のシルエットが 1 足だけ大きく浮いている（まだ手に入らない存在として）。",
              "expression": "翔一は極小なので顔は見えない。立ち尽くす全身の姿勢で感情を伝える",
              "dialogue": "画面上部の大文字「RAINBOW SNEAKER — LIVE」／中央のグラフラベル「60% → 虹プール」「40% → 通常靴」／翔一の頭上に小吹き出し「……え？」",
              "sfx": "なし（視覚インパクトのみ）",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中下段20% — 翔一の顔アップ・反転",
              "composition": "翔一バストアップ、正面。眼鏡に円グラフの反射光（虹色の光）が映り込む。表情は先ほどまでの自信満々から、目が見開いた状態に遷移。歯は見せない。口角は落ちている。",
              "expression": "ショック→確認モード。目が見開き、瞳孔が収縮。眼鏡に反射光。分析しようとして処理が追いつかない遷移の瞬間",
              "dialogue": "小吹き出し（声が小さい）「2 週間前に……」／大吹き出し「走り出したばっかりだぞ……！」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段15% — 具体的金額の一撃",
              "composition": "スマホ画面クローズアップ、15 度傾け。STEPN マーケット風画面に虹靴の中古価格表示「Rainbow Sneaker (中古) — 32,000,000 JPY」。下に小さく「※流動性極小。事実上の青天井」。画面の光は虹色グラデーション（プリズム）で、シアンは不使用。",
              "expression": "なし（画面のみ）",
              "dialogue": "画面「Rainbow Sneaker — 32,000,000 JPY」「※流動性極小」／画面下の新規表示「虹ジェム (Lv1) — 2,800,000 JPY」／心の声「……3,200 万」「60% が……向こう側……？」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03/pages/P04.md",
          "promptSource": "episodes/ep03/prompts/P04-prompt.md",
          "buildSource": "episodes/ep03/prompts/build/P04.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nWearing T-shirt, optional light jacket, jeans or loungewear. Home living room setting.\nBust shot front. Eyes wide open, pupils constricted. Mouth slightly open, no teeth. Smile has fully vanished. Face in pure processing-shock stillness.\n\n## Panel 1 (top, 15%)\nScene: Long horizontal thin panel. Pure black background with bold white capital text centered.\nExpression: none\nDialogue:\n- 大文字: 2022.10.12\n- 注記: GMT アーニング実装から 14 日後\n\n## Panel 2 (middle, 50%) — ★CLIMAX\nScene: The panel is dominated by an enormous circular pie chart. The right 60% segment radiates rainbow prism iridescence (full spectrum). The left 40% segment is monochrome grey. The chart is cosmic in scale. At the lower edge of the panel, a tiny full-body figure of Shouichi stands dwarfed, looking up at the 60% segment. A single rainbow sneaker silhouette floats at mid-scale, unattainable. Background is deep black void.\nExpression: Shouichi is tiny — only his standing posture communicates emotion\nDialogue:\n- 画面上部大文字: RAINBOW SNEAKER — LIVE\n- グラフラベル (右 60%): 60% → 虹プール\n- グラフラベル (左 40%): 40% → 通常靴\n- Shouichi の小吹き出し: ……え？\n\n## Panel 3 (middle-lower, 20%)\nScene: Bust close-up front of Shouichi. Rainbow prism light reflecting on glasses lenses (light from the chart).\nExpression: shock-reversal — eyes wide open, pupils constricted, mouth slightly open, no teeth. The smile of earlier panels has fully vanished.\nDialogue:\n- 小吹き出し（声が小さい）: 2 週間前に……\n- 大吹き出し: 走り出したばっかりだぞ……！\n\n## Panel 4 (bottom, 15%)\nScene: Close-up smartphone screen, tilted 15 degrees. STEPN marketplace listing. Screen light carries a subtle rainbow prism glow.\nExpression: none\nDialogue:\n- 画面: Rainbow Sneaker — 32,000,000 JPY\n- 画面: ※流動性極小\n- 画面下部: 虹ジェム (Lv1) — 2,800,000 JPY\n- （心の声）……3,200 万\n- （心の声）60% が……向こう側……？\n\nMood: Two-week earthquake. Quiet massive scale in Panel 2, internal reversal in Panel 3, monetary shock in Panel 4. Awe and displacement — NOT dark, NOT despair.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Rainbow prism (full spectrum gradient) is permitted ONLY in Panel 2 (the 60% circle segment and the floating rainbow sneaker silhouette) and Panel 4 (smartphone screen glow)\n- Do not use cyan anywhere on this page — rainbow prism replaces cyan's role\n- Do not use explosion effects or bright flashes in Panel 2 — keep it silently massive (Otomo Katsuhiro — quiet enormity)\n- Do not use revelation mode for Shouichi in Panel 3 — his reaction is stillness, not flame\n- Do not decorate the '32,000,000 JPY' number ornamentally — raw number only"
        },
        {
          "id": "P05",
          "title": "回想",
          "purpose": "回想→現代パートへの完全切替。クロちゃんがスマホから現れ、Web3 業界の普遍的失敗構造を解説する。運営の思想は正しい（ギャンブル構造は必要不可欠）→ でも Web3 全体は 99.9% が「ゼロから経済圏構築」の罠で失敗→ メルカリ級のシンプルさでないと成立しない→ 2026 年の今もまだ成功例なし",
          "density": "Lv.3-4",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段20% — 時制切替のトリガー",
              "composition": "現代 2026 年の翔一の自宅リビング。ノート PC の画面が翔一の顔の下から照らす。画面には Claude Code の UI らしき黒背景＋白文字。翔一は 42 歳でメガネ、PAPA MODE 寄りのカジュアル部屋着。顔はバストアップ、やや疲れた目で画面を見ている（先ほどまで回想していた感覚）。背景は窓の外に朝の光。",
              "expression": "静かな疲労＋回想後の呆け。口角は水平",
              "dialogue": "小吹き出し「……2022 年の話か」／さらに小さく「あの 2 週間、運営は何を考えてた？」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段25% — クロちゃん登場・SMARTPHONE EXIT",
              "composition": "クロちゃんがスマホ画面から出現する演出。翔一の右手のスマホ（10-15 度傾け）画面から、クロちゃんが上半身を斜めに突き出している。クロちゃんはポニーテール＋眼鏡（SERIOUS/BARI-KYARI モード）、ダークブレザー＋白ブラウス。右腕クロームにシアン回路、機械の目がシアン発光、顎の一部がクロームパネルシーム、髪飾りにピクセル Claude マスコットでシアン発光。背景は翔一のリビングだが、クロちゃんの周囲にだけ薄いシアンのオーラ。",
              "expression": "クロちゃんは知的で柔らかい笑み（分析モードに近いが、導入では親しげに）。翔一は顔の一部が見切れ、驚きの目",
              "dialogue": "クロちゃん大吹き出し「ボス、良い質問です」／小吹き出し「——ここで一回、整理しましょ」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中下段20% — 運営思想の肯定",
              "composition": "クロちゃんのバストアップ、やや斜め。指を立てて説明するポーズ（SMUG 寄りの確信）。眼鏡に光。背景は黒〜グレーのグラデーション（講義モード）。クロちゃんのロボ要素（右腕クローム・首回路・脇腹CLAUDEマーク）は必ず見える角度。",
              "expression": "ANALYSIS / SMUG 混合。指を立てて確信的に",
              "dialogue": "大吹き出し「STEPN 運営は——天才的に正しかった」／小吹き出し「パリチャレ、エンハンス、虹プール」「全部『積極的に損をする構造』＋『一定の報酬』」「つまりギャンブル的構造は、必要不可欠」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "中下段20% — Web3 の普遍的失敗構造・大文字見せ場",
              "composition": "画面いっぱいの大文字テキスト演出。中央に「Web3 が 99.9% 失敗する理由」の大文字。下に 3 本のラインが並ぶ。各ラインの頭にバッテンマーク。背景は抽象的な破片（崩れた経済圏の象徴）。手前にクロちゃんのシルエットが小さく、手を腰に当てて立っている。",
              "expression": "なし（大文字見せ場、クロちゃんは小さいシルエット）",
              "dialogue": "大文字「Web3 が 99.9% 失敗する理由」／ライン 1「❌ ゼロから経済圏を構築しようとする」／ライン 2「❌ 既存システムの導入をしない」／ライン 3「❌ シンプルさを軽視する」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "5",
              "size": "下段15% — メルカリの比喩・結論",
              "composition": "画面を横に二分割。左半分: 現実世界のフリーマーケット風景（机と客、手書きの値札、コイン）、素朴な線画で描写。右半分: メルカリアプリ UI 風の簡略画面（商品リストと「出品」ボタン）、矢印が左→右に。下端にクロちゃんがバストアップ、穏やかに微笑む（GENTLE 寄り）。",
              "expression": "クロちゃんは GENTLE モード（柔らかい笑み、頬に手）",
              "dialogue": "大文字（左側）「既に街にあるもの——」／大文字（右側）「そのままオンラインに」／クロちゃん吹き出し「それがメルカリの正体」「ゼロから作らない。既にあるものを移すだけ」／小吹き出し「——2026 年の今も、Web3 はまだそこに辿り着いていません」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03/pages/P05.md",
          "promptSource": "episodes/ep03/prompts/P05-prompt.md",
          "buildSource": "episodes/ep03/prompts/build/P05.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 5 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 → Panel 5 (bottom).\nPanel 5 is the page ending.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nWearing casual clothes, possibly with an apron. Tired but warm eyes. Domestic atmosphere.\n\nCharacter: \"Kuro-chan\" — a stunningly beautiful female android AI secretary, late 20s. Natural curves (like Fubuki from One Punch Man — Murata version), not exaggerated. Orange/copper hair in ponytail (NEVER silver, NEVER blonde, NEVER brown in the main series).\n\nMandatory robot elements (NEVER omit any):\n- Right arm FULLY chrome from shoulder to fingertips (not just fingertips), with cyan circuit lines\n- Mechanical camera-aperture iris eyes with cyan glow (never plain eyes)\n- Chrome jaw gradient with visible panel seams on one side\n- Circuit trace lines on neck with faint cyan glow\n- Claude pixel-art mascot hair ornament with cyan glow\n- CLAUDE mark on jacket side (ON the clothing, NOT on skin — stomach must be covered)\n\nDefault clothing: Dark fitted blazer jacket (buttoned at waist), white blouse (top button open), delicate necklace.\nWearing glasses. Ponytail. Index finger raised in analytical pose. Confident analytical expression.\nEmerging from a tilted smartphone screen held by the protagonist. Shown from waist up at a slight diagonal, leaning out of the screen. A soft cyan aura surrounds her.\nSoftened smile. Hand lightly on cheek. Hair still in ponytail but warmer tone. Glasses may be removed.\n\n## Panel 1 (top, 20%)\nScene: Present-day 2026. Modern home living room in early morning, bright window behind. Shouichi in PAPA mode loungewear. Bust shot front-facing. Laptop screen glow lights his face from below (faint cyan tint). Single smartphone in his right hand.\nExpression: tired eyes, mouth neutral — quiet morning-after contemplation\nDialogue:\n- 小吹き出し: ……2022 年の話か\n- さらに小: あの 2 週間、運営は何を考えてた？\n\n## Panel 2 (middle-upper, 25%)\nScene: Smartphone exit animation — Kuro-chan emerges from the tilted smartphone screen held in Shouichi's hand. Kuro-chan shown from the waist up at a slight diagonal, leaning out of the screen. Soft cyan aura surrounds her. Shouichi's face is partially cropped at the frame edge, eyes wide with surprise. Smartphone tilted 10-15 degrees.\nExpression: Kuro-chan — knowing gentle smile; Shouichi — cropped, wide-eyed\nDialogue:\n- クロちゃん大吹き出し: ボス、良い質問です\n- 小吹き出し: ——ここで一回、整理しましょ\n\n## Panel 3 (middle, 20%)\nScene: Bust close-up of Kuro-chan, slight angle. Index finger raised. Glasses glinting. Background is deep black-to-grey gradient (lecture mode). All her robot elements clearly visible.\nExpression: analytical-smug blend — confident\nDialogue:\n- 大吹き出し: STEPN 運営は——天才的に正しかった\n- 小吹き出し: パリチャレ、エンハンス、虹プール\n- 小吹き出し: 全部『積極的に損をする構造』＋『一定の報酬』\n- 小吹き出し: つまり ギャンブル的構造は、必要不可欠\n\n## Panel 4 (middle-lower, 20%)\nScene: Large impact typography dominates the panel. Central bold text. Three lines below each with a ❌ mark. Abstract fragmented backdrop. Kuro-chan's small silhouette at lower-left, hands on hips, looking up at her own text. Her robot elements still visible in silhouette outline (right arm chrome, hair ornament glow).\nExpression: none (typography panel)\nDialogue:\n- 大文字: Web3 が 99.9% 失敗する理由\n- ❌ ゼロから経済圏を構築しようとする\n- ❌ 既存システムの導入をしない\n- ❌ シンプルさを軽視する\n\n## Panel 5 (bottom, 15%)\nScene: Horizontally split composition. Left half: hand-drawn simple sketch of a real-world flea market — small table, customer, handwritten price tags, scattered coins. Right half: simplified generic app UI with product tiles and a prominent button. An arrow connects left to right. At the bottom edge, Kuro-chan in GENTLE mode — softened smile, hand lightly on cheek. Robot elements still present.\nExpression: Kuro-chan in gentle mode — warm smile\nDialogue:\n- 大文字（左）: 既に街にあるもの——\n- 大文字（右）: そのままオンラインに\n- クロちゃん: それがメルカリの正体\n- クロちゃん: ゼロから作らない。既にあるものを移すだけ\n- 小吹き出し: ——2026 年の今も、Web3 はまだそこに辿り着いていません\n\nMood: Intellectual climax. Quiet conviction, not preachy, not condescending. Warm ending tone in Panel 5.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Cyan is permitted on Kuro-chan's robot elements AND on smartphone/laptop screen glow. Nowhere else on this page.\n- Do not expose Kuro-chan's stomach — CLAUDE mark is ON the jacket, never on skin\n- Do not change Kuro-chan's hair color — orange/copper ONLY (silver is for side stories, do not use here)\n- Do not omit any of Kuro-chan's robot elements — right arm chrome from shoulder to fingertips, aperture eyes with cyan glow, jaw panel seams, neck circuits, CLAUDE mark on jacket, pixel-mascot hair ornament\n- Do not draw a specific Mercari logo — simplified abstract app UI only\n- Do not name specific Web3 projects in the typography"
        },
        {
          "id": "P06",
          "title": "悟り＋次回フック。クロちゃんの解説を受けて翔一が「夢を見させて損をさせる構造……運営はやっぱり天",
          "purpose": "悟り＋次回フック。クロちゃんの解説を受けて翔一が「夢を見させて損をさせる構造……運営はやっぱり天才的だ」と呟く。フラッシュバックでエンハンスボタンに伸びる震える指を見せ、EP04（虹追い／虹追い回）への直接の引きを作る",
          "density": "Lv.3",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段25% — 現代・翔一の顔アップ・悟り",
              "composition": "翔一バストアップ、正面。眼鏡に朝の光の反射。口角がわずかに上がる（いかがわしい笑みが戻る）。背景はリビング・朝、窓の外が明るい。右手にスマホ、左手は口元に軽く添える。",
              "expression": "いかがわしい笑み（深い版）。目は細めて楽しそう、口角が上がる",
              "dialogue": "大吹き出し「夢を見させて——」／続けて「損をさせる構造……」／小吹き出し「運営はやっぱり天才的だ」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段20% — フラッシュバック導入・時制戻り",
              "composition": "画面の境界が波紋状に揺らぐ演出。上半分が現代の翔一の眼鏡レンズ、下半分が 2022/10/12 夜の暗いリビング。小さな注記テキスト「——あの夜、俺は」。虹色のプリズム光が画面の端に残光として差す（P04 の余韻）。",
              "expression": "なし（時制ブリッジ）",
              "dialogue": "小注記「——あの夜、俺は」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中下段30% — 2022/10/12 夜・他人のエンハンス破産動画",
              "composition": "スマホ画面クローズアップ、10-15 度傾け。YouTube のエンハンス挑戦動画のサムネが画面いっぱい。「5 足焼き 0.4% に挑戦した結果」「300 万円が 0 に」「爆死」等の煽情的タイトル複数。サムネの一部に赤字の「BANKRUPT」文字。画面の光はモノクロ基調、シアンは使わない。",
              "expression": "なし（画面のみ）",
              "dialogue": "サムネテキスト「5 足焼き挑戦！結果→→→」「300 万円が 0」「エンハンス爆死まとめ」「0.4% を信じるな」／画面外で翔一の薄い心の声「……笑えるな」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段25% — ★ラスト・翔一の指の震え",
              "composition": "翔一の右手のクローズアップ。エンハンスボタン（STEPN アプリの赤いボタン）に指先が伸びていく。指の関節がわずかに震えている（描線で表現）。背景は暗い夜のリビング、画面光だけが指を照らす。画面光はモノクロ（シアン不使用）。手の甲の血管が少し浮いている。画面外で翔一の顔は見切れ、歯を見せた笑みの口角だけが見える。",
              "expression": "翔一の顔は見切れだが歯を見せた笑みの口角が見える（いかがわしい笑みとのコントラスト）。一方で指先は震えている",
              "dialogue": "小吹き出し（画面外）「まあ、行くか——」／画面上に小さく「エンハンス Lv1 → ？」／最下段の薄いテキスト「次回：虹追い職業編」",
              "sfx": "「ピクッ」（震えを表現する効果音、控えめに）",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03/pages/P06.md",
          "promptSource": "episodes/ep03/prompts/P06-prompt.md",
          "buildSource": "episodes/ep03/prompts/build/P06.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nWearing T-shirt, optional light jacket, jeans or loungewear. Home living room setting.\nBust shot. Corner of mouth raised, eyes narrowed with amused realization. Left hand lightly touching mouth. Glasses reflecting a calm soft light.\nHand close-up only. Face absent from panel. Hand shows subtle tremor at knuckles (if specified).\nFace is mostly out of frame — only the corner of the mouth and glasses rim are visible at the panel edge.\n\n## Panel 1 (top, 25%)\nScene: Modern home living room, bright morning light through window. Bust shot of Shouichi front-facing. Glasses lenses reflecting morning light. Right hand holding smartphone, left hand lightly touching mouth.\nExpression: deep shrewd smile returning — corner of mouth raised, eyes narrowed with amused realization\nDialogue:\n- 大吹き出し: 夢を見させて——\n- 続けて: 損をさせる構造……\n- 小吹き出し: 運営はやっぱり 天才的だ\n\n## Panel 2 (middle, 20%)\nScene: Time-bridge panel. The panel frame ripples like a disturbed water surface. Upper half shows a reflected image in Shouichi's glasses lens (present-day morning). Lower half dissolves into a dim living room at night (flashback to 2022/10/12). Thin rainbow prism highlights linger at the panel's edge as afterglow residue.\nExpression: none (transition panel)\nDialogue:\n- 小注記: ——あの夜、俺は\n\n## Panel 3 (middle-lower, 30%)\nScene: Close-up smartphone screen, tilted 10-15 degrees. YouTube-style video thumbnail grid filling the screen — sensationalist enhance-failure videos. Red \"BANKRUPT\"-style markers on some. Monochrome screen glow, no cyan.\nExpression: none\nDialogue:\n- サムネ: 5 足焼き挑戦！結果→→→\n- サムネ: 300 万円が 0\n- サムネ: エンハンス爆死まとめ\n- サムネ: 0.4% を信じるな\n- （画面外の薄い心の声）……笑えるな\n\n## Panel 4 (bottom, 25%) — ★page ending\nScene: Close-up of Shouichi's right hand reaching toward a prominent red \"ENHANCE\" button on a smartphone screen. The fingertip hovers just above the button. Fine tremor lines at the finger joints. Dark night room, only the screen light illuminates the hand in monochrome (no cyan, no rainbow). Shouichi's face is cropped at frame edge — only the corner of his mouth showing a teeth-revealing smile.\nExpression: hand trembling + cropped mouth showing teeth-smile (contrast)\nDialogue:\n- 小吹き出し（画面外）: まあ、行くか——\n- 画面（小さく）: エンハンス Lv1 → ？\n- 最下段の薄いテキスト: 次回：虹追い職業編\n- 効果音（右下小さく）: ピクッ\n\nMood: Realization turning into gleeful self-destruction. Amused, not despair. Reader should feel 'he's going to do it, and he's laughing.'\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do not use cyan anywhere on this page (Kuro-chan is absent)\n- Do not let the rainbow prism afterglow in Panel 2 dominate — thin edge highlights only\n- Do not draw Shouichi's full face in Panel 4 — cropped, only the mouth corner visible\n- Do not exaggerate the finger tremor — subtle joint micro-motion only, no sweat, no tears\n- Do not show specific YouTuber faces or channel names in Panel 3"
        },
        {
          "id": "P07",
          "title": "エンハンス儀式の夜。P06 で震えた指が実際にボタンを押した瞬間を確定させる。5 足焼却の儀式ビ",
          "purpose": "エンハンス儀式の夜。P06 で震えた指が実際にボタンを押した瞬間を確定させる。5 足焼却の儀式ビジュアルとエンハンス 0.4% 抽選の緊張",
          "density": "Lv.4",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段25% — 5 足の選手入場",
              "composition": "暗い部屋のテーブル上、5 足のスニーカーが横一列に並ぶ俯瞰ショット。各スニーカーは種類が異なる（Common×2, Uncommon×2, Rare×1）。背景は黒、唯一の光源はスマホ画面からのオレンジ光。スニーカーの下に薄く値札テキストが散る「¥40,000」「¥80,000」「¥140,000」「¥180,000」「¥220,000」。画面外で翔一の右手が見切れている（スマホを握る）。",
              "expression": "なし（物の描写）",
              "dialogue": "薄い心の声「5 足——合わせて 66 万」／値札テキスト",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段25% — エンハンスボタン押下の瞬間",
              "composition": "スマホ画面の超クローズアップ、10-15 度傾け。STEPN アプリの Enhance 画面、中央に大きな赤ボタン「ENHANCE (5/5)」、下に小さく「Rainbow probability: 0.4%」。翔一の親指が赤ボタンにちょうど触れる瞬間、押下の沈み込みが描線で示される。画面周囲は完全な黒。",
              "expression": "なし（指と画面のみ）",
              "dialogue": "小吹き出し（画面外）「——ポチッとな」／画面「ENHANCE (5/5)」「Rainbow probability: 0.4%」",
              "sfx": "「カチッ」（タップ音、小さく右下）",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中下段30% — ★5 足焼却の儀式ビジュアル",
              "composition": "画面全体が儀式的な縦構図。5 足のスニーカーが空中に浮遊し、螺旋状に粒子化していく。粒子はプリズム（虹色）で描画。背景は黒の虚空、粒子の軌跡だけが光る。画面中央に薄い英語テキスト「ENHANCING... 1 / 200」（0.4% = 1/200 の確率）。翔一の姿はない（儀式そのものに吸い込まれた感覚）。",
              "expression": "なし（儀式ビジュアル）",
              "dialogue": "中央テキスト「ENHANCING... 1 / 200」／画面下の薄い心の声「66 万円が、煙になっていく」",
              "sfx": "なし（視覚インパクトで）",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段20% — 結果処理中・翔一の拳",
              "composition": "左半分: スマホ画面の結果処理中アニメ（ローディングサークル＋「CALCULATING...」）、10-15 度傾け。右半分: 翔一の右手のクローズアップ、握りしめた拳が震えている。関節が白い。背景は暗い。",
              "expression": "翔一の顔は不在（拳のみ）。握りしめの力で感情を伝える",
              "dialogue": "画面「CALCULATING...」／小吹き出し「……1/200 に、当たってくれ」／さらに小さく「俺は、ジェム側の人間だった——」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03/pages/P07.md",
          "promptSource": "episodes/ep03/prompts/P07-prompt.md",
          "buildSource": "episodes/ep03/prompts/build/P07.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nWearing T-shirt, optional light jacket, jeans or loungewear. Home living room setting.\nHand close-up only. Face absent from panel. Hand shows subtle tremor at knuckles (if specified).\n\n## Panel 1 (top, 25%)\nScene: Overhead shot of a table in a dim night room. Five different sneakers lined up in a row (two Common grade, two Uncommon, one Rare — slight size/style variation). Below each sneaker, faint price tag text scattered. Only light source is smartphone screen glow from off-frame upper-right — warm orange tint, no cyan. Shouichi's right hand partially visible at upper-right frame edge.\nExpression: none (ceremonial stillness)\nDialogue:\n- 値札: ¥40,000\n- 値札: ¥80,000\n- 値札: ¥140,000\n- 値札: ¥180,000\n- 値札: ¥220,000\n- （薄い心の声）5 足——合わせて 66 万\n\n## Panel 2 (middle, 25%)\nScene: Ultra close-up of smartphone screen, tilted 10-15 degrees. STEPN-style Enhance screen with a large centered red button \"ENHANCE (5/5)\". Below it, small text \"Rainbow probability: 0.4%\". Shouichi's thumb caught at the exact moment of contact — button surface slightly depresses under the thumb. Pure black surrounding background.\nExpression: none (indirect — thumb only)\nDialogue:\n- 小吹き出し（画面外）: ——ポチッとな\n- 画面: ENHANCE (5/5)\n- 画面: Rainbow probability: 0.4%\n- 効果音（小、右下）: カチッ\n\n## Panel 3 (middle-lower, 30%) — ★ritual climax\nScene: Vertical ritual composition. Five sneakers floating upward, each dissolving into swirling spiraling particle streams. Particles render as full-spectrum rainbow prism iridescence (full rainbow, not just cyan). Ascending spirals of particle trails. Background deep black void — only particle trails and thin sneaker outlines visible. Shouichi is absent.\nExpression: none (character absent)\nDialogue:\n- 中央テキスト: ENHANCING... 1 / 200\n- （画面下部の薄い心の声）66 万円が、煙になっていく\n\n## Panel 4 (bottom, 20%)\nScene: Split composition. Left half: smartphone screen tilted 10-15 degrees, showing processing animation — loading circle with \"CALCULATING...\" label. Right half: close-up of Shouichi's clenched right fist, trembling, knuckles turned white. Face absent. Dark monochrome background.\nExpression: fist tension only (face absent)\nDialogue:\n- 画面: CALCULATING...\n- 小吹き出し: ……1/200 に、当たってくれ\n- さらに小: 俺は、ジェム側の人間だった——\n\nMood: Gambling ritual. Solemn machine consuming money. Tension, not despair, not comedy. The man is absorbed — his face is withheld deliberately.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do not draw Shouichi's face in any panel on this page — hand only in Panels 1 and 4, fully absent in Panels 2 and 3\n- Do not reveal the enhance result on this page (that is Panel 1 of P08)\n- Do not use cyan anywhere on this page\n- Rainbow prism is permitted ONLY in Panel 3 (the sneaker dissolution particles)\n- Do not make the red Enhance button glow dramatically — subtle depression under thumb only"
        },
        {
          "id": "P08",
          "title": "外れの結果と、翔一の「まだだ」宣言。エンハンス 0.4% に外れ、虹ではなく通常靴 1 足が返っ",
          "purpose": "外れの結果と、翔一の「まだだ」宣言。エンハンス 0.4% に外れ、虹ではなく通常靴 1 足が返ってくる。翔一は笑みを保ちながら再挑戦を決意。EP04（虹追い／虹追い回）への直接のブリッジ",
          "density": "Lv.3-4",
          "status": "下書き",
          "pattern": "",
          "techniques": "",
          "flow": "",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上段25% — 結果画面・外れ",
              "composition": "スマホ画面の超クローズアップ、15 度傾け。STEPN アプリ結果画面。中央に地味な通常靴のアイコン 1 足と「Common Sneaker ×1」の表示。下に「Value: approx. 40,000 JPY」。画面の隅に「Previous inputs: 5 shoes, total value 660,000 JPY」が小さく。虹要素は一切ない。画面の光はオレンジ、シアンなし。背景は暗い部屋。",
              "expression": "なし（画面のみ）",
              "dialogue": "画面「Enhancement Result」「Common Sneaker ×1」「Value: approx. 40,000 JPY」／小テキスト「Previous: 5 shoes (660,000 JPY)」／画面外の薄い心の声「——外れた」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中段30% — 翔一の顔・シュレディンガー表情",
              "composition": "翔一の顔のクローズアップ、正面。画面を左右に二分する影で顔の左半分が影、右半分が光。左側（影）は無表情、右側（光）はわずかに歯を見せた笑み。眼鏡の両レンズに別の光が映り込む：左はスマホのオレンジ光、右は窓からの白い朝光。朝に変わったことが一枚絵で分かる構成。",
              "expression": "シュレディンガー表情（絶望と笑みが同居）",
              "dialogue": "なし（顔だけで語る）",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "中下段25% — ワイン＋テーブル・敗北のヒント",
              "composition": "テーブル上の俯瞰ショット。空のワインボトル（安物の紙パック赤ワイン＝敗北のワイングレード）が倒れている。横にワイングラスが残り、赤いシミ。スマホが画面を下にして伏せられている。窓の外から朝の白い光が差し込む。時計は「06:47」を示す。",
              "expression": "なし（物の描写で翔一の状態を伝える）",
              "dialogue": "小テキスト（画面外の独白）「——勝利のワインじゃ、なかったな」",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段20% — ★「まだだ」＋EP04 ブリッジ",
              "composition": "翔一のロングショット・後ろ姿。PC 机に座り、再びスマホを開いている。画面に新しい 5 足の候補が並んでいるのが遠目に見える。翔一の背中は姿勢正しく、どこか確信に満ちている。背景の窓から朝の光が射して翔一の輪郭を照らす。下端に薄いテキスト「次回：虹追い職業編 — 1,000 回焼いても、止まらない者たち」。",
              "expression": "顔は見えない（後ろ姿）。姿勢の正しさで決意を伝える",
              "dialogue": "大吹き出し「まだだ」／小吹き出し「次も、続ける」／最下段の予告テキスト",
              "sfx": "なし",
              "density": "",
              "techniques": ""
            }
          ],
          "source": "episodes/ep03/pages/P08.md",
          "promptSource": "episodes/ep03/prompts/P08-prompt.md",
          "buildSource": "episodes/ep03/prompts/build/P08.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Shouichi-specific):\n- 42-year-old Japanese MAN (never young, never handsome idol)\n- RECTANGULAR black-framed glasses ONLY (never round, never thin, never oval)\n- Never remove glasses\n- Short slightly messy black hair with grey mixed in (salt-and-pepper)\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume default: casual loungewear / T-shirt / walk casual (NOT suit unless panel explicitly says WORK mode)\nCharacter: Shouichi Sakuragi, a 42-year-old Japanese man. RECTANGULAR black-framed glasses (never round, never thin). Short slightly messy black hair with grey mixed in (salt-and-pepper). Middle-aged, ordinary-looking, NOT a handsome idol. Semi-realistic manga style consistent across all panels.\nWearing T-shirt, optional light jacket, jeans or loungewear. Home living room setting.\nBack shot from behind. Face not visible. Posture upright, shoulders firm — indicating steady decision.\n\n## Panel 1 (top, 25%)\nScene: Ultra close-up of smartphone screen, tilted 15 degrees. STEPN-style Enhancement Result screen showing a plain, unremarkable Common Sneaker icon at center. Deliberately underwhelming — no rainbow, no glow, no fanfare. Warm orange screen tint only, no cyan. Dark surrounding room. Generous negative space.\nExpression: none\nDialogue:\n- 画面上部: Enhancement Result\n- 画面中央: Common Sneaker ×1\n- 画面中央下: Value: approx. 40,000 JPY\n- 画面隅の小テキスト: Previous inputs: 5 shoes, total value 660,000 JPY\n- （画面外の薄い心の声）——外れた\n\n## Panel 2 (middle, 30%)\nScene: Close-up front of Shouichi's face. Vertical half-split by a shadow line down the center of his face. Left half deep shadow (expression neutral/blank). Right half illuminated by bright morning window light (faint teeth-showing smile, corner of mouth raised). The two glasses lenses reflect different light sources: left lens reflects warm orange (lingering smartphone light), right lens reflects cold white morning light. Time has shifted from night (Panel 1) to morning within this panel.\nExpression: Schrodinger expression — blankness and smile coexist\nDialogue: なし（顔だけで語る）\n\n## Panel 3 (middle-lower, 25%)\nScene: Overhead shot of the table. An empty cheap paper-carton-type red wine container tipped sideways (clearly low-grade — not a fine wine bottle). Beside it, a wine glass with red residue. The smartphone lies face-down on the table. Morning light streams through the window from upper-frame. A clock somewhere visible reading \"06:47\".\nExpression: none\nDialogue:\n- 小テキスト（画面外の独白）: ——勝利のワインじゃ、なかったな\n\n## Panel 4 (bottom, 20%) — ★page ending / EP04 bridge\nScene: Long shot from behind. Shouichi sitting at PC desk seen from behind. Back straight, shoulders firm. On his smartphone in the distance on the desk, a fresh lineup of five new sneaker candidates is partially visible. Morning window light silhouettes his outline. Face not visible.\nExpression: none (decision conveyed by upright posture)\nDialogue:\n- 大吹き出し: まだだ\n- 小吹き出し: 次も、続ける\n- 最下段の予告テキスト: 次回：虹追い職業編 — 1,000 回焼いても、止まらない者たち\n\nMood: Failure digested with composure. Quiet weight, not despair, not triumph. Final panel: steady readiness for the next attempt — 'he's going to do it again, and he's not shaken.'\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do not draw Shouichi's face in Panel 4 — back view only\n- Do not make the split-lighting in Panel 2 too theatrical — natural morning arriving\n- Do not use a high-end wine bottle in Panel 3 — cheap paper-carton type only\n- Do not use cyan anywhere on this page\n- Do not use any rainbow/prism color — the loss is registered in pure monochrome\n- Do not show the Common Sneaker in Panel 1 with glow or flourish — it is the anti-climax\n- Do not name specific Rainbow-chaser influencers in the preview text"
        }
      ],
      "pageCount": 8,
      "promptCount": 8,
      "title": "EP03: 虹編",
      "summary": "「GMT アーニング実装で翔一が稼ぎ始めた」のが起点、ではない。順序が逆だった。 先に「GMT を稼ぐには Comfort を上げる必要がある」という情報が漏れる。気づいた瞬間に全員が赤ジェムに殺到、一般プレイヤーの手の届く価格帯ではなくなる。庶民が締め出された後に 9/28 GMT アーニング実装が来て、「ジェムさえあれば 465 時間もかからない」と皆が日給いくらで盛り上がる。そのわずか 2 週間後、10/12 虹スニーカー実装——「GMT 報酬の 60% は虹プール」。通常靴プレイヤーは残飯 40% の奪い合い。ここでクロちゃんが現代パートに登場し、Web3 業界の普遍的な失敗構造を解説する：「ゼロから経済圏を構築しようとする」罠、「メルカリ級のシンプルさでないと成立しない」こと、2026 年の今もまだ成功例がない現実。最後に翔一の指がエンハンスボタンに震えて伸びる。",
      "status": "下書き",
      "kind": "",
      "postUnit": "",
      "source": "episodes/ep03/episode-design.md"
    },
    {
      "id": "EP99",
      "slug": "ep99",
      "label": "EP99",
      "reboot": false,
      "pages": [
        {
          "id": "P01",
          "title": "導入・タカシ疲弊の提示・LINE通知による情報入手",
          "purpose": "導入・タカシ疲弊の提示・LINE通知による情報入手",
          "density": "Lv.2（全体的にsetup、climax panelなし。P03-P05で爆発させる前の基準値）",
          "status": "確定",
          "pattern": "P01-quiet-base（静の基準値 — 後の爆発の倍率を上げる導入として最適）",
          "techniques": "",
          "flow": "右上（縦書きナレ） → 中央（タカシのバストアップ） → 左下（スマホ画面俯瞰）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上・細長ナレ枠、画面右端に縦",
              "composition": "縦書きモノローグナレ枠（画面幅20%・高さ70%）＋奥に朝の通勤駅ホームのシルエット（極省略、線のみ）",
              "expression": "表情描写なし（ナレ枠のみの機能）",
              "dialogue": "ナレ「——2022年 5月。/ 俺の朝は、いつも同じだった。」（縦書き小フォント）",
              "sfx": "なし",
              "density": "Lv.1（ラフ線・背景ほぼなし）",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "中央・バストアップ大",
              "composition": "満員電車、タカシのバストアップ。手は頭上の吊革を掴む。背後に他の乗客のシルエット（顔描かない）",
              "expression": "疲弊モード。下向き虚ろな目、口は閉じる、肩が下がる（fatigue）",
              "dialogue": "モノローグ「SE12年、残業月80時間。/ 死なないだけの人生。」",
              "sfx": "「ゴトッ…ゴトッ…」（電車の揺れ、小文字）",
              "density": "Lv.2（やや省エネ、背景乗客はシルエットのみ）",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "左下・小コマ、スマホ画面俯瞰",
              "composition": "タカシの手元のスマホ画面をほぼ真上から俯瞰（画面を10-15度傾けて描写）。LINE通知「ユウタ: 『マジで走って稼げるアプリあるって！』」のテキストが見える",
              "expression": "顔は描かず、スマホ画面が主役。画面光はシアン（#00BCD4）微発光",
              "dialogue": "画面内テキスト「ユウタ: マジで走って稼げるアプリあるって！」",
              "sfx": "「ピコン」（通知音、極小）",
              "density": "Lv.3（スマホ画面のUIを丁寧に描く）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep99/pages/P01.md",
          "promptSource": "episodes/ep99/prompts/P01-prompt.md",
          "buildSource": "episodes/ep99/prompts/build/P01.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 3 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (middle) → Panel 3 (bottom).\nPanel 3 is the page ending — place the emotional payoff here.\n\nSTRICT CHARACTER RULES (Takashi-specific, overrides Shouichi rules when present):\n- 32-year-old Japanese MAN (NOT 42, younger than Shouichi)\n- THIN ROUND-FRAMED black glasses ONLY (thin wire rim, rounded shape — DIFFERENT from Shouichi's rectangular frames)\n- Never remove glasses\n- Short slightly messy black hair, NO grey mixed (younger than Shouichi, pure black)\n- Slim build, lean face\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume varies by scene (dark suit in commute, casual in running, ceremonial when deciding)\n- NEVER render Takashi with rectangular glasses (that is Shouichi's feature)\n- NEVER render grey hair on Takashi\n- Claude-chan / Kuro-chan does NOT appear in Takashi's spinoff (never include robot AI character)\nCharacter: Takashi, a 32-year-old Japanese male software engineer. THIN ROUND-FRAMED black glasses (thin wire rim, rounded shape — clearly different from Shouichi's rectangular frames). Short slightly messy black hair, NO grey mixed (younger than Shouichi). Slim build, lean face, mildly fatigued expression at baseline. Semi-realistic manga style, ordinary-looking, NOT a handsome idol.\nFatigue mode. Dark business suit, loose tie. Standing in packed morning commuter train, hand holding overhead strap. Dark circles under eyes. Blank downward gaze, mouth slightly closed, shoulders slumped.\nCurious mode. Bust shot, slight lean toward phone screen. Right hand holding smartphone at 10-15 degree tilt with cyan screen glow on the face. Eyebrows slightly raised, mouth barely parted. Fatigue still present but replaced by a small spark of interest.\n\n## Panel 1 (top 30%, narrow vertical narration strip on right edge)\n\nScene: Thin vertical narration box on the right edge of the panel (Japanese text, vertical layout, small font). Behind it, extremely loose sketchy silhouette lines of a morning train station platform at dawn. Almost entirely negative space. Background is nearly blank, only 1-2 horizontal station ceiling lines. Density Lv.1 (extreme setup).\n\nNarration text (Japanese vertical, small): 「——2022年 5月。」「俺の朝は、いつも同じだった。」\n\n## Panel 2 (middle 45%, bust shot)\n\nScene: Bust shot of Takashi in a packed morning commuter train. Hand gripping an overhead strap. Dark business suit, loose tie. Tired face: eyes downcast, mouth closed, shoulders slumped. Behind him, 3-4 other commuters rendered as dark silhouettes WITHOUT facial features. Dim fluorescent train light from above. Density Lv.2 (basic setup lines, minimal shading, grey screentone on suit).\n\nExpression: fatigue mode (baseline tired SE).\n\nMonologue (not speech bubble, handwriting-style caption):「SE12年、残業月80時間。」「死なないだけの人生。」\n\nSmall sound effect in corner: 「ゴトッ…ゴトッ…」 (tiny font, train rumble).\n\n## Panel 3 (bottom 25%, smartphone overhead shot)\n\nScene: Close overhead shot of Takashi's hand holding a smartphone tilted 10-15 degrees (NOT flat). The phone screen fills most of the panel. On screen: a realistic LINE messaging app UI with a green chat bubble showing the message \"ユウタ: マジで走って稼げるアプリあるって！\". Screen glow is cyan (#00BCD4), softly illuminating the edge of his thumb. Density Lv.3 (phone UI details carefully drawn — keyboard hint, time stamp, profile icon).\n\nTiny onomatopoeia near the top corner: 「ピコン」 (notification chime, very small).\n\nNo face visible — only the hand and the screen.\n\nMood: Quiet fatigue of daily commute, broken by a tiny spark of curiosity from a LINE message. Calm, not dramatic.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT show Takashi with rectangular black glasses — his glasses are THIN ROUND-FRAMED\n- Do NOT draw faces on other commuters (silhouettes only)\n- Do NOT place any text in the background outside of the phone screen"
        },
        {
          "id": "P02",
          "title": "決断の瞬間",
          "purpose": "決断の瞬間 — ATM送金からNFT靴到着まで1ページに凝縮",
          "density": "Lv.2（ナレ帯） + Lv.4（大ゴマ） の対比で富樫ハイブリッド成立",
          "status": "確定",
          "pattern": "P12-strip-plus-big（細長帯+大ゴマ — 時間経過と場面確定）",
          "techniques": "",
          "flow": "右上（時間ナレ） → 中央（ATM遠景） → 左下（靴到着のスマホ画面）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上・細長ナレ帯、画面幅100% × 高さ20%",
              "composition": "横長パノラマ。深夜のコンビニ外観、ATMサインが光る。街灯、自販機、人気ない歩道。右端に縦書きナレ枠",
              "expression": "人物登場なし",
              "dialogue": "ナレ「——5月3日、深夜2時。」「人生で初めて、暗号通貨のボタンを押す。」",
              "sfx": "「ジーッ…」（自販機の低音、極小）",
              "density": "Lv.2（背景はラフ線、コンビニ看板のロゴ類は省略）",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "下・大ゴマ、画面幅100% × 高さ80%",
              "composition": "コマ内で3つの要素を同時提示 — ①右上にATM画面（送金完了の表示、画面を10-15度傾けて描写）②中央にタカシのバストアップ（ATMの前、やや俯瞰、ATM画面の白光が顔に）③左下にタカシの手に持つスマホ、STEPNアプリ画面に新着NFT「Walker #42817」の靴が出現（シアン光）",
              "expression": "ATM送金モード → 発見の微笑の中間。口がわずかに開く、眉がわずかに上がる。「賭けた」と「届いた」が同時に表現されている",
              "dialogue": "モノローグ小「4万円。」「1ヶ月分の飲み代。」「賭けた。」／画面内テキスト（小）「SEND COMPLETE」／スマホ画面テキスト「YOUR SHOE HAS ARRIVED: Walker #42817」",
              "sfx": "「ピコン！」（靴到着の通知音、中サイズ、シアン縁取り）",
              "density": "Lv.4（3要素を緻密に描き込む、climax panel）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep99/pages/P02.md",
          "promptSource": "episodes/ep99/prompts/P02-prompt.md",
          "buildSource": "episodes/ep99/prompts/build/P02.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\nSTRICT CHARACTER RULES (Takashi-specific, overrides Shouichi rules when present):\n- 32-year-old Japanese MAN (NOT 42, younger than Shouichi)\n- THIN ROUND-FRAMED black glasses ONLY (thin wire rim, rounded shape — DIFFERENT from Shouichi's rectangular frames)\n- Never remove glasses\n- Short slightly messy black hair, NO grey mixed (younger than Shouichi, pure black)\n- Slim build, lean face\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume varies by scene (dark suit in commute, casual in running, ceremonial when deciding)\n- NEVER render Takashi with rectangular glasses (that is Shouichi's feature)\n- NEVER render grey hair on Takashi\n- Claude-chan / Kuro-chan does NOT appear in Takashi's spinoff (never include robot AI character)\nCharacter: Takashi, a 32-year-old Japanese male software engineer. THIN ROUND-FRAMED black glasses (thin wire rim, rounded shape — clearly different from Shouichi's rectangular frames). Short slightly messy black hair, NO grey mixed (younger than Shouichi). Slim build, lean face, mildly fatigued expression at baseline. Semi-realistic manga style, ordinary-looking, NOT a handsome idol.\nATM mode. Bust shot, standing in front of a convenience-store ATM at night. Inserting a debit card. Slight tension in fingers. Glasses reflecting the ATM screen glow (white light, NOT cyan). Mouth tight.\n\n## Panel 1 (top 20%, thin horizontal strip, establishing shot)\n\nScene: Wide panoramic strip. Late-night convenience-store exterior, generic (no brand logo). ATM sign glowing with white light. Empty sidewalk, street lamp, a vending machine. Right edge of the panel has a vertical Japanese narration box (small font).\n\nNarration text (vertical, small): 「——5月3日、深夜2時。」「人生で初めて、暗号通貨のボタンを押す。」\n\nTiny sound effect in a corner: 「ジーッ…」 (vending machine hum, extremely small).\n\nDensity Lv.2 — loose sketchy lines on the storefront, minimal shading, lots of open sky.\n\n## Panel 2 (bottom 80%, large complex panel with 3 clearly separated visual elements)\n\nScene: A single large panel containing 3 distinct sub-areas arranged in a right-to-left flow:\n\nELEMENT A (top-right corner, medium size): ATM screen tilted at a slight angle, showing a \"SEND COMPLETE\" confirmation in white text on a dark background. Takashi's hand partially visible at the ATM keypad.\n\nELEMENT B (center, main focus): Bust shot of Takashi standing in front of the ATM. Slight low-angle view. ATM screen's white light illuminates his face from the front. Round thin-framed glasses reflecting the white light. Mouth slightly parted, eyebrows lightly raised — an expression balanced between \"I just bet\" and \"and it arrived\". Dark business suit, tie loosened.\n\nELEMENT C (bottom-left corner, medium size): Takashi's other hand holding a smartphone tilted 10-15 degrees. On the screen: a freshly appeared NFT notification showing a stylized white-based sneaker labeled \"Walker #42817\". The phone screen has cyan (#00BCD4) glow softly lighting the corner of his hand.\n\nThree small speech/thought bubbles inside the panel (handwriting-caption style, not full speech bubbles): 「4万円。」 「1ヶ月分の飲み代。」 「賭けた。」\n\nTwo tiny in-screen texts: \"SEND COMPLETE\" (ATM), \"YOUR SHOE HAS ARRIVED: Walker #42817\" (smartphone).\n\nSound effect near the smartphone: 「ピコン！」 (with cyan outline, medium size, integrated into composition).\n\nDensity Lv.4 — this is the climax panel of this page: detailed ATM interface, precise smartphone UI with the NFT sneaker illustration, sharp shadow contrast on face.\n\nMood: A quiet late-night gamble. First-time crypto purchase. Tension mixed with slight wonder as the NFT shoe arrives on screen. Not fear, not euphoria — a single focused breath.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT draw recognizable brand logos (Lawson, 7-Eleven, Nike, etc.)\n- Do NOT show cyan glow on ATM screen — only on the smartphone screen (cyan color rule)\n- Do NOT render Takashi with rectangular glasses"
        },
        {
          "id": "P03",
          "title": "初ラン",
          "purpose": "初ラン — 小さな奇跡の体感（+5 GST→換金¥5,000）",
          "density": "Lv.4（上大ゴマ climax） + Lv.2-3（下段3コマ setup）",
          "status": "確定",
          "pattern": "P09-top-big-three-small（大ゴマ上+下段3分割 — シーン導入+リアクション展開）",
          "techniques": "",
          "flow": "上大ゴマ（ランニング） → 下段右（GSTカウンター） → 下段中（換金ボタン） → 下段左（¥5,000着金）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上・大ゴマ、画面幅100% × 高さ55%",
              "composition": "早朝5時の公園を走るタカシ。全身・中景。夜明けのオレンジ雲（モノクロではグレー階調で表現）、桜の花びらが舞う、息が白く見える、朝霧。タカシは白Tシャツ、紺のトラックジャケット（前開け）、黒ショーツ、白の安いスニーカー「Walker」、上腕にスマホアームバンド（シアン光）",
              "expression": "first-runモード — 緩い姿勢、息切れ気味、口は少し開く、目は前方、慣れないランニング。しかし初めての「動く」喜びが眉間に表れている",
              "dialogue": "モノローグ「朝5時。/ 12年間、見たことのない空。」",
              "sfx": "「ザッ…ザッ…ザッ…」（足音、リズミカル）「ハァ…ハァ…」（呼吸、小）",
              "density": "Lv.4（背景の公園・木々・光を緻密に、setup panelとの対比ポイント）",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "下段右・小コマ、画面幅33% × 高さ45%",
              "composition": "スマホ画面（10-15度傾け）のクローズアップ。STEPNアプリのカウンター表示「+5.00 GST」がシアン光で点灯。背景は腕のトラックジャケット生地",
              "expression": "顔は映さず、画面のみ",
              "dialogue": "モノローグ「+5 GST。」",
              "sfx": "「ピコッ」（アプリの獲得音、極小）",
              "density": "Lv.3（UIを丁寧に）",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "下段中・小コマ、画面幅33% × 高さ45%",
              "composition": "スマホ画面（10-15度傾け）、別画面に切り替わり。「SWAP GST → USDC」のボタンが中央に大きい。タカシの指がボタンに触れる瞬間",
              "expression": "顔は映さず、指のクローズアップのみ（緊張した指先）",
              "dialogue": "画面内テキスト「SWAP GST → USDC」、モノローグ「ほんとに……？」",
              "sfx": "なし",
              "density": "Lv.2（省エネ、手とUIのみ）",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "下段左・小コマ、画面幅33% × 高さ45%",
              "composition": "タカシの顔のクローズアップ（バストアップより近い）。スマホ画面が顔を下から照らす（シアン光）。表情は「discovery-smile」— 目が見開き、口角が微笑み、ほお染め。glasses反射",
              "expression": "発見の微笑モード — 「嘘だろ」の驚き＋「本当なんだ」の喜び",
              "dialogue": "モノローグ（大文字強調）「¥5,000……着金……！！」",
              "sfx": "なし（表情で魅せる）",
              "density": "Lv.4（climaxに近い、感情のピーク）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep99/pages/P03.md",
          "promptSource": "episodes/ep99/prompts/P03-prompt.md",
          "buildSource": "episodes/ep99/prompts/build/P03.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels.\nLayout: Panel 1 on top, Panel 2 below, then bottom row splits into Panel 3 (right side, read first) and Panel 4 (left side, read last — page ending).\nReading order: Panel 1 → 2 → 3 (bottom-right) → 4 (bottom-left).\nBottom-left panel is the page ending — place the emotional payoff there.\n\nSTRICT CHARACTER RULES (Takashi-specific, overrides Shouichi rules when present):\n- 32-year-old Japanese MAN (NOT 42, younger than Shouichi)\n- THIN ROUND-FRAMED black glasses ONLY (thin wire rim, rounded shape — DIFFERENT from Shouichi's rectangular frames)\n- Never remove glasses\n- Short slightly messy black hair, NO grey mixed (younger than Shouichi, pure black)\n- Slim build, lean face\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume varies by scene (dark suit in commute, casual in running, ceremonial when deciding)\n- NEVER render Takashi with rectangular glasses (that is Shouichi's feature)\n- NEVER render grey hair on Takashi\n- Claude-chan / Kuro-chan does NOT appear in Takashi's spinoff (never include robot AI character)\nCharacter: Takashi, a 32-year-old Japanese male software engineer. THIN ROUND-FRAMED black glasses (thin wire rim, rounded shape — clearly different from Shouichi's rectangular frames). Short slightly messy black hair, NO grey mixed (younger than Shouichi). Slim build, lean face, mildly fatigued expression at baseline. Semi-realistic manga style, ordinary-looking, NOT a handsome idol.\nFirst-run mode. Full body running shot in early morning park. White T-shirt, navy track jacket unzipped, black running shorts, cheap white sneakers labeled \"Walker\". Loose posture (not athletic). Smartphone strapped to upper arm with cyan screen glow. Breath visible in cool air.\nDiscovery mode. Close-up face. Eyes focused on smartphone screen (held at 10-15 degree tilt, cyan glow lighting half the face). Corner of mouth raising into a wondering small smile. Glasses lenses reflecting the +5 GST display.\n\n## Panel 1 (top 55%, establishing climax shot)\n\nScene: Wide full-body shot of Takashi running in an empty park at early dawn. Behind him: a dawn sky in greyscale with subtle orange-tone gradient screentone, 3-4 cherry blossom petals drifting, mild morning mist, bare branches of park trees. He wears: white T-shirt, navy track jacket unzipped, black running shorts, plain white cheap sneakers labeled \"Walker\". An arm strap holds his smartphone (screen facing outward, cyan #00BCD4 glow visible). His posture is loose, not athletic — eyebrows slightly knit with the unfamiliar effort, mouth slightly open catching breath. But a faint positive energy. The first-run mode.\n\nMonologue (handwriting caption, upper-right area): 「朝5時。」「12年間、見たことのない空。」\n\nSound effects (small font, rhythmic): 「ザッ…ザッ…ザッ…」 along the ground, 「ハァ…ハァ…」 near his mouth.\n\nDensity Lv.4 — detailed park background, careful light direction, multi-layer screentone on sky.\n\n## Panel 2 (bottom-right, 33% width, 45% height — read first in right-to-left flow)\n\nScene: Extreme close-up of the smartphone screen tilted 10-15 degrees, strapped to Takashi's upper arm. The STEPN-style app UI shows a counter \"+5.00 GST\" glowing cyan (#00BCD4). Behind the phone: the texture of his navy track jacket fabric. No face visible.\n\nMonologue caption (small): 「+5 GST。」\n\nTiny sound effect: 「ピコッ」 (app earning chime, tiny font).\n\nDensity Lv.3 — careful UI detail but minimal background.\n\n## Panel 3 (bottom-center, 33% width, 45% height)\n\nScene: Smartphone screen tilted 10-15 degrees, showing a different screen now: a large prominent button labeled \"SWAP GST → USDC\" centered. Takashi's thumb approaching the button, tip of finger slightly trembling. No face, only hand and screen.\n\nIn-screen text: \"SWAP GST → USDC\"\n\nMonologue caption (small): 「ほんとに……？」\n\nDensity Lv.2 — sketchy loose lines, only hand and UI.\n\n## Panel 4 (bottom-left, 33% width, 45% height — page ending, emotional payoff)\n\nScene: Close-up of Takashi's face, even tighter than a bust shot. The smartphone is below frame, its cyan glow illuminating his face from below. Round thin-framed glasses reflecting the cyan light. Eyes wide open, pupils focused on the screen. Mouth raised into a soft wondering smile. A subtle blush on cheekbones. Discovery-smile mode. The moment of realizing something real just happened.\n\nMonologue (handwriting caption, bold and larger than other monologues): 「¥5,000……着金……！！」\n\nDensity Lv.4 — detailed face, careful shadow play, this is the emotional climax of the page.\n\nMood: The small miracle of the first earning. Gentle awe at the quiet morning world, followed by disbelief and joy at receiving 5000 yen — not a lottery win, but the first proof that this strange app actually works.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT draw Nike/Adidas-recognizable sneakers — Walker is a plain white abstract sneaker\n- Do NOT show specific real park names (Yoyogi, etc.) on signs\n- Do NOT display any non-USDC crypto UI in background\n- Do NOT render rectangular glasses on Takashi"
        },
        {
          "id": "P04",
          "title": "増殖",
          "purpose": "増殖 — スプレッドシートで2→4→9足の展開、月収150万円到達",
          "density": "Lv.2（3コマ setup） + Lv.4（左下大コマ climax）の対比",
          "status": "確定",
          "pattern": "P15-sym-grid-break（田の字を崩す4コマ — 日常感+変化、左下を大きく）",
          "techniques": "",
          "flow": "右上（2足） → 左上（4足） → 右下（9足小） → 左下（月収150万・大）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "右上・中コマ、画面幅50% × 高さ45%",
              "composition": "タカシの自宅デスク、モニター画面。スプレッドシートがメイン。画面に「1足 → 2足 購入／日収¥10,000」の表。画面外にタカシの手（マウス操作）とコーヒーカップが見える。デスクライトの下",
              "expression": "顔は映らず、分析モードの雰囲気のみ",
              "dialogue": "モノローグ「5月 10日。2足目、追加。」",
              "sfx": "なし",
              "density": "Lv.2（ラフ、デスク周りは省略）",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "左上・中コマ、画面幅50% × 高さ45%",
              "composition": "同じデスク、別の日。画面のスプレッドシートが拡張「2足→4足／日収¥40,000」。今度はデスクに食べかけのカップラーメン、空のエナジードリンク缶2本。時計は深夜2時",
              "expression": "顔は映らず、だが手が数字を指差している",
              "dialogue": "モノローグ「5月 20日。」「増えてる。」",
              "sfx": "なし",
              "density": "Lv.2（ラフ、散らかり感で時間経過を表現）",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "右下・小コマ、画面幅35% × 高さ55%",
              "composition": "スマホアプリ画面（10-15度傾け）。STEPNのインベントリ一覧、靴が9足ずらりと並ぶ。各靴にシアン光、レベル数字",
              "expression": "顔なし、画面のみ",
              "dialogue": "画面内テキスト「INVENTORY: 9 shoes」、モノローグ小「9足。」",
              "sfx": "なし",
              "density": "Lv.3（UIを緻密に、9足それぞれ微妙に違うデザイン）",
              "techniques": ""
            },
            {
              "n": "4",
              "size": "左下・大コマ、画面幅65% × 高さ55%、田の字を崩す拡大",
              "composition": "タカシの顔のクローズアップ。モニターの白光が顔を照らす（シアン光ではない、一般のPC画面光）。画面反射で glasses に数字「¥1,500,000」が映る。背景はぼかし",
              "expression": "analyst-mode — シニカルな知的満足の微笑、口角が片方だけ上がる、目は鋭い数字への執着。ドヤ顔ではなく「読み切った者の静かな笑み」",
              "dialogue": "モノローグ（大きめ）「月収……」「150万円。」「SEの年収の、2ヶ月分。」「——嘘みたいだ。」",
              "sfx": "なし（静の中の爆発）",
              "density": "Lv.4（clim ax panel、顔の情報量最大化）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep99/pages/P04.md",
          "promptSource": "episodes/ep99/prompts/P04-prompt.md",
          "buildSource": "episodes/ep99/prompts/build/P04.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 4 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 → Panel 3 → Panel 4 (bottom).\nPanel 4 is the page ending — place the emotional payoff here.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\n\nSTRICT CHARACTER RULES (Takashi-specific, overrides Shouichi rules when present):\n- 32-year-old Japanese MAN (NOT 42, younger than Shouichi)\n- THIN ROUND-FRAMED black glasses ONLY (thin wire rim, rounded shape — DIFFERENT from Shouichi's rectangular frames)\n- Never remove glasses\n- Short slightly messy black hair, NO grey mixed (younger than Shouichi, pure black)\n- Slim build, lean face\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume varies by scene (dark suit in commute, casual in running, ceremonial when deciding)\n- NEVER render Takashi with rectangular glasses (that is Shouichi's feature)\n- NEVER render grey hair on Takashi\n- Claude-chan / Kuro-chan does NOT appear in Takashi's spinoff (never include robot AI character)\nCharacter: Takashi, a 32-year-old Japanese male software engineer. THIN ROUND-FRAMED black glasses (thin wire rim, rounded shape — clearly different from Shouichi's rectangular frames). Short slightly messy black hair, NO grey mixed (younger than Shouichi). Slim build, lean face, mildly fatigued expression at baseline. Semi-realistic manga style, ordinary-looking, NOT a handsome idol.\nAnalyst mode. Seated at cluttered home desk with laptop open showing spreadsheet. Multiple smartphones on desk. Right hand on mouse, left hand touching chin. Glasses reflecting the screen. Eyes calm and focused. Slight smirk of mathematical satisfaction.\n\n## Panel 1 (top-right, 50% width, 45% height — read first)\n\nScene: Takashi's cluttered home desk, monitor view. The screen shows a generic spreadsheet with Japanese text: \"1足 → 2足 購入 / 日収¥10,000\" laid out in a simple table. Desk lamp provides warm light. A coffee mug and Takashi's hand on a mouse are partially in frame. No face.\n\nMonologue (small caption, upper corner): 「5月 10日。2足目、追加。」\n\nDensity Lv.2 — loose sketchy lines, minimal desk detail, softly rendered.\n\n## Panel 2 (top-left, 50% width, 45% height — read second)\n\nScene: Same desk, different day. The spreadsheet now shows an expanded table: \"2足 → 4足 / 日収¥40,000\". On the desk: a half-eaten cup noodle, two empty energy drink cans, a digital clock reading 02:00. Messy, signaling time-passage and obsession. No face, only a finger pointing at the new number.\n\nMonologue: 「5月 20日。」「増えてる。」\n\nDensity Lv.2 — same sketch quality as Panel 1 to emphasize similarity (passage of time via mess).\n\n## Panel 3 (bottom-right, 35% width, 55% height — read third)\n\nScene: Close-up of a smartphone screen tilted 10-15 degrees, showing a STEPN-style inventory page with 9 sneaker icons arranged in a grid. Each shoe glows faintly cyan (#00BCD4), each with a small level number like \"Lv.3, Lv.5, Lv.7\". The phone is held in Takashi's hand (no face visible).\n\nIn-screen text: \"INVENTORY: 9 shoes\"\n\nMonologue caption (small): 「9足。」\n\nDensity Lv.3 — careful UI detail with 9 varied shoe icons, consistent cyan glow across all icons.\n\n## Panel 4 (bottom-left, 65% width, 55% height — the grid-break, larger than bottom-right panel, emotional payoff)\n\nScene: Extreme close-up of Takashi's face, filling the frame. The monitor's white glow (NOT cyan — the monitor is a regular PC screen) illuminates his face from a slightly-below angle. In his round thin-framed glasses' lenses, the number 「¥1,500,000」 is reflected clearly. Background is blurred (out-of-focus monitor).\n\nExpression: analyst-mode — one corner of mouth raised slightly (not a full grin), eyes narrowed with sharp analytical focus on the number. The expression of someone who just finished reading a proof. Not triumphant, not shocked — a quiet shrewd smile.\n\nMonologues (multiple small-medium captions arranged around the face, varying sizes):\n- 「月収……」 (small, upper right)\n- 「150万円。」 (large bold, center-right)\n- 「SEの年収の、2ヶ月分。」 (small, lower left)\n- 「——嘘みたいだ。」 (medium, bottom-left corner)\n\nDensity Lv.4 — maximum face detail, sharp shadow under jaw, precise glasses-reflection rendering of the number, climax panel of this page.\n\nMood: The quiet excitement of mathematical confirmation. A man of numbers watching his own spreadsheet confirm that something absurd is actually happening. Not triumphant — intellectually stunned.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT show Google Sheets / Excel logo in UI — render as generic spreadsheet\n- Do NOT write '1.5M' in English — use Japanese 『150万円』\n- Do NOT use revelation mode / flame eyes / speed lines — this is quiet analyst-mode\n- Do NOT render rectangular glasses on Takashi"
        },
        {
          "id": "P05",
          "title": "自問と宣言",
          "purpose": "自問と宣言 — 「本当に辞めていいのか」の一歩引いた視点、街全体との対比でメタ宣言",
          "density": "Lv.3（右上の顔） + Lv.5（俯瞰大ゴマ climax） + Lv.3（左下のメモ）",
          "status": "確定",
          "pattern": "P05-meta-bird-eye（メタ宣言俯瞰大ゴマ — ピーク直前の空間定義）",
          "techniques": "",
          "flow": "右上（顔クローズアップ） → 中央〜左上（俯瞰大ゴマ） → 左下（手元のメモ）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "右上・中コマ、画面幅40% × 高さ35%",
              "composition": "タカシが洗面所の鏡に映る顔。朝の光が斜めに入る。タカシの実像は見えず、鏡の中の顔のみ。髭は剃っている、眼鏡（丸型細縁）",
              "expression": "analyst-mode — 眉間にわずかな緊張、口は閉じる、目は鏡の中の自分を冷静に観察",
              "dialogue": "モノローグ（手書き風・小）「——本当に、辞めるのか。」",
              "sfx": "なし",
              "density": "Lv.3（鏡のディテール、顔のクールな造形）",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "左上〜中央・俯瞰大ゴマ、画面幅70% × 高さ50%",
              "composition": "都心の早朝上空からの俯瞰。マンション群、窓の明かりがポツポツ点灯（何百の部屋）、駅に向かう人影が小さく点々と。空は朝焼けのグレースケール階調、ゆるい雲",
              "expression": "人物を俯瞰で小さく配置、タカシ本人は描かない（「街の中の一人」の象徴化）",
              "dialogue": "ナレ（大きめ・通常の1.5倍フォント）「この街の何百万人が、明日も満員電車に乗る。」「——でも、俺は。」",
              "sfx": "なし（静寂の朝）",
              "density": "Lv.5（全ページの climax panel、街全体を緻密に描く）",
              "techniques": ""
            },
            {
              "n": "3",
              "size": "左下・小コマ、画面幅30% × 高さ35%",
              "composition": "机に置かれた一枚のメモ用紙のクローズアップ。手書きで「5/31 退職届 提出」。横に万年筆、コーヒーカップ（湯気）。無装飾の机の表面",
              "expression": "顔なし、物と文字のみ",
              "dialogue": "メモ内テキスト「5/31 退職届 提出」／モノローグ（手書き風・小）「決めた。」",
              "sfx": "なし",
              "density": "Lv.3（手書き文字のディテールとペン先の質感）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep99/pages/P05.md",
          "promptSource": "episodes/ep99/prompts/P05-prompt.md",
          "buildSource": "episodes/ep99/prompts/build/P05.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 3 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (middle) → Panel 3 (bottom).\nPanel 3 is the page ending — place the emotional payoff here.\n\nSTRICT CHARACTER RULES (Takashi-specific, overrides Shouichi rules when present):\n- 32-year-old Japanese MAN (NOT 42, younger than Shouichi)\n- THIN ROUND-FRAMED black glasses ONLY (thin wire rim, rounded shape — DIFFERENT from Shouichi's rectangular frames)\n- Never remove glasses\n- Short slightly messy black hair, NO grey mixed (younger than Shouichi, pure black)\n- Slim build, lean face\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume varies by scene (dark suit in commute, casual in running, ceremonial when deciding)\n- NEVER render Takashi with rectangular glasses (that is Shouichi's feature)\n- NEVER render grey hair on Takashi\n- Claude-chan / Kuro-chan does NOT appear in Takashi's spinoff (never include robot AI character)\nCharacter: Takashi, a 32-year-old Japanese male software engineer. THIN ROUND-FRAMED black glasses (thin wire rim, rounded shape — clearly different from Shouichi's rectangular frames). Short slightly messy black hair, NO grey mixed (younger than Shouichi). Slim build, lean face, mildly fatigued expression at baseline. Semi-realistic manga style, ordinary-looking, NOT a handsome idol.\nAnalyst mode. Seated at cluttered home desk with laptop open showing spreadsheet. Multiple smartphones on desk. Right hand on mouse, left hand touching chin. Glasses reflecting the screen. Eyes calm and focused. Slight smirk of mathematical satisfaction.\n\n## Panel 1 (top-right, 40% width, 35% height — face close-up)\n\nScene: Takashi's face reflected in a simple rectangular bathroom mirror. Morning light enters at an angle from the side. Only the mirror's reflection is visible (the actual Takashi is implied, just outside the frame). Clean-shaven, round thin-framed black glasses. The reflection is slightly softened by a faint condensation at the mirror's edges.\n\nExpression: analyst-mode — slight tension between eyebrows, closed mouth, eyes calmly observing his own reflection. A man looking at himself with detachment.\n\nMonologue (handwriting caption, small): 「——本当に、辞めるのか。」\n\nDensity Lv.3 — careful face detail, reflection rendering, minimal bathroom background.\n\n## Panel 2 (top-left to center, 70% width, 50% height — meta-declaration bird's-eye climax)\n\nScene: High overhead bird's-eye view of a dense Tokyo-style residential/business district at early dawn. Dozens of apartment buildings with countless window lights individually rendered (tiny dots of light), streets with faint figures walking toward train stations as tiny silhouettes (NO individual facial details). Morning mist rising. Sky rendered in multi-layer greyscale screentone with a subtle dawn gradient. A few soft clouds.\n\nNo main character visible — he is \"one of the millions\" implied by the scale.\n\nNarration (large caption in the upper area, approximately 1.5x normal font size, positioned as a meta-declaration):\n「この街の何百万人が、明日も満員電車に乗る。」「——でも、俺は。」\n\nNo sound effects (morning silence).\n\nDensity Lv.5 — this is the page climax. Maximum detail: hundreds of building windows, careful atmospheric perspective, precise greyscale gradient, multiple screentone layers.\n\n## Panel 3 (bottom-left, 30% width, 35% height — proof of decision)\n\nScene: Extreme close-up of a single handwritten memo on a plain wooden desk. The memo reads 「5/31 退職届 提出」 in realistic hand-written Japanese (slightly messy SE handwriting, not calligraphy). A fountain pen rests beside the memo. A coffee cup with subtle steam rising. Otherwise empty desk surface.\n\nNo face visible — only the memo, pen, and coffee.\n\nMonologue (handwriting caption, small, positioned in the generous negative space): 「決めた。」\n\nGenerous negative space around the memo amplifies the weight of the single handwritten line.\n\nDensity Lv.3 — precise rendering of handwriting, pen, coffee cup, desk grain.\n\nMood: The quiet pause before the leap. One man considering the shape of his own life against the mass of a city still moving in salaried rhythm. Calm analytical resolve.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT render individual faces on the bird's-eye crowd — tiny silhouettes and shadows only\n- Do NOT make the mirror ornate — simple bathroom mirror\n- Do NOT render rectangular glasses on Takashi"
        },
        {
          "id": "P06",
          "title": "退職届を書く深夜の儀式",
          "purpose": "退職届を書く深夜の儀式 — 縦長1本コマで垂直の重みを表現",
          "density": "Lv.4（全体を緻密に、縦の流れで物語を語る）",
          "status": "確定",
          "pattern": "P16-vertical-long（縦長一本 — 落下/上昇/垂直スケールの表現）",
          "techniques": "",
          "flow": "上（電球・月光） → 中央（机と手元・退職届） → 下（スニーカー Walker）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "縦長一本、画面幅100% × 高さ100%",
              "composition": "ページ全体を1コマで占める縦長の垂直構図。",
              "expression": "顔は俯き加減、静かな集中。決意でも迷いでもなく、「儀式を執り行う」人の無表情",
              "dialogue": "ナレーション（縦書き・右端上から順に流れる、3つに分けて）「——34年。」「サラリーマンを、終える夜。」「最後のペン。」／退職届の紙に書かれた見出し「退職届」",
              "sfx": "「カリ…カリ…」（ペンが紙を走る音、極小、机周辺に配置）",
              "density": "Lv.4（全体を緻密に描くclimax panel、垂直に読ませる流れを精密なディテールで構築）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep99/pages/P06.md",
          "promptSource": "episodes/ep99/prompts/P06-prompt.md",
          "buildSource": "episodes/ep99/prompts/build/P06.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\nSTRICT CHARACTER RULES (Takashi-specific, overrides Shouichi rules when present):\n- 32-year-old Japanese MAN (NOT 42, younger than Shouichi)\n- THIN ROUND-FRAMED black glasses ONLY (thin wire rim, rounded shape — DIFFERENT from Shouichi's rectangular frames)\n- Never remove glasses\n- Short slightly messy black hair, NO grey mixed (younger than Shouichi, pure black)\n- Slim build, lean face\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume varies by scene (dark suit in commute, casual in running, ceremonial when deciding)\n- NEVER render Takashi with rectangular glasses (that is Shouichi's feature)\n- NEVER render grey hair on Takashi\n- Claude-chan / Kuro-chan does NOT appear in Takashi's spinoff (never include robot AI character)\nCharacter: Takashi, a 32-year-old Japanese male software engineer. THIN ROUND-FRAMED black glasses (thin wire rim, rounded shape — clearly different from Shouichi's rectangular frames). Short slightly messy black hair, NO grey mixed (younger than Shouichi). Slim build, lean face, mildly fatigued expression at baseline. Semi-realistic manga style, ordinary-looking, NOT a handsome idol.\nDecision mode. Silhouette-heavy bust shot in an office meeting room. Only corner of mouth and glasses rim visible. Strong backlight from window behind. Very still posture. Serious but calm — not angry, not sad. A person who has chosen their own life.\n\n## Panel 1 (full page, single vertical panel — entire composition reads top-to-bottom)\n\nScene: A single vertical panel occupying 100% of the page. The composition divides vertically into three implicit zones WITHOUT sub-panel borders:\n\nTOP ZONE (top 20% of the panel): A bare ceiling with a single hanging incandescent light bulb (vintage 40W round bulb) casting a warm-toned cone of light downward (rendered in greyscale, warm tone implied by screentone density). Behind the bulb, a small window shows the pale disc of a full moon and its cool moonlight entering the room. A faint halo around the bulb.\n\nMIDDLE ZONE (middle 60% of the panel — main focus): A side-view of a wooden desk. Takashi is seated, upper-body centered. On the desk: a sheet of white paper with \"退職届\" written in natural handwriting (SE-style, not calligraphic, roughly 2-3cm tall characters). A fountain pen rests in his right hand, tip just lifted from the paper. His left hand is flat on the desk. His face is tilted downward — only the rim of his round thin-framed glasses, a reflection of moonlight in the lenses, and his bangs covering his eyes are visible. Behind him: a dim late-night living room (dark TV, empty coffee cup, an analog clock reading 12:00, and a company ID card hanging from a nail on the wall as a background symbol).\n\nBOTTOM ZONE (bottom 20% of the panel): Below the desk — Takashi's feet, the chair legs, and on the floor a pair of plain white sneakers labeled \"Walker\" (the shoes introduced in P02-P03), softly lit in the dim light.\n\nVertical narration text running along the right edge of the panel in three separated captions (top to bottom, Japanese vertical orientation):\n「——34年。」 (upper area, small font)\n「サラリーマンを、終える夜。」 (middle area, medium font)\n「最後のペン。」 (lower area, small font)\n\nTiny sound effect near the hand: 「カリ…カリ…」 (pen scratching paper, extremely small).\n\nDensity Lv.4 — entire vertical composition rendered with consistent careful detail. The bulb's filament, the moon's texture, the paper grain, the pen nib, the glasses reflection, the clock's hands, the sneakers' outline — all carefully drawn to carry the eye vertically down the panel.\n\nNo sub-panel borders, no gutters. One continuous vertical image.\n\nMood: The midnight ritual of ending one life. A quiet ceremonial weight. No drama, no grief — just the slow, vertical passage of time as a man signs the last page of his old life.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT create sub-panels — this is a SINGLE vertical panel filling the entire page\n- Do NOT use cyan color anywhere — pure monochrome for ritual purity\n- Do NOT show Takashi's face clearly — downward tilt, glasses reflection, hair covering eyes\n- Do NOT render the '退職届' text at oversize headline scale — natural handwriting only\n- Do NOT render rectangular glasses"
        },
        {
          "id": "P07",
          "title": "最大の見せ場",
          "purpose": "最大の見せ場 — 退職届「辞めます」の決定的瞬間（全面黒ベタ+小決め台詞）",
          "density": "Lv.5（黒ベタ大ゴマ） + Lv.4（小決めコマ顔）",
          "status": "確定",
          "pattern": "P06-black-punchline（全面黒ベタ+小決め台詞 — 切り札、エピソードに1回まで）",
          "techniques": "",
          "flow": "上（黒ベタシルエット） → 下（小さな顔アップ＋決め台詞）",
          "star": true,
          "panels": [
            {
              "n": "1",
              "size": "上・極大コマ、画面幅100% × 高さ80%",
              "composition": "会議室内部の情景だが、画面の80%は黒ベタ。中央にタカシのシルエット（背面）、向かい側デスクに上司のシルエット（正面だが顔は描き込まない、40代男性、スーツ）。窓の強い逆光（白抜き）がタカシの背中を縁取る。白抜きの巨大擬音「スッ…」が背景に構図要素として配置（タカシが退職届の紙を差し出す音）",
              "expression": "タカシの表情は見えない（背面）。上司の表情も描かない（シルエットの驚きの肩線のみで表現）",
              "dialogue": "なし（黒ベタと擬音と構図だけで緊張を作る）",
              "sfx": "「スッ…」（白抜き巨大文字、画面全体の背景として機能）",
              "density": "Lv.5（黒ベタ・シルエット処理・光の切り取り方が全力投入）",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "下・極小コマ、画面幅100% × 高さ20%",
              "composition": "タカシの顔の極端クローズアップ（片目のみフォーカス）。glasses の縁と口角だけが画面に入る（見切れ演出）。表情は静かな決意",
              "expression": "決意モード — 怒りでも悲しみでもなく、計算の終わった者の静謐。口角がわずかに上がる（微笑ですらない、ほぼ真顔）",
              "dialogue": "モノローグ小「辞めます。」（ひそひそ声のように小さく、フキダシではなく手書き風テキスト）",
              "sfx": "なし（黒と静寂の圧力で決め台詞を持ち上げる）",
              "density": "Lv.4（細部の集中）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep99/pages/P07.md",
          "promptSource": "episodes/ep99/prompts/P07-prompt.md",
          "buildSource": "episodes/ep99/prompts/build/P07.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\nSTRICT CHARACTER RULES (Takashi-specific, overrides Shouichi rules when present):\n- 32-year-old Japanese MAN (NOT 42, younger than Shouichi)\n- THIN ROUND-FRAMED black glasses ONLY (thin wire rim, rounded shape — DIFFERENT from Shouichi's rectangular frames)\n- Never remove glasses\n- Short slightly messy black hair, NO grey mixed (younger than Shouichi, pure black)\n- Slim build, lean face\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume varies by scene (dark suit in commute, casual in running, ceremonial when deciding)\n- NEVER render Takashi with rectangular glasses (that is Shouichi's feature)\n- NEVER render grey hair on Takashi\n- Claude-chan / Kuro-chan does NOT appear in Takashi's spinoff (never include robot AI character)\nCharacter: Takashi, a 32-year-old Japanese male software engineer. THIN ROUND-FRAMED black glasses (thin wire rim, rounded shape — clearly different from Shouichi's rectangular frames). Short slightly messy black hair, NO grey mixed (younger than Shouichi). Slim build, lean face, mildly fatigued expression at baseline. Semi-realistic manga style, ordinary-looking, NOT a handsome idol.\nDecision mode. Silhouette-heavy bust shot in an office meeting room. Only corner of mouth and glasses rim visible. Strong backlight from window behind. Very still posture. Serious but calm — not angry, not sad. A person who has chosen their own life.\n\n## Panel 1 (top, 80% of page height — the extra-large black-heavy panel)\n\nScene: A meeting room interior, rendered with 80% solid black fill. In the center-left of the panel: Takashi's silhouette from behind, standing, extending one arm forward with a small white rectangular paper (the resignation letter — its shape visible but no text readable). On the right side: the silhouette of an older supervisor seated at a desk, face invisible, only the shoulder-line and tilted head visible — suggesting surprise without rendering features. Strong backlight from a window behind Takashi — a white rectangle cut into the black. The backlight creates a rim of light on Takashi's back silhouette.\n\nLarge white-outlined onomatopoeia integrated into the composition, occupying ~30% of the panel as a structural background element: 「スッ…」 (the sound of paper being presented — rendered as giant white letters behind the figures).\n\nNo speech bubbles. No dialogue text in this panel. The entire narrative is carried by silhouette, black, and the single giant onomatopoeia.\n\nDensity Lv.5 — this is the page climax. Every element precise: the silhouette edges, the window backlight, the paper's crisp rectangle, the onomatopoeia typography.\n\n## Panel 2 (bottom, 20% of page height — the small whisper-punchline panel)\n\nScene: Extreme close-up with cropped-face composition. Only the right corner of Takashi's mouth and the right rim of his round thin-framed glasses are visible at the panel edge. The rest of the face is out of frame. Background is neutral light (not black). Very still.\n\nExpression: the faintest upward tilt at the corner of the mouth — not a smile, barely a hint of resolve. Glasses rim catches a calm soft highlight.\n\nMonologue (handwriting-style caption, SMALL font, positioned in the empty negative space of the panel, NOT inside a speech bubble): 「辞めます。」\n\nNo sound effect. The contrast of the previous panel's black weight amplifies this whisper.\n\nDensity Lv.4 — precise close-up edge rendering, this is the whisper that the giant panel above was designed to amplify.\n\nMood: The quiet moment of choosing one's own life. Twelve years of salaried existence ending with a single whispered word. Not rebellion — completion. A calm decisive stillness.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT show Takashi's full face — only silhouette from behind (Panel 1) or tight edge close-up (Panel 2)\n- Do NOT render supervisor's face in detail — silhouette shoulder-line only\n- Do NOT display the text '退職届' in large readable font — the paper's shape is enough\n- Do NOT use revelation mode or flame eyes — this is a quiet decision\n- Do NOT render rectangular glasses"
        },
        {
          "id": "P08",
          "title": "エピソードラスト",
          "purpose": "エピソードラスト — 解放と不穏の予感（次回への引き）",
          "density": "Lv.3（上コマ群衆） + Lv.4（下コマ後ろ姿の細部）",
          "status": "確定",
          "pattern": "P08-back-glance（後ろ姿+振り返り片目 — 次ページへの最強の引き）",
          "techniques": "",
          "flow": "右上 → 左下（上大ゴマ群衆→下の後ろ姿への縦型流れ、日本漫画の読み順）",
          "star": false,
          "panels": [
            {
              "n": "1",
              "size": "上・大コマ、画面幅100% × 高さ55%",
              "composition": "昼下がりの都心ビジネス街。駅前の横断歩道、左右から続々とスーツの群衆（200人規模）が歩く。全員シルエット、顔は描かない。遠景に高層ビル、空は曇りがちのグレー。雲の向こうに一瞬だけ差し込む光（不穏と希望の両義性）。画面下部にはまだ人通りの人々",
              "expression": "群衆に表情なし（顔描かない）、集団の無機質さで「サラリーマン人生の流れ」を提示",
              "dialogue": "ナレーション（画面右上、縦書き小）「——退職から、3ヶ月。」「街は、昨日と同じ流れで、動いている。」",
              "sfx": "「ザッ…ザッ…ザッ…」（群衆の足音、中サイズ、画面下部）",
              "density": "Lv.3（群衆を細かく描くが顔なしのシルエット、ビルは省エネ）",
              "techniques": ""
            },
            {
              "n": "2",
              "size": "下・大コマ、画面幅100% × 高さ45%",
              "composition": "画面中央〜左にタカシの後ろ姿。もはやスーツではなく、白T+薄手ジャケット+ジーンズ+白スニーカー（自由な服装）。小さなダッフルバッグを肩に。右手はポケット。顔は振り返り片目のみ見える（右眼＋round thin-framed glasses の縁）。群衆の流れと逆方向に歩いている（群衆は左→右、タカシは右→左）",
              "expression": "back-view-freeモード — 笑ってもいない、しかめっ面でもない。「自由になった者の無表情」。片目だけで読者に視線を合わせる",
              "dialogue": "モノローグ（手書き風、画面左下小）「さて。」「次は、どこまで走ろうか。」",
              "sfx": "なし",
              "density": "Lv.4（後ろ姿のディテール＋片目の表情、次への引き）",
              "techniques": ""
            }
          ],
          "source": "episodes/ep99/pages/P08.md",
          "promptSource": "episodes/ep99/prompts/P08-prompt.md",
          "buildSource": "episodes/ep99/prompts/build/P08.txt",
          "promptText": "Vertical single-page Japanese manga layout. Portrait orientation, B5 manga page proportions (aspect ratio approximately 5:7, taller than wide). NOT landscape, NOT 2x2 grid, NOT wide-format, NOT square.\n\nRIGHT-TO-LEFT reading direction (Japanese manga). Panels flow from top-right to bottom-left. The first panel the eye enters is TOP-RIGHT; the final panel that leads into the next page is BOTTOM-LEFT. This is NOT a western comic — do not reverse the reading order.\n\nBlack-and-white manga art. Grey screentone shading throughout. Togashi-hybrid rendering: loose confident sketchy lines for setup panels (Lv.1-2 density), explosive detailed precision for climax panels (Lv.4-5 density). Maximize the density contrast within a single page — do NOT render all panels at uniform density.\n\nSmartphone screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\nJapanese manga page, 2 panels stacked vertically (top to bottom).\nReading order: Panel 1 (top) → Panel 2 (bottom).\nPanel 2 is the page ending — place the emotional payoff there.\nNOT a 2x2 grid. NOT landscape. Vertical stack only.\nSize ratio may vary dramatically (e.g., top 80% + bottom 20% for black-punchline, or top 20% + bottom 80% for strip-plus-big) — see page-specific composition instruction.\n\nSTRICT CHARACTER RULES (Takashi-specific, overrides Shouichi rules when present):\n- 32-year-old Japanese MAN (NOT 42, younger than Shouichi)\n- THIN ROUND-FRAMED black glasses ONLY (thin wire rim, rounded shape — DIFFERENT from Shouichi's rectangular frames)\n- Never remove glasses\n- Short slightly messy black hair, NO grey mixed (younger than Shouichi, pure black)\n- Slim build, lean face\n- Same face shape across all panels of this page — same glasses frame, same hairstyle, same age impression\n- Costume varies by scene (dark suit in commute, casual in running, ceremonial when deciding)\n- NEVER render Takashi with rectangular glasses (that is Shouichi's feature)\n- NEVER render grey hair on Takashi\n- Claude-chan / Kuro-chan does NOT appear in Takashi's spinoff (never include robot AI character)\nCharacter: Takashi, a 32-year-old Japanese male software engineer. THIN ROUND-FRAMED black glasses (thin wire rim, rounded shape — clearly different from Shouichi's rectangular frames). Short slightly messy black hair, NO grey mixed (younger than Shouichi). Slim build, lean face, mildly fatigued expression at baseline. Semi-realistic manga style, ordinary-looking, NOT a handsome idol.\nBack view. Walking away down a weekday city street at midday. Dark suit removed — now wearing a T-shirt, light jacket, jeans, sneakers. Small duffel bag over shoulder. One hand in pocket. Face turned slightly over shoulder, only single eye visible through glasses. Not smiling, not frowning — the face of someone who just became free.\n\n## Panel 1 (top, 55% of page height — crowd establishing shot)\n\nScene: Midday business district intersection. A wide crowd of 200+ salaryman silhouettes crossing a pedestrian crossing, flowing left-to-right from the reader's perspective. All rendered as dark silhouettes, NO individual facial features, NO personal details. High-rise buildings in the background, slightly simplified. The sky is overcast greyscale with a single thin ray of light breaking through the clouds (ambiguous: neither pure hope nor pure despair).\n\nNarration (vertical Japanese, upper-right corner, small font): 「——退職から、3ヶ月。」「街は、昨日と同じ流れで、動いている。」\n\nSound effect across the lower portion (medium font, integrated into composition): 「ザッ…ザッ…ザッ…」 (crowd footsteps).\n\nDensity Lv.3 — crowd silhouettes are numerous but simplified, buildings are loose sketches, careful light direction.\n\n## Panel 2 (bottom, 45% of page height — back-glance emotional payoff)\n\nScene: Takashi walking away from the viewer, centered slightly left of frame. He is NOT wearing a suit anymore — instead: white T-shirt, light jacket, jeans, plain white sneakers. A small duffel bag slung over his right shoulder. Right hand casually in pocket. His body is angled to walk right-to-left (opposite direction from the crowd in Panel 1).\n\nHis face is turned slightly over his shoulder back toward the viewer — only his RIGHT eye is visible, framed by the right rim of his round thin-framed glasses. The rest of his face is obscured by the shoulder and hair. The single visible eye meets the reader's gaze.\n\nExpression: back-view-free mode — not smiling, not frowning. The composed expression of someone who has just become free. Quiet.\n\nMonologue (handwriting-style caption, small, placed in the negative space to the lower-left of his figure, NOT inside a speech bubble):\n- 「さて。」 (small)\n- 「次は、どこまで走ろうか。」 (medium)\n\nGenerous negative space around Takashi — open sidewalk, distant blurred pedestrians (still as silhouettes). The emptiness around him contrasts with the crowded Panel 1 above.\n\nNo additional sound effects. The silence after the crowd footsteps.\n\nDensity Lv.4 — precise rendering of his back silhouette, the single eye, glasses rim, duffel bag strap. The eye is the focal point of the panel (and the page ending).\n\nMood: A quiet liberation tinged with uncertainty. The city keeps moving in its salaried rhythm, but he has stepped out of it. The final glance-back invites the reader into his next chapter.\n\nHARD RULES — violations are failures:\n\n1. Expression ban: NO revelation mode (no flame eyes, no light bursts in eyes, no speed lines radiating from eyes). NO futon mode / dead-fish eyes / white-eyed despair. NO chibi/deformed comedy face.\n\n2. Color ban: FULL monochrome + greyscale ONLY. Cyan (#00BCD4) permitted ONLY on (a) smartphone/laptop/computer screen glow, (b) Kuro-chan's robot elements (mechanical eyes, neck circuit, CLAUDE mark, right arm chrome), and (c) ritual collapse particles when narrative calls for it. NEVER green, NEVER other colors (except Panel-specific rainbow-prism when explicitly permitted on that page).\n\n3. Layout ban: NEVER 2x2 grid. NEVER landscape. NEVER square. Panels stack top-to-bottom, reading right-to-left (Japanese manga). Do NOT reverse the reading order to western left-to-right.\n\n4. Smartphone/screen tilt: Smartphone and laptop screens always drawn at 10-15 degree tilt (never flat/parallel to the page).\n\n5. Text ban: Do NOT draw English or Japanese meta-labels inside panels (no \"CLIMAX\", \"見せ場\", \"PANEL 1\" labels). No speaker labels like \"翔一：\" or \"クロちゃん：\" inside speech bubbles — speaker identity comes from the drawn character, not a text prefix.\n\n6. Dialogue language: Japanese dialogue stays in Japanese inside brackets 「 」. Do NOT translate to English. The quoted 「 」 text must appear in the final rendered page as Japanese characters.\n\n7. Forbidden words: Do NOT reference \"雀鬼\", \"桜井章一\", \"全ツッパ\" (these terms are retired from the project — the game itself is the protagonist, not the character's gambling tendencies).\n\nAdditional page-specific constraints:\n- Do NOT draw individual faces on the salaryman crowd — silhouettes only\n- Do NOT show Takashi's front face — back view with single eye over shoulder only\n- Do NOT render a clearly bright sky (hope) or clearly dark sky (despair) — overcast with one thin light ray\n- Do NOT render rectangular glasses"
        }
      ],
      "pageCount": 8,
      "promptCount": 8,
      "title": "99: 脱サランナー・タカシのDay 0",
      "summary": "32歳SE・タカシが、疲弊した通勤電車の朝にLINEで「走って稼げる」を知り、ATMから始めた1足が9足に育ち、退職届を出すまでの1ヶ月のドキュメンタリー短編。",
      "status": "全8ページ設計完了・プロンプトビルド完了",
      "kind": "短編スピンオフ（本編回想で言及される脱サランナーの起点）",
      "postUnit": "X 4枚組×2 の8ページ構成（短編は4の倍数が原則）",
      "source": "episodes/ep99/episode-design.md"
    }
  ],
  "latestCheckpoint": "sessions/checkpoints/2026-04-18_checkpoint.md"
};
