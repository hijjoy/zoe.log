import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ViewTransitions } from 'next-view-transitions';
import '@/shared/styles/globals.css';
import RootLayout from '@/shared/layouts/root-layout';

const wantedSans = localFont({
  src: '../../node_modules/wanted-sans/fonts/variable/WantedSansVariable.ttf',
  variable: '--font-wanted-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hijjoy.com'),
  title: {
    default: 'hijjoy',
    template: '%s | hijjoy',
  },
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
    <html
      lang="ko"
      className={wantedSans.variable}
      suppressHydrationWarning
      style={{ colorScheme: 'light dark' }}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0a0a0a"
          media="(prefers-color-scheme: dark)"
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6379538190035381"
          crossOrigin="anonymous"
        />
      </head>
      <body className="vsc-initialized mx-auto max-w-[768px]">
        <ViewTransitions>
          <RootLayout>{children}</RootLayout>
          <div id="modal-root" />
        </ViewTransitions>
      </body>
    </html>
  );
}
