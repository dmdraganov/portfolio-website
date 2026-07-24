import { siteContent } from '../content/site';
import { HomePage } from '../modules/home/home-page';
import { toPageMetadata } from './_lib/metadata';

export const metadata = toPageMetadata({ path: '/', seo: siteContent.seo });

export default function Home() {
  return <HomePage />;
}
