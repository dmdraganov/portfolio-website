export const BUILD_PROFILES = ['local', 'test', 'release'] as const;

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

function parseProfile(value: string | undefined): BuildProfile {
  if (value === undefined) {
    return 'local';
  }

  if (BUILD_PROFILES.some((profile) => profile === value)) {
    return value as BuildProfile;
  }

  throw new Error(
    `BUILD_PROFILE must be exactly one of: ${BUILD_PROFILES.join(', ')}.`
  );
}

function requireReleaseOrigin(value: string | undefined): string {
  if (value === undefined || value.length === 0) {
    throw new Error('SITE_URL is required for BUILD_PROFILE=release.');
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
  const profile = parseProfile(environment.BUILD_PROFILE);

  if (profile !== 'release') {
    if (environment.YANDEX_METRICA_ID !== undefined) {
      throw new Error(
        `YANDEX_METRICA_ID must be absent for BUILD_PROFILE=${profile}.`
      );
    }

    return Object.freeze({
      profile,
      siteOrigin: profile === 'local' ? LOCAL_ORIGIN : TEST_ORIGIN,
      yandexMetricaId: null,
    });
  }

  return Object.freeze({
    profile,
    siteOrigin: requireReleaseOrigin(environment.SITE_URL),
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
