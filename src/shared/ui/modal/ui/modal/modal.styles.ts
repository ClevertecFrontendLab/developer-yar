import { IconProps } from '@chakra-ui/react';

type ModalStyleProps = {
    modal: IconProps;
};

export const modalStyles: ModalStyleProps = {
    modal: {
        h: '100vh',
        left: '0',
        pos: 'fixed',
        top: '0',
        w: '100vw',
        zIndex: 'modal',
    },
};
