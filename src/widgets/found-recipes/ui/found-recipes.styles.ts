import { BoxProps, GridProps } from '@chakra-ui/react';

type FoundRecipesStyleProps = {
    container: GridProps;
    highlightedTitleColor: BoxProps;
};

export const foundRecipesStyles: FoundRecipesStyleProps = {
    container: { layerStyle: 'gridLayout' },
    highlightedTitleColor: {
        color: 'lime.600',
    },
};
