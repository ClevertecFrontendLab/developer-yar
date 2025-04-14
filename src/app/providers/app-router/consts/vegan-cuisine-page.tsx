import { type RouteObject } from 'react-router';

import { VeganCuisinePage } from '~/pages/vegan-cuisine-page';
import { ROUTES } from '~/shared/routes';

export const veganCuisinePage: RouteObject = {
    path: ROUTES.VEGAN_CUISINE.APPETIZERS,
    element: <VeganCuisinePage />,
};
