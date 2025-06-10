import { Category } from '~/entities/navigation/@x/blogger';

import { RecipesByUserApi } from '../api/recipes-by-user.api';
import { RecipesByUser } from '../model/types';
import { adaptRecipeFromApi } from './adapt-recipe-from-api';

export const adaptRecipesByUserIdFromApi = (
    recipes: RecipesByUserApi,
    categories: Category[],
): RecipesByUser => ({
    notes: recipes.notes,
    recipes: recipes.recipes
        .filter((recipe) => recipe.categoriesIds)
        .map((recipe) => adaptRecipeFromApi(recipe, categories)),
});
