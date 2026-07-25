import Image from 'next/image';

import type { Project } from '@/content/projects';
import { siteContent } from '@/content/site';

import {
  pageContainerClass,
  sectionHeadingClass,
  sectionLabelClass,
} from '../styles';

const { caseStudy } = siteContent;

export function CaseGallery({ project }: Readonly<{ project: Project }>) {
  const galleryImages = project.gallery.slice(1);

  return (
    <section
      className={`${pageContainerClass} mt-[clamp(4rem,8vw,8rem)]`}
      aria-labelledby="gallery-title"
    >
      <p className={sectionLabelClass}>{caseStudy.galleryLabel}</p>
      <h2 id="gallery-title" className={sectionHeadingClass}>
        {caseStudy.galleryHeading}
      </h2>
      <div className="mt-[clamp(3rem,6vw,6rem)] grid gap-[clamp(4rem,7vw,7rem)]">
        {galleryImages.map((image, index) => {
          const isPortrait = image.source.height > image.source.width;
          const isReversed = index % 2 === 1;

          return (
            <figure
              className={
                isPortrait
                  ? 'mx-auto grid w-full max-w-[64rem] items-start gap-4 sm:grid-cols-[minmax(18rem,24rem)_minmax(0,1fr)] sm:gap-x-[clamp(1.5rem,4vw,4rem)]'
                  : 'grid items-start gap-4 lg:grid-cols-12 lg:gap-x-[clamp(2rem,4vw,4rem)]'
              }
              key={image.source.src}
            >
              <Image
                className={`h-auto w-full rounded-lg border border-border bg-surface-raised ${isPortrait ? 'sm:col-start-1 sm:row-start-1' : isReversed ? 'lg:col-span-9 lg:col-start-4' : 'lg:col-span-9'}`}
                src={image.source}
                alt={image.alt}
                sizes={
                  isPortrait
                    ? '(max-width: 1023px) 100vw, 420px'
                    : '(max-width: 1023px) 100vw, 1000px'
                }
              />
              <figcaption
                className={`text-sm text-ink-muted ${isPortrait ? 'sm:col-start-2 sm:row-start-1 sm:pt-1' : isReversed ? 'lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:pt-1' : 'lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:pt-1'}`}
              >
                {image.caption}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
