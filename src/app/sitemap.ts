import type { MetadataRoute } from 'next';

import { projects } from '@/content/projects';
import { toCanonicalUrl } from '@/shared/lib/url';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: toCanonicalUrl('/'),
    },
    ...projects.map((project) => ({
      url: toCanonicalUrl(`/projects/${project.slug}`),
    })),
  ];
}
