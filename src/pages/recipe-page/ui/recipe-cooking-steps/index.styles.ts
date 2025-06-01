import { HeadingProps, StackProps } from '@chakra-ui/react';

type RecipeCookingStepsStyleProps = {
    RecipeCookingSteps: StackProps;
    title: HeadingProps;
};

export const RecipeCookingStepsStyles: RecipeCookingStepsStyleProps = {
    RecipeCookingSteps: {
        gap: 5,
    },
    title: {
        color: 'black',
        fontSize: { base: '2xl', xl: '4xl' },
        fontWeight: 'medium',
        lineHeight: { base: '8', xl: 'none' },
    },
};
