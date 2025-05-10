import { BoxProps, StackProps } from '@chakra-ui/react';

type RecipePageStyleProps = {
    layout: StackProps;
    nutritionValueWrapper: BoxProps;
    pageContainer: StackProps;
    recipeContentWrapper: StackProps;
};

const baseRecipePageStyles = {
    margin: 'auto',
    w: 'full',
};

export const recipePageStyles: RecipePageStyleProps = {
    layout: {
        layerStyle: 'pageLayout',
    },
    nutritionValueWrapper: {
        maxW: { '2xl': '668px', md: '728px', xl: '578px' },
        ...baseRecipePageStyles,
    },
    pageContainer: {
        pt: { base: 4, xl: 14 },
    },
    recipeContentWrapper: {
        gap: { base: 6, xl: 10 },
        maxW: { '2xl': '668px', base: '604px', xl: '578px' },
        ...baseRecipePageStyles,
    },
};
