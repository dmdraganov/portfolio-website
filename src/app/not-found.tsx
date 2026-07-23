import Link from 'next/link';
import type { Metadata } from 'next';

import { homeContent } from '../content/site';

export const metadata: Metadata = {
  title: 'Страница не найдена',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const { system } = homeContent;

  return (
    <main className="page-shell system-page">
      <section aria-labelledby="not-found-heading">
        <p className="eyebrow">404</p>
        <h1 id="not-found-heading">{system.notFound}</h1>
        <p>{system.notFoundDescription}</p>
        <nav aria-label="Восстановление навигации">
          <Link href="/">{system.homeAction}</Link>
          <Link href="/#projects">{system.projectsAction}</Link>
        </nav>
      </section>
    </main>
  );
}
