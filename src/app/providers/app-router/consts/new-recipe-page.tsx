import { type RouteObject } from 'react-router';

import { NewRecipePage } from '~/pages/new-recipe-page';
import { ROUTES } from '~/shared/routes';

export const newRecipePage: RouteObject = {
    element: <NewRecipePage />,
    loader: async () => {
        const breadcrumbs = [
            {
                title: 'Новый рецепт',
                url: ROUTES.NEW_RECIPE,
            },
        ];
        return { breadcrumbs };
    },
    path: ROUTES.NEW_RECIPE,
};
