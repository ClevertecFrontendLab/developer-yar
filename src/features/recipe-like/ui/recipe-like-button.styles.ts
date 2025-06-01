import { ButtonProps, IconProps } from '@chakra-ui/react';

type RecipeLikeButtonStyleProps = {
    button: ButtonProps;
    buttonIcon: IconProps;
};

export const recipeLikeButtonStyles: RecipeLikeButtonStyleProps = {
    button: {
        bgColor: 'whiteAlpha.100',
        borderColor: 'blackAlpha.600',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'blackAlpha.800',
        fontSize: { '2xl': 'lg', base: 'xs', xl: 'sm' },
        fontWeight: 'semibold',
        gap: { base: 1.5, xl: 2 },
        h: { base: 6, md: 8, xl: 12 },
        lineHeight: { '2xl': '7', base: '4', xl: '5' },
        minW: { '2xl': '219px', base: '132px', xl: '160px' },
        px: { '2xl': 6, base: 2, xl: 3 },
    },
    buttonIcon: {
        boxSize: { '2xl': 4, base: 3, xl: 3.5 },
    },
};
