import type { MetadataRoute } from 'next';

import { toCanonicalUrl } from '../shared/lib/url';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: toCanonicalUrl('/sitemap.xml'),
  };
}
