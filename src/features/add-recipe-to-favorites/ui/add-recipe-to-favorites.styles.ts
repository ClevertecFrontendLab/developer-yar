import { ButtonProps, IconProps } from '@chakra-ui/react';

type AddRecipeToFavoritesButtonStyleProps = {
    button: ButtonProps;
    buttonIcon: IconProps;
};

export const addRecipeToFavoritesButtonStyles: AddRecipeToFavoritesButtonStyleProps = {
    button: {
        bgColor: 'whiteAlpha.100',
        borderColor: 'blackAlpha.600',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'semibold',
        gap: 2,
        h: { base: 6, xl: 8 },
        lineHeight: '5',
        minW: 'auto',
        px: { xl: 3 },
        w: { base: 6, xl: 'auto' },
    },
    buttonIcon: {
        boxSize: { base: 3, xl: 3.5 },
    },
};
