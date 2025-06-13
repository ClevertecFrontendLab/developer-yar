import { Note } from '~/entities/blogger/@x/recipe';
import { Category, Subcategory } from '~/entities/navigation/@x/recipe';
import { InferFormData } from '~/shared/model';

import { RecipeFormApi } from '../api/recipe-form.api';
import { baseSchema } from './schema';

export type UploadedFile = string;

export type RecipeFormData = InferFormData<typeof baseSchema>;
export type RecipeFormFiledName = keyof InferFormData<typeof baseSchema>;

export type EditRecipeArgs = {
    data: RecipeFormApi;
    id: string;
};

export type GetAllRecipesQueryParams = Partial<{
    allergens: string;
    garnish: string;
    limit: number;
    meat: string;
    page: number;
    searchString: string;
    sortBy: 'likes' | 'createdAt';
    sortOrder: 'ASC' | 'DESC';
    subcategoriesIds: string;
}>;

export type GetRecipesBySubcategoryIdArgs = {
    id: string;
    params: GetRecipesBySubcategoryIdQueryParams;
};

export type GetRecipesBySubcategoryIdQueryParams = Partial<{
    allergens: string;
    limit: number;
    page: number;
    searchString: string;
}>;

export type Recipe = {
    data: RecipeItem[];
    meta: RecipeMeta;
};

export type RecipeItem = {
    authorId: string;
    bookmarks: number;
    categories: Category[];
    date: string;
    description: string;
    id: string;
    image: string;
    ingredients: Ingredient[];
    likes: number;
    nutritionValue: NutritionValue;
    portions: number;
    steps: Step[];
    subcategories: Subcategory[];
    time: number;
    title: string;
    url: string;
    views: number;
    garnish?: string;
    meat?: string;
    recommendedBy?: unknown;
};

export type RecipeMeta = {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
};

export type RecipesByUser = {
    notes: Note[];
    recipes: RecipeItem[];
};

export type NutritionValue = {
    calories: number;
    carbohydrates: number;
    fats: number;
    proteins: number;
};

export type Ingredient = {
    count: number;
    measureUnit: string;
    title: string;
};

export type Step = {
    description: string;
    stepNumber: number;
    image?: string | null;
};

export type TagColor = 'yellow' | 'green';
