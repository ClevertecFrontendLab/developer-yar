import { BoxProps, StackProps } from '@chakra-ui/react';

type EditRecipePageStyleProps = {
    layout: StackProps;
    nutritionValueWrapper: BoxProps;
    pageContainer: StackProps;
    recipeContentWrapper: StackProps;
};

const baseEditRecipePageStyles = {
    margin: 'auto',
    w: 'full',
};

export const editRecipePageStyles: EditRecipePageStyleProps = {
    layout: {
        layerStyle: 'pageLayout',
    },
    nutritionValueWrapper: {
        maxW: { '2xl': '668px', md: '728px', xl: '578px' },
        ...baseEditRecipePageStyles,
    },
    pageContainer: {
        pb: { base: 4, xl: 8 },
        pt: { base: 4, xl: 14 },
    },
    recipeContentWrapper: {
        gap: { base: 6, xl: 10 },
        maxW: { '2xl': '668px', base: '604px', xl: '578px' },
        ...baseEditRecipePageStyles,
    },
};
