import { FlexProps } from '@chakra-ui/react';

type RecipeNumberInputStyleProps = {
    numberInputContainer: FlexProps;
};

export const recipeNumberInputStyles: RecipeNumberInputStyleProps = {
    numberInputContainer: {
        align: 'center',
        gap: { base: 4, xl: 6 },
    },
};
