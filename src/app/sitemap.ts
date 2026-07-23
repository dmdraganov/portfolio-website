import type { MetadataRoute } from 'next';

import { getHomeMetadata, getProjectSlugs } from '../content/selectors';
import { toCanonicalUrl } from '../shared/lib/url';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: toCanonicalUrl(getHomeMetadata().canonicalPath),
    },
    ...getProjectSlugs().map((slug) => ({
      url: toCanonicalUrl(`/projects/${slug}`),
    })),
  ];
}
