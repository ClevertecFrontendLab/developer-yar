import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '~/shared/model';

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectIsSearching = (state: RootState) => state.search.isSearching;
export const selectIsQueryNotEmpty = createSelector(selectSearchQuery, (query) => !query);
export const selectIsQueryNotLongEnough = createSelector(
    selectSearchQuery,
    (query) => query.length < 3,
);
