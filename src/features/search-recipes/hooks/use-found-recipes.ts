import { useMemo } from 'react';

import type { Recipe } from '~/entities/recipe';
import { useAppSelector } from '~/shared/model';

import { searchRecipes } from '../lib/search-recipes';
import { selectIsSearching, selectSearchQuery } from '../model/selectors';

export const useFoundRecipes = (recipes: Recipe[]) => {
    const isSearching = useAppSelector(selectIsSearching);
    const searchQuery = useAppSelector(selectSearchQuery);

    const foundRecipes = useMemo(
        () => (isSearching ? searchRecipes(recipes, searchQuery) : recipes),
        [recipes, isSearching, searchQuery],
    );
    return { isSearching, recipes: foundRecipes, searchQuery };
};
