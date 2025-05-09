export type ApiCategory = {
    _id: string;
    category: string;
    description: string;
    icon: string;
    subCategories: ApiSubcategory[];
    title: string;
};

export type ApiSubcategory = {
    _id: string;
    category: string;
    rootCategoryId: string;
    title: string;
};

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
