import { RouteObject } from 'react-router';

export function withBreadcrumbs(route: RouteObject): RouteObject {
    return {
        ...route,
        handle: {
            ...(route.handle ?? {}),
            setBreadcrumbs: true,
        },
    };
}
