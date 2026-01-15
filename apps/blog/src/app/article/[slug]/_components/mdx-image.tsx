'use client';

import { cn } from '@zoelog/ui';
import Image from 'next/image';
import { ImageModal } from '@/shared/components/image-modal';
import { useModalStore } from '@/shared/stores/use-modal-store';

interface MDXImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  description?: string;
  className?: string;
}

export default function MDXImage({
  src,
  alt = 'image',
  width = 450,
  height = 300,
  description,
  className,
}: MDXImageProps) {
  const openModal = useModalStore((state) => state.openModal);

  if (typeof src !== 'string') return null;

  const handleImageClick = () => {
    openModal(ImageModal, { src, alt });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(ImageModal, { src, alt });
    }
  };

  const handleMouseEnter = () => {
    const img = new window.Image();
    img.src = src;
  };

  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'mx-auto cursor-zoom-in rounded-lg border border-zinc-100 transition-transform duration-700 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main focus-visible:ring-offset-2 dark:border-zinc-700',
          className,
        )}
        loading="lazy"
        tabIndex={0}
        role="button"
        aria-label={`${alt} 이미지 확대`}
        onClick={handleImageClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
      />
      {description && (
        <figcaption className="mt-2 break-keep text-center text-xs text-zinc-400 dark:text-zinc-300">
          {description}
        </figcaption>
      )}
    </figure>
  );
}
