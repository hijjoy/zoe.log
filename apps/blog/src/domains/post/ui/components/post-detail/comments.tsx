'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

const GISCUS_CONFIG = {
  id: 'comments',
  repo: 'hijjoy/zoe.log',
  repoId: 'R_kgDOO0coPQ',
  category: 'Announcements',
  categoryId: 'DIC_kwDOO0coPc4CrLtQ',
  mapping: 'pathname',
  term: 'Welcome',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  theme: 'preferred_color_scheme',
  lang: 'ko',
  loading: 'lazy',
} as const;

export default function Comments() {
  const { theme } = useTheme();

  return (
    <div className="mt-16">
      <Giscus
        {...GISCUS_CONFIG}
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
      />
    </div>
  );
}
