import { BoxProps, FlexProps, HeadingProps, StackProps, TextProps } from '@chakra-ui/react';

type RecipeCategoryPrimaryCardStyleProps = {
    badgeWrapper: BoxProps;
    card: StackProps;
    description: TextProps;
    meta: FlexProps;
    text: StackProps;
    title: HeadingProps;
};

export const recipeCategoryPrimaryCardStyles: RecipeCategoryPrimaryCardStyleProps = {
    badgeWrapper: {},
    card: {
        gap: 6,
        layerStyle: 'subtleOutline',
        pb: { base: 3, xl: 4, '2xl': 5 },
        px: { base: 3, xl: 4, '2xl': 6 },
        pt: { base: 3, xl: 4, '2xl': 6 },
    },
    description: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'light',
        lineHeight: '5',
    },
    meta: {
        gap: 2,
        justify: 'space-between',
        wrap: 'wrap',
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
