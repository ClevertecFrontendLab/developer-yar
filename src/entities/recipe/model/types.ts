import { Category, Subcategory } from '~/entities/navigation/@x/recipe';
import { User } from '~/entities/user/@x/recipe';

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
    author: User;
    bookmarks: number;
    categories: Category[];
    date: string;
    description: string;
    garnish?: string;
    id: string;
    image: string;
    ingredients: Ingredient[];
    likes: number;
    meat?: string;
    nutritionValue: NutritionValue;
    portions: number;
    recommendedBy?: User;
    steps: Step[];
    subcategories: Subcategory[];
    time: number;
    title: string;
    url: string;
    views: number;
};

export type RecipeMeta = {
    limit: number;
    page: number;
    total: number;
    totalPages: number;
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
    image?: string;
    stepNumber: number;
};

export type TagColor = 'yellow' | 'green';
