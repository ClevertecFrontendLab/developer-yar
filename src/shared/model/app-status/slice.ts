import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './init';
import { AppErrorAlignment, AppErrorMessage, AppErrorType } from './types';

const appStatusSlice = createSlice({
    initialState,
    name: 'appStatus',
    reducers: {
        hideError: (state) => {
            state.errorType = null;
            state.errorMessage = initialState.errorMessage;
            state.errorAlignment = initialState.errorAlignment;
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        showError: (
            state,
            {
                payload,
            }: PayloadAction<{
                alignment?: AppErrorAlignment;
                message: AppErrorMessage;
                type?: AppErrorType;
            }>,
        ) => {
            state.errorType = payload.type ?? 'server';
            state.errorMessage = payload.message;
            state.errorAlignment = payload.alignment ?? 'center';
        },
    },
});

export const { hideError, setLoading, showError } = appStatusSlice.actions;

export const appStatusReducer = appStatusSlice.reducer;
