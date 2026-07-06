'use client';

import { cn } from '@zoelog/ui';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneLight,
  tomorrow,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  code: string;
  className?: string;
}

const COPY_FEEDBACK_DURATION_MS = 3000;

export default function CodeBlockBox({ code, className }: Props) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async () => {
    if (copied) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION_MS);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    // biome-ignore-start lint/a11y/noNoninteractiveTabindex: 가로 스크롤 영역 키보드 접근용 (axe: scrollable-region-focusable)
    <section
      className={cn('group relative overflow-x-auto', className)}
      tabIndex={0}
      aria-label="코드 블록"
    >
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          'absolute top-3 right-3 z-10 flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700 opacity-0 transition-all duration-200 hover:bg-zinc-200 focus-visible:opacity-100 group-hover:opacity-100 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600',
          copied && 'cursor-default opacity-100',
        )}
      >
        {copied ? (
          <FiCheck aria-hidden="true" className="h-3 w-3" />
        ) : (
          <FiCopy aria-hidden="true" className="h-3 w-3" />
        )}
        <span aria-live="polite">{copied ? '복사 완료!' : '코드 복사'}</span>
      </button>
      <pre className="font-mono text-ds-heading text-sm leading-relaxed">
        <SyntaxHighlighter
          language="tsx"
          className="rounded-xl"
          style={resolvedTheme === 'dark' ? tomorrow : oneLight}
        >
          {code}
        </SyntaxHighlighter>
      </pre>
    </section>
    // biome-ignore-end lint/a11y/noNoninteractiveTabindex: 가로 스크롤 영역 키보드 접근용
  );
}
