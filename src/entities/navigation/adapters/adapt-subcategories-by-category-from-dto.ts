import { CategoryDto } from '../dto/category.dto';
import { Subcategory } from '../model/types';
import { adaptSubcategoriesFromDto } from './adapt-subcategories-from-dto';

export const adaptSubcategoriesByCategoryFromDto = (api: CategoryDto): Subcategory[] =>
    adaptSubcategoriesFromDto(api.category, api.subCategories);
