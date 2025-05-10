import { useMemo } from 'react';

import { adaptApiCategoryList } from '../lib/adapt-api-category-list';
import { useGetCategoryListQuery } from '../model/api';

export const useCategoryList = (skip: boolean = false) => {
    const { data, ...rest } = useGetCategoryListQuery(undefined, { skip });
    const categories = useMemo(() => (data ? adaptApiCategoryList(data) : []), [data]);
    return { data: categories, ...rest };
};
