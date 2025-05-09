import { ApiCategory, Subcategory } from '../model/types';
import { adaptSubcategories } from './adapt-subcategories';

export const adaptApiSubcategoriesByCategory = (api: ApiCategory): Subcategory[] =>
    adaptSubcategories(api.category, api.subCategories);
