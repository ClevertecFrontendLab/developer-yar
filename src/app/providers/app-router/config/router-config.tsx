import { createBrowserRouter, Navigate } from 'react-router';

import { AppLayout } from '~/app/providers/app-layout';
import { ROUTES } from '~/shared/routes';

import { authPage } from '../consts/auth-page';
import { bloggerPage } from '../consts/blogger-page';
import { blogsPage } from '../consts/blogs-page';
import { editRecipePage } from '../consts/edit-recipe-page';
import { homePage } from '../consts/home-page';
import { newRecipePage } from '../consts/new-recipe-page';
import { notFoundPage } from '../consts/not-found-page';
import { recipePage } from '../consts/recipe-page';
import { recipesPage } from '../consts/recipes-page';
import { theJuiciestPage } from '../consts/the-juiciest-page';
import { verificationPage } from '../consts/verification-page';
import { withBreadcrumbs } from '../lib/with-breadcrumbs';

const routesWithBreadcrumbs = [
    homePage,
    theJuiciestPage,
    newRecipePage,
    recipesPage,
    recipePage,
    editRecipePage,
    blogsPage,
    bloggerPage,
].map(withBreadcrumbs);

export const Router = createBrowserRouter([
    {
        children: [
            ...routesWithBreadcrumbs,
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
