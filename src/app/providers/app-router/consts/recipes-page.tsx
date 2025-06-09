import { type RouteObject } from 'react-router';

import { RecipesPage } from '~/pages/recipes-page';
import { ROUTES } from '~/shared/routes';

import { recipesPageloader } from '../lib/loaders/recipes-page-loader';

export const recipesPage: RouteObject = {
    element: <RecipesPage />,
    loader: recipesPageloader,
    path: ROUTES.RECIPES,
};
