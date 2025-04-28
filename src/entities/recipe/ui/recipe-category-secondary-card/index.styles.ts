import { FlexProps, StackProps, TextProps } from '@chakra-ui/react';

type RecipeCategorySecondaryCardStyleProps = {
    container: StackProps;
    info: FlexProps;
    title: TextProps;
};

export const recipeCategorySecondaryCardStyles: RecipeCategorySecondaryCardStyleProps = {
    container: {
        alignItems: 'center',
        gap: 2,
        h: { '2xl': '56px', base: '52px' },
        justify: 'space-between',
        layerStyle: 'subtleOutlineHover',
        px: { '2xl': 6, base: 3 },
    },
    info: {
        alignItems: 'center',
        gap: 2,
    },
    title: {
        color: 'black',
        fontSize: { '2xl': 'xl', base: 'md', xl: 'lg' },
        fontWeight: 'medium',
        lineHeight: { base: '6', xl: '7' },
        overflowWrap: 'anywhere',
    },
};
