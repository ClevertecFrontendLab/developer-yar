import { Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useRecipeById } from '~/entities/recipe';
import { RecipeEditForm } from '~/features/recipe-edit';
import { getRecipeOwnership } from '~/features/recipe-ownership';
import { useApiStatusSync } from '~/shared/model';

import { editRecipePageStyles as styles } from './edit-recipe-page.styles';

const EditRecipePage: FC = () => {
    const { id } = useParams();

    const {
        data: recipe,
        isError: isRecipeError,
        isLoading: isRecipeLoading,
        isSuccess: isRecipeSuccess,
    } = useRecipeById(id);

    const isAuthor = recipe?.author?.id ? getRecipeOwnership(recipe.author.id) : false;

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
