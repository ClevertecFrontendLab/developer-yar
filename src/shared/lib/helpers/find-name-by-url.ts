import { RouteNameMap } from '~/shared/model';

export const findNameByURL = (
    url: string,
    routeNameMap: RouteNameMap,
    fallback: string = 'Страница не найдена',
): string => {
    for (const key in routeNameMap) {
        const node = routeNameMap[key];
        if (node.nested) {
            findNameByURL(url, node.nested);
        }
        if (node.url === url) return node.name;
    }

    return fallback;
};
