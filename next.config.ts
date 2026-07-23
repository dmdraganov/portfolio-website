import type { NextConfig } from 'next';

import {
  parseBuildConfig,
  toPublicBuildEnvironment,
} from './src/shared/config/build';

const buildConfig = parseBuildConfig(process.env);

const nextConfig: NextConfig = {
  env: toPublicBuildEnvironment(buildConfig),
  output: 'standalone',
  trailingSlash: false,
};

export default nextConfig;
