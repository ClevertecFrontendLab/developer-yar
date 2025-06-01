import { BoxProps, StackProps } from '@chakra-ui/react';

type NewRecipePageStyleProps = {
    layout: StackProps;
    nutritionValueWrapper: BoxProps;
    pageContainer: StackProps;
    recipeContentWrapper: StackProps;
};

const baseNewRecipePageStyles = {
    margin: 'auto',
    w: 'full',
};

export const newRecipePageStyles: NewRecipePageStyleProps = {
    layout: {
        layerStyle: 'pageLayout',
    },
    nutritionValueWrapper: {
        maxW: { '2xl': '668px', md: '728px', xl: '578px' },
        ...baseNewRecipePageStyles,
    },
    pageContainer: {
        pb: { base: 4, xl: 8 },
        pt: { base: 4, xl: 14 },
    },
    recipeContentWrapper: {
        gap: { base: 6, xl: 10 },
        maxW: { '2xl': '668px', base: '604px', xl: '578px' },
        ...baseNewRecipePageStyles,
    },
};
