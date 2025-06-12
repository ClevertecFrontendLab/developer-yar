import { LoaderFunctionArgs, redirect } from 'react-router';

import { ERRORS } from '~/shared/api';
import { ROUTES } from '~/shared/routes';

import { setBlogger } from '../set-dynamic-breadcrumbs';

export const bloggerPageLoader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const breadcrumbs = await setBlogger(params);
        return { breadcrumbs };
    } catch (error) {
        if (error instanceof Response) {
            if (error.status === ERRORS.NOT_FOUND) return redirect(ROUTES.NOT_FOUND);
            if (error.status === ERRORS.INTERNAL_SERVER_ERRROR) return redirect(ROUTES.HOME);
        }
    }
};
