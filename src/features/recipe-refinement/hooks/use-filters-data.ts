import { useEffect } from 'react';

import { useGetAllBloggersQuery } from '~/entities/blogger';
import { useCategoryList } from '~/entities/navigation';
import { useRecipes } from '~/entities/recipe';
import { getCurrentUserId } from '~/shared/lib';
import { useAppDispatch } from '~/shared/model';

import { setAuthorsFromQuery, setCategoriesFromQuery, setRecipesFromQuery } from '../model/slice';

export const useFiltersData = () => {
    const currentUserId = getCurrentUserId();

    const { data: categories, isSuccess: isCategoriesSuccess } = useCategoryList();
    const { data: recipes, isSuccess: isRecipesSuccess } = useRecipes();
    const { data: authors, isSuccess: isAuthorsSuccess } = useGetAllBloggersQuery({
        currentUserId,
        limit: 'all',
    });

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isCategoriesSuccess && categories) {
            dispatch(setCategoriesFromQuery(categories));
        }
    }, [dispatch, isCategoriesSuccess, categories]);

    useEffect(() => {
        if (isRecipesSuccess && recipes) {
            dispatch(setRecipesFromQuery(recipes));
        }
    }, [dispatch, isRecipesSuccess, recipes]);

    useEffect(() => {
        if (isAuthorsSuccess && authors) {
            dispatch(setAuthorsFromQuery(authors));
        }
    }, [dispatch, isAuthorsSuccess, authors]);
};
