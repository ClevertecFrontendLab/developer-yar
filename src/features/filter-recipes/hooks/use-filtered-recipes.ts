import { useMemo } from 'react';

import { Recipe } from '~/entities/recipe';
import { useAppSelector } from '~/shared/model';

import { filterRecipes } from '../lib/filter-recipes';
import {
    selectCheckedAllergens,
    selectCheckedAuthors,
    selectCheckedCategories,
    selectCheckedGarnishTypes,
    selectCheckedMeatTypes,
    selectIsFullFiltering,
} from '../model/selectors';

export const useFilteredRecipes = (recipes: Recipe[]) => {
    const selectedCategories = useAppSelector(selectCheckedCategories);
    const selectedAuthors = useAppSelector(selectCheckedAuthors);
    const selectedMeatTypes = useAppSelector(selectCheckedMeatTypes);
    const selectedGarnishTypes = useAppSelector(selectCheckedGarnishTypes);
    const selectedAllergens = useAppSelector(selectCheckedAllergens);
    const isFullFiltering = useAppSelector(selectIsFullFiltering);

    const filteredRecipes = useMemo(
        () =>
            isFullFiltering
                ? filterRecipes(recipes, {
                      selectedAllergens,
                      selectedAuthors,
                      selectedCategories,
                      selectedGarnishTypes,
                      selectedMeatTypes,
                  })
                : recipes,
        [
            recipes,
            selectedCategories,
            selectedAuthors,
            selectedMeatTypes,
            selectedGarnishTypes,
            selectedAllergens,
            isFullFiltering,
        ],
    );

    return { isFullFiltering, recipes: filteredRecipes };
};
