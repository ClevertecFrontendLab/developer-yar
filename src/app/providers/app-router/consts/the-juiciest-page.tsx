import { type RouteObject } from 'react-router';

import { TheJuiciestPage } from '~/pages/the-juiciest-page';
import { ROUTES } from '~/shared/routes';

export const theJuiciestPage: RouteObject = {
    element: <TheJuiciestPage />,
    loader: async () => {
        const breadcrumbs = [{ title: 'Самое сочное', url: ROUTES.THE_JUICIEST }];
        return { breadcrumbs };
    },
    path: ROUTES.THE_JUICIEST,
};
