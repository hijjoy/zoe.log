'use client';

import { cn } from '@zoelog/ui';
import { type MotionProps, motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props extends MotionProps {
  children: ReactNode;
  className?: string;
}

export default function MotionOpacity({
  children,
  className,
  initial = { opacity: 0, scale: 0.995 },
  animate = { opacity: 1, scale: 1 },
  transition = { duration: 0.6, ease: 'easeInOut' },
  ...rest
}: Props) {
  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
