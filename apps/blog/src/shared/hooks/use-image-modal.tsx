import { useCallback } from 'react';
import { useModalStore } from '@/shared/stores/use-modal-store';
import { ImageModal } from '../components/image-modal';

export function useImageModal() {
  const { open, close } = useModalStore();

  const openImageModal = useCallback(
    (src: string, alt?: string) => {
      open(ImageModal, { src, alt, onClose: close });
    },
    [open, close],
  );

  return {
    open: openImageModal,
    close,
  };
}
