import { IconButtonProps, IconProps } from '@chakra-ui/react';

type RecipeDeleteStyleProps = {
    deleteButton: Omit<IconButtonProps, 'aria-label'>;
    deleteIcon: IconProps;
};

export const recipeDeleteStyles: RecipeDeleteStyleProps = {
    deleteButton: {
        boxSize: 12,
    },
    deleteIcon: {
        boxSize: 4,
    },
};
