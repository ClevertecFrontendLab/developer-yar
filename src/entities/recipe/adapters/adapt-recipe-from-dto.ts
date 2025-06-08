import { Category } from '~/entities/navigation/@x/recipe';
import { buildRelativeUrl } from '~/shared/lib';

import { RecipeItemDto } from '../dto/recipe-item.dto';
import { buildRecipeUrl } from '../lib/build-recipe-url';
import { getCategories } from '../lib/get-categories';
import { getSubcategories } from '../lib/get-subcategories';
import { RecipeItem } from '../model/types';

export const adaptRecipeFromDto = (recipe: RecipeItemDto, categories: Category[]): RecipeItem => ({
    authorId: recipe.authorId,
    bookmarks: recipe.bookmarks,
    categories: getCategories(recipe, categories),
    date: recipe.createdAt,
    description: recipe.description,
    garnish: recipe?.garnish,
    id: recipe._id,
    image: buildRelativeUrl(import.meta.env.VITE_IMAGES_API_URL, recipe.image),
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
