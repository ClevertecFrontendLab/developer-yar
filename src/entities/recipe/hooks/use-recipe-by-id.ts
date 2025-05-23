import { useMemo } from 'react';

import { useCategoryList } from '~/entities/navigation/@x/recipe';

import { adaptRecipeFromDto } from '../adapters/adapt-recipe-from-dto';
import { mockRecipeAuthor } from '../consts/mock-recipe-author';
import { useGetRecipeByIdQuery } from '../model/api';

export const useRecipeById = (id?: string) => {
    const skip = !id;

    const {
        data: apiRecipe,
        isError: isApiRecipesError,
        isFetching: isApiRecipesFetching,
        isLoading: isApiRecipesLoading,
        isSuccess: isApiRecipesSuccess,
    } = useGetRecipeByIdQuery(id ?? '', { skip });

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

    const data = useMemo(() => {
        if (!apiRecipe || !apiCategories) return null;
        return adaptRecipeFromDto(apiRecipe, mockRecipeAuthor, apiCategories);
    }, [apiRecipe, apiCategories]);

    return { data, isError, isFetching, isLoading, isSuccess };
};
