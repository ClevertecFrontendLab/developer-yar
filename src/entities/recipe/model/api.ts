import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';
import { queryWithParams } from '~/shared/lib';

import { RecipeDto } from '../dto/recipe.dto';
import { RecipeItemDto } from '../dto/recipe-item.dto';
import { GetAllRecipesQueryParams, GetRecipesBySubcategoryIdArgs } from './types';

export const recipesApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        getAllRecipes: builder.query<RecipeDto, GetAllRecipesQueryParams>({
            query: (params: GetAllRecipesQueryParams) =>
                queryWithParams({ params, url: ENDPOINTS.RECIPES }),
        }),
        getRecipeById: builder.query<RecipeItemDto, string>({
            query: (id: string) => `${ENDPOINTS.RECIPES}/${id}`,
        }),
        getRecipesBySubcategoryId: builder.query<RecipeDto, GetRecipesBySubcategoryIdArgs>({
            query: ({ id, params }: GetRecipesBySubcategoryIdArgs) =>
                queryWithParams({ params, url: `${ENDPOINTS.RECIPES_BY_SUBCATEGORY}/${id}` }),
        }),
    }),
    reducerPath: 'recipesApi',
});

export const {
    endpoints: { getAllRecipes, getRecipeById, getRecipesBySubcategoryId },
    useGetAllRecipesQuery,
    useGetRecipeByIdQuery,
    useGetRecipesBySubcategoryIdQuery,
} = recipesApi;
