import { ModalBodyProps } from '@chakra-ui/react';

type ModalBodyStyleProps = {
    modalBody: ModalBodyProps;
};

export const modalBodyStyles: ModalBodyStyleProps = {
    modalBody: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        justifyContent: 'center',
        p: 8,
    },
};
