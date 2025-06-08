import { CenterProps, IconProps, TextProps } from '@chakra-ui/react';

import { BadgeVariant } from './index.types';

type WithBadgeStyleProps = {
    badgeContainer: CenterProps;
    badgeIcon: IconProps;
    badgeLabel: TextProps;
};

const commonWithBadgeStyles: TextProps = {
    color: 'lime.600',
    fontWeight: 'semibold',
};

export const withBadgeStyles: Record<BadgeVariant, WithBadgeStyleProps> = {
    big: {
        badgeContainer: {
            gap: { base: 1.5, xl: 2 },
            h: 10,
            px: { base: 2, xl: 0 },
        },
        badgeIcon: {
            boxSize: { base: 3, xl: 4 },
        },
        badgeLabel: {
            ...commonWithBadgeStyles,
            fontSize: { base: 'xs', xl: 'md' },
            lineHeight: { base: '4', xl: '6' },
        },
    },
    small: {
        badgeContainer: {
            gap: 1.5,
            py: 1,
        },
        badgeIcon: {
            boxSize: 3,
        },
        badgeLabel: {
            ...commonWithBadgeStyles,
            fontSize: 'xs',
            lineHeight: '4',
            minWidth: '2ch',
        },
    },
};
