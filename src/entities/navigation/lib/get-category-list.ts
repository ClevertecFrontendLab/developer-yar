import { store } from '~/app/providers/redux';

import { getCategoryList } from '../model/api';
import { adaptApiCategoryList } from './adapt-api-category-list';

export const getCategoryListQuery = async () => {
    const categoriesResult = await store.dispatch(
        getCategoryList.initiate(undefined, { subscribe: false }),
    );

    const categories = categoriesResult.data;

    if (!categories) throw new Error('Failed to load categories');

    return adaptApiCategoryList(categories);
};
