import { redirect, type RouteObject } from 'react-router';

import { RecipesPage } from '~/pages/recipes-page';
import { ROUTES } from '~/shared/routes';

import { setCategoryAndSubcategory } from '../lib/set-dynamic-breadcrumbs';

export const recipesPage: RouteObject = {
    element: <RecipesPage />,
    loader: async ({ params }) => {
        try {
            const breadcrumbs = await setCategoryAndSubcategory(params);
            return { breadcrumbs };
        } catch {
            return redirect(ROUTES.NOT_FOUND);
        }
    },
    path: ROUTES.RECIPES,
};
