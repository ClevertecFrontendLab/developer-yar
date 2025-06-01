import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './init';
import { AppErrorMessage, AppErrorType, AppMessageAlignment } from './types';

const appStatusSlice = createSlice({
    initialState,
    name: 'appStatus',
    reducers: {
        hideError: (state) => {
            state.errorType = null;
            state.errorMessage = initialState.errorMessage;
            state.errorAlignment = initialState.errorAlignment;
        },
        hideSuccess: (state) => {
            state.isSuccess = initialState.isSuccess;
            state.successMessage = initialState.successMessage;
            state.successAlignment = initialState.successAlignment;
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        showError: (
            state,
            {
                payload,
            }: PayloadAction<{
                message: AppErrorMessage;
                alignment?: AppMessageAlignment;
                type?: AppErrorType;
            }>,
        ) => {
            state.errorType = payload.type ?? 'server';
            state.errorMessage = payload.message;
            state.errorAlignment = payload.alignment ?? 'center';
        },
        showSuccess: (
            state,
            {
                payload,
            }: PayloadAction<{
                message: string;
                alignment?: AppMessageAlignment;
            }>,
        ) => {
            state.isSuccess = true;
            state.successMessage = payload.message;
            state.successAlignment = payload.alignment ?? 'center';
        },
    },
});

export const { hideError, setLoading, showError, showSuccess, hideSuccess } =
    appStatusSlice.actions;

export const appStatusReducer = appStatusSlice.reducer;
