import { GridProps } from '@chakra-ui/react';

type RecipesWithLoadMoreStyleProps = {
    container: GridProps;
};

export const recipesWithLoadMoreStyles: RecipesWithLoadMoreStyleProps = {
    container: { layerStyle: 'gridLayout' },
};
