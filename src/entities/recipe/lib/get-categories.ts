import { Category } from '~/entities/navigation/@x/recipe';

import { RecipeItemDto } from '../dto/recipe-item.dto';

export const getCategories = (recipe: RecipeItemDto, categories: Category[]): Category[] =>
    recipe.categoriesIds.reduce<Category[]>((accumulator, subcategoryId) => {
        const category = categories.find((category) =>
            category.submenu?.some((subcategory) => subcategory.id === subcategoryId),
        );
        if (category && !accumulator.includes(category)) accumulator.push(category);
        return accumulator;
    }, []);
