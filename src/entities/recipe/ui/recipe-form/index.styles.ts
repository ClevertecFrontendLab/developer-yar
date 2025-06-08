import {
    ButtonProps,
    CenterProps,
    FlexProps,
    GridProps,
    InputProps,
    StackProps,
} from '@chakra-ui/react';

type RecipeFormStyleProps = {
    actionButtons: FlexProps;

    publishRecipe: ButtonProps;
    recipeCreationContainer: StackProps;
    recipeCreationHeader: GridProps;

    recipeData: StackProps;
    recipeImage: CenterProps;
    recipeIngredientsAndStepsContainer: StackProps;
    recipeSubcategoriesMenuContainer: GridProps;

    recipeText: StackProps;
    recipeTitle: InputProps;
    saveRecipeToDraft: ButtonProps;
};

const baseButtonStyles: ButtonProps = {
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: '1px',
    fontSize: 'lg',
    fontWeight: 'semibold',
    h: 12,
    lineHeight: '7',
    px: 6,
    w: { base: 'full', md: '246px' },
};

export const recipeFormStyles: RecipeFormStyleProps = {
    actionButtons: {
        direction: { base: 'column', md: 'row' },
        gap: 5,
        justify: 'center',
        w: 'full',
    },
    publishRecipe: {
        ...baseButtonStyles,
        bgColor: 'blackAlpha.900',
        borderColor: 'blackAlpha.200',
        color: 'white',
    },
    recipeCreationContainer: {
        gap: { base: 8, xl: 10 },
    },
    recipeCreationHeader: {
        alignContent: 'start',
        gap: { base: 4, xl: 6 },
        mr: { '2xl': '115px' },
        templateColumns: {
            '2xl': '0.45fr 0.55fr',
            base: '1fr',
            md: '0.32fr 0.68fr',
            xl: '0.37fr 0.63fr',
        },
    },

    recipeData: {
        alignContent: 'start',
        gap: 8,
    },
    recipeImage: {
        h: { base: '224px', xl: '430px' },
        objectFit: 'cover',
        w: 'full',
    },
    recipeIngredientsAndStepsContainer: {
        gap: 10,
        m: 'auto',
        maxW: { '2xl': '668px', base: 'full', md: '604px', xl: '658px' },
        w: 'full',
    },
    recipeSubcategoriesMenuContainer: {
        alignContent: 'start',
        gap: 4,
        templateColumns: {
            '2xl': '0.45fr 0.65fr',
            base: '1fr',
            md: '0.5fr 0.5fr',
            xl: '0.35fr 0.65fr',
        },
    },
    recipeText: {
        gap: 6,
    },
    recipeTitle: {
        borderColor: 'lime.150',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'blackAlpha.700',
        fontSize: 'lg',
        fontWeight: 'normal',
        h: 12,
        lineHeight: '7',
        px: 4,
    },
    saveRecipeToDraft: {
        ...baseButtonStyles,
        bgColor: 'whiteAlpha.100',
        borderColor: 'blackAlpha.600',
        color: 'blackAlpha.800',
    },
};
