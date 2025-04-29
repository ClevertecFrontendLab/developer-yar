import { Recipe } from '../model/types';

export const filterTopNewest = (recipes: Recipe[]) =>
    recipes.slice(0, 10).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
