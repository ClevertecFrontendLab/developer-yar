import { Center, CenterProps } from '@chakra-ui/react';
import { FC } from 'react';

import { useLockScroll } from '~/shared/lib';

import { ModalProvider } from '../../lib/modal-provider';
import { modalStyles as styles } from './modal.styles';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
} & CenterProps;

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose, ...props }) => {
    useLockScroll(isOpen);

    if (!isOpen) return null;

    return (
        <ModalProvider onClose={onClose}>
            <Center {...props} {...styles.modal}>
                {children}
            </Center>
        </ModalProvider>
    );
};
