import { Navigate, type RouteObject } from 'react-router';

import { AuthPage } from '~/pages/auth-page';
import { ROUTES } from '~/shared/routes';

import { signInPage } from './sign-in-page';
import { signUpPage } from './sign-up-page';

export const authPage: RouteObject = {
    children: [
        {
            element: <Navigate replace to={ROUTES.AUTH_SIGN_IN} />,
            index: true,
        },
        signInPage,
        signUpPage,
    ],
    element: <AuthPage />,
    path: ROUTES.AUTH,
};
