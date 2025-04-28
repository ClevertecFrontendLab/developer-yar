import { User } from '~/entities/user/@x/recipe';
import { Category } from '~/shared/model';

export type NutritionValue = {
    calories: number;
    carbohydrates: number;
    fats: number;
    proteins: number;
};

export type Ingredient = {
    count: number;
    measureUnit: 'шт.' | 'по вкусу' | 'г' | 'листов' | 'мл' | 'зубчиков' | 'ч. л.';
    title: string;
};

export type Step = {
    description: string;
    image?: string;
    stepNumber: number;
};

export type Recipe = {
    author: User;
    bookmarks: number;
    category: Category[];
    date: string;
    description: string;
    id: string;
    image: string;
    ingredients: Ingredient[];
    likes: number;
    meat?: string;
    nutritionValue: NutritionValue;
    portions?: number;
    recommendedBy?: User;
    side?: string;
    steps: Step[];
    subcategory: string[];
    time: string;
    title: string;
};
