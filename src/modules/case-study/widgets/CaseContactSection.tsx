import Image from 'next/image';

import type { Project } from '@/content/projects';
import { getNextProject } from '@/content/projects';
import { caseStudyContent } from '@/content/site/case-study';
import { sharedSiteContent } from '@/content/site/shared';
import { PrimaryCta } from '@/shared/ui/PrimaryCta';
import { TrackedLink } from '@/shared/ui/TrackedLink';
import { pageContainerClass, sectionLabelClass } from '@/shared/ui/styles';

import { sectionHeadingClass } from '../styles';

const { contact } = sharedSiteContent;

export function CaseContactSection({
  project,
}: Readonly<{ project: Project }>) {
  const nextProject = getNextProject(project.slug);
  const nextProjectImage = nextProject.gallery[0];

  return (
    <section
      className="mt-[clamp(5rem,10vw,10rem)] bg-surface py-[clamp(4rem,7vw,7rem)] text-ink"
      data-surface="inverse"
      aria-labelledby="case-contact-title"
    >
      <div
        className={`${pageContainerClass} flex flex-wrap items-center gap-6 max-md:flex-col max-md:items-start`}
      >
        <p className={`${sectionLabelClass} basis-full`}>
          {caseStudyContent.contactLabel}
        </p>
        <TrackedLink
          className="group grid w-full max-w-[72rem] overflow-hidden rounded-lg border border-border bg-surface-raised text-inherit no-underline transition-[border-color,transform] duration-[var(--duration-hover)] ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:hover:border-signal [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 md:grid-cols-[minmax(15rem,0.85fr)_minmax(0,1.15fr)]"
          href={`/projects/${nextProject.slug}`}
          event={{ name: 'next_project_navigation', project: nextProject.slug }}
        >
          <Image
            className="h-full min-h-56 w-full object-cover"
            src={nextProjectImage.source}
            alt=""
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <span className="grid content-center gap-4 p-6 md:p-10">
            <span className={sectionLabelClass}>
              {caseStudyContent.nextProject}
            </span>
            <span className="max-w-[12ch] text-[clamp(2rem,3vw,3.5rem)] tracking-[-0.055em] leading-[0.96]">
              {nextProject.name}
            </span>
            <span className="inline-flex items-center gap-2 font-semibold text-signal">
              {nextProject.card.actionLabel}
              <span aria-hidden="true">→</span>
            </span>
          </span>
        </TrackedLink>
        <div className="grid basis-full gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <h2 id="case-contact-title" className={sectionHeadingClass}>
              {caseStudyContent.contactHeading}
            </h2>
            <p className="mt-4 max-w-[38rem] text-ink-muted">
              {caseStudyContent.contactText}
            </p>
          </div>
          <PrimaryCta
            href={contact.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
            event={{ name: 'footer_telegram' }}
          >
            {caseStudyContent.contactAction}
          </PrimaryCta>
        </div>
      </div>
    </section>
  );
}
