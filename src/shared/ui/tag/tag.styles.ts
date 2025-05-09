import { BadgeProps, TextProps } from '@chakra-ui/react';

import { TagColor } from './tag.types';

type TagStyleProps = {
    badge: (variant: TagColor) => BadgeProps;
    text: TextProps;
};

export const tagStyles: TagStyleProps = {
    badge: (variant) => ({
        alignItems: 'center',
        bg: variant === 'yellow' ? 'lime.50' : variant === 'green' ? 'lime.150' : 'blackAlpha.100',
        borderRadius: 'base',
        color: 'black',
        display: 'flex',
        fontSize: 'sm',
        fontWeight: 'normal',
        gap: 2,
        h: 6,
        lineHeight: '5',
        px: { base: 1, xl: 2 },
        py: 0.5,
        textTransform: 'none',
        whiteSpace: 'normal',
    }),
    text: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: '5',
    },
};
