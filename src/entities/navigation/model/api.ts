import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ApiCategory } from './types';

export const navigationApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_DATA_API_URL }),
    endpoints: (build) => ({
        getCategoryList: build.query<ApiCategory[], void>({
            query: () => `/category`,
        }),
        getSubcategoriesByCategory: build.query<ApiCategory, string>({
            query: (id) => `/category/${id}`,
        }),
    }),
    reducerPath: 'navigationApi',
});

export const {
    useGetCategoryListQuery,
    useGetSubcategoriesByCategoryQuery,
    endpoints: { getCategoryList, getSubcategoriesByCategory },
} = navigationApi;
