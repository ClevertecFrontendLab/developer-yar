import { Category } from '~/entities/navigation/@x/recipe';
import { hasItems } from '~/shared/lib';

import { RecipeDto } from '../dto/recipe.dto';
import { Recipe } from '../model/types';
import { adaptRecipeFromDto } from './adapt-recipe-from-dto';

export const adaptRecipesFromDto = (recipes: RecipeDto, categories: Category[]): Recipe => ({
    data: recipes.data
        .map((recipe) => adaptRecipeFromDto(recipe, categories))
        .filter((recipe) => hasItems(recipe.categories) && hasItems(recipe.subcategories)),
    meta: recipes.meta,
});
