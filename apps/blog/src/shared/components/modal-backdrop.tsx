'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

interface ModalBackdropProps {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
  closeOnEscape?: boolean;
}

export function ModalBackdrop({
  children,
  onClose,
  className,
  closeOnEscape = true,
}: ModalBackdropProps) {
  useEffect(() => {
    if (!onClose || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose, closeOnEscape]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={
        className ||
        'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md'
      }
      onClick={handleBackdropClick}
    >
      {children}
    </motion.div>
  );
}
