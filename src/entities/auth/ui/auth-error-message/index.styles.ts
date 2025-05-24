import { FormErrorMessageProps } from '@chakra-ui/react';

type AuthErrorMessageStyleProps = {
    errorMessage: FormErrorMessageProps;
};

export const authErrorMessageStyles: AuthErrorMessageStyleProps = {
    errorMessage: {
        color: 'red.500',
        fontSize: 'xs',
        fontWeight: 'normal',
        lineHeight: '4',
        mt: 0,
    },
};
