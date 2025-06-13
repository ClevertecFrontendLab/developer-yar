import { store } from '~/app/providers/redux';
import { hasItems } from '~/shared/lib';

import { adaptSubcategoriesByCategoryFromApi } from '../adapters/adapt-subcategories-by-category-from-api';
import { getSubcategoriesByCategory } from '../model/api';

export const getSubcategoriesByCategoryQuery = async (id: string) => {
    const subcategoriesResult = await store.dispatch(
        getSubcategoriesByCategory.initiate(id, { subscribe: false }),
    );

    const subcategories = subcategoriesResult.data;

    if (!subcategories || !hasItems(Object.keys(subcategories)))
        throw new Error('Failed to load subcategories');
    return adaptSubcategoriesByCategoryFromApi(subcategories);
};
