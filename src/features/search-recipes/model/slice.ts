import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './init';

const slice = createSlice({
    initialState,
    name: 'search',
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        setSearchingActive(state, action: PayloadAction<boolean>) {
            state.isSearching = action.payload;
        },
    },
});

export const { setSearchQuery, setSearchingActive } = slice.actions;
export const searchReducer = slice.reducer;
