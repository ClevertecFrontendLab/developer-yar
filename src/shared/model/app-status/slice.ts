import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './init';
import { ErrorType } from './types';

const appStatusSlice = createSlice({
    initialState,
    name: 'appStatus',
    reducers: {
        clearError: (state) => {
            state.errorType = null;
            state.errorMessage = null;
        },

        setError: (state, action: PayloadAction<{ message: string; type: ErrorType }>) => {
            state.errorType = action.payload.type;
            state.errorMessage = action.payload.message;
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setLoading, setError, clearError } = appStatusSlice.actions;

export const appStatusReducer = appStatusSlice.reducer;
