import { FlexProps, StackProps, TextProps } from '@chakra-ui/react';

export type NutritionValueStyleProps = {
    descriptionText: TextProps;
    nutritionIndicators: FlexProps;
    nutritionValue: StackProps;
};

export const nutritionValueStyles: NutritionValueStyleProps = {
    descriptionText: {
        color: 'blackAlpha.800',
    },
    nutritionIndicators: {
        direction: { base: 'column', md: 'row' },
        gap: { '2xl': 6, base: 3 },
        justifyContent: 'stretch',
    },
    nutritionValue: {
        gap: { base: 3, md: 5 },
    },
};
