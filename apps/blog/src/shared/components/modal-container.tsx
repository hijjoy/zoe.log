'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useModalStore } from '@/shared/stores/use-modal-store';

export function ModalContainer() {
  const modals = useModalStore((state) => state.modals);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || modals.length === 0) return null;

  return createPortal(
    modals.map(({ Component, props }, index) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: 모달 배열은 끝에서만 추가/삭제되므로 순서가 변하지 않습니다.
      <Component key={index} {...props} />
    )),
    document.body,
  );
}
