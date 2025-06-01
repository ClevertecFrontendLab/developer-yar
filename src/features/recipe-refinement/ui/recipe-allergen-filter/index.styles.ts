import { FlexProps } from '@chakra-ui/react';

export type RecipeAllergenFilterStyleProps = {
    container: FlexProps;
    content: FlexProps;
};

export const recipeAllergenFilterStyles: RecipeAllergenFilterStyleProps = {
    container: {
        minH: 10,
        pos: 'relative',
    },
    content: {
        pos: 'absolute',
        right: 0,
        top: 0,
        w: 'full',
    },
};
