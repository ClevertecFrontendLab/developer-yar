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

    const handleLike = async () => {
        await likeRecipe(recipeId).unwrap();
    };

    useApiStatusSync(isLoading, {
        isError,
    });

    return (
        <Button {...styles.button} onClick={handleLike}>
            <LikeIcon {...styles.buttonIcon} />
            Оценить рецепт
        </Button>
    );
};
