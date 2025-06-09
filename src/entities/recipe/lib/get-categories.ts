import { Category } from '~/entities/navigation/@x/recipe';

import { RecipeItemApi } from '../api/recipe-item.api';

export const getCategories = (recipe: RecipeItemApi, categories: Category[]): Category[] =>
    recipe.categoriesIds.reduce<Category[]>((accumulator, subcategoryId) => {
        const category = categories.find((category) =>
            category.submenu?.some((subcategory) => subcategory.id === subcategoryId),
        );
        if (category && !accumulator.includes(category)) accumulator.push(category);
        return accumulator;
    }, []);
