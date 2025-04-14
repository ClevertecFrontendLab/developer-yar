import { FlexProps, StackProps } from '@chakra-ui/react';

type NewRecipesStyleProps = {
    newRecipes: FlexProps;
    newRecipesContainer: StackProps;
};

export const newRecipesStyles: NewRecipesStyleProps = {
    newRecipes: {
        gap: { base: 3, '3xl': 6 },
        overflowX: 'scroll',
        scrollSnapType: 'x mandatory',
        sx: {
            '::-webkit-scrollbar': {
                display: 'none',
            },
        },
    },
    newRecipesContainer: {
        gap: 6,
        overflow: { xl: 'hidden', '2xl': 'visible' },
        pos: 'relative',
    },
};
