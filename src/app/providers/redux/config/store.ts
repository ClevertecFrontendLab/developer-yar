import { configureStore } from '@reduxjs/toolkit';

import { breadcrumbsReducer, navigationApi } from '~/entities/navigation';
import { postsApi } from '~/entities/post';
import { recipeApi } from '~/entities/recipe';
import { allergensReducer } from '~/features/exclude-allergens';
import { filtersReducer } from '~/features/filter-recipes';
import { searchReducer } from '~/features/search-recipes';

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            navigationApi.middleware,
            recipeApi.middleware,
            postsApi.middleware,
        ),
    reducer: {
        [navigationApi.reducerPath]: navigationApi.reducer,
        [recipeApi.reducerPath]: recipeApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        allergens: allergensReducer,
        breadcrumbs: breadcrumbsReducer,
        filters: filtersReducer,
        search: searchReducer,
    },
});
