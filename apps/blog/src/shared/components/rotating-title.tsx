'use client';

import ReactRotatingText from 'react-rotating-text';

interface RotatingTitleProps {
  items: string[];
  className?: string;
}

export default function RotatingTitle({ items, className }: RotatingTitleProps) {
  return <ReactRotatingText items={items} className={className} />;
}
