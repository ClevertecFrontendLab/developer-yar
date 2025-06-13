import { buildRelativeUrl } from '~/shared/lib';

import { SubcategoryApi } from '../api/subcategory.api';
import { Subcategory } from '../model/types';

export const adaptSubcategoriesFromApi = (
    rootCategory: string,
    api: SubcategoryApi[],
): Subcategory[] =>
    api.map(({ _id: id, category: subcategory, rootCategoryId: rootId, title }) => ({
        id,
        rootId,
        slug: subcategory,
        title,
        url: buildRelativeUrl(rootCategory, subcategory),
    }));
