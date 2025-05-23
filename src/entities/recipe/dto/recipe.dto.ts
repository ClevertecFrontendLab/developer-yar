import { RecipeMeta } from '../model/types';
import { RecipeItemDto } from './recipe-item.dto';

export type RecipeDto = {
    data: RecipeItemDto[];
    meta: RecipeMeta;
};
