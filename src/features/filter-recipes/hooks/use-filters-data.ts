import { useEffect } from 'react';

import { useGetNavigationMenuQuery } from '~/entities/navigation';
import { useGetAllRecipesQuery } from '~/entities/recipe';
import { useAppDispatch } from '~/shared/model';

import { setCategoriesFromQuery, setRecipesFromQuery } from '../model/slice';

export const useFiltersData = () => {
    const { data: categories, isSuccess: isCategoriesSuccess } = useGetNavigationMenuQuery();
    const { data: recipes, isSuccess: isRecipesSuccess } = useGetAllRecipesQuery();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isCategoriesSuccess) {
            dispatch(setCategoriesFromQuery(categories));
        }
    }, [categories, dispatch, isCategoriesSuccess]);

    useEffect(() => {
        if (isRecipesSuccess) {
            dispatch(setRecipesFromQuery(recipes));
        }
    }, [dispatch, isRecipesSuccess, recipes]);
};
