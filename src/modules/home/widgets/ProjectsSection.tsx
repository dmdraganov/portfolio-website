import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/content/projects';
import { projects } from '@/content/projects';
import { homeContent } from '@/content/site/home';
import {
  pageContainerClass,
  sectionLabelClass,
  textLinkClass,
} from '@/shared/ui/styles';

import { sectionHeadingClass } from '../styles';

function ProjectEntry({
  project,
  index,
}: Readonly<{ project: Project; index: number }>) {
  const projectNumber = String(index + 1).padStart(2, '0');
  const representativeImage = project.gallery[0];

  return (
    <article className="group/project grid grid-cols-[auto_minmax(14rem,0.7fr)_minmax(20rem,1.3fr)] items-start gap-[clamp(1.5rem,4vw,5rem)] border-t border-border py-[clamp(2rem,5vw,5rem)] transition-[border-color] duration-[var(--duration-hover)] ease-[var(--ease-out)] last:border-b focus-within:border-signal [@media(hover:hover)_and_(pointer:fine)]:hover:border-signal max-lg:grid-cols-[auto_minmax(0,1fr)] max-md:grid-cols-1">
      <div
        className="row-span-3 font-mono text-[clamp(1.25rem,2vw,2rem)] text-signal max-lg:row-span-4 max-md:row-auto"
        aria-hidden="true"
      >
        {projectNumber}
      </div>
      <div>
        <h3 className="text-[clamp(1.8rem,3.2vw,3.6rem)] tracking-[-0.05em] leading-[0.94] transition-colors duration-[var(--duration-hover)] ease-[var(--ease-out)] group-focus-within/project:text-signal [@media(hover:hover)_and_(pointer:fine)]:group-hover/project:text-signal">
          {project.name}
        </h3>
        <p className="mt-4 text-ink-muted">{project.card.summary}</p>
      </div>
      <Link
        className="col-start-3 row-span-3 block aspect-[16/10] overflow-hidden rounded-lg bg-surface-raised text-inherit no-underline max-lg:col-start-2 max-lg:row-auto max-md:col-auto"
        href={`/projects/${project.slug}`}
        aria-label={`${project.card.actionLabel}: ${project.name}`}
      >
        <Image
          className="block h-full w-full object-cover object-center transition-transform duration-[var(--duration-hover)] ease-[var(--ease-out)] motion-reduce:transform-none [@media(hover:hover)_and_(pointer:fine)]:group-hover/project:scale-[1.02]"
          src={representativeImage.source}
          alt=""
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </Link>
      <ul
        className="flex flex-wrap gap-x-3 gap-y-[0.4rem] p-0 font-mono text-xs text-ink-muted"
        aria-label={`${homeContent.projects.featuresLabel} ${project.name}`}
      >
        {project.card.highlights.map((highlight) => (
          <li
            className="after:ml-3 after:content-['·'] last:after:content-none"
            key={highlight}
          >
            {highlight}
          </li>
        ))}
      </ul>
      <Link
        className={`${textLinkClass} group-focus-within/project:text-signal group-focus-within/project:decoration-signal [@media(hover:hover)_and_(pointer:fine)]:group-hover/project:text-signal [@media(hover:hover)_and_(pointer:fine)]:group-hover/project:decoration-signal`}
        href={`/projects/${project.slug}`}
      >
        {project.card.actionLabel}
        <span aria-hidden="true"> ↗</span>
      </Link>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="pt-[clamp(4rem,8vw,8rem)] pb-[var(--space-section)]"
      aria-labelledby="projects-title"
    >
      <div className={pageContainerClass}>
        <div className="max-w-[46rem]">
          <p className={sectionLabelClass}>{homeContent.projects.label}</p>
          <h2 id="projects-title" className={sectionHeadingClass}>
            {homeContent.projects.heading}
          </h2>
        </div>
        <div className="mt-[clamp(3rem,7vw,7rem)]">
          {projects.map((project, index) => (
            <ProjectEntry key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
