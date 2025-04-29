import { Menu } from '../model/types';

type Category = Omit<Menu, 'submenu'>;

export const getCategories = (data: Menu[]): Category[] =>
    data.map(({ id, title, url }) => ({
        id,
        title,
        url,
    }));
