import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/tyken-updated' : '',
  assetPrefix: isProd ? '/tyken-updated/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/tyken-updated' : '',
  },
};

export default nextConfig;
