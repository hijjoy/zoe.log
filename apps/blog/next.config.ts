import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 모노레포에서 packages/ui 트랜스파일
  transpilePackages: ['@zoelog/ui'],

  // Prisma Client는 서버 번들에서 외부 모듈로 유지 (Turbopack/Webpack 공통)
  serverExternalPackages: ['@prisma/client', '.prisma/client'],

  // Turbopack 설정 (Next.js 16+)
  turbopack: {},

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
