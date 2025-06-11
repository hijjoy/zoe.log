import type { Metadata } from 'next';
import '@/shared/styles/globals.css';
import RootLayout from '@/shared/layouts/root-layout';

export const metadata: Metadata = {
  title: 'hijjoy',
  description: '개발자 조이 블로그',
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
  openGraph: {
    url: 'https://hijjoy.com',
    title: 'hijjoy',
    description: '웹 프론트엔드 개발자 조이입니다',
    images: [
      {
        url: '/images/openGraph.png',
        width: 1200,
        height: 638,
        alt: '블로그 대표 이미지',
      },
    ],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="vsc-initialized mx-auto max-w-[768px]">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
