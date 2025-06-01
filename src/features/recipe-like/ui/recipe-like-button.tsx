import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { useLikeRecipeMutation } from '~/entities/recipe';
import { useApiStatusSync } from '~/shared/model';
import { LikeIcon } from '~/shared/ui/icons';

import { recipeLikeButtonStyles as styles } from './recipe-like-button.styles';

type RecipeLikeButtonProps = {
    recipeId: string;
};

export const RecipeLikeButton: FC<RecipeLikeButtonProps> = ({ recipeId }) => {
    const [likeRecipe, { isLoading, isError }] = useLikeRecipeMutation();

    const handleLike = () => {
        likeRecipe(recipeId).unwrap();
    };

    useApiStatusSync(isLoading, {
        isError,
        message: { description: 'Попробуйте немного позже', title: 'Ошибка сервера' },
    });

    return (
        <Button {...styles.button} onClick={handleLike}>
            <LikeIcon {...styles.buttonIcon} />
            Оценить рецепт
        </Button>
    );
};
