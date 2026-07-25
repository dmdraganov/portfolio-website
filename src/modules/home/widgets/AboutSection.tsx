import Image from 'next/image';

import { siteContent } from '@/content/site';

import {
  pageContainerClass,
  sectionHeadingClass,
  sectionLabelClass,
} from '../styles';

const { home } = siteContent;

export function AboutSection() {
  return (
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
  );
}
