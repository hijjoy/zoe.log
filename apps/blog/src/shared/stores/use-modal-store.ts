import type { FunctionComponent } from 'react';
import { create } from 'zustand';

// 모든 모달이 가져야 할 기본 props
interface BaseModalProps {
  onClose: () => void;
}

// 실제 저장되는 모달 인스턴스 (any를 사용하여 타입 유연성 확보)
interface ModalInstance {
  // biome-ignore lint/suspicious/noExplicitAny: 다양한 모달 컴포넌트를 유연하게 저장하기 위해 필요
  Component: FunctionComponent<any>;
  // biome-ignore lint/suspicious/noExplicitAny: props는 각 모달마다 다르므로 any 사용
  props?: any;
}

interface ModalState {
  modals: ModalInstance[];
}

interface ModalAction {
  openModal: <P extends BaseModalProps = BaseModalProps>(
    Component: FunctionComponent<P>,
    props?: Omit<P, 'onClose'>,
  ) => void;
  closeModal: (index: number) => void;
  clearModals: () => void;
}

type ModalStore = ModalState & ModalAction;

export const useModalStore = create<ModalStore>((set) => ({
  modals: [],

  openModal: (Component, props) =>
    set((state) => ({
      modals: [...state.modals, { Component, props }],
    })),

  closeModal: (index) =>
    set((state) => ({
      modals: state.modals.filter((_, i) => i !== index),
    })),

  clearModals: () => set({ modals: [] }),
}));
