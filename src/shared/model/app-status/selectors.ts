import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../redux/hooks';

export const selectIsLoading = (state: RootState) => state.appStatus.isLoading;
export const selectErrorCategory = (state: RootState) => state.appStatus.errorType;
export const selectErrorMessage = (state: RootState) => state.appStatus.errorMessage;
export const selectErrorAlignment = (state: RootState) => state.appStatus.errorAlignment;

export const selectErrorInfo = createSelector(
    selectErrorCategory,
    selectErrorMessage,
    selectErrorAlignment,
    (errorType, errorMessage, errorAlignment) => ({
        errorAlignment,
        errorMessage,
        errorType,
    }),
);
