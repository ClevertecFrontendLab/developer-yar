import { CategoryApi } from '../api/category.api';
import { Subcategory } from '../model/types';
import { adaptSubcategoriesFromApi } from './adapt-subcategories-from-api';

export const adaptSubcategoriesByCategoryFromApi = (api: CategoryApi): Subcategory[] =>
    adaptSubcategoriesFromApi(api.category, api.subCategories);
