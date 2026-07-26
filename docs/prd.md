---
title: Freelance Portfolio Website PRD
status: final
created: 2026-07-23
updated: 2026-07-25
sources:
  - ./brief.md
---

# PRD: Freelance Portfolio Website

## 0. Document Purpose

This document defines the MVP behavior, content surfaces, quality requirements, and acceptance criteria for Dmitry Draganov's Russian-language freelance portfolio. It is the implementation contract for product, design, development, content, and QA. Visual decisions live in `DESIGN.md`; information architecture and interaction behavior live in `EXPERIENCE.md`; final Russian copy lives in `src/content/site.ts` and `src/content/projects.ts`, with `CONTENT.md` as their editorial map.

## 1. Vision

The website converts a visitor with a web-development need into a qualified conversation. It does this by explaining the offer in client language, demonstrating technical capability through finished work, publishing realistic budget orientation, and making direct contact easy.

The product must not depend on résumé-style credibility signals or inflated claims. It earns trust through clarity, visible craft, accessible source code, a transparent process, and explicit commercial terms.

## 2. Target User

### 2.1 Jobs To Be Done

- Understand within seconds whether Dmitry handles the kind of web task the visitor has.
- Verify technical capability without reading a résumé or decoding a large stack list.
- Inspect finished interfaces, implemented functionality, live demos, and source code.
- Get an approximate price frame before spending time on a conversation.
- Understand how the engagement works and what is needed to receive an estimate.
- Start a low-friction conversation through a familiar channel.

### 2.2 Non-Users in the MVP

- Recruiters screening for a specific employment level or job title.
- Visitors seeking a downloadable résumé, education history, or language certificate.
- Clients requiring fabricated experience, anonymous ownership, or unsupported guarantees.

### 2.3 Key User Journeys

**UJ-1. Anna needs an urgent website fix.** Anna owns a small business and arrives from a recommendation on mobile. The hero confirms that fixes and improvements are in scope. She scans the starting price, reads the short process, and opens Telegram through `Обсудить задачу`. The climax is a ready chat where she can paste the broken URL and describe the issue.

**UJ-2. Ilya evaluates technical depth.** Ilya is preparing a startup prototype and arrives from GitHub on desktop. He opens the Weather Application case, reviews integrations and architecture decisions, opens the live demo and repository, then returns to the final CTA. The climax is confidence based on inspectable work rather than a seniority claim.

**UJ-3. Marina screens budget and transaction risk.** Marina needs a multi-page site and wants to understand cost before contacting anyone. She reviews indicative prices, sees that final scope is agreed in advance, learns about the 50% advance and seven-day defect warranty, then chooses Kwork as a protected transaction channel.

## 3. Glossary

- **Home Page** — The primary landing route containing positioning, selected work, services, process, about, capabilities, and contact CTA.
- **Case Study** — A dedicated project page describing a finished product without implying an unverified client engagement or commercial outcome.
- **Primary CTA** — The `Обсудить задачу` action that opens Telegram.
- **Secondary CTA** — A supporting action such as `Смотреть проекты`, `Открыть демо`, `Смотреть код`, or `Оформить через Kwork`.
- **Indicative Price** — A non-binding starting price used for budget orientation.
- **Defect Warranty** — Seven calendar days after delivery during which defects caused by delivered work are corrected without additional charge.
- **Reduced Motion** — An experience that removes non-essential transforms and scroll choreography when the operating system preference requests reduced motion.

## 4. Features

### 4.1 Home Page Narrative

**Description:** The Home Page tells one conversion story: identify the visitor's problem, prove capability, frame the engagement, and offer direct contact. Realizes UJ-1, UJ-2, and UJ-3.

#### FR-1: Hero positioning

The Home Page must present Dmitry's name, outcome-oriented positioning, a short supporting statement, the Primary CTA, and a project-navigation Secondary CTA above or close to the first viewport.

**Consequences:**

- No junior, trainee, student, or frontend-only label appears in the hero.
- The Primary CTA opens Dmitry's Telegram destination.
- The hero remains understandable when 3D and motion fail to load.

#### FR-2: Selected work

The Home Page must feature Weather Application and Sound Engineer Website as separate project entries.

**Consequences:**

- Each entry contains a clear product summary, 2-4 capability highlights, representative imagery, and a link to its Case Study.
- Project labels do not say or imply `client work`, a testimonial, revenue impact, or another unsupported result.

#### FR-3: Services and indicative prices

The Home Page must present services by client task, not by technology.

**Consequences:**

- Published anchors are: fixes from 2,000 RUB; landing page from 15,000 RUB; multi-page site from 30,000 RUB.
- Custom functionality, integrations, support, backend, CMS, and e-commerce work are described as individually assessed.
- A visible note explains that final cost depends on scope, complexity, and timing.

#### FR-4: Working process

The Home Page must explain the engagement inside the services section in three readable steps: discuss the task, fix the terms, then develop and hand off the result. The 50% advance or Kwork order, agreed revisions, handoff, warranty, and scope-change boundaries remain visible in a compact note.

**Consequences:**

- Scope changes are explicitly estimated separately.
- The Defect Warranty is distinguished from new requests.
- The process remains a distinct subsection rather than a separate top-level Home Page section.

#### FR-5: About and capability proof

The Home Page must include a real portrait, a concise personal narrative, working principles, and a compact capability summary.

**Consequences:**

- The narrative emphasizes creating useful complete products, adherence to requirements, polish, honesty, mutual understanding, and respect.
- Education, English level, résumé download, and employment-seeking language are absent.
- Technology lists remain secondary to client outcomes.

### 4.2 Case Studies

#### FR-6: Dedicated project routes

Each featured project must have a stable dedicated route and consistent Case Study structure.

**Consequences:**

- Required sections are overview, one compact project story covering the challenge, implemented solution, selected capabilities and technical decisions, technology stack, visual gallery, external links, and contact CTA.
- The page title, description, canonical URL, and Open Graph image are route-specific.

#### FR-7: Weather Application evidence

The Weather Application Case Study must document its four external-service integrations, modular separation, data caching, Canvas-based chart, localization, and three theme modes.

**Consequences:**

- The live demo points to `https://weather-app-self-three-95.vercel.app/`.
- The source link points to `https://github.com/dmdraganov/weather-app`.
- No performance percentage or business result is published without evidence.

#### FR-8: Sound Engineer Website evidence

The Sound Engineer Website Case Study must document its six responsive pages, custom audio player, and reusable modal and tab components.

**Consequences:**

- The live demo points to `https://dmdraganov.github.io/soundengineer-website/`.
- The source link points to `https://github.com/dmdraganov/soundengineer-website`.
- The page does not identify or imply a client owner.

#### FR-9: Case media

Each Case Study must use a deliberate visual sequence rather than a screenshot dump.

**Consequences:**

- Each project has 4-6 optimized assets covering desktop, mobile, and a defining interaction.
- Every informative image has meaningful alternative text; decorative media uses empty alternative text.
- Media dimensions are reserved to prevent layout shift.

### 4.3 Contact and Conversion

#### FR-10: Direct contact

Primary CTA instances must open Telegram; the contact section must also expose email, GitHub, and Kwork.

**Consequences:**

- The MVP has no contact form.
- External destinations are clearly labeled and keyboard accessible.
- Telegram points to `https://t.me/dmdraganov`, email to `mailto:draganovdmitry@gmail.com`, and the GitHub profile to `https://github.com/dmdraganov`.

#### FR-11: Kwork alternative

Visitors must be able to choose Kwork when they prefer a marketplace transaction.

**Consequences:**

- Kwork is described as an alternative way to formalize the order, not the Primary CTA.
- The destination is `https://kwork.ru/user/draganov`.

#### FR-12: Conversion analytics

Yandex Metrica must record visits and explicit conversion events.

**Consequences:**

- Events distinguish hero Telegram, footer Telegram, email, Kwork, GitHub profile, project demo, project repository, and Case Study navigation clicks.
- Analytics is installed on every route and verified before launch.
- No target conversion rate is declared until a baseline traffic sample is collected.

### 4.4 Motion and Interactive Identity

#### FR-13: Meaningful 3D metaphor

The Home Page may use a modular 3D system that assembles, separates, and repairs itself as the visitor scrolls.

**Consequences:**

- The visual reinforces creating, diagnosing, or repairing a system at specific narrative beats.
- It never blocks navigation, owns essential copy, or captures scroll.
- A static or lightweight fallback preserves the composition if WebGL is unavailable.

#### FR-14: Motion control

Scroll and transition motion must remain subordinate to reading and conversion.

**Consequences:**

- Reduced Motion removes parallax, continuous rotation, large transforms, and scroll-scrubbed choreography.
- Navigation and CTA actions do not wait for animation completion.
- Motion avoids layout properties that create avoidable reflow.

#### FR-15: Custom cursor constraints

A custom cursor may appear only when it communicates interactivity on fine-pointer devices.

**Consequences:**

- It is disabled for touch, coarse pointers, Reduced Motion when appropriate, and unsupported devices.
- The native cursor remains the functional fallback.
- No action depends on cursor-only text or visuals.

### 4.5 Search and Sharing

#### FR-16: Search metadata

Every public route must expose unique Russian title and description metadata.

**Consequences:**

 The site includes canonical URLs on `https://draganov.vercel.app`.
- `robots.txt` and `sitemap.xml` include all public routes.
- Semantic heading order has one primary page heading.

#### FR-17: Social previews

Home Page and Case Study links must produce intentional Open Graph previews.

**Consequences:**

- Each preview has a route-specific title, description, image, and image alternative text.
- Preview images remain readable at messaging-app thumbnail sizes.

## 5. Cross-Cutting Non-Functional Requirements

### NFR-1: Responsive behavior

All routes must work from 320 CSS pixels through large desktop widths without horizontal overflow or hidden essential content.

### NFR-2: Accessibility

The MVP targets WCAG 2.2 AA: `html` language is Russian, semantic landmarks are present, keyboard operation is complete, focus is visible and logical, contrast is sufficient, alternatives are meaningful, and motion preferences are respected. Interactive targets should be at least 24 by 24 CSS pixels, with 44 by 44 preferred for primary touch actions.

### NFR-3: Performance

At the 75th percentile of real visits, the target is LCP at or below 2.5 seconds, INP at or below 200 milliseconds, and CLS at or below 0.1. 3D, portrait, project media, and analytics must be loaded and scheduled so the core narrative remains available first. The selected web fonts must load a Cyrillic subset so Russian text does not fall back to a visually incompatible system font.

### NFR-4: Reliability

Every CTA and external link must have a valid destination at release. Failure of analytics, 3D, animation, or non-critical JavaScript must not remove content or navigation.

### NFR-5: Content integrity

Claims must be verifiable from the implemented projects or explicitly framed as working principles. No unverified commercial impact, client relationship, testimonial, years-of-experience claim, or universal technical guarantee may be published.

## 6. Non-Goals

- Résumé hosting or download.
- Employment-oriented positioning.
- Blog, newsletter, authentication, client dashboard, or CMS.
- Contact form or storage of enquiry data.
- Live availability status.
- Automated quote calculator.
- Fabricated testimonials, client identities, or commercial outcomes.
- 3D or motion that exists independently of the narrative.

## 7. MVP Scope

### 7.1 In Scope

- Home Page and two Case Studies.
- Responsive Russian content.
- Direct Telegram, email, GitHub, Kwork, demo, and repository links.
- Indicative prices and engagement terms.
- Meaningful motion with static and Reduced Motion fallbacks.
- SEO, social previews, sitemap, robots metadata, and Yandex Metrica events.
- Production and Preview deployments on Vercel, with canonical metadata fixed to the production domain.

### 7.2 Deferred

- Additional projects until they have a deployable demo and sufficient media.
- English localization.
- Testimonials after genuine client work is available.
- Contact form if direct channels later prove insufficient.
- CMS if content changes become frequent enough to justify operational cost.

## 8. Success Metrics

**Launch readiness**

- All FR acceptance consequences pass on current Chrome, Firefox, Safari, and Edge, plus mobile Safari and Chrome.
- All named analytics events are visible in Yandex Metrica debug verification.
- No critical or serious automated accessibility issue remains, followed by keyboard and screen-reader spot checks.
- Core Web Vitals meet the stated targets under representative production conditions.

**Post-launch learning**

- Establish a 30-day baseline for Case Study views, project demo/repository clicks, and contact destination clicks.
- Segment Primary CTA clicks by entry surface to learn which content creates intent.
- Set numeric conversion targets after at least 200 qualified sessions or three months, whichever comes later.

**Counter-metric**

- Do not optimize raw CTA clicks by hiding prices, exaggerating expertise, or reducing project evidence; lead quality and trust matter more than click volume.

## 9. Release Parameters

1. The canonical domain is `draganov.vercel.app`.
2. The existing portrait is final and does not require further work.
3. Route-specific Open Graph images are included for the Home page and both MVP Case Studies.
4. The production Yandex Metrica tag ID is `111050926`.

## 10. Source Standards

- Core Web Vitals thresholds: [web.dev](https://web.dev/articles/defining-core-web-vitals-thresholds).
- Accessibility target: [W3C WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).
- Next.js metadata and Open Graph conventions: [Next.js documentation](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).
- Vercel environment and deployment configuration: [Vercel documentation](https://vercel.com/docs/environment-variables/system-environment-variables).
- Yandex Metrica installation: [Yandex Metrica documentation](https://yandex.com/support/metrica/en/quick-start).
