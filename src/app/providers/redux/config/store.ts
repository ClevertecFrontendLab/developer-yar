import { configureStore } from '@reduxjs/toolkit';

import { breadcrumbsReducer, navigationApi } from '~/entities/navigation';
import { postsApi } from '~/entities/post';
import { recipesApi } from '~/entities/recipe';
import { recipeSearchReducer } from '~/features/recipe-search';
import { appStatusReducer } from '~/shared/model';

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            navigationApi.middleware,
            recipesApi.middleware,
            postsApi.middleware,
        ),
    reducer: {
        [navigationApi.reducerPath]: navigationApi.reducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        appStatus: appStatusReducer,
        breadcrumbs: breadcrumbsReducer,
        recipeSearch: recipeSearchReducer,
    },
});
