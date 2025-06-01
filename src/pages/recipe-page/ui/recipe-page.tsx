import { Box, Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useParams } from 'react-router';

import { useRecipeById } from '~/entities/recipe';
import { getRecipeOwnership } from '~/features/recipe-ownership';
import { useApiStatusSync } from '~/shared/model';
import { NewRecipes } from '~/widgets/new-recipes';

import { RecipeAuthor } from './recipe-author';
import { RecipeCookingSteps } from './recipe-cooking-steps';
import { RecipeDetails } from './recipe-details';
import { RecipeIngredients } from './recipe-ingredients';
import { RecipeNutritionValue } from './recipe-nutrition-value';
import { recipePageStyles as styles } from './recipe-page.styles';

const RecipePage: FC = () => {
    const { id } = useParams();

    const {
        data: recipe,
        isError: isRecipeError,
        isLoading: isRecipeLoading,
        isSuccess: isRecipeSuccess,
    } = useRecipeById(id);

    const isAuthor = recipe?.author?.id ? getRecipeOwnership(recipe.author.id) : false;

    useApiStatusSync(isRecipeLoading, { isError: isRecipeError });

    if (isRecipeSuccess && recipe) {
        return (
            <Stack {...styles.pageContainer}>
                <Flex {...styles.layout}>
                    <RecipeDetails
                        bookmarks={recipe.bookmarks}
                        categories={recipe.categories}
                        description={recipe.description}
                        id={recipe.id}
                        image={recipe.image}
                        isAuthor={isAuthor}
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
                        <RecipeAuthor author={recipe.author} />
                    </Stack>

                    <NewRecipes />
                </Flex>
            </Stack>
        );
    } else return null;
};

export default RecipePage;
