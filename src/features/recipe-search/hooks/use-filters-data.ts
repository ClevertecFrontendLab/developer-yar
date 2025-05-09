import { useEffect } from 'react';

import { useCategoryList } from '~/entities/navigation';
import { useRecipes } from '~/entities/recipe';
import { useAppDispatch } from '~/shared/model';

import { setCategoriesFromQuery, setRecipesFromQuery } from '../model/slice';

export const useFiltersData = () => {
    const { data: categories, isSuccess: isCategoriesSuccess } = useCategoryList();
    const { data: recipes, isSuccess: isRecipesSuccess } = useRecipes();

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
};
