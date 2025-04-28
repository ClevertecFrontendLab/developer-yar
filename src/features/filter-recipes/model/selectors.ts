import { createSelector } from '@reduxjs/toolkit';

import { getSharedAllergenSelectors } from '~/entities/allergen';
import { getUniqueArray, getUrlSegments } from '~/shared/lib';
import { RootState } from '~/shared/model';

import { garnishTypesMap } from '../consts/garnish-types-map';
import { meatTypesMap } from '../consts/meat-types-map';

export const selectIsFullFiltering = (state: RootState) => state.filters.isFullFiltering;

export const selectRawCategories = (state: RootState) => state.filters.filterData.categories;

export const selectCheckedCategories = (state: RootState) => state.filters.selected.categories;

export const selectAllCategories = createSelector(
    [selectRawCategories, selectCheckedCategories],
    (rawCategories, checkedCategories) =>
        rawCategories.map((category) => ({
            id: getUrlSegments(category.url)[0],
            selected: checkedCategories.includes(category.url.split('/').filter(Boolean)[0]),
            title: category.title,
        })),
);

export const selectRawRecipes = (state: RootState) => state.filters.filterData.recipes;

export const selectCheckedAuthors = (state: RootState) => state.filters.selected.authors;

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

export const selectCheckedMeatTypes = (state: RootState) => state.filters.selected.meatTypes;

export const selectAllMeatTypes = createSelector(
    [selectRawRecipes, selectCheckedMeatTypes],
    (rawRecipes, checkedMeatTypes) =>
        getUniqueArray(
            rawRecipes
                .filter((recipe) => recipe.meat)
                .map((recipe) => recipe.meat!)
                .map((meatType) => ({
                    id: meatType,
                    selected: checkedMeatTypes.includes(meatType),
                    title: meatTypesMap[meatType],
                })),
        ),
);

export const selectCheckedGarnishTypes = (state: RootState) => state.filters.selected.garnishTypes;

export const selectAllGarnishTypes = createSelector(
    [selectRawRecipes, selectCheckedGarnishTypes],
    (rawRecipes, checkedGarnishTypes) =>
        getUniqueArray(
            rawRecipes
                .filter((recipe) => recipe.side)
                .map((recipe) => recipe.side!)
                .map((garnishType) => ({
                    id: garnishType,
                    selected: checkedGarnishTypes.includes(garnishType),
                    title: garnishTypesMap[garnishType],
                })),
        ),
);

export const { selectIsFilteringAllergens, selectAllAllergens, selectCheckedAllergens } =
    getSharedAllergenSelectors((state) => state.filters);

export const isNoFilters = createSelector(
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
        !selectedCategories.length &&
        !selectedAuthors.length &&
        !selectedMeatTypes.length &&
        !selectedGarnishTypes.length &&
        !selectedAllergens.length,
);
