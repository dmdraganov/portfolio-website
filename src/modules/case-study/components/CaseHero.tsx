import Link from 'next/link';

import type { Project } from '@/content/projects';
import { siteContent } from '@/content/site';
import { TrackedLink } from '@/shared/ui/TrackedLink';

import {
  pageContainerClass,
  sectionLabelClass,
  textLinkClass,
} from '../styles';

const { caseStudy, common } = siteContent;

function ProjectActions({ project }: Readonly<{ project: Project }>) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <TrackedLink
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 font-semibold text-signal-contrast no-underline transition-[transform_140ms_var(--ease-out),background-color_180ms_var(--ease-out)] active:scale-[0.97] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[color-mix(in_srgb,var(--signal)_86%,var(--ink))]"
        href={project.links.demo.href}
        target="_blank"
        rel="noopener noreferrer"
        event={{ name: 'project_demo', project: project.slug }}
      >
        {project.links.demo.label}
        <span aria-hidden="true"> ↗</span>
        <span className="sr-only"> ({common.externalLinkDescription})</span>
      </TrackedLink>
      <TrackedLink
        className={textLinkClass}
        href={project.links.repository.href}
        target="_blank"
        rel="noopener noreferrer"
        event={{ name: 'project_repository', project: project.slug }}
      >
        {project.links.repository.label}
        <span aria-hidden="true"> ↗</span>
        <span className="sr-only"> ({common.externalLinkDescription})</span>
      </TrackedLink>
    </div>
  );
}

export function CaseHero({ project }: Readonly<{ project: Project }>) {
  return (
    <>
      <div className={`${pageContainerClass} mb-[clamp(2.5rem,6vw,6rem)]`}>
        <Link className={textLinkClass} href="/#projects">
          <span aria-hidden="true">← </span>
          {caseStudy.backAction}
        </Link>
      </div>
      <section
        className={`${pageContainerClass} max-w-[60rem]`}
        aria-labelledby="case-title"
      >
        <p className={sectionLabelClass}>
          {caseStudy.caseLabel} · {project.name}
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
            <dt className="text-sm text-ink-muted">{caseStudy.roleLabel}</dt>
            <dd className="mt-2">{project.role}</dd>
          </div>
          <div>
            <dt className="text-sm text-ink-muted">{caseStudy.stackLabel}</dt>
            <dd className="mt-2">{project.stack.join(' · ')}</dd>
          </div>
        </dl>
      </section>
    </>
  );
}
