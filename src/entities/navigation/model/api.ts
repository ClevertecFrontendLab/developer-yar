import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { urlStartsWith } from '~/shared/lib';

import { mockMenu } from '../consts/mock-menu';
import { Menu, Submenu } from './types';

export const navigationApi = createApi({
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getNavigationMenu: builder.query<Menu[], void>({
            queryFn: async () => ({ data: mockMenu }),
        }),
        getNavigationSubmenu: builder.query<Submenu[], string>({
            queryFn: async (url) => {
                const menu = mockMenu.find((item: Submenu) => urlStartsWith(item.url, url));

                if (!menu) {
                    return { error: { status: 404, statusText: 'Menu not found' } };
                }
                return { data: menu.submenu };
            },
        }),
    }),
    reducerPath: 'navigationApi',
});

export const {
    useGetNavigationMenuQuery,
    useGetNavigationSubmenuQuery,
    endpoints: { getNavigationMenu, getNavigationSubmenu },
} = navigationApi;
