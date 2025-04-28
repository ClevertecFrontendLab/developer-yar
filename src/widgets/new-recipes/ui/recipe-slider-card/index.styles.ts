import { FlexProps, HeadingProps, ImageProps, StackProps, TextProps } from '@chakra-ui/react';

type RecipeSliderCardStyleProps = {
    badgeBox: StackProps;
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
        gap: 1,
        left: { base: 2, xl: 'auto' },
        pos: { base: 'absolute', xl: 'static' },
        top: { base: 2, xl: 'auto' },
    },
    card: {
        direction: 'column',
        h: 'full',
        layerStyle: 'subtleOutlineHover',
        outlineOffset: '-1px',
        pos: 'relative',
        scrollSnapAlign: 'start',
    },
    content: {
        flexGrow: 1,
        gap: 6,
        justify: 'space-between',
        pb: { '2xl': 5, base: 1, xl: 3 },
        pt: { '2xl': 4, base: 2, xl: 3 },
        px: { '2xl': 6, base: 2, xl: 3 },
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
        align: 'flex-end',
        gap: 2,
        justify: 'space-between',
    },
    title: {
        color: 'black',
        fontSize: { base: 'md', xl: 'lg' },
        fontWeight: 'medium',
        lineHeight: { base: '6', xl: '7' },
    },
};
