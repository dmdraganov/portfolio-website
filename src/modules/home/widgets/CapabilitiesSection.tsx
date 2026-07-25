import { homeContent } from '@/content/home';

import {
  pageContainerClass,
  sectionHeadingClass,
  sectionLabelClass,
} from '../styles';

export function CapabilitiesSection() {
  return (
    <section
      className="py-[var(--space-section)]"
      aria-labelledby="capabilities-title"
    >
      <div className={pageContainerClass}>
        <div className="max-w-[46rem]">
          <p className={sectionLabelClass}>{homeContent.capabilities.label}</p>
          <h2 id="capabilities-title" className={sectionHeadingClass}>
            {homeContent.capabilities.heading}
          </h2>
        </div>
        <dl className="mt-[clamp(3rem,6vw,6rem)] grid grid-cols-2 border-t border-border max-lg:grid-cols-1">
          {homeContent.capabilities.items.map((item) => (
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
          {homeContent.capabilities.note}
        </p>
      </div>
    </section>
  );
}
