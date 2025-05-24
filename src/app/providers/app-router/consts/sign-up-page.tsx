import { type RouteObject } from 'react-router';

import { SignUpPage } from '~/pages/sign-up-page';
import { ROUTES } from '~/shared/routes';

export const signUpPage: RouteObject = {
    element: <SignUpPage />,
    path: ROUTES.AUTH_SIGN_UP,
};
