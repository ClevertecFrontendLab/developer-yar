import { createBrowserRouter } from 'react-router';

import { AppLayout } from '~/app/providers/app-layout';

import { routes } from './routes';

export const Router = createBrowserRouter([
    {
        children: routes,
        element: <AppLayout />,
        path: '/',
    },
]);
