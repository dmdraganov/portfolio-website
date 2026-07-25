import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/content/projects';
import { projects } from '@/content/projects';
import { siteContent } from '@/content/site';
import { ExternalLink } from '@/shared/ui/external-link';
import { PrimaryCta } from '@/shared/ui/primary-cta';
import { SystemObject } from '@/shared/ui/system-object';

const { contact, home } = siteContent;

const pageContainerClass =
  'mx-auto w-[min(100%-(2*var(--space-gutter)),96rem)]';
const sectionLabelClass =
  'mb-4 font-mono text-label font-medium uppercase text-ink-muted';
const textLinkClass =
  'inline-flex min-h-11 items-center gap-2 font-semibold text-inherit underline decoration-2 decoration-signal underline-offset-[0.35em] transition-[color,text-decoration-color] duration-[var(--duration-hover)] ease-[var(--ease-out)] [@media(hover:hover)_and_(pointer:fine)]:hover:text-signal';
const sectionHeadingClass =
  'max-w-[22ch] text-[clamp(2.1rem,4vw,4.5rem)] font-semibold tracking-[-0.05em] leading-[1.05]';

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
        aria-label={`${home.projects.featuresLabel} ${project.name}`}
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

export function HomePage() {
  return (
    <main className="overflow-clip">
      <section
        className="py-[var(--space-section)] [&:has(.hero)]:py-0"
        aria-labelledby="home-title"
      >
        <div
          className={`${pageContainerClass} hero grid min-h-[calc(100svh-4rem)] grid-cols-[minmax(0,7fr)_minmax(16rem,5fr)] items-center gap-[clamp(2rem,7vw,9rem)] py-[clamp(3rem,6vw,6rem)] max-md:min-h-0 max-md:grid-cols-1`}
        >
          <div>
            <p className={sectionLabelClass}>{home.hero.eyebrow}</p>
            <h1
              id="home-title"
              className="max-w-[9.5ch] text-[clamp(3.25rem,6.5vw,7rem)] font-semibold tracking-[-0.07em] leading-[0.88]"
            >
              {home.hero.heading}
            </h1>
            <p className="mt-8 max-w-[39rem] text-[clamp(1.15rem,1.7vw,1.5rem)] leading-[1.45]">
              {home.hero.subheading}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 max-md:[&_.primary-cta]:w-full">
              <PrimaryCta
                href={contact.telegram.href}
                event={{ name: 'hero_telegram' }}
              >
                {home.hero.primaryAction}
              </PrimaryCta>
              <Link className={textLinkClass} href="#projects">
                {home.hero.secondaryAction}
                <span aria-hidden="true"> ↓</span>
              </Link>
            </div>
          </div>
          <div className="grid min-h-[22rem] place-items-center border-l border-border pl-[clamp(1rem,5vw,5rem)] max-md:min-h-60 max-md:border-t max-md:border-l-0 max-md:px-0 max-md:pt-8">
            <SystemObject />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="pt-[clamp(4rem,8vw,8rem)] pb-[var(--space-section)]"
        aria-labelledby="projects-title"
      >
        <div className={pageContainerClass}>
          <div className="max-w-[46rem]">
            <p className={sectionLabelClass}>{home.projects.label}</p>
            <h2 id="projects-title" className={sectionHeadingClass}>
              {home.projects.heading}
            </h2>
          </div>
          <div className="mt-[clamp(3rem,7vw,7rem)]">
            {projects.map((project, index) => (
              <ProjectEntry
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-surface-raised py-[var(--space-section)]"
        aria-labelledby="services-title"
      >
        <div className={pageContainerClass}>
          <div className="max-w-[46rem]">
            <p className={sectionLabelClass}>{home.services.label}</p>
            <h2 id="services-title" className={sectionHeadingClass}>
              {home.services.heading}
            </h2>
            <p className="mt-6 max-w-[42rem] text-[clamp(1.0625rem,1.4vw,1.35rem)] text-ink-muted">
              {home.services.introduction}
            </p>
          </div>
          <ol className="mt-[clamp(3rem,6vw,6rem)] p-0">
            {home.services.items.map((item, index) => (
              <li
                className="grid grid-cols-[4rem_minmax(0,1fr)] gap-4 border-t border-border py-6 last:border-b"
                key={item.title}
              >
                <span className="font-mono text-signal">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[clamp(1.35rem,2vw,2rem)] tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="mb-0 max-w-[45rem] text-ink-muted">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-[48rem] text-[0.9375rem] text-ink-muted">
            {home.services.note}
          </p>
          <div id="process" className="mt-[clamp(4rem,8vw,8rem)] scroll-mt-24">
            <p className={sectionLabelClass}>{home.process.label}</p>
            <h3 id="process-title" className={sectionHeadingClass}>
              {home.process.heading}
            </h3>
            <ol className="mt-[clamp(3rem,6vw,6rem)] grid grid-cols-3 p-0 max-md:grid-cols-1">
              {home.process.steps.map((step, index) => (
                <li
                  className="min-w-0 border-y border-border p-6 [&:not(:first-child)]:border-l max-md:border-l-0! max-md:border-t-0 max-md:first:border-t"
                  key={step.title}
                >
                  <span className="font-mono text-signal">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-6">
                    <strong className="mb-2 block">{step.title}</strong>
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 max-w-[52rem] text-[0.9375rem] text-ink-muted">
              {home.process.note}
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-[var(--space-section)]"
        aria-labelledby="about-title"
      >
        <div
          className={`${pageContainerClass} grid grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.2fr)] items-center gap-[clamp(3rem,10vw,12rem)] max-md:grid-cols-1`}
        >
          <div className="grid min-h-[25rem] place-items-center overflow-hidden rounded-lg border border-border bg-surface-raised max-md:min-h-64">
            <Image
              className="size-full object-cover"
              src={home.about.image.source}
              alt={home.about.image.alt}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div>
            <p className={sectionLabelClass}>{home.about.label}</p>
            <h2 id="about-title" className={sectionHeadingClass}>
              {home.about.heading}
            </h2>
            <p className="max-w-[47rem]">{home.about.text}</p>
            <h3 className="mt-8 text-base">{home.about.principlesHeading}</h3>
            <ul className="grid gap-2 pl-[1.2rem]">
              {home.about.principles.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="py-[var(--space-section)]"
        aria-labelledby="capabilities-title"
      >
        <div className={pageContainerClass}>
          <div className="max-w-[46rem]">
            <p className={sectionLabelClass}>{home.capabilities.label}</p>
            <h2 id="capabilities-title" className={sectionHeadingClass}>
              {home.capabilities.heading}
            </h2>
          </div>
          <dl className="mt-[clamp(3rem,6vw,6rem)] grid grid-cols-2 border-t border-border max-lg:grid-cols-1">
            {home.capabilities.items.map((item) => (
              <div
                className="grid grid-cols-[minmax(8rem,0.55fr)_1fr] gap-4 border-b border-border py-6 odd:pr-8 even:border-l even:pl-8 max-lg:px-0 max-lg:border-l-0"
                key={item.term}
              >
                <dt className="font-mono text-xs uppercase">{item.term}</dt>
                <dd className="m-0 text-ink-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-[48rem] text-[0.9375rem] text-ink-muted">
            {home.capabilities.note}
          </p>
        </div>
      </section>

      <section
        id="contacts"
        className="bg-surface py-[clamp(5rem,10vw,10rem)] text-ink"
        data-surface="inverse"
        aria-labelledby="contacts-title"
      >
        <div
          className={`${pageContainerClass} grid grid-cols-[minmax(0,1.25fr)_minmax(14rem,0.75fr)] gap-[clamp(3rem,9vw,10rem)] max-md:grid-cols-1`}
        >
          <div>
            <p className={sectionLabelClass}>{home.contact.label}</p>
            <h2
              id="contacts-title"
              className={`${sectionHeadingClass} max-w-[10ch]`}
            >
              {home.contact.heading}
            </h2>
            <p className="mt-6 max-w-[42rem] text-[clamp(1.0625rem,1.4vw,1.35rem)] text-ink-muted">
              {home.contact.text}
            </p>
          </div>
          <div className="grid content-start justify-items-start gap-6">
            <PrimaryCta
              href={contact.telegram.href}
              event={{ name: 'footer_telegram' }}
            >
              {home.contact.primaryAction}
            </PrimaryCta>
            <ExternalLink
              className={textLinkClass}
              href={contact.kwork.href}
              newTabDescription={siteContent.common.externalLinkDescription}
            >
              {home.contact.secondaryAction}
              <span aria-hidden="true"> ↗</span>
            </ExternalLink>
          </div>
          <ul className="col-span-full grid grid-cols-3 gap-6 mt-4 border-t border-border pt-6 max-md:grid-cols-1">
            {[
              [
                home.contact.methods.telegram,
                contact.telegram.href,
                contact.telegram.label,
                true,
              ],
              [
                home.contact.methods.email,
                contact.email.href,
                contact.email.label,
                false,
              ],
              [
                home.contact.methods.github,
                contact.github.href,
                contact.github.label,
                true,
              ],
            ].map(([label, href, text, newTab]) => (
              <li className="grid gap-1" key={String(href)}>
                <span className="font-mono text-xs uppercase text-ink-muted">
                  {label}
                </span>
                <ExternalLink
                  newTab={Boolean(newTab)}
                  href={String(href)}
                  newTabDescription={siteContent.common.externalLinkDescription}
                >
                  {text}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="bg-surface" data-surface="inverse">
        <div
          className={`${pageContainerClass} flex justify-between gap-4 border-t border-border py-6 font-mono text-xs text-ink-muted max-md:flex-col max-md:items-start`}
        >
          <span>
            © {new Date().getFullYear()} {home.footer.owner}
          </span>
          <a className="text-inherit" href="#home-title">
            {home.footer.backToTop} <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
