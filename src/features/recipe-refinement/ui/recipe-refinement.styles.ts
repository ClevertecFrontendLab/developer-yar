import { BoxProps, FlexProps, StackProps } from '@chakra-ui/react';

type RecipeRefinementStyleProps = {
    filterAndSearch: FlexProps;
    filterAndSearchWrapper: (isFetching: boolean) => StackProps;
    loader: BoxProps;
    wrapper: StackProps;
};

export const recipeRefinementStyles: RecipeRefinementStyleProps = {
    filterAndSearch: {
        gap: 3,
    },
    filterAndSearchWrapper: (isFetching: boolean): StackProps => ({
        gap: 4,
        visibility: isFetching ? 'hidden' : 'visible',
        zIndex: typeof Cypress !== 'undefined' ? 'modal' : 'auto',
    }),
    loader: {
        bottom: 0,
        left: '50%',
        pos: 'absolute',
        transform: 'translateX(-50%)',
    },
    wrapper: {
        maxW: { base: '448px', xl: '518px' },
        pos: 'relative',
        w: 'full',
    },
};
