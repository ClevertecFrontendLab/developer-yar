import { useMemo } from 'react';

import { adaptSubcategoriesByCategoryFromApi } from '../adapters/adapt-subcategories-by-category-from-api';
import { useGetSubcategoriesByCategoryQuery } from '../model/api';

export const useSubcategoriesByCategory = (id?: string) => {
    const skip = !id;

    const { data, ...rest } = useGetSubcategoriesByCategoryQuery(id ?? '', { skip });
    const subcategories = useMemo(
        () => (data ? adaptSubcategoriesByCategoryFromApi(data) : []),
        [data],
    );
    return { data: subcategories, ...rest };
};
