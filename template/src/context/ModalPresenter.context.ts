import React from 'react';

export type ModalPresenterContextProps = {
  /*
    Queue of modals to display.
    Order matters - as all modals in stack (queue) will be displayed by it (FIFO).
   */
  queue: string[];
  /*

   */
  onShowModal: (name: string) => void;
  onHideModal: (name: string) => void;
};

const defaultValues: ModalPresenterContextProps = {
  queue: [],
  onShowModal: () => {},
  onHideModal: () => {},
};
export const ModalPresenterContext = React.createContext<ModalPresenterContextProps>(defaultValues);
