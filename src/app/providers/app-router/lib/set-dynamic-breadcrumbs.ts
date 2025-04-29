import {
    getNavigationMenu,
    getNavigationSubmenu,
    Menu,
    setBreadcrumbs,
} from '~/entities/navigation';
import { Breadcrumb, Submenu } from '~/entities/navigation/model/types';
import { getRecipeById } from '~/entities/recipe';
import { isEqualUrl, urlStartsWith } from '~/shared/lib';

import { store } from '../../redux';
import { Params } from '../model/types';
import { assertParamsExist } from './asserts-params-exist';

async function fetchNavigationData(
    categoryUrl: string,
): Promise<{ categories: Menu[]; subcategories: Submenu[] }> {
    const [menuResult, submenuResult] = await Promise.all([
        store.dispatch(getNavigationMenu.initiate()),
        store.dispatch(getNavigationSubmenu.initiate(categoryUrl)),
    ]);

    const categories = menuResult.data;
    const subcategories = submenuResult.data;

    if (!categories || !subcategories) {
        throw new Response('Failed to load categories or subcategories', { status: 503 });
    }

    return { categories, subcategories };
}

function findCategory(categories: Menu[], categoryUrl: string): Menu {
    const category = categories.find((cat) => urlStartsWith(cat.url, categoryUrl));
    if (!category) {
        throw new Response('Category not found', { status: 404 });
    }
    return category;
}

function findSubcategory(
    subcategories: Submenu[],
    categoryUrl: string,
    subcategoryUrl: string,
): Submenu {
    const fullUrl = `${categoryUrl}/${subcategoryUrl}`;
    const subcategory = subcategories.find((sub) => isEqualUrl(sub.url, fullUrl));
    if (!subcategory) {
        throw new Response('Subcategory not found', { status: 404 });
    }
    return subcategory;
}

function buildBreadcrumbs(category: Menu, subcategory: Submenu): Record<'title' | 'url', string>[] {
    return [
        { title: category.title, url: category.url },
        { title: subcategory.title, url: subcategory.url },
    ];
}

export const setCategoryAndSubcategory = async (params: Params): Promise<Breadcrumb[]> => {
    assertParamsExist(params, ['category', 'subcategory']);
    const { category: categoryUrl, subcategory: subcategoryUrl } = params;

    const { categories, subcategories } = await fetchNavigationData(categoryUrl);

    const category = findCategory(categories, categoryUrl);
    const subcategory = findSubcategory(subcategories, categoryUrl, subcategoryUrl);

    const breadcrumbs = buildBreadcrumbs(category, subcategory);
    store.dispatch(setBreadcrumbs(breadcrumbs));

    return breadcrumbs;
};

export const setRecipe = async (params: Params) => {
    assertParamsExist(params, ['category', 'subcategory']);

    assertParamsExist(params, ['id']);
    const id = params.id;

    const recipeQuery = await store.dispatch(getRecipeById.initiate(id));
    const recipe = recipeQuery.data;

    if (!recipe) throw new Response('Recipe not found', { status: 404 });

    const categoryAndSubcategoryBreadcumbs = await setCategoryAndSubcategory(params);

    const breadcrumbs = categoryAndSubcategoryBreadcumbs.concat({
        title: recipe.title,
        url: `/${params.category}/${params.subcategory}/${params.id}`,
    });

    store.dispatch(setBreadcrumbs(breadcrumbs));
};
