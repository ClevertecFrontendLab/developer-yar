export type Category = {
    description: string;
    icon: string;
    id: string;
    slug: string;
    submenu: Subcategory[];
    title: string;
    url: string;
};

export type Subcategory = {
    id: string;
    rootId: string;
    slug: string;
    title: string;
    url: string;
};

export type Breadcrumb = {
    title: string;
    url: string;
};
