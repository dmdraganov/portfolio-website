---
name: Draganov Portfolio Experience
status: final
updated: 2026-07-23
sources:
  - ./brief.md
  - ./prd.md
  - ./design-system/MASTER.md
  - ../README.md
---

# Draganov Portfolio — Experience Spine

## Foundation

Responsive Russian-language web experience, optimized for mobile and desktop discovery. The project-declared stack is Next.js, Tailwind CSS, Motion, Prettier, ESLint, and shadcn/ui; the current platform also includes React 19 and TypeScript 5. `DESIGN.md` owns visual identity; this document owns structure, behavior, states, motion boundaries, and journeys. The implementation-facing master and page overrides live in `docs/design-system/`.

The site is content-first. Server-rendered semantic content and direct links form the base experience; motion, 3D, cursor enhancements, and analytics progressively enhance it.

## Information Architecture

| Surface                | Route                      | Purpose                                                            |
| ---------------------- | -------------------------- | ------------------------------------------------------------------ |
| Home                   | `/`                        | Positioning, work, services with process, about, capabilities, contact |
| Weather Application    | `/projects/weather-app`    | Evidence, technical decisions, demo, GitHub, contact               |
| Sound Engineer Website | `/projects/sound-engineer` | Evidence, interactions, demo, GitHub, contact                      |
| Not found              | framework route            | Recover through Home and Projects links                            |

### Home Page sequence

1. **Header** — name/mark, Projects, Services, About, Contact.
2. **Hero** — promise, supporting statement, Primary CTA, project CTA, system-object opening state.
3. **Selected projects** — two large entries with visible product imagery and concise proof.
4. **Services, prices, and process** — task-oriented list with starting prices, followed by three steps and a compact note covering the 50% advance or Kwork, scope, and warranty boundaries.
5. **About** — portrait, one concise personal paragraph, and three working principles.
6. **Capabilities** — client outcomes supported by a compact technical index.
7. **Final CTA and footer** — Telegram first; email, GitHub, Kwork secondary.

### Case Study sequence

1. Back link and project index.
2. Project title, one-sentence value, role, year, demo, and GitHub.
3. Large representative media.
4. One compact project story connecting the challenge, implemented solution, defining capabilities, and technical decisions.
5. 4-6 asset gallery with captions.
6. Next project and contact CTA.

## Voice and Tone

Microcopy is direct, calm, specific, and written in first person when Dmitry speaks about his process. It avoids inflated adjectives, employment language, and claims that need evidence.

| Do                                                     | Don't                                               |
| ------------------------------------------------------ | --------------------------------------------------- |
| `Расскажите, что нужно создать или исправить.`         | `Реализую проект любой сложности на высшем уровне.` |
| `Стоимость зависит от объёма, сложности и сроков.`     | `Лучшие цены на рынке.`                             |
| `Сначала фиксируем результат, сроки и границы задачи.` | `Индивидуальный подход к каждому клиенту.`          |
| `Смотреть код на GitHub`                               | `Убедитесь в моей экспертности.`                    |
| `Исправлю ошибки своей работы в течение 7 дней.`       | `Бесплатные правки до полного удовлетворения.`      |

## Component Patterns

| Component     | Use                                 | Behavioral rules                                                                                                                                              |
| ------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sticky header | All routes                          | Transparent or quiet at top; gains a legible surface through explicit 180ms color/border transitions. Anchor links update URL without obstructing headings.   |
| Primary CTA   | Hero, process, footer, Case Studies | Opens Telegram. Label remains `Обсудить задачу`; analytics identifies placement. Press feedback is `scale(0.97)` for 140ms; keyboard activation is immediate. |
| Project entry | Home                                | Entire title/media group may be linked, but nested demo/GitHub actions remain separate and valid. Copy and `Открыть кейс` never depend on hover.              |
| Price row     | Services                            | Expands only when details materially clarify scope; no hidden required conditions.                                                                            |
| Process step  | Home                                | Number, short action, and one boundary statement. Not an accordion on desktop.                                                                                |
| External link | All routes                          | Shows destination type and opens predictably; new-tab behavior is signaled to assistive technology when used.                                                 |
| Gallery media | Case Studies                        | Click may open a centered lightweight viewer over 180-220ms; Escape closes and restores focus. Native page zoom and direct reading remain available.          |
| Next project  | Case Study footer                   | Shows the other project's title and representative image.                                                                                                     |

## State Patterns

| State                              | Surface                       | Treatment                                                                                                                        |
| ---------------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Initial document                   | All routes                    | Content and navigation render before enhancement code.                                                                           |
| 3D loading                         | Home                          | Reserved composition with static system artwork; core copy is ready and no generic spinner appears.                              |
| WebGL unavailable                  | Home                          | Static keyframe or optimized image replaces the scene.                                                                           |
| Reduced Motion                     | All routes                    | Short opacity and color transitions remain; position, scale, parallax, scrubbed transforms, and continuous rotation are removed. |
| Document hidden or scene offscreen | Home                          | 3D rendering and decorative requestAnimationFrame loops pause.                                                                   |
| Missing project media              | Case Study during development | Explicit placeholder naming the required asset; must not reach production.                                                       |
| External destination unavailable   | All routes                    | Link is removed or corrected before release; no dead-link UI in production.                                                      |
| 404                                | Not found                     | `Страница не найдена.` with Home and Projects routes.                                                                            |

## Motion Specification

Every animation must serve explanation, spatial continuity, state indication, feedback, or the prevention of a jarring change. Frequency determines restraint.

| Interaction                        | Frequency   | Behavior                                                                                     |
| ---------------------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| Keyboard navigation and activation | Repeated    | Immediate; no entrance or route animation                                                    |
| Button press                       | Repeated    | 140ms `scale(0.97)` with `{components.motion-system.ease-out}`                               |
| Hover color, underline, arrow      | Repeated    | 180ms; gate behind fine pointer and hover capability                                         |
| Header surface change              | Repeated    | 180ms color, border-color, and opacity only                                                  |
| Mobile navigation sheet            | Occasional  | Enter 280ms with `{components.motion-system.ease-drawer}`; exit 200ms                        |
| Media viewer                       | Occasional  | Overlay 180ms; centered content 220ms from `scale(0.97)` plus opacity                        |
| Project image reveal               | Rare        | One-time 600ms clip-path reveal; opacity fallback                                            |
| Section group reveal               | Rare        | Maximum four items, 40ms stagger, no blocked interaction                                     |
| System-object state change         | Explanatory | Scroll progress maps between named states; no scroll capture or idle orbit                   |
| Contextual cursor label            | Decorative  | Spring-smoothed label on fine pointer; native cursor and actual hover state remain immediate |

Implementation rules:

- Use exact transition properties; `transition: all` is prohibited.
- Use custom easing tokens from `DESIGN.md`; `ease-in` is prohibited for interface feedback.
- Use CSS transitions for predetermined, interruptible UI. Use Motion or WAAPI only when runtime input, springs, or coordinated state choreography require them.
- Do not enter from `scale(0)`; use `scale(0.95-0.98)` with opacity when scale is justified.
- Movement uses transform and opacity. Do not animate width, height, padding, margin, top, or left.
- Exits are equal to or faster than enters.

## Interaction Primitives

- Native vertical scroll remains in control at all times.
- Anchor navigation uses smooth scrolling only when Reduced Motion is not requested.
- Section reveal is a supporting cue, not a gate; content starts readable and may transition once from no more than an 8px offset.
- The system object changes through Fragmented, Aligned, Exploded View, and Resolved states as relevant sections enter the viewport. No frame-by-frame scroll lock and no continuous idle rotation.
- Pointer hover may reveal contextual text; touch receives equivalent persistent labels.
- `Escape` closes any media viewer. Focus returns to the invoking control.
- All actions work with keyboard alone.

**Banned:** scroll hijacking, mandatory horizontal scroll, cursor-chasing buttons, hover-only information, long unskippable intros, audio autoplay, nested carousels, and interaction that depends on a high-end GPU.

## Accessibility Floor

- Target WCAG 2.2 AA.
- Semantic header, navigation, main, article, section, and footer landmarks.
- One descriptive `h1` per route; heading order does not skip for visual styling.
- Visible focus with `{components.focus-ring}` and no focus obscured by the sticky header.
- Primary tap targets prefer 44 by 44 CSS pixels or larger.
- Project images have content-specific Russian alternative text; decorative 3D and textures are hidden from assistive technology.
- Canvas content never owns meaning unavailable in adjacent HTML.
- Reduced Motion is tested at operating-system level.
- Reduced Motion keeps useful opacity and color feedback but removes position, scale, parallax, and continuous motion.
- Text remains readable at 200% zoom and layout remains usable at 400% reflow where applicable.
- Custom cursor is disabled for coarse pointers and never suppresses the native cursor until the enhancement is ready.

## Responsive & Platform

| Range        | Behavior                                                                                                  |
| ------------ | --------------------------------------------------------------------------------------------------------- |
| `< 640px`    | Single-column content, persistent text labels, no custom cursor, simplified or static 3D, full-width CTA. |
| `640-1023px` | Single-column narrative with wider media; 3D may be reduced in complexity.                                |
| `≥ 1024px`   | 12-column compositions, controlled asymmetry, full system-object choreography, contextual cursor allowed. |

Navigation collapses to a menu only if all key links cannot fit. The mobile menu must be a simple dialog/sheet with visible close control, focus trap, Escape handling, and scroll restoration.

The Home Page uses `docs/design-system/pages/home.md`. Both Case Studies use `docs/design-system/pages/project-case.md`; Case Studies omit the 3D scene and prioritize media performance.

## Motion QA

- Inspect every animation at normal speed, 2-5x slow motion, and frame by frame.
- Confirm transform origins: trigger-aware for anchored popovers, centered for modal media viewers.
- Interrupt rapid interactions mid-transition and verify they retarget without restarting from zero.
- Test hover rules with mouse and touch; no touch action may become stuck in hover state.
- Test the mobile menu and project media on physical mobile hardware.
- Verify no animation delays navigation, CTA activation, or reading.
- Verify the 3D scene pauses offscreen and when the browser tab is hidden.

## Key Flows

### Flow 1 — Urgent fix from mobile

1. Anna opens a shared link on her phone.
2. Hero copy confirms that both creation and repair are offered.
3. She selects `Услуги` from the header or scrolls to the pricing section.
4. `Исправления и небольшие доработки — от 2 000 ₽` gives a budget floor.
5. The process explains what information to send and how scope is fixed.
6. She taps `Обсудить задачу`.
7. **Climax:** Telegram opens with Dmitry's profile ready for a message; no form or account is introduced by the portfolio.

### Flow 2 — Technical evaluation from desktop

1. Ilya lands on the Home Page from GitHub.
2. He scans the selected projects and opens Weather Application.
3. The Case Study explains the four integrations, cached data, modular structure, and Canvas chart.
4. He opens the live demo, then the repository.
5. He returns and reads the engagement process.
6. **Climax:** technical strength is demonstrated through inspectable decisions and working software; he opens Telegram from the Case Study CTA.

### Flow 3 — Budget and trust screening

1. Marina arrives from search looking for a multi-page site.
2. She finds the 30,000 RUB starting point and individual-estimate note.
3. She reads that scope, timing, and price are fixed before work.
4. She sees the 50% advance outside Kwork and the seven-day Defect Warranty.
5. She chooses `Оформить через Kwork`.
6. **Climax:** she reaches the marketplace profile with expectations set and transaction preference respected.

## Content and Media Requirements

- One authentic portrait in at least desktop landscape and mobile portrait crops.
- Weather Application: overview desktop, overview mobile, search/map, hourly chart, theme or localization, and one architecture/integration visual.
- Sound Engineer Website: home desktop, mobile page, audio player states, portfolio/media page, modal or tabs, and one full-page composition.
- Each asset has a short caption explaining why it matters; captions do not merely name the screen.
- Source content and final copy live in `src/content/site.ts` and `src/content/projects.ts`; `CONTENT.md` maps those editorial surfaces.

## Release Parameters

- Canonical domain: `draganov.vercel.app`.
- Portrait: the existing site portrait is final and needs no further treatment.
- Route-specific Open Graph images: `og-home.webp`, `og-weather-app.webp`, and `og-sound-engineer.webp`.
- Yandex Metrica production counter: `111050926`.
