# Project Rules

- This is a Russian-language freelance portfolio built to convert visitors into client conversations.
- Position Dmitry through outcomes and finished work. Never use junior/student, frontend-only, résumé-style, or unsupported commercial claims.
- MVP routes: `/`, `/projects/weather-app`, `/projects/sound-engineer`.
- Telegram (`Обсудить задачу`) is the primary CTA. Email, GitHub, Kwork, demos, and repositories are secondary direct links; do not add a contact form.
- Treat `docs/prd.md` as the product contract, `docs/CONTENT.md` as approved public copy, `docs/EXPERIENCE.md` as behavior/IA, and `docs/DESIGN.md` plus `docs/design-system/` as visual rules. Do not silently rewrite approved copy.
- Stack: Next.js, TypeScript, Tailwind CSS, Motion, shadcn/ui, ESLint, Prettier. Add Motion or shadcn/ui only for an approved use.
- Content, navigation, and contact must work without animation, WebGL, analytics, or non-critical JavaScript.
- Motion must explain state or provide feedback: no scroll hijacking, infinite decoration, `transition: all`, layout-property animation, or essential hover-only UI. Respect Reduced Motion.
- Meet WCAG 2.2 AA, keyboard and touch operation, 320px+ layouts, visible focus, semantic HTML, and Russian metadata.
- Protect Core Web Vitals; reserve media dimensions, optimize assets, and keep 3D optional, lazy, pausable, and replaceable by a static fallback.
- Before handoff, run formatting, lint, build, and verify key routes at 375, 768, 1024, and 1440px.

## Architecture Guardrails

- Full contract: `docs/ARCHITECTURE.md`; explicit architecture decisions override conflicting implementation details elsewhere.
- Use a server-first modular monolith: `app -> modules -> content/shared`; modules never import each other, and `shared` imports no product content.
- Keep public content in validated readonly TypeScript records; no database, runtime fetch, ISR, Server Actions, or API mutations in the MVP.
- Server-render all essential content, navigation, links, metadata, and the sole page `h1`; client islands only enhance local browser/UI behavior.
- Keep 3D static in the MVP; no WebGL or global client state/event bus.
- Serve media from `public/media` through typed manifests with verified paths, dimensions, and meaningful Russian alternatives.
- Keep analytics fire-and-forget behind `TrackedLink`/the shared analytics facade; it must never block navigation.
- Release one tested standalone Docker image behind Nginx on the VPS; build locally, verify its SHA-256 on the VPS, and never build from a VPS checkout.
