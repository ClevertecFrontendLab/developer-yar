import { IconButtonProps } from '@chakra-ui/react';

type RecipeEditButtonStyleProps = {
    editButton: Omit<IconButtonProps, 'aria-label'>;
};

export const recipeEditButtonStyles: RecipeEditButtonStyleProps = {
    editButton: {
        borderColor: 'blackAlpha.600',
        borderRadius: 'lg',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'blackAlpha.800',
        fontSize: 'lg',
        fontWeight: 'semibold',
        gap: 2,
        h: 12,
        lineHeight: '7',
        px: 6,
        w: '246px',
    },
};
