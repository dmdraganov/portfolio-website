import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/content/projects';
import { getNextProject } from '@/content/projects';
import { siteContent } from '@/content/site';
import { PrimaryCta } from '@/shared/ui/primary-cta';
import { TrackedLink } from '@/shared/ui/tracked-link';

const { caseStudy, common, contact } = siteContent;

const pageContainerClass =
  'mx-auto w-[min(100%-(2*var(--space-gutter)),96rem)]';
const sectionLabelClass =
  'mb-4 font-mono text-label font-medium uppercase text-ink-muted';
const textLinkClass =
  'inline-flex min-h-11 items-center gap-2 font-semibold text-inherit underline decoration-2 decoration-signal underline-offset-[0.35em] transition-[color,text-decoration-color] duration-[var(--duration-hover)] ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:hover:text-signal';
const sectionHeadingClass =
  'max-w-[18ch] text-[clamp(2rem,4vw,4rem)] tracking-[-0.055em] leading-[1.05]';
const galleryLayoutClasses = [
  'max-w-[52rem]',
  'max-w-[76rem] lg:ml-auto',
  'max-w-[44rem] lg:ml-[12%]',
  'max-w-[64rem] lg:ml-auto',
  'max-w-[50rem]',
] as const;

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

export function CaseStudyPage({ project }: Readonly<{ project: Project }>) {
  const nextProject = getNextProject(project.slug);
  const [representativeImage, ...galleryImages] = project.gallery;
  const nextProjectImage = nextProject.gallery[0];

  return (
    <main className="overflow-clip pt-[clamp(2rem,6vw,6rem)]">
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
        className={`${pageContainerClass} mt-[clamp(4rem,8vw,8rem)] grid max-w-[72rem] gap-x-[clamp(3rem,9vw,10rem)] gap-y-[clamp(3rem,5vw,5rem)] lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]`}
        aria-labelledby="challenge-title"
      >
        <div>
          <p className={sectionLabelClass}>{caseStudy.taskLabel}</p>
          <h2 id="challenge-title" className={sectionHeadingClass}>
            {caseStudy.taskHeading}
          </h2>
          <p className="mt-4 leading-[1.55]">{project.task}</p>
        </div>
        <div>
          <p className={sectionLabelClass}>{caseStudy.solutionLabel}</p>
          <h2 className={sectionHeadingClass}>{caseStudy.solutionHeading}</h2>
          <p className="mt-4 leading-[1.55]">{project.solution}</p>
          <ul className="grid gap-3 pl-5 leading-[1.55]">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="max-w-[48rem] lg:col-start-2">
          <p className={sectionLabelClass}>{caseStudy.technicalLabel}</p>
          <h2 className={sectionHeadingClass}>{caseStudy.technicalHeading}</h2>
          <p className="mt-4 leading-[1.55]">{project.technicalDecisions}</p>
        </div>
      </section>

      <section
        className={`${pageContainerClass} mt-[clamp(4rem,8vw,8rem)]`}
        aria-labelledby="gallery-title"
      >
        <p className={sectionLabelClass}>{caseStudy.galleryLabel}</p>
        <h2 id="gallery-title" className={sectionHeadingClass}>
          {caseStudy.galleryHeading}
        </h2>
        <div className="mt-[clamp(3rem,6vw,6rem)] grid gap-[clamp(3.5rem,7vw,7rem)]">
          {galleryImages.map((image, index) => (
            <figure
              className={
                galleryLayoutClasses[index % galleryLayoutClasses.length]
              }
              key={image.source.src}
            >
              <Image
                className="h-auto w-full rounded-lg border border-border bg-surface-raised"
                src={image.source}
                alt={image.alt}
                sizes="(max-width: 768px) 100vw, 760px"
              />
              <figcaption className="mt-3 max-w-[48rem] text-sm text-ink-muted">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="mt-[clamp(5rem,10vw,10rem)] bg-surface py-[clamp(4rem,7vw,7rem)] text-ink"
        data-surface="inverse"
        aria-labelledby="case-contact-title"
      >
        <div
          className={`${pageContainerClass} flex flex-wrap items-center gap-6 max-md:flex-col max-md:items-start`}
        >
          <p className={`${sectionLabelClass} basis-full`}>
            {caseStudy.contactLabel}
          </p>
          <TrackedLink
            className="group grid w-full max-w-[72rem] overflow-hidden rounded-lg border border-border bg-surface-raised text-inherit no-underline transition-[border-color,transform] duration-[var(--duration-hover)] ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:hover:border-signal [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-1 md:grid-cols-[minmax(15rem,0.85fr)_minmax(0,1.15fr)]"
            href={`/projects/${nextProject.slug}`}
            event={{
              name: 'next_project_navigation',
              project: nextProject.slug,
            }}
          >
            <Image
              className="h-full min-h-56 w-full object-cover"
              src={nextProjectImage.source}
              alt=""
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <span className="grid content-center gap-4 p-6 md:p-10">
              <span className={sectionLabelClass}>{caseStudy.nextProject}</span>
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
                {caseStudy.contactHeading}
              </h2>
              <p className="mt-4 max-w-[38rem] text-ink-muted">
                {caseStudy.contactText}
              </p>
            </div>
            <PrimaryCta
              href={contact.telegram.href}
              event={{ name: 'footer_telegram' }}
            >
              {caseStudy.contactAction}
            </PrimaryCta>
          </div>
        </div>
      </section>
    </main>
  );
}
