import type { FC } from 'react';
import { create } from 'zustand';

export interface ModalComponentProps<P = Record<string, unknown>> {
  Component: FC<P>;
  props?: P;
}

interface ModalStore {
  modals: ModalComponentProps[];
  open: <P extends Record<string, unknown>>(
    Component: FC<P>,
    props?: P,
  ) => void;
  close: () => void;
  closeAll: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  modals: [],

  open: (Component, props) =>
    set((state) => ({
      modals: [
        ...state.modals,
        {
          Component,
          props,
        } as ModalComponentProps,
      ],
    })),

  close: () =>
    set((state) => ({
      modals: state.modals.slice(0, -1),
    })),

  closeAll: () => set({ modals: [] }),
}));
