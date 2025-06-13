'use client';

import { Slot } from '@radix-ui/react-slot';
import React, { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/libs/cn';

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

const splitter = {
  character: (txt: string) => txt.split('').map((char) => (char === ' ' ? '\u00A0' : char)),
  word: (txt: string) => txt.split(/(\s+)/).map((part) => (part.trim() === '' ? '\u00A0' : part)),
  line: (txt: string) => txt.split(/\n/),
};

const getAnimationStyle = (preset: Preset, delay: number) => ({
  display: 'inline-block',
  opacity: 0,
  animation: `${preset === 'fade' ? 'fadeIn' : 'slideIn'} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  animationDelay: `${delay}s`,
});

export default function AnimatedText({ children, preset = 'fade', unit = 'character', className, delay = 0.05, asChild = false, ...props }: AnimatedTextProps) {
  const Comp = asChild ? Slot : 'span';
  const [_, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const text = extractText(children);
  const pieces = splitter[unit](text);

  const content = (
    <span>
      {pieces.map((part, i) => (
        <span key={i} style={getAnimationStyle(preset, i * delay)}>
          {part}
        </span>
      ))}
      <AnimationStyles />
    </span>
  );

  return (
    <Comp className={cn('text-gray-700', className)} {...props}>
      {content}
    </Comp>
  );
}

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
