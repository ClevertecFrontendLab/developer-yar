import { type RouteObject } from 'react-router';

import { VeganCuisinePage } from '~/pages/vegan-cuisine-page';

export const otherPage: RouteObject = {
    path: '*',
    element: <VeganCuisinePage />,
};
