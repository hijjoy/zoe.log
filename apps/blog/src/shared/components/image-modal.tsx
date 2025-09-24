'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { ModalOverlay } from '@/shared/components/modal-overlay';

interface ImageModalProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

export function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <ModalOverlay onClose={onClose}>
      <ModalCloseButton onClose={onClose} />
      <ImageContainer src={src} alt={alt} />
    </ModalOverlay>
  );
}

interface ImageContainerProps {
  src: string;
  alt?: string;
}

const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1.1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
    >
      <Image
        src={src}
        alt={alt || 'image'}
        width={1400}
        height={900}
        className="pointer-events-auto h-auto max-h-[85vh] w-auto max-w-[85vw] select-none object-contain"
        priority
        draggable={false}
      />
    </motion.div>
  );
};

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, delay: 0.1 }}
      type="button"
      onClick={onClose}
      className="absolute top-4 right-4 text-white transition-colors hover:scale-110 hover:text-gray-300"
      aria-label="Close modal"
    >
      <IoClose size={24} />
    </motion.button>
  );
};
