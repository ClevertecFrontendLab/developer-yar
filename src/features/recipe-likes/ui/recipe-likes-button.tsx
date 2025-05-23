import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { LikeIcon } from '~/shared/ui/icons';

import { recipeLikesButtonStyles as styles } from './recipe-likes-button.styles';

export const RecipeLikesButton: FC = () => (
    <Button {...styles.button}>
        <LikeIcon {...styles.buttonIcon} />
        Оценить рецепт
    </Button>
);
