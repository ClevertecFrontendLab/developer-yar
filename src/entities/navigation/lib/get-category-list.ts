import { store } from '~/app/providers/redux';

import { adaptCategoryListFromApi } from '../adapters/adapt-category-list-from-api';
import { getCategoryList } from '../model/api';

export const getCategoryListQuery = async () => {
    const categoriesResult = await store.dispatch(
        getCategoryList.initiate(undefined, { subscribe: false }),
    );

    const categories = categoriesResult.data;

    if (!categories) throw new Error('Failed to load categories');

    return adaptCategoryListFromApi(categories);
};
