import { useMemo } from 'react';

import { adaptApiSubcategoriesByCategory } from '../lib/adapt-api-subcategories-by-category';
import { useGetSubcategoriesByCategoryQuery } from '../model/api';

export const useSubcategoriesByCategory = (id?: string) => {
    const skip = !id;

    const { data, ...rest } = useGetSubcategoriesByCategoryQuery(id ?? '', { skip });
    const subcategories = useMemo(
        () => (data ? adaptApiSubcategoriesByCategory(data) : []),
        [data],
    );
    return { data: subcategories, ...rest };
};
