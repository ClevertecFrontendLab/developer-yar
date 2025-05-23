import { type RouteObject } from 'react-router';

import { VerificationPage } from '~/pages/verification-page';
import { ROUTES } from '~/shared/routes';

export const verificationPage: RouteObject = {
    element: <VerificationPage />,
    path: ROUTES.VERIFICATION,
};
