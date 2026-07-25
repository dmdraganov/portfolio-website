import type { NextConfig } from 'next';

import {
  parseBuildConfig,
  toPublicBuildEnvironment,
} from './src/shared/config/build';

const buildConfig = parseBuildConfig(process.env);
const isDevelopment = process.env.NODE_ENV === 'development';

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: https://mc.yandex.ru https://mc.yandex.com",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ''} https://mc.yandex.ru https://mc.yandex.com`,
  "connect-src 'self' https://mc.yandex.ru https://mc.yandex.com",
  'frame-src https://mc.yandex.ru https://mc.yandex.com',
  'upgrade-insecure-requests',
].join('; ');

const nextConfig: NextConfig = {
  env: toPublicBuildEnvironment(buildConfig),
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: contentSecurityPolicy,
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
