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
        h: { base: '52px', '2xl': '56px' },
        justify: 'space-between',
        layerStyle: 'subtleOutline',
        px: { base: 3, '2xl': 6 },
    },
    info: {
        alignItems: 'center',
        gap: 2,
    },
    title: {
        color: 'black',
        fontSize: { base: 'md', xl: 'lg', '2xl': 'xl' },
        fontWeight: 'medium',
        lineHeight: { base: '6', xl: '7' },
        overflowWrap: 'anywhere',
    },
};
