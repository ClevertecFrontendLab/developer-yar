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
        rowGap: { base: 4, '2xl': 6 },
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
        h: { base: 10, '2xl': 12 },
        lineHeight: { base: '6', '2xl': 7 },
        w: { base: '167px', '2xl': '197px' },
    },
    viewAllIcon: {
        color: 'black',
    },
};
