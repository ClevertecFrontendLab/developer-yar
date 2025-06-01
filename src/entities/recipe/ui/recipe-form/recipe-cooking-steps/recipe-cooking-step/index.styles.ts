import {
    CenterProps,
    FlexProps,
    GridProps,
    IconProps,
    StackProps,
    TagProps,
    TextareaProps,
} from '@chakra-ui/react';

type RecipeCookingStepStyleProps = {
    recipeRecipeCookingStep: GridProps;
    recipeRecipeCookingStepDeleteIcon: IconProps;
    recipeRecipeCookingStepDescription: TextareaProps;
    recipeRecipeCookingStepHeader: FlexProps;
    recipeRecipeCookingStepImage: CenterProps;
    recipeRecipeCookingStepTag: TagProps;
    recipeRecipeCookingStepText: StackProps;
};

export const RecipeCookingStepstyles: RecipeCookingStepStyleProps = {
    recipeRecipeCookingStep: {
        gridTemplateColumns: { base: '1fr', md: '0.57fr 0.43fr', xl: '0.52fr 0.48fr' },
    },

    recipeRecipeCookingStepDeleteIcon: {
        boxSize: 3.5,
        color: 'lime.600',
    },
    recipeRecipeCookingStepDescription: {
        h: { base: '116px', xl: '84px' },
        w: 'full',
    },
    recipeRecipeCookingStepHeader: {
        align: 'center',
        justify: 'space-between',
    },
    recipeRecipeCookingStepImage: {
        boxSize: 40,
        w: 'full',
    },
    recipeRecipeCookingStepTag: {
        bgColor: 'blackAlpha.100',
        borderRadius: 'base',
        color: 'black',
        fontSize: 'xs',
        fontWeight: 'semibold',
        letterSpacing: '0.03em',
        lineHeight: '4',
        minH: 5,
        px: 2,
    },
    recipeRecipeCookingStepText: {
        gap: 4,
        p: 5,
    },
};
