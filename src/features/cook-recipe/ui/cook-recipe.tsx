import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router';

import { CookRecipeButtonVariant } from '../model/types';
import { cookRecipeButtonVariants } from './cook-recipe.styles';

type CookRecipeButtonProps = {
    id: string;
    url: string;
    variant?: CookRecipeButtonVariant;
};

export const CookRecipeButton: FC<CookRecipeButtonProps> = ({ id, url, variant = 'black' }) => {
    const styles = cookRecipeButtonVariants[variant] || cookRecipeButtonVariants.black;

    return (
        <Button as={Link} to={url} {...styles} data-test-id={`card-link-${id}`}>
            Готовить
        </Button>
    );
};
