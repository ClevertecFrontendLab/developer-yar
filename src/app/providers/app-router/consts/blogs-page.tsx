import { type RouteObject } from 'react-router';

import { Breadcrumb } from '~/entities/navigation';
import { BlogsPage } from '~/pages/blogs-page';
import { ROUTES } from '~/shared/routes';

export const blogsPage: RouteObject = {
    element: <BlogsPage />,
    loader: async () => {
        const breadcrumbs: Breadcrumb[] = [
            {
                title: 'Блоги',
                url: ROUTES.BLOGS,
            },
        ];
        return { breadcrumbs };
    },
    path: ROUTES.BLOGS,
};
