import { ButtonProps, IconProps } from '@chakra-ui/react';

export type AuthorFollowButtonStyleProps = {
    button: ButtonProps;
    buttonIcon: IconProps;
};

export const authorFollowButtonStyles: AuthorFollowButtonStyleProps = {
    button: {
        bgColor: 'blackAlpha.900',
        borderColor: 'blackAlpha.200',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'white',
        fontSize: 'xs',
        fontWeight: 'semibold',
        gap: 1.5,
        h: 6,
        lineHeight: '4',
        minW: '114px',
        px: 2,
    },
    buttonIcon: {
        boxSize: 3,
    },
};
