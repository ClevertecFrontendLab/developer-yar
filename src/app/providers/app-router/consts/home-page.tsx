import { type RouteObject } from 'react-router';

import { HomePage } from '~/pages/home-page';
import { ROUTES } from '~/shared/routes';

import { homePageLoader } from '../lib/loaders/home-page-loader';

export const homePage: RouteObject = {
    element: <HomePage />,
    loader: homePageLoader,
    path: ROUTES.HOME,
};
