import { type RouteObject } from 'react-router';

import { NotFoundPage } from '~/pages/not-found-page';
import { ROUTES } from '~/shared/routes';

export const notFoundPage: RouteObject = {
    element: <NotFoundPage />,
    path: ROUTES.NOT_FOUND,
};
