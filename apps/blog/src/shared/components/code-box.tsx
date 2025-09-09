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

export default function CodeBlockBox({ code, className }: Props) {
  const { theme } = useTheme();

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
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn('group relative overflow-x-auto', className)}>
      <button
        type="button"
        onClick={handleCopy}
        disabled={copied}
        className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-700 opacity-0 transition-all duration-200 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-100 group-hover:opacity-100 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <FiCheck className="h-3 w-3" />
            <span>복사 완료!</span>
          </>
        ) : (
          <>
            <FiCopy className="h-3 w-3" />
            <span>코드 복사</span>
          </>
        )}
      </button>
      <pre className="font-mono text-gray-800 text-sm leading-relaxed">
        <SyntaxHighlighter
          language="tsx"
          className="rounded-xl"
          style={theme === 'dark' ? tomorrow : oneLight}
        >
          {code}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
}
