import { useMemo } from 'react';

import { useCategoryList } from '~/entities/navigation/@x/recipe';

import { mockRecipeAuthor } from '../consts/mock-recipe-author';
import { adaptApiRecipes } from '../lib/adapt-api-recipes';
import { useGetAllRecipesQuery } from '../model/api';
import { GetAllRecipesQueryParams } from '../model/types';

export function useRecipes(rawParams: GetAllRecipesQueryParams = {}) {
    const params = useMemo(() => rawParams, [rawParams]);

    const {
        data: apiRecipes,
        isLoading: isApiRecipesLoading,
        isError: isApiRecipesError,
        isFetching: isApiRecipesFetching,
        isSuccess: isApiRecipesSuccess,
    } = useGetAllRecipesQuery(params);

    const {
        data: apiCategories,
        isLoading: isApiCategoriesLoading,
        isError: isApiCategoriesError,
        isFetching: isApiCategoriesFetching,
        isSuccess: isApiCategoriesSuccess,
    } = useCategoryList();

    const isLoading = isApiRecipesLoading || isApiCategoriesLoading;
    const isError = isApiRecipesError || isApiCategoriesError;
    const isFetching = isApiRecipesFetching || isApiCategoriesFetching;
    const isSuccess = isApiRecipesSuccess && isApiCategoriesSuccess;

    const { data, meta } = useMemo(() => {
        if (!apiRecipes || !apiCategories)
            return { data: [], meta: { limit: 8, page: 1, total: 1, totalPages: 1 } };
        return adaptApiRecipes(apiRecipes, mockRecipeAuthor, apiCategories);
    }, [apiRecipes, apiCategories]);

    return { data, isError, isFetching, isLoading, isSuccess, meta };
}
