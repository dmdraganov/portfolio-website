import Image from 'next/image';

import type { Project } from '@/content/projects';
import { caseStudyContent } from '@/content/site/case-study';
import { pageContainerClass, sectionLabelClass } from '@/shared/ui/styles';

import { sectionHeadingClass } from '../styles';

export function CaseOverview({ project }: Readonly<{ project: Project }>) {
  const representativeImage = project.gallery[0];

  return (
    <>
      <figure className={`${pageContainerClass} mt-[clamp(3.5rem,7vw,7rem)]`}>
        <Image
          className="h-auto w-full rounded-lg border border-border bg-surface-raised"
          src={representativeImage.source}
          alt={representativeImage.alt}
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
        <figcaption className="mt-3 max-w-[48rem] text-sm text-ink-muted">
          {representativeImage.caption}
        </figcaption>
      </figure>
      <section
        className={`${pageContainerClass} mt-[clamp(4rem,8vw,8rem)] max-w-[52rem]`}
        aria-labelledby="story-title"
      >
        <p className={sectionLabelClass}>{caseStudyContent.storyLabel}</p>
        <h2 id="story-title" className={sectionHeadingClass}>
          {caseStudyContent.storyHeading}
        </h2>
        <p className="mt-6 text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-[1.65]">
          {project.story}
        </p>
      </section>
    </>
  );
}
