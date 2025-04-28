import { useEffect } from 'react';
import { useMatches } from 'react-router';

import { useAppDispatch } from '~/shared/model';

import { setBreadcrumbs } from '../model/slice';
import { Breadcrumb } from '../model/types';

type RouteMeta = {
    data: {
        breadcrumbs: Breadcrumb[];
    };
    handle: {
        setBreadcrumbs: boolean;
    };
};

export const useBreadcrumbs = () => {
    const matches: RouteMeta[] = useMatches() as RouteMeta[];
    const dispatch = useAppDispatch();

    useEffect(() => {
        const matchWithBreadcrumbs: RouteMeta | undefined = matches.find(
            (match: RouteMeta) => match.handle?.setBreadcrumbs && match.data?.breadcrumbs,
        );

        if (matchWithBreadcrumbs) {
            dispatch(setBreadcrumbs(matchWithBreadcrumbs.data.breadcrumbs));
        }
    }, [matches, dispatch]);
};
