'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useCallback, useEffect, useRef } from 'react';

import { useIsomorphicLayoutEffect } from '@/shared/hooks/use-isomorphic-layout-effect';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

interface ModalOverlayProps {
  children: ReactNode;
  onClose: () => void;
  ariaLabel?: string;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
  overlayClassName?: string;
}

export function ModalOverlay({
  children,
  onClose,
  ariaLabel,
  closeOnEsc = true,
  closeOnOverlayClick = true,
  className = '',
  overlayClassName = '',
}: ModalOverlayProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
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

  // 열릴 때 다이얼로그로 포커스 이동, 닫힐 때 원래 위치로 복원
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    dialogRef.current?.focus();

    return () => {
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, []);

  const trapFocus = (event: React.KeyboardEvent) => {
    if (event.key !== 'Tab' || !dialogRef.current) return;

    const focusables = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
    if (focusables.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && (active === first || active === dialogRef.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

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
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      tabIndex={-1}
      onKeyDown={trapFocus}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={
        overlayClassName ||
        'fixed inset-0 z-50 flex items-center justify-center overscroll-contain bg-black/80 backdrop-blur-md'
      }
      style={{ overscrollBehavior: 'contain' }}
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
