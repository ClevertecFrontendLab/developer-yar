import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { mockRecipes } from '../consts/mock-recipes';
import { Recipe } from './types';

export const recipeApi = createApi({
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllRecipes: builder.query<Recipe[], void>({
            queryFn: async () => ({ data: mockRecipes }),
        }),
        getRecipeById: builder.query<Recipe, string>({
            queryFn: async (id: string) => {
                const recipe = mockRecipes.find((recipe: Recipe) => recipe.id === id);
                if (!recipe) {
                    return { error: { status: 404, statusText: 'Recipe not found' } };
                }
                return { data: recipe };
            },
        }),
    }),
    reducerPath: 'recipeApi',
});

export const {
    useGetAllRecipesQuery,
    useGetRecipeByIdQuery,
    endpoints: { getRecipeById },
} = recipeApi;
