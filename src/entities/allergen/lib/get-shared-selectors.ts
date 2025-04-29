'@reduxjs/toolkit';

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/shared/model';

import { AllergenState } from '../model/init';

export const getSharedAllergenSelectors = (sliceSelector: (state: RootState) => AllergenState) => {
    const selectIsFilteringAllergens = (state: RootState) =>
        sliceSelector(state).filteringAllergens;

    const selectAllAllergens = (state: RootState) => sliceSelector(state).allergens;

    const selectCheckedAllergens = createSelector(selectAllAllergens, (allergens) =>
        allergens.filter((allergen) => allergen.selected),
    );

    return { selectAllAllergens, selectCheckedAllergens, selectIsFilteringAllergens };
};
