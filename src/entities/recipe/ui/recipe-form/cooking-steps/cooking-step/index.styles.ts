import {
    CenterProps,
    FlexProps,
    GridProps,
    IconProps,
    StackProps,
    TagProps,
    TextareaProps,
} from '@chakra-ui/react';

type CookingStepStyleProps = {
    cookingStep: GridProps;
    cookingStepDeleteIcon: IconProps;
    cookingStepDescription: TextareaProps;
    cookingStepHeader: FlexProps;
    cookingStepImage: CenterProps;
    cookingStepTag: TagProps;
    cookingStepText: StackProps;
};

export const cookingStepStyles: CookingStepStyleProps = {
    cookingStep: { gridTemplateColumns: { base: '1fr', md: '0.57fr 0.43fr', xl: '0.52fr 0.48fr' } },

    cookingStepDeleteIcon: {
        boxSize: 3.5,
        color: 'lime.600',
    },
    cookingStepDescription: {
        h: { base: '116px', xl: '84px' },
        w: 'full',
    },
    cookingStepHeader: {
        align: 'center',
        justify: 'space-between',
    },
    cookingStepImage: {
        boxSize: 40,
        w: 'full',
    },
    cookingStepTag: {
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
    cookingStepText: {
        gap: 4,
        p: 5,
    },
};
