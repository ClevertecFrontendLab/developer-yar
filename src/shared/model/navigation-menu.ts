import { ElementType } from 'react';

export type InnerNavigationMenu = {
    id: number;
    name: string;
    url: string;
};

export type OuterNavigationMenu = {
    id: number;
    icon: ElementType;
    name: string;
    url: string;
    dataTestId?: string;
    menu: InnerNavigationMenu[];
};
