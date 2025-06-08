import { Category } from '~/entities/navigation/@x/blogger';

import { RecipesByUserDto } from '../dto/recipes-by-user.dto';
import { RecipesByUser } from '../model/types';
import { adaptRecipeFromDto } from './adapt-recipe-from-dto';

export const adaptRecipesByUserIdFromDto = (
    recipes: RecipesByUserDto,
    categories: Category[],
): RecipesByUser => ({
    notes: recipes.notes,
    recipes: recipes.recipes
        .filter((recipe) => recipe.categoriesIds)
        .map((recipe) => adaptRecipeFromDto(recipe, categories)),
});
