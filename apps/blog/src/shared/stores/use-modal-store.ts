import type { FunctionComponent } from 'react';
import { create } from 'zustand';

interface BaseModalProps {
  onClose: () => void;
}

interface ModalInstance {
  id: string;
  // biome-ignore lint/suspicious/noExplicitAny: 임의 컴포넌트 시그니처를 store에 담기 위해 필요
  Component: FunctionComponent<any>;
  // biome-ignore lint/suspicious/noExplicitAny: props는 모달별로 다름
  props?: any;
}

interface ModalStore {
  modals: ModalInstance[];
  openModal: <P extends BaseModalProps>(
    Component: FunctionComponent<P>,
    props?: Omit<P, 'onClose'>,
  ) => void;
  closeModal: (id: string) => void;
  clearModals: () => void;
}

let modalIdSeed = 0;
const nextModalId = () => `modal-${++modalIdSeed}`;

export const useModalStore = create<ModalStore>((set) => ({
  modals: [],

  openModal: (Component, props) =>
    set((state) => ({
      modals: [...state.modals, { id: nextModalId(), Component, props }],
    })),

  closeModal: (id) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),

  clearModals: () => set({ modals: [] }),
}));
