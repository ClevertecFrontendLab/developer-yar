import { SubcategoryApi } from './subcategory.api';

export type CategoryApi = {
    _id: string;
    category: string;
    description: string;
    icon: string;
    subCategories: SubcategoryApi[];
    title: string;
};
