import { useMemo } from 'react';

import { adaptCategoryListFromDto } from '../adapters/adapt-category-list-from-dto';
import { useGetCategoryListQuery } from '../model/api';

export const useCategoryList = (skip: boolean = false) => {
    const { data, ...rest } = useGetCategoryListQuery(undefined, { skip });
    const categories = useMemo(() => (data ? adaptCategoryListFromDto(data) : []), [data]);
    return { data: categories, ...rest };
};
