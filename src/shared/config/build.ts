export const BUILD_PROFILES = ['local', 'test', 'preview', 'release'] as const;

export type BuildProfile = (typeof BUILD_PROFILES)[number];

type BuildEnvironment = Readonly<Record<string, string | undefined>>;

export type BuildConfig = Readonly<{
  profile: BuildProfile;
  siteOrigin: string;
  yandexMetricaId: string | null;
}>;

const LOCAL_ORIGIN = 'http://localhost:3000';
const TEST_ORIGIN = 'http://127.0.0.1:3000';
const METRICA_ID_PATTERN = /^[1-9][0-9]*$/;

function parseProfile(
  value: string | undefined,
  vercelEnvironment: string | undefined
): BuildProfile {
  if (value === undefined) {
    if (
      vercelEnvironment === undefined ||
      vercelEnvironment === 'development'
    ) {
      return 'local';
    }

    if (vercelEnvironment === 'preview') {
      return 'preview';
    }

    if (vercelEnvironment === 'production') {
      return 'release';
    }

    throw new Error(
      'VERCEL_ENV must be exactly one of: development, preview, production.'
    );
  }

  if (BUILD_PROFILES.some((profile) => profile === value)) {
    return value as BuildProfile;
  }

  throw new Error(
    `BUILD_PROFILE must be exactly one of: ${BUILD_PROFILES.join(', ')}.`
  );
}

function requireVercelProductionOrigin(value: string | undefined): string {
  if (value === undefined || value.length === 0) {
    throw new Error(
      'VERCEL_PROJECT_PRODUCTION_URL is required for Vercel preview and production builds.'
    );
  }

  if (value !== value.trim() || value.includes('://')) {
    throw new Error(
      'VERCEL_PROJECT_PRODUCTION_URL must be one lowercase hostname without a protocol, port, path, query, fragment, or surrounding whitespace.'
    );
  }

  let url: URL;

  try {
    url = new URL(`https://${value}`);
  } catch {
    throw new Error('VERCEL_PROJECT_PRODUCTION_URL must be a valid hostname.');
  }

  if (
    url.hostname !== value ||
    url.port !== '' ||
    url.pathname !== '/' ||
    url.search !== '' ||
    url.hash !== ''
  ) {
    throw new Error(
      'VERCEL_PROJECT_PRODUCTION_URL must be one lowercase hostname without a protocol, port, path, query, or fragment.'
    );
  }

  return url.origin;
}

function requirePublishedOrigin(environment: BuildEnvironment): string {
  return environment.SITE_URL === undefined
    ? requireVercelProductionOrigin(environment.VERCEL_PROJECT_PRODUCTION_URL)
    : requireReleaseOrigin(environment.SITE_URL);
}

function requireReleaseOrigin(value: string | undefined): string {
  if (value === undefined || value.length === 0) {
    throw new Error('SITE_URL is required for a published build.');
  }

  if (value !== value.trim()) {
    throw new Error('SITE_URL must not contain surrounding whitespace.');
  }

  let url: URL;

  try {
    url = new URL(value);
  } catch {
    throw new Error('SITE_URL must be a valid absolute URL.');
  }

  const normalizedOrigin = `https://${url.hostname}`;
  const isNormalizedOrigin =
    url.protocol === 'https:' &&
    url.username === '' &&
    url.password === '' &&
    url.port === '' &&
    url.pathname === '/' &&
    url.search === '' &&
    url.hash === '' &&
    value === normalizedOrigin;

  if (!isNormalizedOrigin) {
    throw new Error(
      'SITE_URL must be one normalized HTTPS origin with a lowercase host and no credentials, port, path, trailing slash, query, or fragment.'
    );
  }

  return normalizedOrigin;
}

function requireMetricaId(value: string | undefined): string {
  if (value === undefined || !METRICA_ID_PATTERN.test(value)) {
    throw new Error(
      'YANDEX_METRICA_ID is required for BUILD_PROFILE=release and must match ^[1-9][0-9]*$.'
    );
  }

  return value;
}

export function parseBuildConfig(environment: BuildEnvironment): BuildConfig {
  const profile = parseProfile(
    environment.BUILD_PROFILE,
    environment.VERCEL_ENV
  );

  if (profile !== 'release') {
    if (environment.YANDEX_METRICA_ID !== undefined) {
      throw new Error(
        `YANDEX_METRICA_ID must be absent for BUILD_PROFILE=${profile}.`
      );
    }

    return Object.freeze({
      profile,
      siteOrigin:
        profile === 'local'
          ? LOCAL_ORIGIN
          : profile === 'test'
            ? TEST_ORIGIN
            : requirePublishedOrigin(environment),
      yandexMetricaId: null,
    });
  }

  return Object.freeze({
    profile,
    siteOrigin: requirePublishedOrigin(environment),
    yandexMetricaId: requireMetricaId(environment.YANDEX_METRICA_ID),
  });
}

export function toPublicBuildEnvironment(
  config: BuildConfig
): Readonly<Record<string, string>> {
  return Object.freeze({
    NEXT_PUBLIC_SITE_ORIGIN: config.siteOrigin,
    NEXT_PUBLIC_YANDEX_METRICA_ID: config.yandexMetricaId ?? '',
  });
}
