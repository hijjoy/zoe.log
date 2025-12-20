import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  // Turbopack 설정 (Next.js 16+)
  turbopack: {},

  // vercel 배포를 위한 설정
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
};

export default nextConfig;
