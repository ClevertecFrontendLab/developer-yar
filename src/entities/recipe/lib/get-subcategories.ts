import { Category, Subcategory } from '~/entities/navigation/@x/recipe';

import { RecipeItemApi } from '../api/recipe-item.api';

export const getSubcategories = (recipe: RecipeItemApi, categories: Category[]): Subcategory[] =>
    categories
        .flatMap((c) => c.submenu ?? [])
        .reduce<Subcategory[]>((accumulator, subcategory) => {
            if (recipe.categoriesIds.includes(subcategory.id)) accumulator.push(subcategory);
            return accumulator;
        }, []);
