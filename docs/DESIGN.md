---
name: Draganov Portfolio
description: A technically confident, editorial-minimal portfolio where purposeful motion turns web-development problem solving into a visible system.
status: final
updated: 2026-07-23
sources:
  - ./brief.md
  - ./prd.md
  - ./design-system/MASTER.md
  - ../README.md
colors:
  surface-light: '#F4F2ED'
  surface-raised-light: '#FFFFFF'
  ink-light: '#101010'
  muted-light: '#66645F'
  border-light: '#D6D2C8'
  surface-dark: '#0B0B0C'
  surface-raised-dark: '#151517'
  ink-dark: '#F3F1EC'
  muted-dark: '#A3A09A'
  border-dark: '#2D2D31'
  signal: '#FF5A36'
  signal-contrast: '#0B0B0C'
typography:
  display-xl:
    fontFamily: Geist Sans
    fontSize: clamp(3.5rem, 9vw, 9rem)
    fontWeight: '600'
    lineHeight: '0.88'
    letterSpacing: -0.065em
  display-lg:
    fontFamily: Geist Sans
    fontSize: clamp(2.5rem, 6vw, 6rem)
    fontWeight: '600'
    lineHeight: '0.94'
    letterSpacing: -0.05em
  heading:
    fontFamily: Geist Sans
    fontSize: clamp(1.75rem, 3vw, 3.25rem)
    fontWeight: '550'
    lineHeight: '1.05'
    letterSpacing: -0.035em
  body-lg:
    fontFamily: Geist Sans
    fontSize: clamp(1.125rem, 1.5vw, 1.5rem)
    fontWeight: '400'
    lineHeight: '1.45'
  body:
    fontFamily: Geist Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label:
    fontFamily: Geist Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.08em
rounded:
  sm: 4px
  md: 10px
  lg: 20px
  full: 9999px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 24px
  '6': 32px
  '7': 48px
  '8': 64px
  '9': 96px
  section: clamp(6rem, 12vw, 12rem)
  gutter: clamp(1rem, 3vw, 3rem)
components:
  button-primary:
    background: '{colors.signal}'
    foreground: '{colors.signal-contrast}'
    radius: '{rounded.full}'
  button-secondary:
    background: transparent
    foreground: currentColor
    radius: '{rounded.full}'
  project-frame:
    radius: '{rounded.lg}'
    overflow: hidden
  focus-ring:
    color: '{colors.signal}'
    width: 3px
  motion-system:
    ease-out: 'cubic-bezier(0.23, 1, 0.32, 1)'
    ease-in-out: 'cubic-bezier(0.77, 0, 0.175, 1)'
    ease-drawer: 'cubic-bezier(0.32, 0.72, 0, 1)'
    press-duration: 140ms
    hover-duration: 180ms
    ui-duration: 220ms
    drawer-duration: 280ms
    reveal-duration: 600ms
    stagger-step: 40ms
---

## Brand & Style

The identity is **systemic editorial minimalism**: an `ui-ux-pro-max` blend of Exaggerated Minimalism and a Motion-Driven Portfolio, disciplined by the requirement that motion always explains or confirms something. Strict typography and generous negative space establish control, while one purposeful site blueprint and a small number of experimental details demonstrate technical fluency. The site should feel like a capable builder explaining a system, not a developer résumé decorated with effects.

The narrative metaphor is assembly and repair. A site blueprint exposes structure, interface, data, accessibility, and responsive behavior as connected parts of one working result. Every visual transformation must map to an idea in the copy.

The real portrait is the identity anchor. AI may clean the background, extend the crop, or create a restrained art-directed environment; it must not materially change Dmitry's face or present a synthetic person.

## Colors

The palette is deliberately neutral so typography, project imagery, and spatial motion carry the experience. Light is the default mode; dark tokens create intentional inverse sections and media presentation rather than a required theme toggle.

- **Signal orange** marks action, active focus, and one or two system nodes in the 3D metaphor. It is never a general decorative wash.
- **Neutral surfaces** should feel warm rather than clinical in light mode and near-black rather than blue-tinted in dark mode.
- **Muted text** is reserved for metadata, labels, and technical context; primary content must retain strong contrast.

The semantic roles remain stable even if colors are tuned during implementation: surface, raised surface, ink, muted, border, signal, and signal contrast.

## Typography

Geist Sans and Geist Mono form the type system and are loaded through `next/font/google` with explicit Cyrillic and Latin subsets. `ui-ux-pro-max` recommended Archivo and Space Grotesk; Geist is retained because it preserves the same minimal portfolio character while reducing font overhead and confirming Cyrillic support. Large display text is the primary visual gesture. Tight leading and tracking make headings feel constructed, while body copy stays calm and readable.

- Use `display-xl` only for the hero and one high-impact transition statement.
- Use `display-lg` for project and services section titles.
- Use `heading` for Case Study chapters and CTA statements.
- Use `label` for indices, stack metadata, prices, and small navigational cues—not for body paragraphs.
- Avoid filling every viewport with oversized text; scale must create rhythm, not constant shouting.

## Layout & Spacing

Desktop uses a flexible 12-column grid. Mobile uses a single column with occasional controlled full-bleed media. Section spacing is generous so each claim has room to land.

- Home Page content max width: 1440px, with readable copy lines capped near 65 characters.
- Case Study narrative max width: 760px; media may extend to the wider grid.
- Projects may alternate alignment, but reading order remains linear in the DOM.
- The hero should reserve space for the site blueprint without requiring it for comprehension.

## Elevation & Depth

Depth comes from real spatial composition, tonal layers, and media scale—not stacks of card shadows. Use shadows only where an object is meant to feel physically separate. The blueprint creates depth through small, purposeful separation between its grid, interface, and system layers.

## Shapes

Most text and layout containers remain square or use `{rounded.sm}`. Project frames and portrait media use `{rounded.lg}`. Primary actions may use `{rounded.full}` because their continuous shape contrasts with the constructed geometry of the system.

Avoid making every surface a rounded card. Sections should be composed through grid, scale, and whitespace first.

## Components

shadcn/ui supplies accessible behavioral primitives where they reduce interaction risk, especially Sheet, Dialog, and Tooltip. Their default SaaS-like appearance is not the visual specification: every used primitive inherits this document's colors, radii, typography, focus, and motion tokens. Do not add shadcn components that have no approved use.

- **Primary button** — Signal fill, high-contrast text, generous horizontal padding, clear arrow or motion cue. `:active` scales the complete control to `0.97` over `{components.motion-system.press-duration}` with `{components.motion-system.ease-out}`. Hover changes color or moves only the internal arrow by 2-4px over `{components.motion-system.hover-duration}`; the control does not chase the pointer.
- **Secondary button** — Transparent with a visible border or underline. Used for project browsing, GitHub, demos, and Kwork. It receives the same press feedback and uses explicit `color`, `border-color`, or internal `transform` transitions—never `transition: all`.
- **Project frame** — Large media window with a fixed aspect ratio and reserved dimensions. It may reveal once through `clip-path` over `{components.motion-system.reveal-duration}`, with an opacity-only Reduced Motion fallback. Project title, summary, and action remain visible without hover.
- **Price line** — Service name, short boundary statement, and `от` price. It is a list or ruled table, not a pricing-plan card grid.
- **Capability index** — Compact grouped list translating client outcomes to supporting technologies.
- **Site blueprint** — One code-native SVG composition showing grid, interface, responsive range, data, keyboard access, and CTA as parts of a working web system. A one-time entrance reveals grid, browser frame, interface, drawn connections, and aligned label capsules in order. Fine-pointer position may then spring-shift the browser frame, interface, and system layer at visibly different depths; hover entry itself adds no transform, and the coordinate grid with its labels remains fixed. Reduced Motion preserves the complete static composition.
- **Portrait block** — Authentic portrait, short About text, and working principles. Avoid generic code-themed overlays.
- **Cursor enhancement** — Fine-pointer-only contextual label such as `Открыть кейс`; never a replacement for link text or native focus. A spring may smooth the decorative label without delaying the actual hover state.
- **Header and mobile menu** — Header colors transition over `{components.motion-system.hover-duration}`. The mobile sheet enters over `{components.motion-system.drawer-duration}` with `{components.motion-system.ease-drawer}` and exits in 200ms; focus is trapped and restored.
- **Media viewer** — Overlay fades in 180ms; centered content enters from `scale(0.97)` and opacity 0 over `{components.motion-system.ui-duration}`. As a modal, its transform origin remains centered.

Motion rules apply across components:

- Keyboard-initiated actions are immediate.
- Repeated UI motion stays below 300ms; rare explanatory reveals may use 500-700ms.
- Use CSS transitions for interruptible, predetermined UI. Use Motion or WAAPI only for runtime-dependent motion, spring interpolation, or coordinated state choreography that CSS cannot express cleanly.
- Animate movement with `transform` and `opacity`; never animate layout dimensions or offsets.
- Entering UI uses `{components.motion-system.ease-out}`. On-screen morphing uses `{components.motion-system.ease-in-out}`. `ease-in` is not used for interface feedback.
- No element enters from `scale(0)`. Group stagger is 40ms, limited to four items, and never blocks interaction.
- Hover motion is active only under `(hover: hover) and (pointer: fine)`.

## Do's and Don'ts

| Do                                                          | Don't                                                               |
| ----------------------------------------------------------- | ------------------------------------------------------------------- |
| Tie every experimental element to positioning or navigation | Add 3D, distortion, or cursor effects because they look fashionable |
| Keep content complete without WebGL or animation            | Put essential copy inside a canvas                                  |
| Use one signal color with discipline                        | Spread multiple neon accents across the page                        |
| Use a real portrait as the trust anchor                     | Replace identity with an obviously synthetic person                 |
| Let typography and space carry most of the visual weight    | Put every section inside a card                                     |
| Preserve visible focus and Reduced Motion                   | Use hover-only or scroll-locked interactions                        |
| Show project interfaces at legible scale                    | Hide work behind abstract mockups or extreme perspective            |
| Name exact transition properties and use custom curves      | Use `transition: all`, weak default easing, or `ease-in` feedback   |
| Keep frequent interactions immediate or under 200ms         | Add cinematic motion to navigation, keyboard actions, or every row  |
| Use one explanatory site blueprint with restrained depth    | Run multiple parallax layers or continuous decorative animation     |
| Start scale entrances near their final size                 | Animate from `scale(0)`                                             |
