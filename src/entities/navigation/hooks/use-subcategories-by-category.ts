import { useMemo } from 'react';

import { adaptSubcategoriesByCategoryFromDto } from '../adapters/adapt-subcategories-by-category-from-dto';
import { useGetSubcategoriesByCategoryQuery } from '../model/api';

export const useSubcategoriesByCategory = (id?: string) => {
    const skip = !id;

    const { data, ...rest } = useGetSubcategoriesByCategoryQuery(id ?? '', { skip });
    const subcategories = useMemo(
        () => (data?.subCategories ? adaptSubcategoriesByCategoryFromDto(data) : {}),
        [data],
    );
    return { data: subcategories, ...rest };
};
