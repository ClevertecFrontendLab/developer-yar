import { useMemo } from 'react';

import { useCategoryList } from '~/entities/navigation/@x/recipe';

import { adaptRecipesFromApi } from '../adapters/adapt-recipes-from-api';
import { useGetAllRecipesQuery } from '../model/api';
import { GetAllRecipesQueryParams } from '../model/types';

const DEFAULT_PARAMS = {};

export const useRecipes = (rawParams: GetAllRecipesQueryParams = DEFAULT_PARAMS) => {
    const params = useMemo(() => rawParams, [rawParams]);

    const {
        data: apiRecipes,
        isError: isApiRecipesError,
        isFetching: isApiRecipesFetching,
        isLoading: isApiRecipesLoading,
        isSuccess: isApiRecipesSuccess,
    } = useGetAllRecipesQuery(params);

    const {
        data: apiCategories,
        isError: isApiCategoriesError,
        isFetching: isApiCategoriesFetching,
        isLoading: isApiCategoriesLoading,
        isSuccess: isApiCategoriesSuccess,
    } = useCategoryList();

    const isLoading = isApiRecipesLoading || isApiCategoriesLoading;
    const isError = isApiRecipesError || isApiCategoriesError;
    const isFetching = isApiRecipesFetching || isApiCategoriesFetching;
    const isSuccess = isApiRecipesSuccess && isApiCategoriesSuccess;

    const { data, meta } = useMemo(() => {
        if (!apiRecipes?.data || !apiCategories)
            return { data: [], meta: { limit: 8, page: 1, total: 1, totalPages: 1 } };
        return adaptRecipesFromApi(apiRecipes, apiCategories);
    }, [apiRecipes, apiCategories]);

    return { data, isError, isFetching, isLoading, isSuccess, meta };
};
