import { Step } from '../model/types';

export type RecipeItemDto = {
    _id: string;
    authorId: string;
    bookmarks: number;
    categoriesIds: string[];
    createdAt: string;
    description: string;
    image: string;
    ingredients: {
        count: string | number;
        measureUnit: string;
        title: string;
    }[];
    likes: number;
    nutritionValue: {
        calories: number;
        carbohydrates: number;
        fats: number;
        protein?: number;
        proteins?: number;
    };
    portions: number;
    steps: Step[];
    time: number;
    title: string;
    views: number;
    garnish?: string;
    meat?: string;
};
