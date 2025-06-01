import { ButtonProps } from '@chakra-ui/react';

import { ModalButtonVariant } from './index.types';

type ModalButtonStyleProps = {
    button: (variant: ModalButtonVariant) => ButtonProps;
};

export const modalButtonStyles: ModalButtonStyleProps = {
    button: (variant: ModalButtonVariant): ButtonProps => ({
        bgColor: variant === 'black' ? 'blackAlpha.900' : 'white',
        border: variant === 'black' ? '1px solid blackAlpha.200' : 'none',
        borderRadius: 'md',
        color: variant === 'black' ? 'white' : 'black',
        fontSize: 'lg',
        fontWeight: 'semibold',
        gap: 2,
        h: 12,
        lineHeight: '7',
        w: 'full',
    }),
};
