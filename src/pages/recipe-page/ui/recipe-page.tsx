import { Box, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useParams } from 'react-router';

import { useGetAllRecipesQuery, useGetRecipeByIdQuery } from '~/entities/recipe';
import { NewRecipes } from '~/widgets/new-recipes';

import { CookingSteps } from './cooking-steps';
import { Ingredients } from './ingredients';
import { NutritionValue } from './nutrition-value';
import { RecipeAuthor } from './recipe-author';
import { RecipeDetails } from './recipe-details';
import { recipePageStyles as styles } from './recipe-page.styles';

const RecipePage: FC = () => {
    const { id } = useParams();

    const {
        data: recipes = [],
        isSuccess: isRecipesSuccess,
        isLoading: isRecipesLoading,
        isError: isRecipesError,
    } = useGetAllRecipesQuery();
    const {
        data: recipe,
        isSuccess: isRecipeSuccess,
        isLoading: isRecipeLoading,
        isError: isRecipeError,
    } = useGetRecipeByIdQuery(id!);

    if (isRecipesLoading || isRecipeLoading) {
        return <div>Загрузка...</div>;
    }

    if (isRecipesError || isRecipeError) {
        return <div>Ошибка загрузки данных</div>;
    }

    if (isRecipesSuccess && isRecipeSuccess) {
        return (
            <Stack {...styles.pageContainer}>
                <Stack {...styles.layout}>
                    <RecipeDetails
                        bookmarks={recipe.bookmarks}
                        category={recipe.category}
                        description={recipe.description}
                        image={recipe.image}
                        likes={recipe.likes}
                        time={recipe.time}
                        title={recipe.title}
                    />

                    <Box {...styles.nutritionValueWrapper}>
                        <NutritionValue nutritionValue={recipe.nutritionValue} />
                    </Box>

                    <Stack {...styles.recipeContentWrapper}>
                        <Ingredients ingredients={recipe.ingredients} />
                        <CookingSteps steps={recipe.steps} />
                        <RecipeAuthor author={recipe.author} />
                    </Stack>

                    <NewRecipes recipes={recipes} />
                </Stack>
            </Stack>
        );
    }

    return <div>Нет данных для отображения</div>;
};

export default RecipePage;
