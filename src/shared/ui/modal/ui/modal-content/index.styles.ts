import { ModalContentProps } from '@chakra-ui/react';

type ModalContentStyleProps = {
    modalContent: ModalContentProps;
};

export const modalContentStyles: ModalContentStyleProps = {
    modalContent: {
        bgColor: 'white',
        borderRadius: '16px',
        boxShadow: 'none',
        maxW: { base: '316px', xl: '396px' },
        pos: 'relative',
        w: 'full',
        zIndex: 'modal',
    },
};
