import type { MetadataRoute } from 'next';

import { toCanonicalUrl } from '../shared/lib/url';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/healthz',
    },
    sitemap: toCanonicalUrl('/sitemap.xml'),
  };
}
