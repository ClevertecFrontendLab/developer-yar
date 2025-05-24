import { useMemo } from 'react';

import { useCategoryList } from '~/entities/navigation/@x/recipe';

import { adaptRecipesFromDto } from '../adapters/adapt-recipes-from-dto';
import { mockRecipeAuthor } from '../consts/mock-recipe-author';
import { useGetRecipesBySubcategoryIdQuery } from '../model/api';
import { GetRecipesBySubcategoryIdQueryParams } from '../model/types';

const DEFAULT_PARAMS = {};

export function useRecipesBySubcategoryId(
    id?: string,
    rawParams: GetRecipesBySubcategoryIdQueryParams = DEFAULT_PARAMS,
) {
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

    const { data, meta } = useMemo(() => {
        if (!apiRecipes?.data || !apiCategories) return { data: [], meta: {} };
        return adaptRecipesFromDto(apiRecipes, mockRecipeAuthor, apiCategories);
    }, [apiRecipes, apiCategories]);

    return { data, isError, isFetching, isLoading, isSuccess, meta };
}
