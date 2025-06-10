import { useMemo } from 'react';

import { useCategoryList } from '~/entities/navigation/@x/recipe';

import { adaptRecipesFromApi } from '../adapters/adapt-recipes-from-api';
import { useGetRecipesBySubcategoryIdQuery } from '../model/api';
import { GetRecipesBySubcategoryIdQueryParams } from '../model/types';

const DEFAULT_PARAMS = {};

export const useRecipesBySubcategoryId = (
    id?: string,
    rawParams: GetRecipesBySubcategoryIdQueryParams = DEFAULT_PARAMS,
) => {
    const skip = !id;

    const params = useMemo(() => rawParams, [rawParams]);

    const {
        data: apiRecipes,
        isError: isApiRecipesError,
        isFetching: isApiRecipesFetching,
        isLoading: isApiRecipesLoading,
        isSuccess: isApiRecipesSuccess,
    } = useGetRecipesBySubcategoryIdQuery({ id: id ?? '', params }, { skip });

    const {
        data: apiCategories,
        isError: isApiCategoriesError,
        isFetching: isApiCategoriesFetching,
        isLoading: isApiCategoriesLoading,
        isSuccess: isApiCategoriesSuccess,
    } = useCategoryList(skip);

    const isLoading = isApiRecipesLoading || isApiCategoriesLoading;
    const isError = isApiRecipesError || isApiCategoriesError;
    const isFetching = isApiRecipesFetching || isApiCategoriesFetching;
    const isSuccess = isApiRecipesSuccess && isApiCategoriesSuccess;

    const result =
        !apiRecipes?.data || !apiCategories
            ? { data: [], meta: {} }
            : adaptRecipesFromApi(apiRecipes, apiCategories);

    return { ...result, isError, isFetching, isLoading, isSuccess };
};
