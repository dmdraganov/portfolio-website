import assert from 'node:assert/strict';
import test from 'node:test';

import {
  parseBuildConfig,
  toPublicBuildEnvironment,
} from '../../src/shared/config/build.ts';

test('defaults to the local profile when BUILD_PROFILE is absent', () => {
  assert.deepEqual(parseBuildConfig({}), {
    profile: 'local',
    siteOrigin: 'http://localhost:3000',
    yandexMetricaId: null,
  });
});

test('derives preview and release profiles from the Vercel environment', () => {
  assert.deepEqual(
    parseBuildConfig({
      VERCEL_ENV: 'preview',
      VERCEL_PROJECT_PRODUCTION_URL: 'portfolio.example.com',
    }),
    {
      profile: 'preview',
      siteOrigin: 'https://portfolio.example.com',
      yandexMetricaId: null,
    }
  );

  assert.deepEqual(
    parseBuildConfig({
      VERCEL_ENV: 'production',
      VERCEL_PROJECT_PRODUCTION_URL: 'portfolio.example.com',
      YANDEX_METRICA_ID: '123456',
    }),
    {
      profile: 'release',
      siteOrigin: 'https://portfolio.example.com',
      yandexMetricaId: '123456',
    }
  );
});

test('rejects unknown Vercel environments when no profile overrides them', () => {
  assert.throws(
    () => parseBuildConfig({ VERCEL_ENV: 'staging' }),
    /VERCEL_ENV must be exactly one of/
  );
});

test('uses fixed origins for local and test profiles', () => {
  assert.equal(
    parseBuildConfig({ BUILD_PROFILE: 'local' }).siteOrigin,
    'http://localhost:3000'
  );
  assert.equal(
    parseBuildConfig({ BUILD_PROFILE: 'test' }).siteOrigin,
    'http://127.0.0.1:3000'
  );
});

test('accepts only exact build profile names', () => {
  for (const BUILD_PROFILE of [' release', 'release ', 'Release', 'prod', '']) {
    assert.throws(
      () => parseBuildConfig({ BUILD_PROFILE }),
      /BUILD_PROFILE must be exactly one of/
    );
  }
});

test('rejects a Metrica ID outside the release profile', () => {
  for (const BUILD_PROFILE of ['local', 'test', 'preview'] as const) {
    assert.throws(
      () =>
        parseBuildConfig({
          BUILD_PROFILE,
          VERCEL_PROJECT_PRODUCTION_URL:
            BUILD_PROFILE === 'preview' ? 'example.com' : undefined,
          YANDEX_METRICA_ID: '123456',
        }),
      /YANDEX_METRICA_ID must be absent/
    );
  }
});

test('accepts the Vercel production hostname as the published origin', () => {
  assert.deepEqual(
    parseBuildConfig({
      BUILD_PROFILE: 'release',
      VERCEL_PROJECT_PRODUCTION_URL: 'portfolio.example.com',
      YANDEX_METRICA_ID: '123456',
    }),
    {
      profile: 'release',
      siteOrigin: 'https://portfolio.example.com',
      yandexMetricaId: '123456',
    }
  );
});

test('accepts a normalized release configuration', () => {
  assert.deepEqual(
    parseBuildConfig({
      BUILD_PROFILE: 'release',
      SITE_URL: 'https://example.com',
      YANDEX_METRICA_ID: '123456',
    }),
    {
      profile: 'release',
      siteOrigin: 'https://example.com',
      yandexMetricaId: '123456',
    }
  );
});

test('rejects non-normalized release origins', () => {
  const invalidOrigins = [
    'http://example.com',
    'https://EXAMPLE.com',
    'https://example.com/',
    'https://example.com:443',
    'https://user@example.com',
    'https://example.com/path',
    'https://example.com?query=1',
    'https://example.com#fragment',
    ' https://example.com',
    'https://example.com ',
    'not-a-url',
  ];

  for (const SITE_URL of invalidOrigins) {
    assert.throws(
      () =>
        parseBuildConfig({
          BUILD_PROFILE: 'release',
          SITE_URL,
          YANDEX_METRICA_ID: '123456',
        }),
      /SITE_URL/,
      SITE_URL
    );
  }
});

test('rejects missing or malformed release Metrica IDs', () => {
  for (const YANDEX_METRICA_ID of [
    undefined,
    '',
    '0',
    '0123',
    '123 ',
    ' 123',
    '12a',
  ]) {
    assert.throws(
      () =>
        parseBuildConfig({
          BUILD_PROFILE: 'release',
          SITE_URL: 'https://example.com',
          YANDEX_METRICA_ID,
        }),
      /YANDEX_METRICA_ID/
    );
  }
});

test('rejects malformed Vercel production hostnames', () => {
  for (const VERCEL_PROJECT_PRODUCTION_URL of [
    '',
    'https://example.com',
    'EXAMPLE.com',
    'example.com/',
    'example.com:443',
    'example.com/path',
    ' example.com',
    'example.com ',
  ]) {
    assert.throws(
      () =>
        parseBuildConfig({
          BUILD_PROFILE: 'preview',
          VERCEL_PROJECT_PRODUCTION_URL,
        }),
      /VERCEL_PROJECT_PRODUCTION_URL/,
      VERCEL_PROJECT_PRODUCTION_URL
    );
  }
});

test('serializes only validated public build constants', () => {
  assert.deepEqual(
    toPublicBuildEnvironment(parseBuildConfig({ BUILD_PROFILE: 'test' })),
    {
      NEXT_PUBLIC_SITE_ORIGIN: 'http://127.0.0.1:3000',
      NEXT_PUBLIC_YANDEX_METRICA_ID: '',
    }
  );
});
