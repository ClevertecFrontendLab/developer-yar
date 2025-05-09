import { useEffect, useMemo } from 'react';

import { useRecipes } from '~/entities/recipe';
import { REDIRECT_ERROR } from '~/shared/consts';
import { setError, useAppDispatch, useAppSelector } from '~/shared/model';

import {
    selectIsAnyFilterActive,
    selectIsRecipeQueryActive,
    selectSearchQuery,
} from '../model/selectors';
import { setFetching } from '../model/slice';
import { useSearchParams } from './use-search-params';

export const useFoundRecipes = (rawParams = {}) => {
    const dispatch = useAppDispatch();

    const searchQuery = useAppSelector(selectSearchQuery);
    const isAnyFilterActive = useAppSelector(selectIsAnyFilterActive);
    const isRecipeQueryActive = useAppSelector(selectIsRecipeQueryActive);

    const mode = useMemo<'search' | 'filter' | 'browse'>(() => {
        if (isRecipeQueryActive && searchQuery.trim()) return 'search';
        else if (isRecipeQueryActive && isAnyFilterActive) return 'filter';
        else return 'browse';
    }, [isRecipeQueryActive, searchQuery, isAnyFilterActive]);

    const liveParams = useSearchParams();
    const params = isRecipeQueryActive ? liveParams : rawParams;

    const {
        data: recipes,
        meta,
        isLoading: isRecipesLoading,
        isFetching: isRecipesFetching,
        isError: isRecipesError,
        isSuccess: isRecipesSuccess,
    } = useRecipes(params);

    useEffect(() => {
        if (mode === 'search' || mode === 'filter') {
            if (isRecipesError)
                dispatch(setError({ message: REDIRECT_ERROR.MESSAGE, type: 'server' }));
            dispatch(setFetching(isRecipesFetching ? true : false));
        }
    }, [mode, isRecipesError, isRecipesFetching, dispatch]);

    return useMemo(
        () => ({
            isRecipesError,
            isRecipesFetching,
            isRecipesLoading,
            isRecipesSuccess,
            meta,
            mode,
            recipes,
            searchQuery,
        }),
        [
            recipes,
            meta,
            mode,
            searchQuery,
            isRecipesLoading,
            isRecipesFetching,
            isRecipesError,
            isRecipesSuccess,
        ],
    );
};
