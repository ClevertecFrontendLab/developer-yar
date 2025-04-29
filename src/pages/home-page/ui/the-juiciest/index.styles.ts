import { ButtonProps, GridItemProps, GridProps, IconProps } from '@chakra-ui/react';

type TheJuiciestStyleProps = {
    actionArea: GridItemProps;
    headerArea: GridItemProps;
    recipesArea: GridItemProps;
    recipesGrid: GridProps;
    sectionContainer: GridProps;
    viewAllButton: ButtonProps;
    viewAllIcon: IconProps;
};

export const recipeListStyles: TheJuiciestStyleProps = {
    actionArea: {
        area: 'actions',
        justifySelf: { base: 'center', xl: 'right' },
    },
    headerArea: {
        area: 'header',
    },
    recipesArea: {
        area: 'recipes',
    },
    recipesGrid: {
        layerStyle: 'gridLayout',
    },
    sectionContainer: {
        rowGap: { '2xl': 6, base: 4 },
        templateAreas: {
            base: `"header"
               "recipes"
               "actions"`,
            xl: `"header . actions"
             "recipes recipes recipes"`,
        },
    },
    viewAllButton: {
        bgColor: 'lime.300',
        color: 'black',
        fontSize: 'md',
        fontWeight: 'semibold',
        gap: 2,
        h: { '2xl': 12, base: 10 },
        lineHeight: { '2xl': 7, base: '6' },
        w: { '2xl': '197px', base: '167px' },
    },
    viewAllIcon: {
        color: 'black',
    },
};
