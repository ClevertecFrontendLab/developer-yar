import { FC, PropsWithChildren } from 'react';

import { ModalContext } from './modal-context';

type ModalProviderProps = PropsWithChildren & {
    onClose: () => void;
};

export const ModalProvider: FC<ModalProviderProps> = ({ children, onClose }) => (
    <ModalContext.Provider value={{ onClose }}>{children}</ModalContext.Provider>
);
