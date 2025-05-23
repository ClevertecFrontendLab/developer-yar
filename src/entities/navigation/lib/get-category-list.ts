import { store } from '~/app/providers/redux';

import { adaptCategoryListFromDto } from '../adapters/adapt-category-list-from-dto';
import { getCategoryList } from '../model/api';

export const getCategoryListQuery = async () => {
    const categoriesResult = await store.dispatch(
        getCategoryList.initiate(undefined, { subscribe: false }),
    );

    const categories = categoriesResult.data;

    if (!categories) throw new Error('Failed to load categories');

    return adaptCategoryListFromDto(categories);
};
