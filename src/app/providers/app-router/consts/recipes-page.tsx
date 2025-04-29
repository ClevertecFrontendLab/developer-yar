import { type RouteObject } from 'react-router';

import { RecipesPage } from '~/pages/recipes-page';
import { ROUTES } from '~/shared/routes';

import { setCategoryAndSubcategory } from '../lib/set-dynamic-breadcrumbs';

export const recipesPage: RouteObject = {
    element: <RecipesPage />,
    loader: async ({ params }) => {
        const breadcrumbs = await setCategoryAndSubcategory(params);
        return { breadcrumbs };
    },
    path: ROUTES.RECIPES,
};
