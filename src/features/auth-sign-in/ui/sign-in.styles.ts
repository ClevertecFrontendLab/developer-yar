import { StackProps, TextProps } from '@chakra-ui/react';

type SignInStyleProps = {
    fields: StackProps;
    forgotAuthData: TextProps;
    form: StackProps;
    formActions: StackProps;
};

export const signInStyles: SignInStyleProps = {
    fields: {
        gap: 1,
    },
    forgotAuthData: {
        color: 'black',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '6',
        textAlign: 'center',
    },
    form: {
        gap: 28,
    },
    formActions: {
        gap: 4,
    },
};
