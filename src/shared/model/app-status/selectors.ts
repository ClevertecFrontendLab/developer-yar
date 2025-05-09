import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../redux/hooks';

export const selectLoading = (state: RootState) => state.appStatus.isLoading;
const selectErrorType = (state: RootState) => state.appStatus.errorType;
const selectErrorMessage = (state: RootState) => state.appStatus.errorMessage;
export const selectErrorState = createSelector(
    selectErrorType,
    selectErrorMessage,
    (errorType, errorMessage) => ({ errorMessage, errorType }),
);
