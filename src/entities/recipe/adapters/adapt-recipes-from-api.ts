import { Category } from '~/entities/navigation/@x/recipe';
import { hasItems } from '~/shared/lib';

import { RecipeApi } from '../api/recipe.api';
import { Recipe } from '../model/types';
import { adaptRecipeFromApi } from './adapt-recipe-from-api';

export const adaptRecipesFromApi = (recipes: RecipeApi, categories: Category[]): Recipe => ({
    data: recipes.data
        .map((recipe) => adaptRecipeFromApi(recipe, categories))
        .filter((recipe) => hasItems(recipe.categories) && hasItems(recipe.subcategories)),
    meta: recipes.meta,
});
