import { RouteObject } from 'react-router';

export const withBreadcrumbs = (route: RouteObject): RouteObject => ({
    ...route,
    handle: {
        ...(route.handle ?? {}),
        setBreadcrumbs: true,
    },
});
