import {
    GridItemProps,
    GridProps,
    IconProps,
    InputProps,
    StackProps,
    TextProps,
} from '@chakra-ui/react';

type IngredientsSectionStyleProps = {
    addIngredientButton: GridItemProps;
    addIngredientIcon: IconProps;
    addSmallIcon: IconProps;
    countInput: GridItemProps;
    deleteIngredientButton: GridItemProps;
    deleteIngredientIcon: IconProps;
    ingredientInput: GridItemProps;
    ingredientLabel: TextProps;
    ingredientsContainer: StackProps;
    ingredientsLabelContainer: GridProps;
    ingredientsTableGrid: GridProps;
    ingredientsTableInput: InputProps;
    measureUnitInput: GridItemProps;
};

export const ingredientsSectionStyles: IngredientsSectionStyleProps = {
    addIngredientButton: {},
    addIngredientIcon: {
        boxSize: 8,
        color: 'black',
        cursor: 'pointer',
    },
    addSmallIcon: {
        boxSize: 4,
        display: 'inline-block',
        ml: 2,
        verticalAlign: 'middle',
    },
    countInput: { area: 'count' },
    deleteIngredientButton: { justifySelf: 'center' },
    deleteIngredientIcon: {
        boxSize: 3.5,
        color: 'lime.600',
        cursor: 'pointer',
    },
    ingredientInput: { area: 'ingredient' },
    ingredientLabel: {
        color: 'lime.600',
        fontSize: 'xs',
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        lineHeight: '4',
        px: 4,
    },
    ingredientsContainer: {
        gap: 4,
    },
    ingredientsLabelContainer: {
        gap: { base: 4, xl: 6 },
        gridTemplateColumns: '0.45fr 0.2fr 0.3fr',
    },

    ingredientsTableGrid: {
        alignItems: 'center',
        columnGap: 4,

        rowGap: 3,
        templateAreas: {
            base: `"ingredient ingredient ingredient"
                  "count measureUnit icon"`,
            md: `"ingredient count measureUnit icon"`,
        },
        templateColumns: {
            md: '1fr 80px 215px 32px',
        },
    },
    ingredientsTableInput: {
        borderColor: 'gray.300',
        borderRadius: 'base',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'blackAlpha.900',
        fontSize: 'md',
        fontWeight: 'normal',
        h: 10,
        lineHeight: '6',
        px: 4,
    },
    measureUnitInput: { area: 'measureUnit' },
};
