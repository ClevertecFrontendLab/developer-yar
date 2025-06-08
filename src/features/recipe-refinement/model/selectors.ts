import { createSelector } from '@reduxjs/toolkit';

import { hasItems } from '~/shared/lib';
import { RootState } from '~/shared/model';

import { getGarnishTypes } from '../lib/get-garnish-types';
import { getMeatTypes } from '../lib/get-meat-types';

export const selectAllAllergens = (state: RootState) => state.recipeRefinement.allergens;

export const selectIsFilteringAllergens = (state: RootState) =>
    state.recipeRefinement.filteringAllergens;

export const selectCheckedAllergens = createSelector(selectAllAllergens, (allergens) =>
    allergens.filter((allergen) => allergen.selected),
);

export const selectRawAuthors = (state: RootState) => state.recipeRefinement.filterData.authors;

export const selectRawCategories = (state: RootState) =>
    state.recipeRefinement.filterData.categories;

export const selectCheckedCategories = (state: RootState) =>
    state.recipeRefinement.selected.categories;

export const selectAllCategories = createSelector(
    [selectRawCategories, selectCheckedCategories],
    (rawCategories, checkedCategories) =>
        rawCategories.map((category) => ({
            id: category.id,
            selected: checkedCategories.includes(category.id),
            slug: category.slug,
            submenu: category.submenu.map((subcategory) => subcategory.id),
            title: category.title,
        })),
);

export const selectRawRecipes = (state: RootState) => state.recipeRefinement.filterData.recipes;

export const selectCheckedAuthors = (state: RootState) => state.recipeRefinement.selected.authors;

export const selectAllAuthors = createSelector(
    [selectRawAuthors, selectCheckedAuthors],
    (rawAuthors, checkedAuthors) =>
        rawAuthors.map((author) => ({
            id: author.id,
            selected: checkedAuthors.includes(author.id),
            title: author.fullName,
        })),
);

export const selectCheckedMeatTypes = (state: RootState) =>
    state.recipeRefinement.selected.meatTypes;

export const selectAllMeatTypes = createSelector([selectCheckedMeatTypes], (checkedMeatTypes) =>
    getMeatTypes(checkedMeatTypes),
);

export const selectCheckedGarnishTypes = (state: RootState) =>
    state.recipeRefinement.selected.garnishTypes;

export const selectAllGarnishTypes = createSelector(
    [selectCheckedGarnishTypes],
    (checkedGarnishTypes) => getGarnishTypes(checkedGarnishTypes),
);

export const selectIsAnyFilterActive = createSelector(
    [
        selectCheckedCategories,
        selectCheckedAuthors,
        selectCheckedMeatTypes,
        selectCheckedGarnishTypes,
        selectCheckedAllergens,
    ],
    (
        selectedCategories,
        selectedAuthors,
        selectedMeatTypes,
        selectedGarnishTypes,
        selectedAllergens,
    ) =>
        hasItems(selectedCategories) ||
        hasItems(selectedAuthors) ||
        hasItems(selectedMeatTypes) ||
        hasItems(selectedGarnishTypes) ||
        hasItems(selectedAllergens),
);

export const selectSearchQuery = (state: RootState) => state.recipeRefinement.query;
export const selectIsRecipeQueryActive = (state: RootState) =>
    state.recipeRefinement.isRecipeQueryActive;
export const selectIsFetching = (state: RootState) => state.recipeRefinement.isFetching;
export const selectIsSearchDisabled = createSelector(
    [selectSearchQuery, selectCheckedAllergens],
    (query, checkedAllergens) => query.length < 3 && !hasItems(checkedAllergens),
);
