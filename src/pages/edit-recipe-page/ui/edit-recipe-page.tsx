import { Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useRecipeById } from '~/entities/recipe';
import { RecipeEditForm } from '~/features/recipe-edit';
import { getCurrentUserId } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';

import { editRecipePageStyles as styles } from './edit-recipe-page.styles';

const EditRecipePage: FC = () => {
    const { recipeId } = useParams();

    const {
        data: recipe,
        isError: isRecipeError,
        isLoading: isRecipeLoading,
        isSuccess: isRecipeSuccess,
    } = useRecipeById(recipeId);

    const currentUserId = getCurrentUserId();

    const isAuthor = recipe?.authorId === currentUserId;

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useApiStatusSync(isRecipeLoading, { isError: isRecipeError });

    if (!isAuthor) {
        goBack();
        return null;
    } else if (isRecipeSuccess && recipe)
        return (
            <Stack {...styles.pageContainer}>
                <Flex {...styles.layout}>
                    <RecipeEditForm recipe={recipe} />
                </Flex>
            </Stack>
        );
    else return null;
};

export default EditRecipePage;
