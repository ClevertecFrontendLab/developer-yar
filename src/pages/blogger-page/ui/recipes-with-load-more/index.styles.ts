import { GridProps, StackProps } from '@chakra-ui/react';

type RecipesWithLoadMoreStyleProps = {
    container: StackProps;
    recipes: GridProps;
};

export const recipesWithLoadMoreStyles: RecipesWithLoadMoreStyleProps = {
    container: { gap: 4 },
    recipes: { layerStyle: 'gridLayout' },
};
