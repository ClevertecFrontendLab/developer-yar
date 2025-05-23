import { Button } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router';

import { RecipeCookingButtonVariant } from '../model/types';
import { recipeCookingButtonVariants } from './recipe-cooking-button.styles';

type RecipeCookingButtonProps = {
    id: string;
    url: string;
    variant?: RecipeCookingButtonVariant;
};

export const RecipeCookingButton: FC<RecipeCookingButtonProps> = ({
    id,
    url,
    variant = 'black',
}) => {
    const styles = recipeCookingButtonVariants[variant] || recipeCookingButtonVariants.black;

    return (
        <Button as={Link} to={url} {...styles} data-test-id={`card-link-${id}`}>
            Готовить
        </Button>
    );
};
