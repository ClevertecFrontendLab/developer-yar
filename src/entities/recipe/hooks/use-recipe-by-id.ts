import { useMemo } from 'react';

import { useCategoryList } from '~/entities/navigation/@x/recipe';

import { mockRecipeAuthor } from '../consts/mock-recipe-author';
import { adaptApiRecipe } from '../lib/adapt-api-recipes';
import { useGetRecipeByIdQuery } from '../model/api';

export const useRecipeById = (id?: string) => {
    const skip = !id;

    const {
        data: apiRecipe,
        isLoading: isApiRecipesLoading,
        isError: isApiRecipesError,
        isFetching: isApiRecipesFetching,
        isSuccess: isApiRecipesSuccess,
    } = useGetRecipeByIdQuery(id ?? '', { skip });

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

    const data = useMemo(() => {
        if (!apiRecipe || !apiCategories) return null;
        return adaptApiRecipe(apiRecipe, mockRecipeAuthor, apiCategories);
    }, [apiRecipe, apiCategories]);

    return { data, isError, isFetching, isLoading, isSuccess };
};
