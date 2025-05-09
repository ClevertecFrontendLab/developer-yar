import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category } from '~/entities/navigation';
import { RecipeItem } from '~/entities/recipe';

import { Allergen } from '../model/types';
import { initialState } from './init';

const slice = createSlice({
    initialState,
    name: 'recipeSearch',
    reducers: {
        addAllergen(state, action: PayloadAction<Allergen>) {
            state.allergens.push(action.payload);
        },
        removeAllergen(state, action: PayloadAction<number>) {
            state.allergens = state.allergens.filter((allergen) => allergen.id !== action.payload);
        },
        resetAllFilters(state) {
            state.selected.categories = [];
            state.selected.authors = [];
            state.selected.garnishTypes = [];
            state.selected.meatTypes = [];
            state.allergens = initialState.allergens;
            state.filteringAllergens = false;
            state.isRecipeQueryActive = false;
        },
        setCategoriesFromQuery(state, action: PayloadAction<Category[]>) {
            state.filterData.categories = action.payload;
        },
        setFetching(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload;
        },
        setRecipeQueryActive(state) {
            state.isRecipeQueryActive = true;
        },
        setRecipesFromQuery(state, action: PayloadAction<RecipeItem[]>) {
            state.filterData.recipes = action.payload;
        },
        setSearchQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
            if (state.isRecipeQueryActive) state.isRecipeQueryActive = false;
        },
        toggleAllergen(state, action: PayloadAction<number>) {
            const allergen = state.allergens.find((allergen) => allergen.id === action.payload);
            if (allergen) allergen.selected = !allergen.selected;
        },
        toggleAllergenFilter(state) {
            state.filteringAllergens = !state.filteringAllergens;
        },
        toggleAuthorSelected(state, action: PayloadAction<string>) {
            const id = action.payload;
            const set = new Set(state.selected.authors);
            if (set.has(id)) set.delete(id);
            else set.add(id);
            state.selected.authors = Array.from(set);
        },
        toggleCategorySelected(state, action: PayloadAction<string>) {
            const id = action.payload;
            const set = new Set(state.selected.categories);
            if (set.has(id)) set.delete(id);
            else set.add(id);
            state.selected.categories = Array.from(set);
        },
        toggleGarnishTypeSelected(state, action: PayloadAction<string>) {
            const id = action.payload;
            const set = new Set(state.selected.garnishTypes);
            if (set.has(id)) set.delete(id);
            else set.add(id);
            state.selected.garnishTypes = Array.from(set);
        },
        toggleMeatTypeSelected(state, action: PayloadAction<string>) {
            const id = action.payload;
            const set = new Set(state.selected.meatTypes);
            if (set.has(id)) set.delete(id);
            else set.add(id);
            state.selected.meatTypes = Array.from(set);
        },
    },
});

export const {
    addAllergen,
    removeAllergen,
    toggleAllergen,
    toggleAllergenFilter,
    resetAllFilters,
    setCategoriesFromQuery,
    setRecipesFromQuery,
    toggleCategorySelected,
    toggleAuthorSelected,
    toggleMeatTypeSelected,
    toggleGarnishTypeSelected,
    setSearchQuery,
    setRecipeQueryActive,
    setFetching,
} = slice.actions;
export const recipeSearchReducer = slice.reducer;
