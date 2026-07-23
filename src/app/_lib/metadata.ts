import type { Metadata } from 'next';

import type { MetadataModel } from '../../content/contracts';
import { mediaById } from '../../content/media';
import { toCanonicalUrl } from '../../shared/lib/url';

export function toPageMetadata(model: MetadataModel): Metadata {
  const image = mediaById[model.openGraphImageId];

  if (image === undefined) {
    throw new Error(
      `Missing Open Graph media asset: ${model.openGraphImageId}.`
    );
  }

  const canonical = toCanonicalUrl(model.canonicalPath);

  return {
    title: model.title,
    description: model.description,
    alternates: { canonical },
    robots: model.index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      type: 'website',
      locale: model.locale,
      url: canonical,
      title: model.title,
      description: model.description,
      images: [
        {
          url: toCanonicalUrl(image.path),
          width: image.width,
          height: image.height,
          alt: model.openGraphAlt,
        },
      ],
    },
  };
}
