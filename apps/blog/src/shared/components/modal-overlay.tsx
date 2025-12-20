'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useCallback, useEffect } from 'react';

import { useIsomorphicLayoutEffect } from '@/shared/hooks/use-isomorphic-layout-effect';

interface ModalOverlayProps {
  children: ReactNode;
  onClose: () => void;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
  overlayClassName?: string;
}

export function ModalOverlay({
  children,
  onClose,
  closeOnEsc = true,
  closeOnOverlayClick = true,
  className = '',
  overlayClassName = '',
}: ModalOverlayProps) {
  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === 'Escape') {
        onClose();
      }
    },
    [closeOnEsc, onClose],
  );

  const handleOverlayClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnOverlayClick && event.target === event.currentTarget) {
        onClose();
      }
    },
    [closeOnOverlayClick, onClose],
  );

  useEffect(() => {
    if (closeOnEsc) {
      window.addEventListener('keydown', handleEscKey);
      return () => window.removeEventListener('keydown', handleEscKey);
    }
  }, [closeOnEsc, handleEscKey]);

  useIsomorphicLayoutEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={
        overlayClassName ||
        'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md'
      }
      onClick={handleOverlayClick}
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: 모달 콘텐츠는 클릭 이벤트만 방지 */}
      {/* biome-ignore lint/a11y/noStaticElementInteractions: 단순 클릭 방지용 래퍼 */}
      <div className={className} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </motion.div>
  );
}
