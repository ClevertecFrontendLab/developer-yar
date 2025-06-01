import { buildRelativeUrl } from '~/shared/lib';

import { CategoryDto } from '../dto/category.dto';
import { Category } from '../model/types';
import { adaptSubcategoriesFromDto } from './adapt-subcategories-from-dto';

export const adaptCategoryListFromDto = (api: CategoryDto[]): Category[] =>
    api
        .filter((data) => data.subCategories)
        .map(({ _id, category, description, icon, subCategories, title }) => ({
            description,
            icon: buildRelativeUrl(import.meta.env.VITE_IMAGES_API_URL, icon),
            id: _id,
            slug: category,
            submenu: adaptSubcategoriesFromDto(category, subCategories),
            title,
            url: buildRelativeUrl(category, subCategories[0].category),
        }));
