import { homeContent } from '@/content/site/home';
import { sharedSiteContent } from '@/content/site/shared';
import { ExternalLink } from '@/shared/ui/ExternalLink';
import { PrimaryCta } from '@/shared/ui/PrimaryCta';
import {
  pageContainerClass,
  sectionLabelClass,
  textLinkClass,
} from '@/shared/ui/styles';

import { sectionHeadingClass } from '../styles';

const { contact, common } = sharedSiteContent;

const contactMethods = [
  [
    homeContent.contact.methods.telegram,
    contact.telegram.href,
    contact.telegram.label,
    true,
  ],
  [
    homeContent.contact.methods.email,
    contact.email.href,
    contact.email.label,
    true,
  ],
  [
    homeContent.contact.methods.github,
    contact.github.href,
    contact.github.label,
    true,
  ],
] as const;

export function ContactSection() {
  return (
    <>
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
            <p className={sectionLabelClass}>{homeContent.contact.label}</p>
            <h2
              id="contacts-title"
              className={`${sectionHeadingClass} max-w-[10ch]`}
            >
              {homeContent.contact.heading}
            </h2>
            <p className="mt-6 max-w-[42rem] text-[clamp(1.0625rem,1.4vw,1.35rem)] text-ink-muted">
              {homeContent.contact.text}
            </p>
          </div>
          <div className="grid content-start justify-items-start gap-6">
            <PrimaryCta
              href={contact.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
              event={{ name: 'footer_telegram' }}
            >
              {homeContent.contact.primaryAction}
            </PrimaryCta>
            <ExternalLink
              className={textLinkClass}
              href={contact.kwork.href}
              newTabDescription={common.externalLinkDescription}
            >
              {homeContent.contact.secondaryAction}
              <span aria-hidden="true"> ↗</span>
            </ExternalLink>
          </div>
          <ul className="col-span-full grid grid-cols-3 gap-6 mt-4 border-t border-border pt-6 max-md:grid-cols-1">
            {contactMethods.map(([label, href, text, newTab]) => (
              <li className="grid gap-1" key={href}>
                <span className="font-mono text-xs uppercase text-ink-muted">
                  {label}
                </span>
                <ExternalLink
                  newTab={newTab}
                  href={href}
                  newTabDescription={common.externalLinkDescription}
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
            © {new Date().getFullYear()} {homeContent.footer.owner}
          </span>
          <a className="text-inherit" href="#home-title">
            {homeContent.footer.backToTop} <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}
