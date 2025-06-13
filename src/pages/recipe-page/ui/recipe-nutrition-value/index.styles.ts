import { FlexProps, StackProps, TextProps } from '@chakra-ui/react';

export type RecipeNutritionValueStyleProps = {
    descriptionText: TextProps;
    nutritionIndicators: FlexProps;
    recipeNutritionValue: StackProps;
};

export const recipeNutritionValueStyles: RecipeNutritionValueStyleProps = {
    descriptionText: {
        color: 'blackAlpha.800',
    },
    nutritionIndicators: {
        direction: { base: 'column', md: 'row' },
        gap: { '2xl': 6, base: 3 },
        justifyContent: 'stretch',
    },
    recipeNutritionValue: {
        gap: { base: 3, md: 5 },
    },
};
