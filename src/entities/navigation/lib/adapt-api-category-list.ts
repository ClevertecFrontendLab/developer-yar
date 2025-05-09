import { buildUrl } from '~/shared/lib';

import { ApiCategory, Category } from '../model/types';
import { adaptSubcategories } from './adapt-subcategories';

export const adaptApiCategoryList = (api: ApiCategory[]): Category[] =>
    api
        .filter((data) => data.subCategories)
        .map(({ _id, title, category, icon, description, subCategories }) => ({
            description,
            icon: buildUrl([import.meta.env.VITE_IMAGES_API_URL, icon]),
            id: _id,
            slug: category,
            submenu: adaptSubcategories(category, subCategories),
            title,
            url: buildUrl([category, subCategories[0].category]),
        }));
