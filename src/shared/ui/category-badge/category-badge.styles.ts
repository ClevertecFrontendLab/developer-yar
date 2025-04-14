import { BadgeProps } from '@chakra-ui/react';

import { CategoryBadgeColor } from './category-badge.types';

type CategoryBadgeStyleProps = {
    button: (bg: CategoryBadgeColor) => BadgeProps;
};

export const categoryBadgeStyles: CategoryBadgeStyleProps = {
    button: (bg) => ({
        alignItems: 'center',
        bg: bg === 'yellow' ? 'lime.50' : 'lime.150',
        borderRadius: 'base',
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'normal',
        gap: { base: 0.5, xl: 2 },
        h: 6,
        lineHeight: '5',
        px: { base: 1, xl: 2 },
        py: 0.5,
        textTransform: 'none',
        whiteSpace: { base: 'nowrap', xl: 'normal' },
    }),
};
