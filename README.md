# Personal Portfolio Website

Личный сайт-портфолио Дмитрия Драганова для презентации услуг веб-разработки и привлечения фриланс-клиентов.

## Stack

- Next.js
- Tailwind CSS
- Motion
- Prettier
- ESLint
- shadcn/ui
- Vercel

## Documentation

- [Product Brief](docs/brief.md) — позиционирование, аудитория, предложение и границы проекта.
- [PRD](docs/prd.md) — функциональные требования, критерии готовности и метрики.
- [Design Specification](docs/DESIGN.md) — визуальное направление, типографика, цвета и компоненты.
- [Experience Specification](docs/EXPERIENCE.md) — архитектура страниц, сценарии, адаптивность и анимации.
- [Content](docs/CONTENT.md) — карта канонических русскоязычных текстов.
- [Design System](docs/design-system/MASTER.md) — правила реализации дизайн-системы.
- [Home Page Rules](docs/design-system/pages/home.md) — правила главной страницы.
- [Case Study Rules](docs/design-system/pages/project-case.md) — правила страниц проектов.

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

Vercel is the only production deployment target. Connect the repository as a
Next.js project and keep the default Build Command:

```bash
npm run build
```

Expose Vercel system environment variables to builds. The application derives
Preview and Production profiles from `VERCEL_ENV` and uses
`VERCEL_PROJECT_PRODUCTION_URL` for canonical URLs in both environments.
The canonical Production hostname is `draganov.vercel.app`.

Configure `YANDEX_METRICA_ID` only for the Production environment. Production
builds fail when it is missing or malformed; Preview builds fail if analytics is
enabled accidentally. Local development requires no environment file.
