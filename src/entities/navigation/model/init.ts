import { ROUTES } from '~/shared/routes';

import { Breadcrumb } from './types';

type BreadcrumbsState = Breadcrumb & { id: string };

export const initialState: BreadcrumbsState[] = [
    {
        id: '0',
        title: 'Главная',
        url: ROUTES.HOME,
    },
];
