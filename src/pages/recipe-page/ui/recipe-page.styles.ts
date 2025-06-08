import { BoxProps, StackProps } from '@chakra-ui/react';

type RecipePageStyleProps = {
    layout: StackProps;
    pageContainer: StackProps;
    recipeContentWrapper: StackProps;
    recipeNutritionValueWrapper: BoxProps;
};

const baseRecipePageStyles = {
    m: 'auto',
    w: 'full',
};

export const recipePageStyles: RecipePageStyleProps = {
    layout: {
        layerStyle: 'pageLayout',
    },
    pageContainer: {
        pt: { base: 4, xl: 14 },
    },
    recipeContentWrapper: {
        gap: { base: 6, xl: 10 },
        maxW: { '2xl': '668px', base: '604px', xl: '578px' },
        ...baseRecipePageStyles,
    },
    recipeNutritionValueWrapper: {
        maxW: { '2xl': '668px', md: '728px', xl: '578px' },
        ...baseRecipePageStyles,
    },
};
