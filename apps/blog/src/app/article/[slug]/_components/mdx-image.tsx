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

  const openImageModal = () => openModal(ImageModal, { src, alt });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openImageModal();
    }
  };

  const prefetchImage = () => {
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
          'mx-auto cursor-zoom-in rounded-lg border border-ds-border-semantic transition-transform duration-700 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary focus-visible:ring-offset-2',
          className,
        )}
        loading="lazy"
        tabIndex={0}
        role="button"
        aria-label={`${alt} 이미지 확대`}
        onClick={openImageModal}
        onKeyDown={handleKeyDown}
        onMouseEnter={prefetchImage}
      />
      {description && (
        <figcaption className="mt-2 break-keep text-center text-xs text-ds-secondary">
          {description}
        </figcaption>
      )}
    </figure>
  );
}
