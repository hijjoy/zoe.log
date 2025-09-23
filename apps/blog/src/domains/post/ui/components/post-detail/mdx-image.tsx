'use client';

import { cn } from '@zoelog/ui';
import Image from 'next/image';
import type { ImgHTMLAttributes } from 'react';
import { useImageModal } from '@/shared/hooks/use-image-modal';

type MDXImageProps = ImgHTMLAttributes<HTMLImageElement>;

export default function MDXImage({
  alt = 'image',
  src,
  ...props
}: MDXImageProps) {
  const { open } = useImageModal();

  if (typeof src !== 'string') return null;

  return (
    <span className="my-10 block">
      <Image
        src={src}
        alt={alt}
        width={450}
        height={300}
        className={cn(
          'mx-auto cursor-zoom-in rounded-lg border border-zinc-100 transition-transform duration-700 hover:scale-[1.02] dark:border-zinc-700',
          props.className,
        )}
        loading="lazy"
        onClick={() => open(src, alt)}
      />
      {alt && alt !== 'image' && (
        <span
          className="mt-2 block break-keep text-center text-xs text-zinc-400 dark:text-zinc-300"
          aria-hidden
        >
          {alt}
        </span>
      )}
    </span>
  );
}
