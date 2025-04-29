import { createSlice } from '@reduxjs/toolkit';

import { getSharedAllergenReducers } from '~/entities/allergen';

import { initialState } from './init';

const slice = createSlice({
    initialState,
    name: 'allergens',
    reducers: {
        ...getSharedAllergenReducers(),
    },
});

export const { toggleAllergenFilter, addAllergen, toggleAllergen, removeAllergen } = slice.actions;
export const allergensReducer = slice.reducer;
