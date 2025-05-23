import { TextProps } from '@chakra-ui/react';

import { ModalTextVariant } from './index.types';

export type ModalTextStyleProps = {
    text: (variant: ModalTextVariant) => TextProps;
};

export const modalTextStyles: ModalTextStyleProps = {
    text: (variant: ModalTextVariant): TextProps => ({
        color: 'blackAlpha.900',
        fontSize: 'md',
        fontWeight: variant,
        lineHeight: '6',
        sx: {
            textWrap: 'pretty',
        },
        textAlign: 'center',
    }),
};
