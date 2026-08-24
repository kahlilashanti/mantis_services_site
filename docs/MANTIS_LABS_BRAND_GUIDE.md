# Mantis Labs Brand Guide v1.0

**Audience:** Internal team, partners, and vendors building Mantis digital properties.  
**Influence:** Stink Studios, The Mill, Nexus Studios, AKQA, Monks: clean agency craft, not startup novelty.

---

## 1. Brand essence

| | |
|---|---|
| **Name** | Mantis Labs |
| **URL** | [trymantislabs.com](https://trymantislabs.com) |
| **One line** | Brand experiences built to convert. |
| **Belief** | The internet should feel like a place: curiosity, participation, emotion, memory. |
| **Position** | Creative technology company. Not an immersive vendor. Not a generic dev shop. |

**Voice:** Confident, precise, commercially literate. Short sentences. No jargon unless the audience is technical.

### Copy vs. proof (dual audience)

**Homepage copy stays category-agnostic.** The hero line works for a Clippers exec, Bose, PacSun, PAR Group, or a luxury brand. Do not sports-wash the headline.

**Sports credentials show up in visuals and structure, not the tagline:**

| Layer | Sports | Beyond sports |
|-------|--------|---------------|
| **Hero copy** | Same for everyone | Same for everyone |
| **Hero reel** | Sports energy (stadium, athletes, live moments) | Still reads as premium brand craft |
| **Work grid** | Sports cases high on the page | Commerce, immersive, product cases follow |
| **Deep paths** | Sports-specific case study route (e.g. `/work/sports`) | Filter or paths by vertical as portfolio grows |

We have real sports credentials. Exploit them visually. The words stay broad so Ivan can forward one URL to any CMO.

**Hero (locked):** We build digital experiences / worth staying in.

---

## 2. Typography (recommended)

### Why this system

Inspiration sites converge on **restraint**:

- **Stink Studios:** Helvetica, Times New Roman, Courier. System fonts. Whitespace. Type does the work.
- **The Mill / Nexus / AKQA:** Neo-grotesque sans-serifs, large display type, tight letter-spacing on headlines, minimal decoration.

Ivan (CGO) needs type that reads **credible to CMOs and brand leaders**, not experimental, not “AI startup.” Clean, modern, premium.

### Primary recommendation: **Instrument Sans + Inter + Syne (hero)**

| Role | Font | Why |
|------|------|-----|
| **Hero headline** | [Syne](https://fonts.google.com/specimen/Syne) | Funky, cinematic, memorable at huge sizes. The one place we allow personality: “worth staying in” energy. |
| **Display & section headlines** | [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) | Neo-grotesque designed for a premium product brand. Precise, contemporary, subtle character. Reads “creative tech” without shouting. |
| **Body & UI** | [Inter](https://fonts.google.com/specimen/Inter) | Industry-standard UI sans. Excellent legibility. Stink uses Inter in its Helvetica fallback stack. |
| **Labels & metadata** | [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) | Eyebrows, capabilities, tags. Stink’s Courier pattern for micro-label texture. |

### Weights

| Use | Font | Weight | Letter-spacing |
|-----|------|--------|----------------|
| Hero headline | Syne | 700 | −0.04em |
| Section titles | Instrument Sans | 600 | −0.03em |
| Body copy | Inter | 400 | 0 |
| Lead / intro | Inter | 400 | 0 |
| Nav & buttons | Inter | 500 | +0.12em (uppercase) |
| Eyebrows / tags | IBM Plex Mono | 400 | +0.14em (uppercase) |

### Type scale (web)

```
Hero:        clamp(3rem, 8vw, 7rem)     Syne 700
H1:          clamp(2.5rem, 5vw, 4rem)   Instrument Sans 600
H2:          clamp(2rem, 4vw, 3rem)     Instrument Sans 600
Lead:        1.125rem                     Inter 400
Body:        1rem                         Inter 400
Small / UI:  0.75rem                      Inter 500, uppercase for CTAs
Eyebrow:     0.72rem                      IBM Plex Mono 400
```

### Syne (hero only)

**Syne** stays on the homepage hero headline. It’s the brand’s “front door” moment: funky, fun, cinematic. Everywhere else (section titles, work, about, contact) use **Instrument Sans** so the site stays credible for CMOs and partners once you scroll past the hero.

### Google Fonts embed

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.google.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />
```

### CSS tokens

```scss
$font-family-display: "Instrument Sans", "Inter", sans-serif;
$font-family-hero: "Syne", "Instrument Sans", sans-serif;
$font-family-base: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
$font-family-mono: "IBM Plex Mono", "Courier New", monospace;
```

### Premium upgrade path (optional)

When budget allows, license **Söhne** (Klim Type Foundry), used by many top-tier product and agency brands. Instrument Sans is the free stand-in with the same neo-grotesque intent.

---

## 3. Color

| Token | Hex | Use |
|-------|-----|-----|
| **Background** | `#030303` | Primary canvas |
| **Surface** | `#080808` | Section bands |
| **Text primary** | `#F4F4EF` | Headlines, body |
| **Text muted** | `rgba(244, 244, 239, 0.58)` | Supporting copy |
| **Accent** | `#D4FF4D` | CTAs, highlights, key metrics |
| **Accent on dark** | Use sparingly: one focal element per viewport |

**Rule:** Dark-first. Accent is earned, never fill a page with lime.

---

## 4. Layout & motion

Aligned with Nexus / Mill / Stink patterns:

- **Full-bleed hero:** video or motion first, type second.
- **Generous whitespace:** statement bands breathe.
- **Work as cinema:** large tiles, video on interaction, minimal copy on grid.
- **Motion:** purposeful (scroll reveal, hover play). Respect `prefers-reduced-motion`.
- **Video:** separate desktop/mobile assets, poster-first, &lt;2MB hero target.

---

## 5. Logo & wordmark

- Wordmark: **MANTIS** or **Mantis Labs** in Instrument Sans 600–700.
- Tracking: −0.02em (wordmark), +0.08em only if all-caps lockup.
- Do not stretch, outline, or apply gradients to the wordmark.

---

## 6. Photography & video

- Cinematic, high contrast, real work (not stock handshakes).
- Showreel leads first: 5 seconds to establish craft + scale.
- Case tiles: client name + one measurable result.

---

## 7. Do / Don’t

| Do | Don’t |
|----|-------|
| Let type and work breathe | Clutter hero with multiple CTAs |
| Use accent on one focal element | Lime backgrounds or lime body text |
| Separate mobile video assets | Ship 20MB hero files |
| Uppercase nav with wide tracking | Mixed-case nav with tight spacing |
| Show measurable outcomes (+80% AOV) | Vague “innovative solutions” copy |

---

## 8. File checklist for vendors

- [ ] Instrument Sans + Inter + IBM Plex Mono loaded
- [ ] Dark `#030303` background default
- [ ] Hero poster + optimized MP4 (desktop + mobile)
- [ ] Favicon + OG image
- [ ] `prefers-reduced-motion` fallback

---

*Mantis Labs Brand Guide v1.0, aligned with Website 2.0 brief and agency inspiration set.*
