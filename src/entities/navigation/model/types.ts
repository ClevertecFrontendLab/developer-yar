import { Category } from '~/shared/model';

export type Menu = {
    id: string;
    submenu: Submenu[];
    title: Category;
    url: string;
};

export type Submenu = {
    id: string;
    title: string;
    url: string;
};

export type Breadcrumb = {
    title: string;
    url: string;
};

export type CategoryData = Omit<Menu, 'submenu'>;
