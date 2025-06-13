import { type RouteObject } from 'react-router';

import { BlogsPage } from '~/pages/blogs-page';
import { ROUTES } from '~/shared/routes';

import { blogsPageLoader } from '../lib/loaders/blogs-page-loader';

export const blogsPage: RouteObject = {
    element: <BlogsPage />,
    loader: blogsPageLoader,
    path: ROUTES.BLOGS,
};
