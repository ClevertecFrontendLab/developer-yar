export type RouteNode = {
    name: string;
    url: string;
    nested?: RouteNameMap;
};

export type RouteNameMap = {
    [key: string]: RouteNode;
};
