import { BoxProps, FlexProps, HeadingProps, StackProps, TextProps } from '@chakra-ui/react';

type RecipeCategoryPrimaryCardStyleProps = {
    badgeWrapper: BoxProps;
    card: StackProps;
    categoryBadges: StackProps;
    description: TextProps;
    meta: FlexProps;
    text: StackProps;
    title: HeadingProps;
};

export const recipeCategoryPrimaryCardStyles: RecipeCategoryPrimaryCardStyleProps = {
    badgeWrapper: {},
    card: {
        gap: 6,
        h: 'full',
        layerStyle: 'subtleOutlineHover',
        pb: { '2xl': 5, base: 3, xl: 4 },
        pt: { '2xl': 6, base: 3, xl: 4 },
        px: { '2xl': 6, base: 3, xl: 4 },
    },
    categoryBadges: {
        gap: 1,
    },
    description: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'light',
        lineHeight: '5',
    },
    meta: {
        align: 'flex-end',
        gap: 2,
        justify: 'space-between',
        mt: 'auto',
        wrap: 'nowrap',
    },
    text: {
        gap: 2,
    },
    title: {
        color: 'black',
        fontSize: { base: 'md', xl: 'xl' },
        fontWeight: 'medium',
        lineHeight: '7',
    },
};
