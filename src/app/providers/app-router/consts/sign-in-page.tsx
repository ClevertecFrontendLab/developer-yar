import { type RouteObject } from 'react-router';

import { SignInPage } from '~/pages/sign-in-page';
import { ROUTES } from '~/shared/routes';

export const signInPage: RouteObject = {
    element: <SignInPage />,
    path: ROUTES.AUTH_SIGN_IN,
};
