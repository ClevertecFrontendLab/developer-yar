import { type RouteObject } from 'react-router';

import { RecipePage } from '~/pages/recipe-page';
import { ROUTES } from '~/shared/routes';

import { setRecipe } from '../lib/set-dynamic-breadcrumbs';

export const recipePage: RouteObject = {
    element: <RecipePage />,
    loader: async ({ params }) => {
        const breadcrumbs = await setRecipe(params);
        return { breadcrumbs };
    },
    path: ROUTES.RECIPE,
};
