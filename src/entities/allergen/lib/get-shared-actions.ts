import { PayloadAction } from '@reduxjs/toolkit';

import { Allergen } from '../model/allergen';
import { AllergenState } from '../model/init';

export const getSharedAllergenReducers = <State extends AllergenState>() => ({
    addAllergen(state: State, action: PayloadAction<Allergen>) {
        state.allergens.push(action.payload);
    },
    removeAllergen(state: State, action: PayloadAction<number>) {
        state.allergens = state.allergens.filter((allergen) => allergen.id !== action.payload);
    },
    toggleAllergen(state: State, action: PayloadAction<number>) {
        const allergen = state.allergens.find((allergen) => allergen.id === action.payload);
        if (allergen) allergen.selected = !allergen.selected;
    },
    toggleAllergenFilter(state: State) {
        state.filteringAllergens = !state.filteringAllergens;
    },
});
