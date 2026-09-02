# Design System — POS Atienda

## Product Context
- **What this is:** Marketing landing page for a modern point-of-sale system targeting tiendas de abarrotes (corner/grocery stores) in Mexico and LATAM
- **Who it's for:** Small shop owners (tenderos) — non-technical, opens their store at 6am, makes purchasing decisions based on trust and word-of-mouth
- **Space/industry:** Retail POS software, LATAM small business
- **Project type:** Marketing site / landing page

## Aesthetic Direction
- **Direction:** Mercado Vivo — "Alive Market"
- **Decoration level:** Intentional — grain texture on hero surfaces, deliberate grid asymmetry
- **Mood:** The warmth of hand-painted letrero signage meets the confidence of a Mexican modernist poster, rendered in screen light. Not generic SaaS. Not 1990s enterprise software. The visual language tenderos have grown up trusting.
- **Anti-patterns to avoid:** Animated blobs, purple/violet gradients, 3-column icon feature grids, centered-everything layouts, generic dashboard screenshots in the hero, system-ui fonts

## Memorable Thing
"Para la tienda que abre cuando los demás duermen." — Trust. This software was built for OUR kind of business. In 3 seconds, the tendero should feel seen before they've read a single word.

## Typography
- **Display/Hero:** Archivo Black — wide, punchy, mechanical sincerity. Reads like storefront signage. Use for main headlines, the brand name, large CTAs.
- **Subheadings:** Fraunces (Italic, optical size 18+) — warm counterweight to Archivo's mechanical energy. Use for section headers, pull quotes, testimonials.
- **Body:** DM Sans — friendly, legible for Spanish with open apertures. Use for all body copy, descriptions, UI labels, nav links.
- **Data/Prices/Receipts:** DM Mono — numbers live here. Use for prices, timestamps, receipt-style data, code snippets.
- **Loading:** Google Fonts CDN
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
  ```
- **CSS variables:**
  ```css
  --font-display: 'Archivo Black', sans-serif;
  --font-heading: 'Fraunces', serif;
  --font-body:    'DM Sans', sans-serif;
  --font-mono:    'DM Mono', monospace;
  ```
- **Scale:** `xs(0.75rem)` `sm(0.875rem)` `base(1rem)` `lg(1.125rem)` `xl(1.25rem)` `2xl(1.5rem)` `3xl(1.875rem)` `4xl(2.25rem)` `5xl(3rem)` `hero(clamp(2.5rem, 5vw, 4rem))` `display(clamp(3rem, 6vw, 5rem))`

## Color
- **Approach:** Restrained — 1 bold accent + warm neutrals. Color is rare and meaningful. No gradients.

### Light mode (primary)
```css
--bg:           #F5EFE0; /* papel manila — aged but clean */
--bg-surface:   #EDE7D4; /* lifted surface */
--bg-raised:    #E5DCC8; /* card, input backgrounds */
--text-primary: #1A1208; /* tinta oscura — not cold black */
--text-muted:   #5C4E3A; /* secondary content */
--text-faint:   #9B8B75; /* meta, labels, placeholders */
--accent:       #D94F2B; /* rojo mercado — like painted zinc signs */
--accent-dark:  #B83D1C; /* hover state */
--accent-light: #F4906D; /* tinted backgrounds */
--secondary:    #2B6B4F; /* verde aguacate — earthy, cash, growth */
--secondary-dark:  #1F5039;
--secondary-light: #4A9470;
--border:       #CFC4AE; /* default borders */
--border-strong:#A8997E; /* emphasized borders */
```

### Dark mode
```css
--bg:           #140F08;
--bg-surface:   #1E1710;
--bg-raised:    #2A2118;
--text-primary: #F0E8D8;
--text-muted:   #B8A88A;
--text-faint:   #7A6A52;
--border:       #3D3020;
--border-strong:#5C4B30;
/* accent and secondary stay the same */
```

### Semantic colors
```css
--success: #2B6B4F; /* verde aguacate */
--warning: #C4761A; /* amber */
--error:   #B83D1C; /* rojo oscuro */
--info:    #2B4F6B; /* azul marino */
```

## Spacing
- **Base unit:** 8px
- **Density:** Comfortable — not luxury-airy, not cramped
- **Scale:**
  ```css
  --space-2xs: 2px;
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  ```

## Layout
- **Approach:** Poster-first hero + editorial grid for content sections
- **Hero:** Full-bleed, left-aligned, big type edge-to-edge — NOT centered, NOT a dashboard screenshot. The first viewport is a poster, not a document.
- **Features:** Alternating image/text editorial layout — NOT a 3-column icon grid. No icons in colored circles.
- **Grid:** 12 columns, 24px gap, max-width 1280px, centered
- **Max content width:** 1280px
- **Border radius:**
  ```css
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-full: 9999px;
  ```
- **Grain texture:** Apply a subtle noise overlay to the hero via CSS `filter` or SVG `feTurbulence` at ~4% opacity. Do not skip this — it's load-bearing for the "papel" feel.

## Motion
- **Approach:** Intentional — motion communicates state change, not personality
- **Easing:**
  ```css
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);  /* enter */
  --ease-in:  cubic-bezier(0.4, 0, 1, 1);      /* exit */
  --ease-move: cubic-bezier(0.4, 0, 0.2, 1);   /* repositioning */
  ```
- **Duration:**
  ```
  micro:  50–100ms   (hover states, focus rings)
  short:  150–250ms  (button presses, toggles)
  medium: 250–400ms  (panel transitions, dropdowns)
  long:   400–700ms  (page-level reveals, hero text)
  ```
- **Scroll animations (Framer Motion):** Scroll-triggered text reveals only. Type appears as you scroll, staggered by line. `ease: "easeOut"`, duration 0.6s, y: 32 → 0, opacity 0 → 1.
- **Banned:** Animated blobs, looping background animations, bouncing/spring physics on non-interactive elements

## Design Risks (intentional departures from category norms)

1. **No software UI in the hero.** Every POS site shows a dashboard screenshot. POS Atienda shows the tendero's world — a receipt, morning store light, hands at work. Context before product.
2. **Rojo mercado (#D94F2B) as primary accent.** Zero competitors in LATAM POS use red. Warm, culturally specific, confident. Not imported Silicon Valley indigo.
3. **Archivo Black display type.** No POS software uses wide condensed display type. It reads like a storefront letrero — a form tenderos have trusted for decades.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-07 | Initial design system created | Created by /design-consultation. Research: Square (cold white), Shopify (warm editorial), SIFO/local (dated 2012-era). Gap: no LATAM POS brand speaks to the tendero visually. Both Claude primary and subagent converged on warm-light + rojo mercado + Archivo Black. |
| 2026-06-07 | Light mode as primary direction | Dark mode was the existing direction (slate-950). Breaking from it creates immediate differentiation. More readable in bright store environments. Positions Atienda alongside trusted Mexican consumer brands, not tech tools. |
| 2026-06-07 | Memorable thing: Trust | "This software was built for our kind of business." Trust over speed, simplicity, or modernity — trust is the hardest to earn in LATAM retail and the most durable differentiator. |
