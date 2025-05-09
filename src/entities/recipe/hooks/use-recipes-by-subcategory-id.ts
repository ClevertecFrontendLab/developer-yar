import { useMemo } from 'react';

import { useCategoryList } from '~/entities/navigation/@x/recipe';

import { mockRecipeAuthor } from '../consts/mock-recipe-author';
import { adaptApiRecipes } from '../lib/adapt-api-recipes';
import { useGetRecipesBySubcategoryIdQuery } from '../model/api';
import { GetRecipesBySubcategoryIdQueryParams } from '../model/types';

export function useRecipesBySubcategoryId(
    id?: string,
    rawParams: GetRecipesBySubcategoryIdQueryParams = {},
) {
    const params = useMemo(() => rawParams, [rawParams]);

    const skip = !id;

    const {
        data: apiRecipes,
        isLoading: isApiRecipesLoading,
        isError: isApiRecipesError,
        isFetching: isApiRecipesFetching,
        isSuccess: isApiRecipesSuccess,
    } = useGetRecipesBySubcategoryIdQuery({ id: id ?? '', params }, { skip });

    const {
        data: apiCategories,
        isLoading: isApiCategoriesLoading,
        isError: isApiCategoriesError,
        isFetching: isApiCategoriesFetching,
        isSuccess: isApiCategoriesSuccess,
    } = useCategoryList(skip);

    const isLoading = isApiRecipesLoading || isApiCategoriesLoading;
    const isError = isApiRecipesError || isApiCategoriesError;
    const isFetching = isApiRecipesFetching || isApiCategoriesFetching;
    const isSuccess = isApiRecipesSuccess && isApiCategoriesSuccess;

    const { data, meta } = useMemo(() => {
        if (!apiRecipes || !apiCategories) return { data: null, meta: null };
        return adaptApiRecipes(apiRecipes, mockRecipeAuthor, apiCategories);
    }, [apiRecipes, apiCategories]);

    return { data, isError, isFetching, isLoading, isSuccess, meta };
}
