import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getSharedAllergenReducers } from '~/entities/allergen';
import { Menu } from '~/entities/navigation';
import { Recipe } from '~/entities/recipe';

import { initialState } from './init';

const slice = createSlice({
    initialState,
    name: 'filters',
    reducers: {
        findRecipes(state) {
            state.isFullFiltering = true;
        },
        resetAllFilters(state) {
            state.selected.categories = [];
            state.selected.authors = [];
            state.selected.garnishTypes = [];
            state.selected.meatTypes = [];
            state.isFullFiltering = false;
            state.filteringAllergens = false;
            state.allergens = initialState.allergens;
        },
        setCategoriesFromQuery(state, action: PayloadAction<Menu[]>) {
            state.filterData.categories = action.payload;
        },
        setRecipesFromQuery(state, action: PayloadAction<Recipe[]>) {
            state.filterData.recipes = action.payload;
        },
        toggleAuthorSelected(state, action: PayloadAction<string>) {
            const id = action.payload;
            const set = new Set(state.selected.authors);
            set.has(id) ? set.delete(id) : set.add(id);
            state.selected.authors = Array.from(set);
        },
        toggleCategorySelected(state, action: PayloadAction<string>) {
            const id = action.payload;
            const set = new Set(state.selected.categories);
            set.has(id) ? set.delete(id) : set.add(id);
            state.selected.categories = Array.from(set);
        },
        toggleGarnishTypeSelected(state, action: PayloadAction<string>) {
            const id = action.payload;
            const set = new Set(state.selected.garnishTypes);
            set.has(id) ? set.delete(id) : set.add(id);
            state.selected.garnishTypes = Array.from(set);
        },
        toggleMeatTypeSelected(state, action: PayloadAction<string>) {
            const id = action.payload;
            const set = new Set(state.selected.meatTypes);
            set.has(id) ? set.delete(id) : set.add(id);
            state.selected.meatTypes = Array.from(set);
        },

        ...getSharedAllergenReducers(),
    },
});

export const {
    toggleAllergen,
    addAllergen,
    toggleAllergenFilter,
    removeAllergen,
    setCategoriesFromQuery,
    setRecipesFromQuery,
    toggleCategorySelected,
    toggleAuthorSelected,
    toggleMeatTypeSelected,
    toggleGarnishTypeSelected,
    findRecipes,
    resetAllFilters,
} = slice.actions;
export const filtersReducer = slice.reducer;
