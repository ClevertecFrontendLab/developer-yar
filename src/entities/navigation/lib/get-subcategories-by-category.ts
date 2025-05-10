import { store } from '~/app/providers/redux';

import { getSubcategoriesByCategory } from '../model/api';
import { adaptApiSubcategoriesByCategory } from './adapt-api-subcategories-by-category';

export const getSubcategoriesByCategoryQuery = async (id: string) => {
    const subcategoriesResult = await store.dispatch(
        getSubcategoriesByCategory.initiate(id, { subscribe: false }),
    );

    const subcategories = subcategoriesResult.data;

    if (!subcategories) throw new Error('Failed to load subcategories');

    return adaptApiSubcategoriesByCategory(subcategories);
};
