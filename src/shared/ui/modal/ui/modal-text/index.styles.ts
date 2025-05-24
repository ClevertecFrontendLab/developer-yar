import { TextProps } from '@chakra-ui/react';

import { ModalTextColorVariant, ModalTextWeightVariant } from './index.types';

export type ModalTextStyleProps = {
    text: (color: ModalTextColorVariant, weight: ModalTextWeightVariant) => TextProps;
};

export const modalTextStyles: ModalTextStyleProps = {
    text: (color: ModalTextColorVariant, weight: ModalTextWeightVariant): TextProps => ({
        color: color === 'light' ? 'blackAlpha.700' : 'blackAlpha.900',
        fontSize: 'md',
        fontWeight: weight,
        lineHeight: '6',
        sx: {
            textWrap: 'pretty',
        },
        textAlign: 'center',
    }),
};
