import { PayloadAction } from '@reduxjs/toolkit';

import { Filter } from '../../model/types';

export type FilterRecipeControlProps = {
    action: (id: string) => PayloadAction<string>;
    items: Filter[];
    title: string;
    id?: string;
};
