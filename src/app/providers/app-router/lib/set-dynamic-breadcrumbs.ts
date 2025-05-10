import {
    Breadcrumb,
    Category,
    getCategoryListQuery,
    getSubcategoriesByCategoryQuery,
    Subcategory,
} from '~/entities/navigation';
import { getRecipeByIdQuery } from '~/entities/recipe';
import { buildUrl } from '~/shared/lib';

import { Params } from '../model/types';
import { assertParamsExist } from './asserts-params-exist';

async function fetchNavigationData(
    categoryUrl: string,
): Promise<{ categories: Category[]; subcategories: Subcategory[] }> {
    const categories = await getCategoryListQuery();

    const category = findCategory(categories, categoryUrl);

    const subcategories = await getSubcategoriesByCategoryQuery(category.id);

    return { categories, subcategories };
}

function findCategory(categories: Category[], categorySlug: string): Category {
    const category = categories.find(({ slug }) => slug === categorySlug);
    if (!category) throw new Error('Category not found');

    return category;
}

function findSubcategory(subcategories: Subcategory[], subcategorySlug: string): Subcategory {
    const subcategory = subcategories.find(({ slug }) => slug === subcategorySlug);
    if (!subcategory) throw new Error('Subcategory not found');

    return subcategory;
}

function buildBreadcrumbs(
    category: Category,
    subcategory: Subcategory,
): Record<'title' | 'url', string>[] {
    return [
        { title: category.title, url: category.url },
        { title: subcategory.title, url: subcategory.url },
    ];
}

export const setCategoryAndSubcategory = async (params: Params): Promise<Breadcrumb[]> => {
    assertParamsExist(params, ['category', 'subcategory']);
    const { category: categorySlug, subcategory: subcategorySlug } = params;

    const { categories, subcategories } = await fetchNavigationData(categorySlug);

    const category = findCategory(categories, categorySlug);
    const subcategory = findSubcategory(subcategories, subcategorySlug);

    const breadcrumbs = buildBreadcrumbs(category, subcategory);

    return breadcrumbs;
};

export const setRecipe = async (params: Params) => {
    assertParamsExist(params, ['category', 'subcategory']);

    assertParamsExist(params, ['id']);
    const id = params.id;

    const recipe = await getRecipeByIdQuery(id);

    if (!recipe) throw new Error('Recipe not found');

    const categoryAndSubcategoryBreadcumbs = await setCategoryAndSubcategory(params);

    const breadcrumbs = categoryAndSubcategoryBreadcumbs.concat({
        title: recipe.title,
        url: buildUrl([params.category, params.subcategory, params.id], true),
    });

    return breadcrumbs;
};
