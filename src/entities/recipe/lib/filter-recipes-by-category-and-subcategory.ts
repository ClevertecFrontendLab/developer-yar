import { Recipe } from '../model/types';

export const filterRecipesByCategoryAndSubcategory = (
    recipes: Recipe[],
    category: string,
    subcategory: string,
) =>
    recipes.filter(
        (recipe) => recipe.category.includes(category) && recipe.subcategory.includes(subcategory),
    );
