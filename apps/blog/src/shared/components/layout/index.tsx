'use client';

import { Typography } from '@zoelog/ui';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import ThemeToggle from '../theme-toggle';
import Logo from './logo';
import Nav from './nav';
import Socials from './socials';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const isArticle = pathname?.startsWith('/article/') ?? false;

  return (
    <>
      <SkipToContentLink />
      {isArticle ? (
        <ArticleShell>{children}</ArticleShell>
      ) : (
        <DefaultShell>{children}</DefaultShell>
      )}
    </>
  );
}

function SkipToContentLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:border focus:border-ds-border-semantic focus:bg-ds-background focus:px-4 focus:py-2 focus:shadow-md"
    >
      <Typography
        variant="caption"
        as="span"
        color="heading"
        className="font-mono uppercase tracking-wider"
      >
        본문으로 건너뛰기
      </Typography>
    </a>
  );
}

function ArticleShell({ children }: LayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden px-5 py-6 md:grid md:grid-cols-[1fr_3fr_2fr] md:gap-x-10 md:px-10 md:py-8">
      <header className="mb-6 flex items-center justify-between md:hidden">
        <Logo />
        <Nav />
      </header>

      <aside className="hidden md:flex md:flex-col md:justify-between">
        <Logo />
        <ThemeToggle />
        <Socials />
      </aside>

      <main id="main-content" className="min-w-0 overflow-hidden">
        {children}
      </main>

      <aside className="hidden md:block">
        <Nav />
      </aside>

      <footer className="mt-10 flex items-center justify-between md:hidden">
        <ThemeToggle />
        <Socials />
      </footer>
    </div>
  );
}

function DefaultShell({ children }: LayoutProps) {
  return (
    <div className="grid min-h-dvh grid-cols-[auto_1fr] gap-x-6 overflow-x-hidden px-5 py-6 md:grid-cols-[1fr_3fr_2fr] md:gap-x-10 md:px-10 md:py-8">
      <aside className="flex flex-col justify-between">
        <Logo />
        <ThemeToggle />
        <Socials />
      </aside>

      <main id="main-content" className="min-w-0 overflow-hidden">
        <div className="mb-6 flex justify-end md:hidden">
          <Nav />
        </div>
        {children}
      </main>

      <aside className="hidden md:block">
        <Nav />
      </aside>
    </div>
  );
}
