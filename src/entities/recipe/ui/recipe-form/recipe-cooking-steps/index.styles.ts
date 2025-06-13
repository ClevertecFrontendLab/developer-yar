import { ButtonProps, IconProps, StackProps } from '@chakra-ui/react';

type RecipeCookingStepsStyleProps = {
    RecipeCookingSteps: StackProps;
    addNewStepButton: ButtonProps;
    addNewStepButtonIcon: IconProps;
};

export const RecipeCookingStepsStyles: RecipeCookingStepsStyleProps = {
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
    RecipeCookingSteps: {
        gap: 4,
    },
};
