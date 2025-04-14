import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { CookRecipeButtonVariant } from '../model/types';
import { cookRecipeButtonVariants } from './cook-recipe.styles';

interface CookRecipeButtonProps {
    variant?: CookRecipeButtonVariant;
}

export const CookRecipeButton: FC<CookRecipeButtonProps> = ({ variant = 'black' }) => {
    const styles = cookRecipeButtonVariants[variant] || cookRecipeButtonVariants.black;

    return <Button {...styles}>Готовить</Button>;
};
