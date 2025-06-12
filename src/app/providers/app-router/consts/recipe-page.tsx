import { type RouteObject } from 'react-router';

import { RecipePage } from '~/pages/recipe-page';
import { ROUTES } from '~/shared/routes';

import { recipePageLoader } from '../lib/loaders/recipe-page-loader';

export const recipePage: RouteObject = {
    element: <RecipePage />,
    loader: recipePageLoader,
    path: ROUTES.RECIPE,
};
