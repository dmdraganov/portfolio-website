import type { Metadata } from 'next';

import type { PageSeo } from '@/content/define';
import { toCanonicalUrl } from '@/shared/lib/url';

type PageMetadataInput = Readonly<{
  path: '/' | `/projects/${string}`;
  seo: PageSeo;
}>;

export function toPageMetadata({ path, seo }: PageMetadataInput): Metadata {
  const canonical = toCanonicalUrl(path);
  const imagePath = seo.image?.source.src;

  if (imagePath !== undefined && !imagePath.startsWith('/')) {
    throw new Error(`Open Graph image must use a site path: ${imagePath}.`);
  }

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'ru_RU',
      url: canonical,
      title: seo.title,
      description: seo.description,
      images:
        seo.image === undefined
          ? undefined
          : [
              {
                url: toCanonicalUrl(imagePath as `/${string}`),
                width: seo.image.source.width,
                height: seo.image.source.height,
                alt: seo.image.alt,
              },
            ],
    },
  };
}
