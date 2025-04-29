import { useMemo } from 'react';

import type { Recipe } from '~/entities/recipe';
import { excludeRecipesWithAllergens } from '~/entities/recipe';
import { useAppSelector } from '~/shared/model';

import { selectCheckedAllergens, selectIsFilteringAllergens } from '../model/selectors';

export const useRecipesWithoutAllergens = (recipes: Recipe[]) => {
    const isFilteringAllergens = useAppSelector(selectIsFilteringAllergens);
    const selectedAllergens = useAppSelector(selectCheckedAllergens);

    const filteredRecipes = useMemo(
        () =>
            isFilteringAllergens
                ? excludeRecipesWithAllergens(recipes, selectedAllergens)
                : recipes,
        [recipes, isFilteringAllergens, selectedAllergens],
    );
    return { isFilteringAllergens, recipes: filteredRecipes };
};
