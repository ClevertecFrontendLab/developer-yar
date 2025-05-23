import { FormControlProps } from '@chakra-ui/react';

type AuthControlStyleProps = {
    control: FormControlProps;
};

export const authControlStyles: AuthControlStyleProps = {
    control: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
    },
};
