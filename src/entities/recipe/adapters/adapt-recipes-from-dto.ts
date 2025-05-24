import { Category } from '~/entities/navigation/@x/recipe';
import { User } from '~/entities/user/@x/recipe';

import { RecipeDto } from '../dto/recipe.dto';
import { Recipe } from '../model/types';
import { adaptRecipeFromDto } from './adapt-recipe-from-dto';

export const adaptRecipesFromDto = (
    recipes: RecipeDto,
    author: User,
    categories: Category[],
): Recipe => ({
    data: recipes.data
        .map((recipe) => adaptRecipeFromDto(recipe, author, categories))
        .filter((recipe) => recipe.categories.length && recipe.subcategories.length),
    meta: recipes.meta,
});
