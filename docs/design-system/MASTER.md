# Draganov Portfolio Design System

> Global source of truth. When a page override exists in `pages/`, it overrides only the named rules in this document.

**Status:** Approved for implementation  
**Updated:** 2026-07-23  
**Product:** Russian-language freelance web-development portfolio  
**Stack declared in README:** Next.js, Tailwind CSS, Motion, Prettier, ESLint, shadcn/ui  
**Current platform:** Next.js 16, React 19, TypeScript 5, Tailwind CSS 4  
**Source:** `../../README.md`

## Design Thesis

The system combines two recommendations from the `ui-ux-pro-max` search: **Exaggerated Minimalism** for visual identity and **Motion-Driven Portfolio** for storytelling. The conversion pattern is not a generic masonry portfolio. It is a linear editorial narrative in which visitors understand the offer, inspect two projects, see price orientation and process, then contact Dmitry.

Authority comes from inspectable work, direct language, source code, pricing boundaries, and process—not certificates, fabricated metrics, badges, or claims of seniority.

## Core Principles

1. **Work first.** Project interfaces remain legible and are never subordinated to abstract effects.
2. **One visual idea.** A modular system assembles and repairs itself across the Home Page. Other effects support that idea.
3. **Strict typography, restrained chrome.** Type scale and whitespace create hierarchy; cards and shadows are exceptions.
4. **Action is always visible.** Telegram CTA and Case Study links never depend on hover.
5. **Motion explains or confirms.** If an animation has no explanatory, spatial, state, feedback, or continuity purpose, remove it.
6. **Progressive enhancement.** Content, navigation, and contact work without WebGL or motion code.

## Stack Responsibilities

| Tool         | Responsibility                                                                                                                                     |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Next.js      | App Router routes, server-rendered content, metadata, Open Graph assets, image optimization, and code splitting                                    |
| Tailwind CSS | Design tokens, responsive layout, states, and component styling                                                                                    |
| Motion       | Runtime-dependent animation, spring-smoothed decorative input, and interruptible state choreography when CSS transitions or WAAPI are insufficient |
| shadcn/ui    | Accessible behavioral primitives such as Sheet, Dialog, and Tooltip, visually restyled to match this system                                        |
| Prettier     | Deterministic source and documentation formatting                                                                                                  |
| ESLint       | Static checks for React, Next.js, TypeScript, accessibility-sensitive patterns, and project conventions                                            |

React and TypeScript are part of the current Next.js implementation even though the short README stack list does not name them separately.

Motion and shadcn/ui are declared by the project but are not yet initialized in `package.json` or `components.json`. Implementation must add them deliberately when their first approved use appears; the design system does not authorize installing unused UI packages.

## Color System

Light is the default mode because neutral light surfaces keep project imagery accurate and make the portfolio feel direct rather than cinematic by default. Dark tokens are for intentional inverse sections and media presentation; a theme toggle is not required for the MVP.

| Role           | Token                      | Value     | Usage                                  |
| -------------- | -------------------------- | --------- | -------------------------------------- |
| Canvas         | `--surface`                | `#F4F2ED` | Main background                        |
| Raised         | `--surface-raised`         | `#FFFFFF` | Navigation, media frames, overlays     |
| Ink            | `--ink`                    | `#101010` | Headings and body copy                 |
| Muted          | `--muted`                  | `#66645F` | Metadata and secondary copy            |
| Border         | `--border`                 | `#D6D2C8` | Rules, focus-neutral separators        |
| Signal         | `--signal`                 | `#FF5A36` | Primary CTA, focus, active system node |
| Signal ink     | `--signal-ink`             | `#0B0B0C` | Text on signal surfaces                |
| Inverse canvas | `--surface-inverse`        | `#0B0B0C` | Selected dark sections and media       |
| Inverse raised | `--surface-raised-inverse` | `#151517` | Dark overlays and frames               |
| Inverse ink    | `--ink-inverse`            | `#F3F1EC` | Text on inverse surfaces               |
| Inverse muted  | `--muted-inverse`          | `#A3A09A` | Secondary text on inverse surfaces     |

Rules:

- Signal orange is used for action and state, never as a broad gradient or page wash.
- Text contrast targets WCAG 2.2 AA; body text requires at least 4.5:1.
- Color is never the only state indicator.
- Avoid AI-purple gradients, gold-as-luxury shorthand, success green without a real success state, and low-opacity glass on light surfaces.

## Typography

Use **Geist Sans** for display, headings, body, and navigation, and **Geist Mono** for labels, prices, indices, and technical metadata. Both must load their Cyrillic subsets.

`ui-ux-pro-max` recommended Archivo + Space Grotesk. The project keeps Geist because it is already installed, supports the required Cyrillic subset, reduces font overhead, and creates a more cohesive technical voice. The recommended exaggerated scale is retained.

| Role       | Size                             | Weight | Line height | Tracking   |
| ---------- | -------------------------------- | ------ | ----------- | ---------- |
| Display XL | `clamp(3.5rem, 9vw, 9rem)`       | 600    | 0.88        | `-0.065em` |
| Display L  | `clamp(2.5rem, 6vw, 6rem)`       | 600    | 0.94        | `-0.05em`  |
| Heading    | `clamp(1.75rem, 3vw, 3.25rem)`   | 550    | 1.05        | `-0.035em` |
| Lead       | `clamp(1.125rem, 1.5vw, 1.5rem)` | 400    | 1.45        | normal     |
| Body       | `1rem`                           | 400    | 1.6         | normal     |
| Label      | `0.75rem`                        | 500    | 1.4         | `0.08em`   |

Display XL appears only in the hero and one narrative transition. Body copy is limited to approximately 65 characters per line.

## Spacing and Grid

Base spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Section spacing is fluid: `clamp(6rem, 12vw, 12rem)`. Page gutter is `clamp(1rem, 3vw, 3rem)`.

- Desktop: flexible 12-column grid, maximum content width 1440px.
- Case Study prose: maximum 760px; media may expand to 1200-1440px.
- Mobile: single column, 16px minimum gutter.
- Do not use masonry for two projects. Use two large, sequential editorial entries.
- Preserve DOM reading order even when desktop composition is asymmetric.

## Shape and Depth

- Small UI radius: 4px.
- Controls: 10px or full pill when the continuous shape distinguishes action.
- Project media and portrait: 20px.
- Shadows are not the default hierarchy mechanism. Use tonal layering, borders, scale, and whitespace first.
- Never place every section inside a rounded card.

## Motion Foundations

### Tokens

| Token               | Value                             | Use                                             |
| ------------------- | --------------------------------- | ----------------------------------------------- |
| `--ease-out`        | `cubic-bezier(0.23, 1, 0.32, 1)`  | Entering UI and immediate response              |
| `--ease-in-out`     | `cubic-bezier(0.77, 0, 0.175, 1)` | On-screen movement and morphing                 |
| `--ease-drawer`     | `cubic-bezier(0.32, 0.72, 0, 1)`  | Mobile navigation sheet                         |
| `--duration-press`  | `140ms`                           | Press feedback                                  |
| `--duration-hover`  | `180ms`                           | Color, border, underline, arrow                 |
| `--duration-ui`     | `220ms`                           | Popover, lightbox, compact state change         |
| `--duration-drawer` | `280ms`                           | Mobile menu                                     |
| `--duration-reveal` | `600ms`                           | Rare marketing/media reveal                     |
| `--stagger-step`    | `40ms`                            | Decorative grouped entrance, maximum four items |

### Decision Rules

- Keyboard-initiated navigation and actions are immediate.
- Repeated hover and navigation effects are subtle and stay below 200ms.
- Occasional overlays may animate for 180-280ms.
- Rare explanatory media reveals may run for 500-700ms.
- Never use `ease-in` for an interface response. Exits are equal to or faster than enters.
- Never use `transition: all`; name exact properties.
- Never enter from `scale(0)`. Use opacity plus `scale(0.95-0.98)` when scale is justified.
- Prefer interruptible CSS transitions for rapidly retargeted UI. Use WAAPI or springs only when motion depends on runtime input.
- Use Motion for runtime-dependent or spring-based animation only; do not replace simple CSS hover, press, and reveal transitions with Motion components.
- Animate movement with `transform` and `opacity`. Color, border-color, and clip-path are allowed for their specific visual roles.
- Hover motion is gated behind `(hover: hover) and (pointer: fine)`.

## Component Contracts

### Primary CTA

- Signal background and Signal ink.
- Minimum 44px touch target; generous horizontal padding.
- `:active` uses `transform: scale(0.97)` for 140ms with `--ease-out`.
- Hover changes the arrow/underline or color over 180ms; the control does not chase the pointer or move vertically.
- Keyboard activation is immediate. Focus ring is 3px Signal with offset.

### Secondary link and button

- Transparent surface with a visible underline or border.
- Hover changes color, border-color, or a 2-4px internal arrow translation.
- No full-control scaling on hover.

### Project entry

- Large fixed-aspect media with reserved dimensions.
- Project title, summary, and `Открыть кейс` remain visible on touch and keyboard surfaces.
- Desktop hover may reveal a contextual cursor label and shift media crop subtly; all information remains in HTML.
- Entry reveal uses a one-time `clip-path` or opacity/translate transition. It never repeats when scrolling back.

### Header and mobile menu

- Header surface changes over 180ms using background-color, border-color, and opacity only.
- Mobile menu enters over 280ms with `--ease-drawer`; exit is 200ms.
- Menu focus is trapped; Escape closes it and restores focus.
- The menu enters from the viewport edge as a sheet and does not scale from the navigation trigger.
- Prefer the shadcn/ui Sheet primitive for focus management and dismissal behavior, then replace its default visual treatment with this design system.

### Media viewer

- Overlay opacity: 180ms. Content: 220ms from `scale(0.97)` and opacity 0.
- Transform origin stays centered because the viewer is modal.
- Escape closes, focus returns to the invoking thumbnail, and browser zoom remains usable.
- Prefer the shadcn/ui Dialog primitive for accessible modal behavior; preserve the centered transform origin required by this system.

### Contextual cursor

- Fine-pointer desktop only; the native cursor remains the functional fallback.
- A spring may smooth the decorative label (`stiffness: 250`, `damping: 28`) without delaying actual hover state.
- It never contains unique instructions and never appears on touch or coarse pointers.

### 3D system object

- One scene, four named narrative states, no independent decorative orbit.
- The scene pauses when offscreen or when the document is hidden.
- Device-pixel ratio is capped and complexity is reduced on medium devices.
- Static artwork is shown before the scene loads and when WebGL, Reduced Motion, data saving, or device capability requires it.
- Essential content never enters the canvas accessibility tree.

## Icons and Imagery

- Use one SVG icon family, preferably Lucide, plus verified official brand marks.
- No emoji icons and no guessed brand logos.
- Use authentic, high-resolution project screenshots and a real portrait.
- AI may extend or clean the portrait environment but must not fabricate identity.
- Below-fold images are lazy-loaded; the hero image or static system fallback is prioritized only when it is the LCP candidate.

## Anti-Patterns

- Generic corporate cards, badges, certificates, or fake client logos.
- CTA hidden behind hover.
- Infinite decorative animation, autoplay audio, scroll hijacking, or mandatory horizontal scroll.
- `transition: all`, `ease-in` responses, `scale(0)`, and UI animation above 300ms.
- Animating width, height, top, left, padding, or margin.
- Multiple independent parallax layers competing with the 3D system.
- Low-quality project images, extreme perspective mockups, and abstract visuals that obscure real interfaces.
- Custom cursor on touch or as the sole affordance.

## Verification Matrix

- Viewports: 375, 768, 1024, and 1440px.
- Inputs: mouse, keyboard, touch, and coarse pointer.
- Preferences: Reduced Motion, 200% text zoom, 400% reflow where applicable.
- Modes: default light and every intentional inverse section.
- Runtime: normal, no WebGL, slow network, JavaScript enhancement failure.
- Motion review: normal speed, 2-5x slow motion, frame-by-frame, and at least one real mobile device.
