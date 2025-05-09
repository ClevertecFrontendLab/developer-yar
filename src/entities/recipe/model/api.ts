import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { queryWithParams } from '~/shared/lib';

import {
    ApiRecipe,
    ApiRecipeItem,
    GetAllRecipesQueryParams,
    GetRecipesBySubcategoryIdArgs,
} from './types';

export const recipesApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_DATA_API_URL }),
    endpoints: (builder) => ({
        getAllRecipes: builder.query<ApiRecipe, GetAllRecipesQueryParams>({
            query: (params: GetAllRecipesQueryParams) =>
                queryWithParams({ params, url: '/recipe' }),
        }),
        getRecipeById: builder.query<ApiRecipeItem, string>({
            query: (id: string) => `/recipe/${id}`,
        }),
        getRecipesBySubcategoryId: builder.query<ApiRecipe, GetRecipesBySubcategoryIdArgs>({
            query: ({ id, params }: GetRecipesBySubcategoryIdArgs) =>
                queryWithParams({ params, url: `/recipe/category/${id}` }),
        }),
    }),
    reducerPath: 'recipesApi',
});

export const {
    useGetAllRecipesQuery,
    useGetRecipesBySubcategoryIdQuery,
    useGetRecipeByIdQuery,
    endpoints: { getAllRecipes, getRecipesBySubcategoryId, getRecipeById },
} = recipesApi;
