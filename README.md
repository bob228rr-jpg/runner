# RUNNER site direction

Status: visual planning only. The prompt copy is not implemented here yet.

Reference: https://www.gaybro.fun/

## What to Borrow From the Reference

- Cartoon landing page energy: large illustrated character, thick outlines, oversized shapes, sticker-like buttons.
- Full-screen hero where the meme character is the main object immediately.
- Moving black ticker strip between sections.
- Big, playful typography mixed with clean readable body text.
- Sections that feel like scenes, not generic blocks.
- Small physical animations: floating logo, character tilt, shoe/chart motion, button bounce.

## What Not to Copy

- Do not copy the exact section order, couch/room concept, rainbow identity, tokenomics bathroom joke, or the same social/button layout.
- Do not make it too soft or poetic. This coin should feel like CT found a runner, not a lifestyle brand.
- Do not reuse the old generic runner-site look if this becomes implementation later.

## Core Visual Idea

`$RUNNER` should feel bright, fast, and meme-friendly:

Green vertical charts, sunny/sport energy, sneaker culture, beach/gym scenes, and a character that looks calm because he already knows the chart is going to move.

The page should feel fast, vertical, colorful, and easy to share:

- bright green / white / sky blue base
- neon green chart energy
- cyan-purple sneaker glow
- black only as contrast for text, outlines, ticker strips, and small punchy sections
- white paper/card moments for definition and buying steps
- thick comic outlines and bold section dividers

## Suggested Page Feel

Hero:
Use the running/action logo as the main visual, not a static standing pose. Background should be bright: white/green chart field, sky/sport gradient, or clean illustrated trading field with a huge green chart line cutting upward behind the character. Text sits large and raw on the left/top, with TWITTER and CA as sticker buttons.

Marquee:
Black strip with green/white text and small shoe/chart icons. It should feel like a market tape, not a decorative banner.

About:
Use `about.png` as the dictionary/trading room scene. Make the copy sit on a ripped-paper or dictionary-card layer, with the character and monitors visible behind it.

The Feeling:
Use `the-feeling.png`, but balance the dark image with a bright layout around it: white/green section, big colorful headline, maybe image inside an angled comic frame. Add minimal text, let the image carry the memory of watching something run.

Why Now:
Use `why-now.png`. This is the graveyard of dead coins, so it can be the one darker contrast section. Keep it surrounded by brighter sections so the whole site does not become gloomy.

How to Buy:
Use `buy.png` or a new purpose-built image. Current `buy.png` is strong for definition/market room, but a dedicated buy visual would make the section clearer.

Final CTA:
Use the action logo or a new bright run scene. The ending should feel like the run starts now: green/white background, chart line rising off-screen, one big `$RUNNER`.

## Current Asset Map

- `assets/raw/about.png` - wide trading room + dictionary paper. Best for About.
- `assets/raw/beach.png` - social runner scene. Good for gallery/meme-world, not main narrative.
- `assets/raw/buy.png` - wide market room + dictionary paper. Could support How to Buy or About variant.
- `assets/raw/gym.png` - treadmill scene. Good for "let's make it run" or utility visual.
- `assets/raw/logo-1.png` - standing runner on green finance background.
- `assets/raw/logo-2.png` - standing runner on white/green chart background.
- `assets/raw/logo-3.png` - action runner on black/green chart background. Best hero candidate.
- `assets/raw/night.png` - night mountain run. Strong final CTA or transition visual.
- `assets/raw/the-feeling.png` - dark chart monitor scene. Best for The Feeling.
- `assets/raw/why-now.png` - dead coin graveyard. Best for Why Now.

## New Generated Assets

- `assets/generated/characters/runner-running-bg.png` - running character with soft green background. Good if a full transparent runner is not needed.
- `assets/generated/sneakers/sneakers-side.png` - shoe pair for big decorative accents.
- `assets/generated/sneakers/sneakers-running-step.png` - best shoe asset for motion, hero details, and section transitions.
- `assets/generated/sneakers/sneakers-front.png` - strong front-facing shoe asset for cards/buttons.
- `assets/generated/charts/chart-smooth-growth.png` - clean bright chart arrow for backgrounds.
- `assets/generated/charts/chart-vertical-candle.png` - strongest "runner" signal, good for hero/feeling.
- `assets/generated/charts/chart-zigzag-up.png` - simple comic chart for dividers and decorative layers.
- `assets/generated/icons/sol-coin.png` - How to Buy step icon.
- `assets/generated/icons/stopwatch.png` - speed/timing icon.
- `assets/generated/icons/arrow-up.png` - CTA/button accent.
- `assets/generated/icons/green-candle.png` - chart/candle icon.
- `assets/generated/icons/treadmill.png` - run/gym icon.
- `assets/generated/icons/sneaker.png` - marquee/decor icon.
- `assets/generated/icons/wallet.png` - How to Buy step icon.
- `assets/generated/scenes/hero-bright-track.png` - best bright hero background.
- `assets/generated/scenes/how-to-buy.png` - dedicated How to Buy scene.

## Enough To Build

No more generation is needed for now. The site can be built from the current set:

- Hero: `hero-bright-track.png` + `logo-3.png` or `runner-running-bg.png`
- About: `about.png`
- Feeling: `the-feeling.png`
- Why Now: `why-now.png`
- How To Buy: `how-to-buy.png` + icons
- Decorative motion: sneakers + chart lines + icons

## Extra Images To Generate Before Implementation

1. Hero wide background, 16:9 or wider
   - Action runner, bright white/green/sky background, huge green vertical chart behind him.
   - Leave clean empty space on left/top for headline.

2. Transparent character cutout
   - The main runner from `logo-3`, transparent PNG, no background.
   - Useful for animation and responsive hero layout.

3. Small icon pack, transparent PNG or SVG
   - Sneaker, green candle, chart arrow, treadmill, stopwatch, wallet, SOL coin.
   - Same thick comic outline style.

4. Marquee pattern strip
   - Repeating shoe/chart/candle mini-art on transparent or black background.
   - Should work as an endless horizontal tape.

5. How-to-buy dedicated scene
   - Runner at a checkout / DEX terminal / wallet screen with SOL and `$RUNNER`.
   - Keep it comic and readable, avoid tiny fake UI details.

6. Final CTA wide image
   - Runner disappearing forward, green chart line going off-screen.
   - Triumphant and bright, more "runner season" than dark trench mood.

7. Mobile crop variants
   - Portrait crops for hero and final CTA, 9:16 or 4:5.
   - Important because the current wide art may crop badly on phones.

## Implementation Notes For Later

- Build as a static landing page unless another stack is needed.
- Use real image assets as the primary page structure.
- Add animation only where it reinforces running: chart pulse, shoe bounce, tape scroll, small speed lines.
- Keep copy short and CT-native.
- Buttons should feel like sticker patches, not SaaS pills.
