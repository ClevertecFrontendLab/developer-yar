import { CloseButtonProps } from '@chakra-ui/react';

export type AlertCloseButtonStyleProps = {
    closeButton: CloseButtonProps;
};

export const alertCloseButtonStyles: AlertCloseButtonStyleProps = {
    closeButton: {
        boxSize: 'auto',
        color: 'white',
        pos: 'absolute',
        right: 3,
        top: 3,
    },
};
