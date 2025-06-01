import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../redux/hooks';

export const selectIsLoading = (state: RootState) => state.appStatus.isLoading;
export const selectErrorCategory = (state: RootState) => state.appStatus.errorType;
export const selectErrorMessage = (state: RootState) => state.appStatus.errorMessage;
export const selectErrorAlignment = (state: RootState) => state.appStatus.errorAlignment;
export const selectIsSuccess = (state: RootState) => state.appStatus.isSuccess;
export const selectSuccessMessage = (state: RootState) => state.appStatus.successMessage;
export const selectSuccessAlignment = (state: RootState) => state.appStatus.successAlignment;

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

export const selectSuccessInfo = createSelector(
    selectIsSuccess,
    selectSuccessMessage,
    selectSuccessAlignment,
    (isSuccess, successMessage, successAlignment) => ({
        isSuccess,
        successAlignment,
        successMessage,
    }),
);
