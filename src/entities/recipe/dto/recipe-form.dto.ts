import { Ingredient, Step } from '../model/types';

export type RecipeFormDto = Partial<{
    categoriesIds: string[];
    description: string;
    image: string;
    ingredients: Ingredient[];
    portions: number;
    steps: Step[];
    time: number;
    title: string;
}>;
