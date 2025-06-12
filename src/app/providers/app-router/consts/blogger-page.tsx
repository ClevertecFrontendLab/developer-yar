import { type RouteObject } from 'react-router';

import { BloggerPage } from '~/pages/blogger-page';
import { ROUTES } from '~/shared/routes';

import { bloggerPageLoader } from '../lib/loaders/blogger-page-loader';

export const bloggerPage: RouteObject = {
    element: <BloggerPage />,
    loader: bloggerPageLoader,
    path: ROUTES.BLOGGER,
};
