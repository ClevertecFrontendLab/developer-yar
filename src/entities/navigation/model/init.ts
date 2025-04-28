import { generateId } from '~/shared/lib';
import { ROUTES } from '~/shared/routes';

import { Breadcrumb } from './types';

type BreadcrumbsState = Breadcrumb & { id: number };

export const initialState: BreadcrumbsState[] = [
    {
        id: generateId(),
        title: 'Главная',
        url: ROUTES.HOME,
    },
];
