import { useLocation } from 'react-router';

import { Breadcrumb } from '~/shared/model';
import { RouteNameMap } from '~/shared/model';
import { ROUTE_NAME_MAP } from '~/shared/routes';

import { findNameByURL } from '../helpers/find-name-by-url';

const categoryMapping: Record<string, keyof RouteNameMap> = {
    salads: 'SALADS',
    snacks: 'SNACKS',
    'first-courses': 'FIRST_COURSES',
    'second-courses': 'SECOND_COURSES',
    'desserts-pastries': 'DESSERTS_PASTRIES',
    'grilled-dishes': 'GRILLED_DISHES',
    'vegan-cuisine': 'VEGAN_CUISINE',
    'childrens-dishes': 'CHILDRENS_DISHES',
    'therapeutic-nutrition': 'THERAPEUTIC_NUTRITION',
    'national-cuisines': 'NATIONAL_CUISINES',
    sauces: 'SAUCES',
    drinks: 'DRINKS',
    semimanufactures: 'SEMIMANUFACTURES',
};

export const useBreadcrumbs = (): Breadcrumb[] => {
    const { pathname } = useLocation();

    const segments = pathname.split('/').filter((x) => x);

    const breadcrumbs: Breadcrumb[] = [];

    let i = 0;

    breadcrumbs.push({
        id: `home-${i++}`,
        routeTo: '/',
        isLast: segments.length === 0,
        pageTitle: 'Главная',
    });

    if (segments.length === 0) {
        return breadcrumbs;
    }

    const firstSeg = segments[0];
    const categoryKey = categoryMapping[firstSeg];
    if (categoryKey && ROUTE_NAME_MAP[categoryKey]) {
        const categoryNode = ROUTE_NAME_MAP[categoryKey];
        breadcrumbs.push({
            id: `category-${i++}-${categoryKey}`,
            routeTo: categoryNode.url,
            isLast: segments.length === 1,
            pageTitle: categoryNode.name,
        });

        for (let j = 1; j < segments.length; j++) {
            const seg = segments[j];
            let crumbTitle = '';
            let crumbUrl = '';

            if (categoryNode.nested) {
                for (const nestedKey in categoryNode.nested) {
                    const nested = categoryNode.nested[nestedKey];

                    if (nested.url.split('/').pop() === seg) {
                        crumbTitle = nested.name;
                        crumbUrl = nested.url;
                        break;
                    }
                }
            }

            if (!crumbTitle) {
                crumbTitle = findNameByURL(`/${seg}`, ROUTE_NAME_MAP);
                crumbUrl = `/${seg}`;
            }

            breadcrumbs.push({
                id: `nested-${i++}-${seg}`,
                routeTo: crumbUrl,
                isLast: j === segments.length - 1,
                pageTitle: crumbTitle,
            });
        }
    } else {
        segments.forEach((seg, index) => {
            const routeTo = `/${segments.slice(0, index + 1).join('/')}`;
            const isLast = index === segments.length - 1;
            const pageTitle = findNameByURL(`/${seg}`, ROUTE_NAME_MAP);
            breadcrumbs.push({
                id: `simple-${i++}-${seg}`,
                routeTo,
                isLast,
                pageTitle,
            });
        });
    }

    return breadcrumbs;
};
