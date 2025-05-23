import { StackProps } from '@chakra-ui/react';

type SignUpStyleProps = {
    formContainer: StackProps;
};

export const signUpStyles: SignUpStyleProps = {
    formContainer: {
        sx: {
            '& > div:first-of-type': { mb: 6 },
            '& > div:nth-of-type(2)': { mb: 12 },
        },
    },
};
