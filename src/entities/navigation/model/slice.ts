import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './init';
import type { Breadcrumb } from './types';

const breadcrumbsSlice = createSlice({
    initialState,
    name: 'breadcrumbs',
    reducers: {
        setBreadcrumbs: (_, action: PayloadAction<Breadcrumb[]>) => [
            ...initialState,
            ...action.payload.map((item, index) => ({
                ...item,
                id: (index + 1).toString(),
            })),
        ],
    },
});

export const { setBreadcrumbs } = breadcrumbsSlice.actions;

export const breadcrumbsReducer = breadcrumbsSlice.reducer;
