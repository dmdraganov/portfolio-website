import { homeContent } from '@/content/home';

import {
  pageContainerClass,
  sectionHeadingClass,
  sectionLabelClass,
} from '../styles';

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-surface-raised py-[var(--space-section)]"
      aria-labelledby="services-title"
    >
      <div className={pageContainerClass}>
        <div className="max-w-[46rem]">
          <p className={sectionLabelClass}>{homeContent.services.label}</p>
          <h2 id="services-title" className={sectionHeadingClass}>
            {homeContent.services.heading}
          </h2>
          <p className="mt-6 max-w-[42rem] text-[clamp(1.0625rem,1.4vw,1.35rem)] text-ink-muted">
            {homeContent.services.introduction}
          </p>
        </div>
        <ol className="mt-[clamp(3rem,6vw,6rem)] p-0">
          {homeContent.services.items.map((item, index) => (
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
                <p className="mb-0 max-w-[45rem] text-ink-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-[48rem] text-[0.9375rem] text-ink-muted">
          {homeContent.services.note}
        </p>
        <div id="process" className="mt-[clamp(4rem,8vw,8rem)] scroll-mt-24">
          <p className={sectionLabelClass}>{homeContent.process.label}</p>
          <h3 id="process-title" className={sectionHeadingClass}>
            {homeContent.process.heading}
          </h3>
          <ol className="mt-[clamp(3rem,6vw,6rem)] grid grid-cols-3 p-0 max-md:grid-cols-1">
            {homeContent.process.steps.map((step, index) => (
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
            {homeContent.process.note}
          </p>
        </div>
      </div>
    </section>
  );
}
