import { Category, Subcategory } from '~/entities/navigation/@x/recipe';
import { User } from '~/entities/user/@x/recipe';
import { buildUrl } from '~/shared/lib';
import { ROUTES } from '~/shared/routes';

import { ApiRecipe, ApiRecipeItem, Recipe, RecipeItem } from '../model/types';

export const adaptApiRecipes = (
    recipes: ApiRecipe,
    author: User,
    categories: Category[],
): Recipe => {
    if (Cypress && Array.isArray(recipes.data[0])) {
        recipes = {
            data: recipes.data[0],
            meta: recipes.meta,
        };
    }
    return {
        data: recipes.data
            .map((recipe) => adaptApiRecipe(recipe, author, categories))
            .filter((recipe) => recipe.categories.length && recipe.subcategories.length),
        meta: recipes.meta,
    };
};

export const adaptApiRecipe = (
    recipe: ApiRecipeItem,
    author: User,
    categories: Category[],
): RecipeItem => ({
    author: author,
    bookmarks: recipe.bookmarks,
    categories: getCategories(recipe, categories),
    date: recipe.createdAt,
    description: recipe.description,
    garnish: recipe?.garnish,
    id: recipe._id,
    image: buildUrl([import.meta.env.VITE_IMAGES_API_URL, recipe.image]),
    ingredients: recipe.ingredients.map((ingredient) => ({
        ...ingredient,
        count: typeof ingredient.count === 'string' ? parseInt(ingredient.count) : ingredient.count,
    })),
    likes: recipe.likes,
    meat: recipe?.meat,
    nutritionValue: {
        calories: recipe.nutritionValue.calories,
        carbohydrates: recipe.nutritionValue.carbohydrates,
        fats: recipe.nutritionValue.fats,
        proteins: recipe.nutritionValue?.protein ?? recipe.nutritionValue?.proteins ?? 0,
    },
    portions: recipe.portions,
    steps: recipe.steps,
    subcategories: getSubcategories(recipe, categories),
    time: recipe.time,
    title: recipe.title,
    url: buildRecipeUrl(recipe._id, recipe.categoriesIds[0], categories),
    views: recipe.views,
});

const getCategories = (recipe: ApiRecipeItem, categories: Category[]): Category[] =>
    recipe.categoriesIds.reduce<Category[]>((accumulator, subcategoryId) => {
        const category = categories.find((category) =>
            category.submenu?.some((subcategory) => subcategory.id === subcategoryId),
        );
        if (category && !accumulator.includes(category)) accumulator.push(category);
        return accumulator;
    }, []);

const getSubcategories = (recipe: ApiRecipeItem, categories: Category[]): Subcategory[] =>
    categories
        .flatMap((c) => c.submenu ?? [])
        .reduce<Subcategory[]>((accumulator, subcategory) => {
            if (recipe.categoriesIds.includes(subcategory.id)) accumulator.push(subcategory);
            return accumulator;
        }, []);

const buildRecipeUrl = (recipeId: string, subcategoryId: string, categories: Category[]) => {
    const category = categories.find((category) =>
        category.submenu.some((subcategory) => subcategory.id === subcategoryId),
    );

    // if (!category) {
    //     console.warn('[buildRecipeUrl] Category not found for subcategoryId:', subcategoryId);
    // }

    const subcategory = category?.submenu.find((subcategory) => subcategory.id === subcategoryId);
    // if (!subcategory) {
    //     console.warn('[buildRecipeUrl] Subcategory not found in category:', category?.slug);
    // }

    if (!category || !subcategory) return ROUTES.NOT_FOUND;

    return buildUrl([category.slug, subcategory.slug, recipeId], true);
};
