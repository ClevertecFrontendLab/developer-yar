import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';
import { buildAbsoluteUrl, queryWithParams } from '~/shared/lib';

import { RecipeDto } from '../dto/recipe.dto';
import { RecipeFormDto } from '../dto/recipe-form.dto';
import { RecipeItemDto } from '../dto/recipe-item.dto';
import { RecipesByUserDto } from '../dto/recipes-by-user.dto';
import { mapUploadedFileFromDto } from '../mappers/map-uploaded-file-from-dto';
import {
    EditRecipeArgs,
    GetAllRecipesQueryParams,
    GetRecipesBySubcategoryIdArgs,
    UploadedFile,
} from './types';

export const recipesApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        bookmarkRecipe: builder.mutation<void, string>({
            invalidatesTags: (_result, _error, id) => [{ id, type: 'Recipe' }, 'RecipesList'],
            query: (id) => ({
                method: 'POST',
                url: buildAbsoluteUrl(ENDPOINTS.RECIPES, id, ENDPOINTS.BOOKMARK_RECIPE),
            }),
        }),

        deleteRecipe: builder.mutation<void, string>({
            invalidatesTags: ['RecipesList'],
            query: (id) => ({
                method: 'DELETE',
                url: buildAbsoluteUrl(ENDPOINTS.DELETE_RECIPE, id),
            }),
        }),

        draftRecipe: builder.mutation<void, RecipeFormDto>({
            query: (data) => ({
                body: data,
                method: 'POST',
                url: ENDPOINTS.DRAFT_RECIPE,
            }),
        }),

        editRecipe: builder.mutation<RecipeItemDto, EditRecipeArgs>({
            invalidatesTags: (_result, _error, { id }) => [{ id, type: 'Recipe' }, 'RecipesList'],
            query: ({ id, data }) => ({
                body: data,
                method: 'PATCH',
                url: buildAbsoluteUrl(ENDPOINTS.EDIT_RECIPE, id),
            }),
        }),

        getAllRecipes: builder.query<RecipeDto, GetAllRecipesQueryParams>({
            providesTags: ['RecipesList'],
            query: (params: GetAllRecipesQueryParams) =>
                queryWithParams({ params, url: ENDPOINTS.RECIPES }),
        }),

        getRecipeById: builder.query<RecipeItemDto, string>({
            providesTags: (_result, _error, id) => [{ id, type: 'Recipe' }],
            query: (id: string) => buildAbsoluteUrl(ENDPOINTS.RECIPES, id),
        }),

        getRecipesBySubcategoryId: builder.query<RecipeDto, GetRecipesBySubcategoryIdArgs>({
            providesTags: ['RecipesList'],
            query: ({ id, params }: GetRecipesBySubcategoryIdArgs) =>
                queryWithParams({
                    params,
                    url: buildAbsoluteUrl(ENDPOINTS.RECIPES_BY_SUBCATEGORY, id),
                }),
        }),

        getRecipesByUserId: builder.query<RecipesByUserDto, string>({
            providesTags: ['RecipesList'],
            query: (id: string) => buildAbsoluteUrl(ENDPOINTS.RECIPES_BY_USER, id),
        }),

        likeRecipe: builder.mutation<void, string>({
            invalidatesTags: (_result, _error, id) => [{ id, type: 'Recipe' }, 'RecipesList'],
            query: (id) => ({
                method: 'POST',
                url: buildAbsoluteUrl('recipe', id, ENDPOINTS.LIKE_RECIPE),
            }),
        }),

        publishRecipe: builder.mutation<RecipeItemDto, RecipeFormDto>({
            invalidatesTags: ['RecipesList'],
            query: (data) => ({
                body: data,
                method: 'POST',
                url: ENDPOINTS.PUBLISH_RECIPE,
            }),
        }),

        uploadImage: builder.mutation<UploadedFile, File>({
            query: (file) => {
                const formData = new FormData();
                formData.append('file', file);

                return {
                    body: formData,
                    method: 'POST',
                    url: ENDPOINTS.UPLOAD_FILE,
                };
            },
            transformResponse: mapUploadedFileFromDto,
        }),
    }),
    reducerPath: 'recipesApi',

    tagTypes: ['RecipesList', 'Recipe'],
});

export const {
    endpoints: { getAllRecipes, getRecipeById, getRecipesBySubcategoryId },
    useGetAllRecipesQuery,
    useGetRecipeByIdQuery,
    useGetRecipesBySubcategoryIdQuery,
    useGetRecipesByUserIdQuery,
    useUploadImageMutation,
    usePublishRecipeMutation,
    useDraftRecipeMutation,
    useEditRecipeMutation,
    useDeleteRecipeMutation,
    useBookmarkRecipeMutation,
    useLikeRecipeMutation,
} = recipesApi;
