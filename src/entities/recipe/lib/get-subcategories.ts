import { Category, Subcategory } from '~/entities/navigation/@x/recipe';

import { RecipeItemDto } from '../dto/recipe-item.dto';

export const getSubcategories = (recipe: RecipeItemDto, categories: Category[]): Subcategory[] =>
    categories
        .flatMap((c) => c.submenu ?? [])
        .reduce<Subcategory[]>((accumulator, subcategory) => {
            if (recipe.categoriesIds.includes(subcategory.id)) accumulator.push(subcategory);
            return accumulator;
        }, []);
