import { Note } from '~/entities/blogger/@x/recipe';

import { RecipeItemApi } from './recipe-item.api';

export type RecipesByUserApi = {
    notes: Note[];
    recipes: RecipeItemApi[];
};
