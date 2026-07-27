import Image from 'next/image';

import { homeContent } from '@/content/site/home';
import { pageContainerClass, sectionLabelClass } from '@/shared/ui/styles';

import { sectionHeadingClass } from '../styles';

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
            src={homeContent.about.image.source}
            alt={homeContent.about.image.alt}
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div>
          <p className={sectionLabelClass}>{homeContent.about.label}</p>
          <h2 id="about-title" className={sectionHeadingClass}>
            {homeContent.about.heading}
          </h2>
          <p className="mt-6 max-w-[47rem]">{homeContent.about.text}</p>
          <h3 className="mt-8 text-base">
            {homeContent.about.principlesHeading}
          </h3>
          <ul className="grid gap-2 pl-[1.2rem]">
            {homeContent.about.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
