import { type RouteObject } from 'react-router';

import { TheJuiciestPage } from '~/pages/the-juiciest-page';
import { ROUTES } from '~/shared/routes';

export const theJuiciestPage: RouteObject = {
    path: ROUTES.THE_JUICIEST,
    element: <TheJuiciestPage />,
};
