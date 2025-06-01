import { ButtonProps, IconProps, StackProps } from '@chakra-ui/react';

type CookingStepsStyleProps = {
    addNewStepButton: ButtonProps;
    addNewStepButtonIcon: IconProps;
    cookingSteps: StackProps;
};

export const cookingStepsStyles: CookingStepsStyleProps = {
    addNewStepButton: {
        alignSelf: 'end',
        borderColor: 'blackAlpha.600',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'blackAlpha.800',
        fontSize: 'sm',
        fontWeight: 'semibold',
        gap: 2,
        h: 8,
        lineHeight: '5',
        px: 3,
        w: '123px',
    },
    addNewStepButtonIcon: {
        boxSize: 3.5,
    },
    cookingSteps: {
        gap: 4,
    },
};
