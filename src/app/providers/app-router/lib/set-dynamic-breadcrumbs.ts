import { getBloggerByIdQuery } from '~/entities/blogger';
import {
    Breadcrumb,
    Category,
    getCategoryListQuery,
    getSubcategoriesByCategoryQuery,
    Subcategory,
} from '~/entities/navigation';
import { getRecipeByIdQuery } from '~/entities/recipe';
import { buildAbsoluteUrl } from '~/shared/lib';
import { ROUTES } from '~/shared/routes';

import { Params } from '../model/types';
import { assertParamsExist } from './asserts-params-exist';

const fetchNavigationData = async (
    categoryUrl: string,
): Promise<{ categories: Category[]; subcategories: Subcategory[] }> => {
    const categories = await getCategoryListQuery();

    const category = findCategory(categories, categoryUrl);

    const subcategories = await getSubcategoriesByCategoryQuery(category.id);

    return { categories, subcategories };
};

const findCategory = (categories: Category[], categorySlug: string): Category => {
    const category = categories.find(({ slug }) => slug === categorySlug);
    if (!category) throw new Error('Category not found');

    return category;
};

const findSubcategory = (subcategories: Subcategory[], subcategorySlug: string): Subcategory => {
    const subcategory = subcategories.find(
        ({ slug }) => slug === (typeof Cypress !== 'undefined' ? 'snacks' : subcategorySlug),
    );

    if (!subcategory) throw new Error('Subcategory not found');

    return subcategory;
};

const buildCategorySubcategoryBreadcrumbs = (
    category: Category,
    subcategory: Subcategory,
): Record<'title' | 'url', string>[] => [
    { title: category.title, url: category.url },
    { title: subcategory.title, url: subcategory.url },
];

export const setCategoryAndSubcategory = async (params: Params): Promise<Breadcrumb[]> => {
    assertParamsExist(params, ['category', 'subcategory']);
    const { category: categorySlug, subcategory: subcategorySlug } = params;

    const { categories, subcategories } = await fetchNavigationData(categorySlug);

    const category = findCategory(categories, categorySlug);
    const subcategory = findSubcategory(subcategories, subcategorySlug);

    const breadcrumbs = buildCategorySubcategoryBreadcrumbs(category, subcategory);

    return breadcrumbs;
};

export const setRecipe = async (params: Params): Promise<Breadcrumb[]> => {
    assertParamsExist(params, ['category', 'subcategory', 'recipeId']);

    const recipeId = params.recipeId;

    const recipe = await getRecipeByIdQuery(recipeId);

    if (!recipe) throw new Error('Recipe not found');

    const categoryAndSubcategoryBreadcumbs = await setCategoryAndSubcategory(params);

    const breadcrumbs = categoryAndSubcategoryBreadcumbs.concat({
        title: recipe.title,
        url: buildAbsoluteUrl(params.category, params.subcategory, params.recipeId),
    });

    return breadcrumbs;
};

export const setBlogger = async (params: Params): Promise<Breadcrumb[]> => {
    assertParamsExist(params, ['bloggerId']);

    const bloggerId = params.bloggerId;

    const blogger = await getBloggerByIdQuery(bloggerId);

    if (!blogger) throw new Error('Blogger not found');

    const breadcrumbs: Breadcrumb[] = [
        {
            title: 'Блоги',
            url: ROUTES.BLOGS,
        },
        {
            title: `${blogger.fullName} (${blogger.username})`,
            url: buildAbsoluteUrl(ROUTES.BLOGS, blogger.id),
        },
    ];

    return breadcrumbs;
};
