'use client';

import { cn } from '@zoelog/ui';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const TOC_LEVEL_STYLES: Record<number, string> = {
  2: 'text-toc-h2',
  3: 'text-toc-h3',
  4: 'text-toc-h4',
};

export default function Toc() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const article = document.querySelector('article[aria-label="post-detail"]');
    const headings = article?.querySelectorAll('h2, h3, h4');

    if (!headings) return;

    const headingList = Array.from(headings).map((heading) => {
      const id =
        heading.id ||
        heading.textContent?.replace(/\s+/g, '-').toLowerCase() ||
        '';
      if (!heading.id) heading.id = id;

      return {
        id,
        text: heading.textContent ?? '',
        level: Number(heading.tagName.charAt(1)),
      };
    });

    setToc(headingList);
  }, []);

  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' },
    );

    for (const item of toc) {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <aside
      className="fixed top-28 z-20 hidden xl:block"
      style={{ left: 'max(16px, calc(50% - 384px - 220px))' }}
    >
      <nav className="scrollbar-hide max-h-[70vh] max-w-[200px] overflow-y-auto">
        <ul className="flex flex-col gap-2">
          {toc.map((item) => {
            const isActive = activeId === item.id;
            const textColor =
              TOC_LEVEL_STYLES[item.level] || TOC_LEVEL_STYLES[4];
            const indent = (item.level - 2) * 12;

            return (
              <li key={item.id} style={{ paddingLeft: `${indent}px` }}>
                <Link
                  href={`#${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={cn(
                    'block truncate text-[13px] leading-relaxed transition-colors hover:text-toc-active',
                    textColor,
                    isActive && 'font-medium text-toc-active',
                  )}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
