import { useCategoryList } from '~/entities/navigation/@x/blogger';

import { useGetRecipesByUserIdQuery } from '../../recipe/model/api';
import { adaptRecipesByUserIdFromApi } from '../adapters/adapt-recipes-by-user-id-from-api';

export const useRecipesByUserId = (id: string) => {
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

    const result =
        !recipes?.notes || !recipes?.recipes || !categories
            ? { notes: [], recipes: [] }
            : adaptRecipesByUserIdFromApi(recipes, categories);

    return { ...result, isError, isFetching, isLoading, isSuccess, refetchRecipesByUserId };
};
