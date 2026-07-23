type SitePath = `/${string}`;

const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN;

if (siteOrigin === undefined) {
  throw new Error('NEXT_PUBLIC_SITE_ORIGIN must be configured at build time.');
}

export function toCanonicalUrl(path: SitePath): string {
  const url = new URL(path, siteOrigin);

  url.hash = '';
  url.search = '';

  return `${url.origin}${url.pathname === '/' ? '' : url.pathname}`;
}

export function toAnalyticsPath(input: string | URL): string {
  const url = new URL(input, siteOrigin);

  return `${url.pathname}${url.search}`;
}
