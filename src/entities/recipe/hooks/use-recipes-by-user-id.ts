import { useMemo } from 'react';

import { useCategoryList } from '~/entities/navigation/@x/blogger';

import { useGetRecipesByUserIdQuery } from '../../recipe/model/api';
import { adaptRecipesByUserIdFromDto } from '../adapters/adapt-recipes-by-user-id-from-dto';

export function useRecipesByUserId(id: string) {
    const skip = !id;

    const {
        data: recipes,
        refetch: refetchRecipesByUserId,
        ...recipesState
    } = useGetRecipesByUserIdQuery(id, { skip });

    const { data: categories, ...categoriesState } = useCategoryList(!id);

    const isLoading = recipesState.isLoading || categoriesState.isLoading;
    const isError = recipesState.isError || categoriesState.isError;
    const isFetching = recipesState.isFetching || categoriesState.isFetching;
    const isSuccess = recipesState.isSuccess && categoriesState.isSuccess;

    const result = useMemo(() => {
        if (!recipes?.notes || !recipes?.recipes || !categories) {
            return { notes: [], recipes: [] };
        } else {
            return adaptRecipesByUserIdFromDto(recipes, categories);
        }
    }, [recipes, categories]);

    return { ...result, isError, isFetching, isLoading, isSuccess, refetchRecipesByUserId };
}
