'use client';

import { cn } from '@zoelog/ui';
import ReactRotatingText from 'react-rotating-text';

interface RotatingTitleProps {
  items: string[];
  className?: string;
}

export default function RotatingTitle({ items, className }: RotatingTitleProps) {
  return <ReactRotatingText items={items} className={cn('!text-gray-800', className)} />;
}
