import { createBrowserRouter, Navigate } from 'react-router';

import { AppLayout } from '~/app/providers/app-layout';
import { withAuthGuard } from '~/features/auth-token-validation';
import { ROUTES } from '~/shared/routes';

import { authPage } from '../consts/auth-page';
import { homePage } from '../consts/home-page';
import { notFoundPage } from '../consts/not-found-page';
import { recipePage } from '../consts/recipe-page';
import { recipesPage } from '../consts/recipes-page';
import { theJuiciestPage } from '../consts/the-juiciest-page';
import { verificationPage } from '../consts/verification-page';
import { withBreadcrumbs } from '../lib/with-breadcrumbs';

const routesWithBreadcrumbs = [homePage, theJuiciestPage, recipesPage, recipePage].map(
    withBreadcrumbs,
);

const protectedRoutes = routesWithBreadcrumbs.map((route) => ({
    ...route,
    element: withAuthGuard(route.element),
}));

export const Router = createBrowserRouter([
    {
        children: [
            ...protectedRoutes,
            notFoundPage,
            {
                element: <Navigate replace to={ROUTES.NOT_FOUND} />,
                path: '*',
            },
        ],
        element: <AppLayout />,
        path: '/',
    },
    authPage,
    verificationPage,
]);
