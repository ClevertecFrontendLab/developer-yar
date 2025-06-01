import { DeleteIcon, IconButton } from '@chakra-ui/icons';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { useDeleteRecipeMutation } from '~/entities/recipe';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useApiStatusSync } from '~/shared/model';
import { ROUTES } from '~/shared/routes';

import { recipeDeleteStyles as styles } from './recipe-delete.styles';

type RecipeDeleteProps = {
    recipeId: string;
};

export const RecipeDelete: FC<RecipeDeleteProps> = ({ recipeId }) => {
    const [deleteRecipe, { isLoading, isError, isSuccess }] = useDeleteRecipeMutation();

    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteRecipe(recipeId).unwrap();

        navigate(ROUTES.HOME);
    };

    useApiStatusSync(
        isLoading,
        { isError, message: { description: 'Не удалось удалить рецепт', title: 'Ошибка сервера' } },
        { isSuccess, message: 'Рецепт успешно удален' },
    );

    return (
        <IconButton
            aria-label='Удалить рецепт'
            {...styles.deleteButton}
            data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_DELETE_BUTTON}
            onClick={handleDelete}
        >
            <DeleteIcon {...styles.deleteIcon} />
        </IconButton>
    );
};
