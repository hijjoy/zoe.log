'use client';

import React, { useEffect, useState, ElementType, ComponentPropsWithoutRef, JSX } from 'react';
import { cn } from '@/libs/cn';

type Unit = 'character' | 'word' | 'line';
type Preset = 'fade' | 'slide';

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

type AnimatedTextBaseProps = {
  text: string;
  preset?: Preset;
  unit?: Unit;
  className?: string;
  delay?: number;
};

type PolymorphicComponentProps<T extends ElementType, Props = {}> = Props & {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, keyof Props | 'as' | 'children'>;

type AnimatedTextProps<T extends ElementType> = PolymorphicComponentProps<T, AnimatedTextBaseProps>;

function withAnimatedText() {
  return function AnimatedText<T extends ElementType = 'span'>({
    text,
    preset = 'fade',
    unit = 'character',
    as,
    className,
    delay = 0.05,
    ...rest
  }: AnimatedTextProps<T>): JSX.Element {
    const Component = as || 'span';
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    const splitter = {
      character: (txt: string) => txt.split('').map((char) => (char === ' ' ? '\u00A0' : char)),
      word: (txt: string) => txt.split(/(\s+)/).map((part) => (part.trim() === '' ? '\u00A0' : part)),
      line: (txt: string) => txt.split(/\n/),
    };

    const pieces = splitter[unit](text);

    return (
      <Component className={cn('inline-block font-pretendard text-base text-gray-700', className, unit === 'line' && 'whitespace-pre-line')} {...(rest as any)}>
        {pieces.map((part, i) => (
          <span key={i} style={getAnimationStyle(preset, i * delay)}>
            {part}
          </span>
        ))}
        <AnimationStyles />
      </Component>
    );
  };
}

const AnimatedText = withAnimatedText();

export default AnimatedText;

const getAnimationStyle = (preset: Preset, delay: number) => ({
  display: 'inline-block',
  opacity: 0,
  animation: `${preset === 'fade' ? 'fadeIn' : 'slideIn'} 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  animationDelay: `${delay}s`,
});
