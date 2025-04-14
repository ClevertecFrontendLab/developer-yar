import { GridProps, TextProps } from '@chakra-ui/react';

type FooterStyleProps = {
    footer: GridProps;
    rights: TextProps;
    version: TextProps;
};

export const footerStyles: FooterStyleProps = {
    footer: {
        pb: 8,
        px: 6,
        rowGap: 4,
    },
    rights: {
        color: 'blackAlpha.700',
        fontSize: 'xs',
        fontWeight: 'normal',
        lineHeight: '4',
    },
    version: {
        color: 'blackAlpha.400',
        fontSize: 'xs',
        fontWeight: 'medium',
        lineHeight: '4',
    },
};
