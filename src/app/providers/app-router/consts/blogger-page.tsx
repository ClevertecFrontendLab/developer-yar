import { redirect, type RouteObject } from 'react-router';

import { BloggerPage } from '~/pages/blogger-page';
import { ERRORS } from '~/shared/api';
import { ROUTES } from '~/shared/routes';

import { setBlogger } from '../lib/set-dynamic-breadcrumbs';

export const bloggerPage: RouteObject = {
    element: <BloggerPage />,
    loader: async ({ params }) => {
        try {
            const breadcrumbs = await setBlogger(params);
            return { breadcrumbs };
        } catch (error) {
            if (error instanceof Response) {
                if (error.status === ERRORS.NOT_FOUND) return redirect(ROUTES.NOT_FOUND);
                if (error.status === ERRORS.INTERNAL_SERVER_ERRROR) return redirect(ROUTES.HOME);
            }
        }
    },
    path: ROUTES.BLOGGER,
};
