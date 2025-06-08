import { Note } from '~/entities/blogger/@x/recipe';

import { RecipeItemDto } from './recipe-item.dto';

export type RecipesByUserDto = {
    notes: Note[];
    recipes: RecipeItemDto[];
};
