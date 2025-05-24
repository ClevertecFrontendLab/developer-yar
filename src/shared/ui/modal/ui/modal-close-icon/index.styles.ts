import { IconProps } from '@chakra-ui/react';

type ModalCloseIconStyleProps = {
    closeModalIcon: IconProps;
};

export const modalCloseIconStyles: ModalCloseIconStyleProps = {
    closeModalIcon: {
        boxSize: 6,
        cursor: 'pointer',
        pos: 'absolute',
        right: 6,
        top: 6,
    },
};
