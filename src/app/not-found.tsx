import Link from 'next/link';
import type { Metadata } from 'next';

import { siteContent } from '../content/site';

export const metadata: Metadata = {
  title: siteContent.system.notFoundMetadataTitle,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const { system } = siteContent;

  return (
    <main className="page-shell system-page">
      <section aria-labelledby="not-found-heading">
        <p className="eyebrow">404</p>
        <h1 id="not-found-heading">{system.notFound}</h1>
        <p>{system.notFoundDescription}</p>
        <nav aria-label={system.navigationRecoveryLabel}>
          <Link href="/">{system.homeAction}</Link>
          <Link href="/#projects">{system.projectsAction}</Link>
        </nav>
      </section>
    </main>
  );
}
