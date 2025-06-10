import { type RouteObject } from 'react-router';

import { NewRecipePage } from '~/pages/new-recipe-page';
import { ROUTES } from '~/shared/routes';

import { newRecipePageLoader } from '../lib/loaders/new-recipe-page-loader';

export const newRecipePage: RouteObject = {
    element: <NewRecipePage />,
    loader: newRecipePageLoader,
    path: ROUTES.NEW_RECIPE,
};
