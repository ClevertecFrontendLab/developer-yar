import { TextProps } from '@chakra-ui/react';

export type ModalFooterTextStyleProps = {
    text: TextProps;
};

export const modalFooterTextStyles: ModalFooterTextStyleProps = {
    text: {
        color: 'blackAlpha.600',
        fontSize: 'xs',
        fontWeight: 'normal',
        lineHeight: '4',
        textAlign: 'center',
    },
};
