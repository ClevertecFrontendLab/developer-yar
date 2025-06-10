import { useMemo } from 'react';

import { adaptCategoryListFromApi } from '../adapters/adapt-category-list-from-api';
import { useGetCategoryListQuery } from '../model/api';

export const useCategoryList = (skip: boolean = false) => {
    const { data, ...rest } = useGetCategoryListQuery(undefined, { skip });
    const categories = useMemo(() => (data ? adaptCategoryListFromApi(data) : []), [data]);
    return { data: categories, ...rest };
};
