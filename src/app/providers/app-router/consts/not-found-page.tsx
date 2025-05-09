import { type RouteObject } from 'react-router';

import { NotFoundPage } from '~/pages/not-found-page';

export const notFoundPage: RouteObject = {
    element: <NotFoundPage />,
    path: '/not-found',
};
