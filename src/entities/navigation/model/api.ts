import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';

import { adaptCategoryList } from '../adapters/adapt-caregory-list';
import { adaptSubcategoriesByCategory } from '../adapters/adapt-subcategories-by-category';
import { CategoryDto } from '../dto/category.dto';

export const navigationApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        getCategoryList: build.query<CategoryDto[], void>({
            query: () => ENDPOINTS.CATEGORIES,
            transformResponse: adaptCategoryList,
        }),
        getSubcategoriesByCategory: build.query<CategoryDto, string>({
            query: (id) => `${ENDPOINTS.CATEGORIES}/${id}`,
            transformResponse: adaptSubcategoriesByCategory,
        }),
    }),
    reducerPath: 'navigationApi',
});

export const {
    endpoints: { getCategoryList, getSubcategoriesByCategory },
    useGetCategoryListQuery,
    useGetSubcategoriesByCategoryQuery,
} = navigationApi;
