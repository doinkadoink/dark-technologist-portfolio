## Design Rationale & Style Guide

### Dark Technologist Portfolio - Project Page Theming

---

### Overview

Each project page within the Dark Technologist portfolio uses a modular theme system tailored to the subject matter of the work presented. Pages follow a shared design framework defined by consistent layout structure, animation standards, and base color logic. Themes differ primarily in visual motif, color palette, and iconography, reflecting each project’s aesthetic and function.

All animation and hover standards were benchmarked against the NightKind website, which remains the visual and motion-design reference point across the portfolio.

---

## 🌌 1. **NightKind (Alt-Gothic Conservation Aesthetic)**

**File:** `html-templates/nightkind.html`
**Reference:** [https://www.nightkind.org](https://www.nightkind.org)

**Theme Overview:**
A fusion of nocturnal imagery and alternative fashion, the NightKind page uses neon yellow, electric purple, and true black to present a mission-driven, subcultural aesthetic. Typography and button animations emphasize clarity, urgency, and purpose. The theme communicates ethical commerce and wildlife activism through bold contrast and emotionally resonant visuals.

**Core Styling Logic:**

* `--primary-color`: `#ffff33` (Neon Yellow)
* `--secondary-color`: `#8a2be2` (Electric Purple)
* `--background-color`: `#000000` (Bat Black)
* `--font-family`: Monospace for both headings and body
* Glow and hover scale effects applied consistently to buttons and links

**Design Features:**

* Full-width hero with logo, mission, and dual CTA buttons
* Three-column mission block (Conservation / Alt-Culture / Community)
* Fixed footer with bat facts and repeated mission text for clarity
* High contrast, minimal motion, structured layout

---

## 🐞 2. **Web Corruption (Digital Glitch Aesthetic)**

**File:** `html-templates/web-corruption.html`

**Theme Overview:**
Inspired by retro hacking visuals, this theme uses matrix green, deep red, and black overlays. Glitch animations and scanline textures mimic corrupted system interfaces. Font selections are monospaced, terminal-style. Used for AI-generated, unstable, or datastream-based projects.

**Core Styling Logic:**

* `--primary-color`: `#00ff41` (Matrix Green)
* `--accent-color`: `#ff0033` (Glitch Red)
* `--background-layer`: Transparent scanlines + `#000000`
* Animated RGB channel offsets and hover displacements

**Design Features:**

* Terminal font (e.g. VT323)
* Animations use frame-jitter, glitch flicker, and CRT glow
* Hover elements simulate corrupted data reveal
* Section dividers are styled as command line prompts

---

## 🎮 3. **Chaos Maps (Retro Grid Aesthetic)**

**File:** `html-templates/chaos-maps.html`

**Theme Overview:**
A playful, arcade-inspired interface referencing 1980s gaming consoles. Uses pixelated fonts, neon outlines, and animated grid backgrounds. Visuals reflect navigation, experimentation, and exploration. Ideal for creative tools and experimental visualizations.

**Core Styling Logic:**

* `--primary-color`: `#39ff14` (Arcade Green)
* `--accent-color`: `#ff5afd` (Glitch Pink)
* `--background-pattern`: 8-bit grid loop
* Typography: pixel-style fonts (e.g. Press Start 2P)

**Design Features:**

* Pixel borders and animated background layers
* Retro loading bar animations
* CRT-style distortions applied to hover icons

---

## 🔮 4. **AI Interactive (Holographic System Aesthetic)**

**File:** `html-templates/ai-interactive.html`

**Theme Overview:**
Designed for futuristic tools and conversational interfaces. Uses layered gradients, translucent cards, and glowing outlines. Animations simulate holographic flicker and real-time AI data processing.

**Core Styling Logic:**

* `--primary-color`: `#00eaff` (Hologram Blue)
* `--accent-color`: `#ff00c8` (Cyber Pink)
* `--highlight-color`: `#b6ff00` (ML Green)
* Glassmorphism overlays + blurred motion transitions

**Design Features:**

* Multi-layered card interfaces
* Soft glow effects and variable blur
* Simulated hologram hover states

---

## 🎥 5. **Living Like Luna (Cinematic Aesthetic)**

**File:** `html-templates/living-like-luna.html`

**Theme Overview:**
Styled after cinematic title sequences and theatrical trailers. Deep purple and gold tones dominate. Content sections are divided like storyboard panels. Used for short films and visual media presentations.

**Core Styling Logic:**

* `--primary-color`: `#8a2be2` (Studio Purple)
* `--accent-color`: `#ffd700` (Film Gold)
* `--background`: radial gradient with spotlight mask
* Serif typography for headers, monospaced body text

**Design Features:**

* Letterbox layout simulation
* Subtitle-inspired body styling
* Smooth crossfades between sections
* Scene-based scroll reveals

---

## ✨ Shared Motion & Animation Standards

All pages inherit a base motion system derived from NightKind's animations:

```css
:root {
  --hover-duration: 0.5s;
  --hover-scale: 1.02;
  --glow-opacity: 0.7;
}

.hover-animate {
  transition: all var(--hover-duration) ease;
}
.hover-animate:hover {
  transform: scale(var(--hover-scale));
  filter: drop-shadow(0 0 6px var(--primary-color));
}
```

* All CTAs, buttons, and nav links use glow + scale animation.
* Transition functions use `ease`, never linear.
* Visual feedback is immediate but non-intrusive.

---

## 📊 Responsive Design Standards

* Layouts built with CSS Grid (`auto-fit, minmax(300px, 1fr)`)
* Mobile-first scaling with `clamp()` for fluid typography
* Vertical stacking for button rows under 768px
* Consistent section padding (80px top-bottom)

---

## 📃 Maintenance Protocol

### Adding New Themes

1. Define `--primary-color`, `--accent-color`, and `--background-color`
2. Choose typeface family (monospace, pixel, or serif)
3. Apply base motion tokens from NightKind
4. Write new rationale under same format

### Updating Existing Themes

* Check contrast ratios and glow visibility
* Sync button hover patterns to NightKind baseline
* Re-test mobile stacking and responsiveness

---

*This document governs the styling logic of all project pages and should be used as the primary reference for expanding, modifying, or re-aligning design consistency within the portfolio.*
