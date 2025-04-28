import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { LikeIcon } from '~/shared/ui/icons';

import { likeRecipeStyles as styles } from './like-recipe.styles';

export const LikeRecipeButton: FC = () => (
    <Button {...styles.button}>
        <LikeIcon {...styles.buttonIcon} />
        Оценить рецепт
    </Button>
);
