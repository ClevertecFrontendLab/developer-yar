import { Box, Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useParams } from 'react-router';

import { useGetBloggerByIdQuery } from '~/entities/blogger';
import { useRecipeById } from '~/entities/recipe';
import { getCurrentUserId } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';
import { NewRecipes } from '~/widgets/new-recipes';

import { RecipeAuthor } from './recipe-author';
import { RecipeCookingSteps } from './recipe-cooking-steps';
import { RecipeDetails } from './recipe-details';
import { RecipeIngredients } from './recipe-ingredients';
import { RecipeNutritionValue } from './recipe-nutrition-value';
import { recipePageStyles as styles } from './recipe-page.styles';

const RecipePage: FC = () => {
    const { recipeId } = useParams();

    const currentUserId = getCurrentUserId();

    const {
        data: recipe,
        isError: isRecipeError,
        isLoading: isRecipeLoading,
        isSuccess: isRecipeSuccess,
    } = useRecipeById(recipeId);

    const {
        data: author,
        isError: isAuthorError,
        isLoading: isAuthorLoading,
        isSuccess: isAuthorSuccess,
    } = useGetBloggerByIdQuery(
        {
            bloggerId: recipe?.authorId ?? '',
            currentUserId,
        },
        { skip: !recipe?.authorId },
    );

    const isСurrentUserAuthor = recipe?.authorId === currentUserId;

    const isLoading = isRecipeLoading || isAuthorLoading;
    const isError = isRecipeError || isAuthorError;

    useApiStatusSync(isLoading, { isError });

    if (isRecipeSuccess && recipe && isAuthorSuccess && author) {
        return (
            <Stack {...styles.pageContainer}>
                <Flex {...styles.layout}>
                    <RecipeDetails
                        authorId={recipe.authorId}
                        bookmarks={recipe.bookmarks}
                        categories={recipe.categories}
                        description={recipe.description}
                        id={recipe.id}
                        image={recipe.image}
                        likes={recipe.likes}
                        time={recipe.time}
                        title={recipe.title}
                    />

                    <Box {...styles.recipeNutritionValueWrapper}>
                        <RecipeNutritionValue recipeNutritionValue={recipe.nutritionValue} />
                    </Box>

                    <Stack {...styles.recipeContentWrapper}>
                        <RecipeIngredients
                            ingredients={recipe.ingredients}
                            portions={recipe.portions}
                        />
                        <RecipeCookingSteps steps={recipe.steps} />
                        {!isСurrentUserAuthor && <RecipeAuthor author={author} />}
                    </Stack>

                    <NewRecipes />
                </Flex>
            </Stack>
        );
    } else return null;
};

export default RecipePage;
