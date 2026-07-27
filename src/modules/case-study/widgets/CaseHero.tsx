import Link from 'next/link';

import type { Project } from '@/content/projects';
import { caseStudyContent } from '@/content/site/case-study';
import { sharedSiteContent } from '@/content/site/shared';
import { cn } from '@/shared/lib/utils';
import { primaryCtaClass } from '@/shared/ui/PrimaryCta';
import {
  pageContainerClass,
  sectionLabelClass,
  textLinkClass,
} from '@/shared/ui/styles';
import { TrackedExternalLink } from '@/shared/ui/TrackedExternalLink';

const { common } = sharedSiteContent;

function ProjectActions({ project }: Readonly<{ project: Project }>) {
  const demo = 'demo' in project.links ? project.links.demo : undefined;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      {demo === undefined ? null : (
        <TrackedExternalLink
          className={cn(primaryCtaClass, 'min-h-12')}
          href={demo.href}
          event={{ name: 'project_demo', project: project.slug }}
          newTabDescription={common.externalLinkDescription}
        >
          {demo.label}
          <span aria-hidden="true"> ↗</span>
        </TrackedExternalLink>
      )}
      <TrackedExternalLink
        className={textLinkClass}
        href={project.links.repository.href}
        event={{ name: 'project_repository', project: project.slug }}
        newTabDescription={common.externalLinkDescription}
      >
        {project.links.repository.label}
        <span aria-hidden="true"> ↗</span>
      </TrackedExternalLink>
    </div>
  );
}

export function CaseHero({ project }: Readonly<{ project: Project }>) {
  return (
    <>
      <div className={`${pageContainerClass} mb-[clamp(2.5rem,6vw,6rem)]`}>
        <Link className={textLinkClass} href="/#projects">
          <span aria-hidden="true">← </span>
          {caseStudyContent.backAction}
        </Link>
      </div>
      <section
        className={`${pageContainerClass} max-w-[60rem]`}
        aria-labelledby="case-title"
      >
        <p className={sectionLabelClass}>
          {caseStudyContent.caseLabel} · {project.name}
        </p>
        <h1
          id="case-title"
          className="max-w-[13ch] text-[clamp(3rem,6vw,6.5rem)] tracking-[-0.07em] leading-[0.9] max-md:max-w-none"
        >
          {project.heading}
        </h1>
        <p className="mt-6 max-w-[45rem] text-[clamp(1.125rem,2vw,1.5rem)] leading-[1.45]">
          {project.lead}
        </p>
        <ProjectActions project={project} />
        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 border-y border-border py-6 max-md:grid-cols-1">
          <div>
            <dt className="text-sm text-ink-muted">
              {caseStudyContent.roleLabel}
            </dt>
            <dd className="mt-2">{project.role}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-muted">
              {caseStudyContent.stackLabel}
            </dt>
            <dd className="mt-2">{project.stack.join(' · ')}</dd>
          </div>
        </dl>
      </section>
    </>
  );
}
