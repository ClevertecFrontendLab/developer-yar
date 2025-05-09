import { GridItemProps, GridProps, StackProps, TextProps } from '@chakra-ui/react';

type RecipesByCategoryStyleProps = {
    description: TextProps;
    descriptionContainer: GridItemProps;
    gridContainer: GridProps;
    recipesByCategoryContainer: GridItemProps;
    recipesPrimaryCards: GridProps;
    recipesSecondaryCards: StackProps;
    titleContainer: GridItemProps;
};

export const recipesByCategoryStyles: RecipesByCategoryStyleProps = {
    description: {
        color: 'blackAlpha.600',
        fontSize: { base: 'sm', xl: 'md' },
        fontWeight: 'medium',
        lineHeight: { base: '5', xl: '6' },
    },
    descriptionContainer: {
        area: 'description',
        maxW: { '3xl': '656px' },
        ml: { '3xl': 'auto' },
    },
    gridContainer: {
        borderTopColor: 'blackAlpha.200',
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        gap: { base: 4, xl: 6 },
        pt: { base: 2, xl: 6 },
        templateAreas: {
            '3xl': `"title title description description" "recipesByCategory recipesByCategory recipesByCategory recipesByCategory"`,
            base: `"title" "description" "recipesByCategory"`,
            xl: `"title description description" "recipesByCategory recipesByCategory recipesByCategory"`,
        },
        templateColumns: {
            '3xl': 'repeat(4,1fr)',
            base: '1fr',
            xl: 'repeat(3, 1fr)',
        },
    },
    recipesByCategoryContainer: { area: 'recipesByCategory' },
    recipesPrimaryCards: {
        gap: { '3xl': 6, base: 3, xl: 4 },
        minW: 0,
        templateColumns: {
            '3xl': '0.25fr 0.25fr 0.5fr',
            base: '1fr',
            md: 'repeat(3,1fr)',
        },
    },
    recipesSecondaryCards: { gap: { base: 1.5, xl: 3 } },
    titleContainer: { area: 'title' },
};
