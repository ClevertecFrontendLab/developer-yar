import { InnerNavigationMenu } from '~/shared/model';

export const createMenu = (
    category: Record<string, Omit<InnerNavigationMenu, 'id'>>,
): InnerNavigationMenu[] => {
    if (!category) return [];
    return Object.entries(category).map(([, value], index) => ({
        id: index + 1,
        ...value,
    }));
};
