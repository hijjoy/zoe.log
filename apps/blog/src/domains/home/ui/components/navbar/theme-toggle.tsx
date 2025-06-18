'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import MotionOpacity from '@/shared/components/motion-opacity';
import { MoonIcon, SunIcon } from './icon';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      className="group size-[30px] cursor-pointer rounded-md p-1.5 transition-all duration-500 hover:bg-gray-200"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      disabled={!mounted}
    >
      {mounted ? (
        <MotionOpacity key={isDark ? 'moon' : 'sun'}>
          {isDark ? (
            <MoonIcon className="size-4 text-gray-600 transition-all duration-300 group-hover:rotate-12 dark:block dark:rotate-0" />
          ) : (
            <SunIcon className="size-4 scale-100 text-gray-600 transition-all duration-300 group-hover:-rotate-90 dark:hidden" />
          )}
        </MotionOpacity>
      ) : null}
    </button>
  );
}
