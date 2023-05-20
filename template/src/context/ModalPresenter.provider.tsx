import React, { PropsWithChildren, useCallback, useState } from 'react';
import { ModalPresenterContext } from './ModalPresenter.context';

export const ModalPresenterProvider: React.FC<PropsWithChildren> = props => {
  const [queue, setQueue] = useState<string[]>([]);

  const onShowModal = useCallback((modalName: string) => {
    setQueue(prev => {
      return [...prev, modalName];
    });
  }, []);

  const onHideModal = useCallback((modalName: string) => {
    setQueue(prev => {
      return prev.filter(x => x !== modalName);
    });
  }, []);

  return (
    <ModalPresenterContext.Provider
      value={{
        queue,
        onShowModal,
        onHideModal,
      }}>
      {props.children}
    </ModalPresenterContext.Provider>
  );
};
