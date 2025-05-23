import { ButtonProps } from '@chakra-ui/react';

type AuthButtonStyleProps = {
    button: ButtonProps;
};

export const authButtonStyles: AuthButtonStyleProps = {
    button: {
        bgColor: 'blackAlpha.900',
        border: '1px solid blackAlpha.200',
        borderRadius: 'md',
        color: 'white',
        fontSize: 'lg',
        fontWeight: 'semibold',
        h: 12,
        lineHeight: '7',
        w: 'full',
    },
};
