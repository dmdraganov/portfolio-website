import Link from 'next/link';
import type { Metadata } from 'next';

import { systemContent } from '../content/system';

export const metadata: Metadata = {
  title: systemContent.notFoundMetadataTitle,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="page-shell system-page">
      <section aria-labelledby="not-found-heading">
        <p className="eyebrow">404</p>
        <h1 id="not-found-heading">{systemContent.notFound}</h1>
        <p>{systemContent.notFoundDescription}</p>
        <nav aria-label={systemContent.navigationRecoveryLabel}>
          <Link href="/">{systemContent.homeAction}</Link>
          <Link href="/#projects">{systemContent.projectsAction}</Link>
        </nav>
      </section>
    </main>
  );
}
