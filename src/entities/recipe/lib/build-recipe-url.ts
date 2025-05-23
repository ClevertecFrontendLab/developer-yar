import { Category } from '~/entities/navigation/@x/recipe';
import { buildUrl } from '~/shared/lib';
import { ROUTES } from '~/shared/routes';

export const buildRecipeUrl = (recipeId: string, subcategoryId: string, categories: Category[]) => {
    const category = categories.find((category) =>
        category.submenu.some((subcategory) => subcategory.id === subcategoryId),
    );

    const subcategory = category?.submenu.find((subcategory) => subcategory.id === subcategoryId);

    if (!category || !subcategory) return ROUTES.NOT_FOUND;

    return buildUrl([category.slug, subcategory.slug, recipeId], true);
};
