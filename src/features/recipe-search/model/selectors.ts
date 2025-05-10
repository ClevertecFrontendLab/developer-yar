import { createSelector } from '@reduxjs/toolkit';

import { getUniqueArray } from '~/shared/lib';
import { RootState } from '~/shared/model';

import { getGarnishTypes } from '../lib/get-garnish-types';
import { getMeatTypes } from '../lib/get-meat-types';

export const selectAllAllergens = (state: RootState) => state.recipeSearch.allergens;

export const selectIsFilteringAllergens = (state: RootState) =>
    state.recipeSearch.filteringAllergens;

export const selectCheckedAllergens = createSelector(selectAllAllergens, (allergens) =>
    allergens.filter((allergen) => allergen.selected),
);

export const selectRawCategories = (state: RootState) => state.recipeSearch.filterData.categories;

export const selectCheckedCategories = (state: RootState) => state.recipeSearch.selected.categories;

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

export const selectRawRecipes = (state: RootState) => state.recipeSearch.filterData.recipes;

export const selectCheckedAuthors = (state: RootState) => state.recipeSearch.selected.authors;

export const selectAllAuthors = createSelector(
    [selectRawRecipes, selectCheckedAuthors],
    (rawRecipes, checkedAuthors) =>
        getUniqueArray(
            rawRecipes
                .map((recipe) => recipe.author)
                .map((author) => ({
                    id: author.id,
                    selected: checkedAuthors.includes(author.id),
                    title: author.fullName,
                })),
        ),
);

export const selectCheckedMeatTypes = (state: RootState) => state.recipeSearch.selected.meatTypes;

export const selectAllMeatTypes = createSelector([selectCheckedMeatTypes], (checkedMeatTypes) =>
    getMeatTypes(checkedMeatTypes),
);

export const selectCheckedGarnishTypes = (state: RootState) =>
    state.recipeSearch.selected.garnishTypes;

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
        selectedCategories.length > 0 ||
        selectedAuthors.length > 0 ||
        selectedMeatTypes.length > 0 ||
        selectedGarnishTypes.length > 0 ||
        selectedAllergens.length > 0,
);

export const selectSearchQuery = (state: RootState) => state.recipeSearch.query;
export const selectIsRecipeQueryActive = (state: RootState) =>
    state.recipeSearch.isRecipeQueryActive;
export const selectIsFetching = (state: RootState) => state.recipeSearch.isFetching;
export const selectIsSearchDisabled = createSelector(
    [selectSearchQuery, selectCheckedAllergens],
    (query, checkedAllergens) => query.length < 3 && checkedAllergens.length === 0,
);
