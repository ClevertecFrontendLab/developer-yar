import { BoxProps, StackProps } from '@chakra-ui/react';

type NewRecipePageStyleProps = {
    layout: StackProps;
    pageContainer: StackProps;
    recipeContentWrapper: StackProps;
    recipeNutritionValueWrapper: BoxProps;
};

const baseNewRecipePageStyles = {
    margin: 'auto',
    w: 'full',
};

export const newRecipePageStyles: NewRecipePageStyleProps = {
    layout: {
        layerStyle: 'pageLayout',
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
    recipeNutritionValueWrapper: {
        maxW: { '2xl': '668px', md: '728px', xl: '578px' },
        ...baseNewRecipePageStyles,
    },
};
