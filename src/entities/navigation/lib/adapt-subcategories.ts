import { buildUrl } from '~/shared/lib';

import { ApiSubcategory, Subcategory } from '../model/types';

export const adaptSubcategories = (rootCategory: string, api: ApiSubcategory[]): Subcategory[] =>
    api.map(({ _id: id, title, category: subcategory, rootCategoryId: rootId }) => ({
        id,
        rootId,
        slug: subcategory,
        title,
        url: buildUrl([rootCategory, subcategory]),
    }));
