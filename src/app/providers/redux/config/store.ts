import { configureStore } from '@reduxjs/toolkit';

import { measureUnitApi } from '~/entities/measure-unit';
import { breadcrumbsReducer, navigationApi } from '~/entities/navigation';
import { postsApi } from '~/entities/post';
import { recipesApi } from '~/entities/recipe';
import { passwordResetApi } from '~/features/auth-password-reset';
import { signInApi } from '~/features/auth-sign-in';
import { signUpApi } from '~/features/auth-sign-up';
import { tokenValidationApi } from '~/features/auth-token-validation';
import { recipeRefinementReducer } from '~/features/recipe-refinement';
import { appStatusReducer } from '~/shared/model';

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            measureUnitApi.middleware,
            navigationApi.middleware,
            postsApi.middleware,
            recipesApi.middleware,
            passwordResetApi.middleware,
            signInApi.middleware,
            signUpApi.middleware,
            tokenValidationApi.middleware,
        ),
    reducer: {
        [measureUnitApi.reducerPath]: measureUnitApi.reducer,
        [navigationApi.reducerPath]: navigationApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
        [passwordResetApi.reducerPath]: passwordResetApi.reducer,
        [signInApi.reducerPath]: signInApi.reducer,
        [signUpApi.reducerPath]: signUpApi.reducer,
        [tokenValidationApi.reducerPath]: tokenValidationApi.reducer,
        appStatus: appStatusReducer,
        breadcrumbs: breadcrumbsReducer,
        recipeRefinement: recipeRefinementReducer,
    },
});
