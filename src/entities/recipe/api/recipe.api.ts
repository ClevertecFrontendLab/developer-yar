import { RecipeMeta } from '../model/types';
import { RecipeItemApi } from './recipe-item.api';

export type RecipeApi = {
    data: RecipeItemApi[];
    meta: RecipeMeta;
};
