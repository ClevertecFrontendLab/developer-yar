import { HeadingProps, StackProps } from '@chakra-ui/react';

type CookingStepsStyleProps = {
    cookingSteps: StackProps;
    title: HeadingProps;
};

export const cookingStepsStyles: CookingStepsStyleProps = {
    cookingSteps: {
        gap: 5,
    },
    title: {
        color: 'black',
        fontSize: { base: '2xl', xl: '4xl' },
        fontWeight: 'medium',
        lineHeight: { base: '8', xl: 'none' },
    },
};
