import { type RouteObject } from 'react-router';

import { Breadcrumb } from '~/entities/navigation';
import { HomePage } from '~/pages/home-page';
import { ROUTES } from '~/shared/routes';

export const homePage: RouteObject = {
    element: <HomePage />,
    loader: async () => {
        const breadcrumbs: Breadcrumb[] = [];
        return { breadcrumbs };
    },
    path: ROUTES.HOME,
};
