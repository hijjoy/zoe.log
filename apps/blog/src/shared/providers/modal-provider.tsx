'use client';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useModalStore } from '@/shared/stores/use-modal-store';

export function ModalProvider() {
  const pathname = usePathname();
  const modals = useModalStore((state) => state.modals);
  const closeModal = useModalStore((state) => state.closeModal);
  const clearModals = useModalStore((state) => state.clearModals);

  // 페이지 이동시 모든 모달 닫기
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname 변경 시에만 실행.
  useEffect(() => {
    clearModals();
  }, [pathname, clearModals]);

  if (modals.length === 0) {
    return null;
  }

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    console.error('Modal root element not found');
    return null;
  }

  return createPortal(
    <AnimatePresence mode="wait">
      {modals.map(({ Component, props }, index) => (
        <Component
          // biome-ignore lint/suspicious/noArrayIndexKey: 모달 배열은 끝에서만 추가/삭제되므로 순서가 변하지 않습니다.
          key={`modal-${index}`}
          {...props}
          onClose={() => closeModal(index)}
        />
      ))}
    </AnimatePresence>,
    modalRoot,
  );
}
