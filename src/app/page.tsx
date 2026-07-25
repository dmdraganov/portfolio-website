import { sharedSiteContent } from '../content/site-shared';
import { HomePage } from '../modules/home/HomePage';
import { toPageMetadata } from './_lib/metadata';

export const metadata = toPageMetadata({
  path: '/',
  seo: sharedSiteContent.seo,
});

export default function Home() {
  return <HomePage />;
}
