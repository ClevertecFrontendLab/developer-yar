import { SubcategoryDto } from './subcategory.dto';

export type CategoryDto = {
    _id: string;
    category: string;
    description: string;
    icon: string;
    subCategories: SubcategoryDto[];
    title: string;
};
