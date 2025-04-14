import {
    BoxProps,
    FlexProps,
    HeadingProps,
    ImageProps,
    StackProps,
    TextProps,
} from '@chakra-ui/react';

type RecipeSliderCardStyleProps = {
    badgeBox: BoxProps;
    card: FlexProps;
    content: StackProps;
    description: TextProps;
    image: ImageProps;
    infoBox: StackProps;
    meta: FlexProps;
    title: HeadingProps;
};

export const recipeSliderCardStyles: RecipeSliderCardStyleProps = {
    badgeBox: {
        left: { base: 2, xl: 'auto' },
        pos: { base: 'absolute', xl: 'static' },
        top: { base: 2, xl: 'auto' },
    },
    card: {
        direction: 'column',
        flex: { base: '0 0 158px', xl: '0 0 279px', '2xl': '0 0 322px' },
        layerStyle: 'subtleOutline',
        outlineOffset: '-1px',
        pos: 'relative',
        scrollSnapAlign: 'start',
    },
    content: {
        gap: 6,
        pb: { base: 1, xl: 3, '2xl': 5 },
        pt: { base: 2, xl: 3, '2xl': 4 },
        px: { base: 2, xl: 3, '2xl': 6 },
    },
    description: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'light',
        lineHeight: '5',
        minH: 16,
    },
    image: {
        borderTopRadius: 'lg',
        h: { base: 32, xl: 230 },
        objectFit: 'cover',
        w: 'full',
    },
    infoBox: {
        gap: 2,
    },
    meta: {
        justify: 'space-between',
    },
    title: {
        color: 'black',
        fontSize: { base: 'md', xl: 'lg' },
        fontWeight: 'medium',
        lineHeight: { base: '6', xl: '7' },
    },
};
