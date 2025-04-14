import { createBrowserRouter } from 'react-router';

import { AppLayout } from '~/app/providers/app-layout';

import { homePage } from '../consts/home-page';
import { otherPage } from '../consts/other';
import { theJuiciestPage } from '../consts/the-juiciest-page';
import { veganCuisinePage } from '../consts/vegan-cuisine-page';

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [homePage, theJuiciestPage, veganCuisinePage, otherPage],
    },
]);
