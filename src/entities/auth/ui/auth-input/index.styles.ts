import { IconButtonProps, IconProps, InputProps, InputRightElementProps } from '@chakra-ui/react';

type AuthInputStyleProps = {
    icon: IconProps;
    iconButton: Omit<IconButtonProps, 'aria-label'>;
    input: InputProps;
    inputRightElement: InputRightElementProps;
};

export const authInputStyles: AuthInputStyleProps = {
    icon: {
        boxSize: '18px',
    },
    iconButton: {
        h: 'auto',
        minW: 0,
        right: 4,
    },
    input: {
        _invalid: {
            outline: '2px solid',
            outlineColor: 'red.500',
        },

        _placeholder: {
            color: 'lime.800',
        },
        bg: 'white',
        borderRadius: 'md',
        color: 'lime.800',
        fontSize: 'lg',
        fontWeight: 'normal',
        h: 12,
        outline: '1px solid',
        outlineColor: 'lime.150',
        outlineOffset: '0',
        p: 4,

        sx: {
            ':-webkit-autofill': {
                boxShadow: '0 0 0 1000px white inset !important',
                WebkitBoxShadow: '0 0 0 1000px white inset !important',
                WebkitTextFillColor: 'inherit !important',
            },
        },
        w: 'full',
    },
    inputRightElement: {
        h: 'full',
    },
};
