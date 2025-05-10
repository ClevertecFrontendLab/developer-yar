import { BoxProps, FlexProps, StackProps } from '@chakra-ui/react';

type RecipeSearchStyleProps = {
    filterAndSearch: FlexProps;
    filterAndSearchWrapper: (isFetching: boolean) => StackProps;
    loader: BoxProps;
    wrapper: StackProps;
};

export const recipeSearchStyles: RecipeSearchStyleProps = {
    filterAndSearch: {
        gap: 3,
        zIndex: 'dropdown',
    },
    filterAndSearchWrapper: (isFetching: boolean): StackProps => ({
        gap: 4,
        visibility: isFetching ? 'hidden' : 'visible',
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
