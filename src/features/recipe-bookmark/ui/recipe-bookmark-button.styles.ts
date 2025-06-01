import { ButtonProps, IconProps } from '@chakra-ui/react';

import { RecipeBookmarkButtonVariant } from '../model/types';

type RecipeBookmarkButtonStyleProps = {
    button: ButtonProps;
    buttonIcon: IconProps;
};

const sharedButtonStyles: ButtonProps = {
    borderRadius: 'md',
    color: 'black',
    flexShrink: 0,
    fontWeight: 'semibold',
    minW: 'auto',
};

export const recipeBookmarkButtonVariants: Record<
    RecipeBookmarkButtonVariant,
    RecipeBookmarkButtonStyleProps
> = {
    primary: {
        button: {
            ...sharedButtonStyles,
            bgColor: 'lime.400',
            fontSize: { '2xl': 'lg', base: 'xs', xl: 'sm' },
            gap: { base: 1.5, xl: 2 },
            h: { base: 6, md: 8, xl: 12 },
            lineHeight: { '2xl': '7', base: '4', xl: '5' },
            minW: { '2xl': '273px', base: '168px', xl: '202px' },
            px: { '2xl': 6, base: 2, xl: 3 },
        },
        buttonIcon: {
            boxSize: { '2xl': 4, base: 3, md: 3, xl: 3.5 },
        },
    },
    secondary: {
        button: {
            ...sharedButtonStyles,
            bgColor: 'whiteAlpha.100',
            borderColor: 'blackAlpha.600',
            borderStyle: 'solid',
            borderWidth: '1px',
            fontSize: 'sm',
            gap: 2,
            h: { base: 6, xl: 8 },
            lineHeight: '5',
            px: { xl: 3 },
            w: { base: 6, xl: 'auto' },
        },
        buttonIcon: {
            boxSize: { base: 3, xl: 3.5 },
        },
    },
};
