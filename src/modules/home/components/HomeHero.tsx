import Link from 'next/link';

import { siteContent } from '@/content/site';
import { PrimaryCta } from '@/shared/ui/PrimaryCta';
import { SystemObject } from '@/shared/ui/SystemObject';

import {
  pageContainerClass,
  sectionLabelClass,
  textLinkClass,
} from '../styles';

const { contact, home } = siteContent;

export function HomeHero() {
  return (
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
  );
}
