import { GridProps, TextProps } from '@chakra-ui/react';

export const infoPanelStyles: {
    infoPanel: GridProps;
    rights: TextProps;
    version: TextProps;
} = {
    infoPanel: {
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
