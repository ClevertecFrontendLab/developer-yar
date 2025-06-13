import { buildRelativeUrl } from '~/shared/lib';

import { CategoryApi } from '../api/category.api';
import { Category } from '../model/types';
import { adaptSubcategoriesFromApi } from './adapt-subcategories-from-api';

export const adaptCategoryListFromApi = (api: CategoryApi[]): Category[] =>
    api
        .filter((data) => data.subCategories)
        .map(({ _id, category, description, icon, subCategories, title }) => ({
            description,
            icon: buildRelativeUrl(import.meta.env.VITE_IMAGES_API_URL, icon),
            id: _id,
            slug: category,
            submenu: adaptSubcategoriesFromApi(category, subCategories),
            title,
            url: buildRelativeUrl(category, subCategories[0].category),
        }));
