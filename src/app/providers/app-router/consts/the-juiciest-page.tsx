import { type RouteObject } from 'react-router';

import { TheJuiciestPage } from '~/pages/the-juiciest-page';
import { ROUTES } from '~/shared/routes';

import { theJuiciestPageLoader } from '../lib/loaders/the-juiciest-page-loader';

export const theJuiciestPage: RouteObject = {
    element: <TheJuiciestPage />,
    loader: theJuiciestPageLoader,
    path: ROUTES.THE_JUICIEST,
};
