
This document translates the Piquiyo brandbook into practical UI rules: tokens, typography, layout, components, motion.
Brand principle: execution > decoration. Clear, direct, structured, forward-moving. :contentReference[oaicite:2]{index=2}

---

## 1) Design tokens

### 1.1 Color palette (from brandbook)
Core palette:
- White: #FFFFFF
- Shadow grey: #2E2C2F
- Deep navy (dark grey tone): #3A3D42
- Vermilion / Red-Orange: #FF4937
- Deep maroon (dark accent, used for depth): #590F13 (seen in palette strip)
- Navy: #202641 :contentReference[oaicite:3]{index=3}

### 1.2 Semantic color roles (what we actually use in UI)
- Background: --bg (usually white)
- Surface: --surface (light tint / cards)
- Text primary: --text (shadow grey)
- Text muted: --text-muted (deep navy/grey)
- Brand / CTA: --brand (vermilion)
- Brand strong: --brand-strong (maroon)
- Border: --border (neutral grey tint)
- Focus ring: --focus (vermilion with alpha)

### 1.3 CSS variables (theme.css)
Use these as the single source of truth. Tailwind utilities should reference these tokens.

:root
- --bg: #FFFFFF
- --surface: #F7F7F7  (derived, neutral)
- --text: #2E2C2F
- --text-muted: #3A3D42
- --brand: #FF4937
- --brand-strong: #590F13
- --navy: #202641
- --border: rgba(46,44,47,0.14)
- --shadow: rgba(0,0,0,0.10)

Radii:
- --radius-sm: 10px
- --radius-md: 16px
- --radius-lg: 24px

Spacing base:
- 8px grid (8 / 16 / 24 / 32 / 48 / 64)

---

## 2) Typography

Brandbook typography:
- Titles: Red Hat Display
- Text: Inter :contentReference[oaicite:4]{index=4}

### Type scale (recommended)
- H1: 56–64 / 1.05 (tight)
- H2: 40–48 / 1.1
- H3: 28–32 / 1.2
- Body: 16–18 / 1.5
- Small: 14 / 1.4
- Micro: 12 / 1.3

Rules:
- Headlines: strong weight, minimal fluff.
- Avoid decorative typography tricks.
- If emphasis is needed: use weight + spacing, not extra styles.

Optional brand pattern (from examples):
- Italicize one keyword for “speed/momentum” emphasis (used sparingly). :contentReference[oaicite:5]{index=5}

---

## 3) Layout system

### Grid + container
- Max content width: 1120–1200px
- Side padding: 16px (mobile), 24px (tablet), 32px (desktop)
- Vertical rhythm: 32–80px between major sections (depends on density)

### Composition style
- Big, confident headlines
- Clear blocks of content
- Strong contrast sections (white / dark / vermilion) for pacing
- No “random decorations”: every shape must signal direction, progress, output. :contentReference[oaicite:6]{index=6}

---

## 4) Components (UI rules)

### Buttons
Primary:
- Background: --brand
- Text: white
- Radius: --radius-md
- Padding: 12–14px vertical / 16–20px horizontal
- Hover: slightly darker brand or subtle shadow increase
- Focus: ring (2–3px) with --focus

Secondary:
- Background: transparent
- Border: --border
- Text: --text
- Hover: subtle surface fill

Icon button (brand style):
- Circular
- Vermilion icon or vermilion dot accent
- Often paired with arrow icon (direction). :contentReference[oaicite:7]{index=7}

### Cards
- Background: --surface or white
- Border: 1px solid --border
- Radius: --radius-lg
- Shadow: subtle, not “floaty”
- Internal padding: 20–28px

### Inputs
- Height: 44–48px
- Radius: --radius-md
- Border: 1px solid --border
- Focus: brand ring
- Error: brand-strong or brand with clear message

### Navigation
- Simple, operator-like labels
- Don’t overstuff
- Active state: brand underline or brand dot

---

## 5) Graphic elements (brand system)

The brandbook’s visual system is functional: arrows, chevrons, progress bars, indicators.
Avoid organic shapes, decorative illustrations, abstract ambiguity. :contentReference[oaicite:8]{index=8}

Allowed motifs:
- Asterisk mark (brand symbol)
- Chevron >> (direction + momentum)
- Progress bars / percent badges
- Arrow ↗ / → in circular button

Usage rules:
- Use motifs to guide the eye (direction, next step, progress).
- Keep them geometric + modular.
- Use vermilion as the “signal” color (sparingly but confidently).

---

## 6) Motion & interaction

Principle: fast doesn’t mean rushed—focused, deliberate. :contentReference[oaicite:9]{index=9}

Default motion:
- 150–220ms transitions (hover, focus, expand)
- Easing: ease-out
- Avoid bouncy/playful motion unless the product needs it

Micro-interactions:
- Buttons: slight translateY or shadow shift
- Cards: subtle border/shadow change
- Progress/indicators: fill animation

---

## 7) Content tone (for UI copy)

Piquiyo tone:
- Clear, direct, grounded in execution
- No hype, no buzzwords, no over-explaining :contentReference[oaicite:10]{index=10}

Rules:
- Short sentences.
- Tell users what happens next.
- Label actions precisely (no vague CTAs like “Learn more” unless it truly is).