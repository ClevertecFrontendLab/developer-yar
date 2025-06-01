import { redirect, type RouteObject } from 'react-router';

import { EditRecipePage } from '~/pages/edit-recipe-page';
import { ROUTES } from '~/shared/routes';

import { setRecipe } from '../lib/set-dynamic-breadcrumbs';

export const editRecipePage: RouteObject = {
    element: <EditRecipePage />,
    loader: async ({ params }) => {
        try {
            const breadcrumbs = await setRecipe(params);
            return { breadcrumbs };
        } catch {
            return redirect(ROUTES.NOT_FOUND);
        }
    },
    path: ROUTES.EDIT_RECIPE,
};
