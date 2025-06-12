import { type RouteObject } from 'react-router';

import { EditRecipePage } from '~/pages/edit-recipe-page';
import { ROUTES } from '~/shared/routes';

import { editRecipePageLoader } from '../lib/loaders/edit-recipe-page-loader';

export const editRecipePage: RouteObject = {
    element: <EditRecipePage />,
    loader: editRecipePageLoader,
    path: ROUTES.EDIT_RECIPE,
};
