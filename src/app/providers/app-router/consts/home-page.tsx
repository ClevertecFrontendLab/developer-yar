import { type RouteObject } from 'react-router';

import { HomePage } from '~/pages/home-page';
import { ROUTES } from '~/shared/routes';

export const homePage: RouteObject = {
    path: ROUTES.HOME,
    element: <HomePage />,
};
