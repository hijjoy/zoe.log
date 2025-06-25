'use client';

import { cn } from '@zoelog/ui';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn('overflow-x-auto', className)}>
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
