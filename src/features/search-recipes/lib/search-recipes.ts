import { Recipe } from '~/entities/recipe';

export const searchRecipes = (recipes: Recipe[], searchQuery: string) =>
    recipes.filter((recipe) => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()));
