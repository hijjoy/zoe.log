'use client';

import { Slot } from '@radix-ui/react-slot';
import { cn } from '@zoelog/ui';
import React, { type ReactNode } from 'react';

type Unit = 'character' | 'word' | 'line';
type Preset = 'fade' | 'slide';

type AnimatedTextProps = {
  children: ReactNode;
  preset?: Preset;
  unit?: Unit;
  className?: string;
  delay?: number;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const NBSP = ' ';

const AnimationStyles = () => (
  <style jsx global>{`
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: scale(0.95);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `}</style>
);

const splitters: Record<Unit, (text: string) => string[]> = {
  character: (text) =>
    text.split('').map((char) => (char === ' ' ? NBSP : char)),
  word: (text) =>
    text.split(/(\s+)/).map((part) => (part.trim() === '' ? NBSP : part)),
  line: (text) => text.split(/\n/),
};

const animationStyle = (preset: Preset, delay: number) => ({
  display: 'inline-block',
  opacity: 0,
  animation: `${preset === 'fade' ? 'fadeIn' : 'slideIn'} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  animationDelay: `${delay}s`,
});

function extractText(children: ReactNode): string {
  if (typeof children === 'string') return children;

  if (React.isValidElement(children)) {
    const childProps = children.props as { children?: unknown };
    if (typeof childProps.children === 'string') {
      return childProps.children;
    }
  }

  return '';
}

export default function AnimatedText({
  children,
  preset = 'fade',
  unit = 'character',
  className,
  delay = 0.05,
  asChild = false,
  ...props
}: AnimatedTextProps) {
  const Comp = asChild ? Slot : 'span';
  const text = extractText(children);
  const pieces = splitters[unit](text);

  return (
    <Comp className={cn('text-ds-body', className)} {...props}>
      <span className="sr-only">{text}</span>
      {/* 분할된 글자는 스크린리더가 한 글자씩 읽으므로 숨기고 위의 전체 텍스트로 대체 */}
      <span aria-hidden="true">
        {pieces.map((part, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: 텍스트 분할 순서는 고정
          <span key={i} style={animationStyle(preset, i * delay)}>
            {part}
          </span>
        ))}
        <AnimationStyles />
      </span>
    </Comp>
  );
}
