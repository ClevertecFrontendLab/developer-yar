import { BoxProps } from '@chakra-ui/react';

type AuthFormStyleProps = {
    form: BoxProps;
};

export const authFormStyles: AuthFormStyleProps = {
    form: {
        sx: {
            '& > div:first-of-type': { mb: 6 },
            '& > div:nth-of-type(2)': { mb: 12 },
        },
    },
};
