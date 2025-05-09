import { redirect, type RouteObject } from 'react-router';

import { RecipePage } from '~/pages/recipe-page';
import { REDIRECT_ERROR } from '~/shared/consts';
import { ROUTES } from '~/shared/routes';

import { setRecipe } from '../lib/set-dynamic-breadcrumbs';

export const recipePage: RouteObject = {
    element: <RecipePage />,
    loader: async ({ params }) => {
        try {
            const breadcrumbs = await setRecipe(params);
            return { breadcrumbs };
        } catch {
            const previousPage = document.referrer || ROUTES.HOME;
            sessionStorage.setItem(REDIRECT_ERROR.STORAGE_KEY, REDIRECT_ERROR.VALUE);
            return redirect(previousPage);
        }
    },
    path: ROUTES.RECIPE,
};
