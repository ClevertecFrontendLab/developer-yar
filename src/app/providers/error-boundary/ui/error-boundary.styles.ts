import { ButtonProps, StackProps, TextProps } from '@chakra-ui/react';

type ErrorBoundaryStyleProps = {
    container: StackProps;
    errorText: TextProps;
    hintText: TextProps;
    reloadButton: ButtonProps;
};

export const errorBoundaryStyles: ErrorBoundaryStyleProps = {
    container: {
        bg: 'red.50',
        placeItems: 'center',
    },
    errorText: {
        color: 'red.600',
        fontSize: 'xl',
    },
    hintText: {
        color: 'gray.600',
        mt: 2,
    },
    reloadButton: {
        mt: 4,
    },
};
