import { buildUrl } from '~/shared/lib';

import { SubcategoryDto } from '../dto/subcategory.dto';
import { Subcategory } from '../model/types';

export const adaptSubcategoriesFromDto = (
    rootCategory: string,
    api: SubcategoryDto[],
): Subcategory[] =>
    api.map(({ _id: id, category: subcategory, rootCategoryId: rootId, title }) => ({
        id,
        rootId,
        slug: subcategory,
        title,
        url: buildUrl([rootCategory, subcategory]),
    }));
