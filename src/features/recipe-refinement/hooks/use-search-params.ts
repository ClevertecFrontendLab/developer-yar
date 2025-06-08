import { useMemo } from 'react';
import { useParams } from 'react-router';

import { GetAllRecipesQueryParams } from '~/entities/recipe/model/types';
import { useAppSelector } from '~/shared/model';

import {
    selectAllCategories,
    selectCheckedAllergens,
    selectCheckedAuthors,
    selectCheckedCategories,
    selectCheckedGarnishTypes,
    selectCheckedMeatTypes,
    selectIsFilteringAllergens,
    selectSearchQuery,
} from '../model/selectors';

export const useSearchParams = (): GetAllRecipesQueryParams => {
    const { category: categorySlug } = useParams();

    const isFilteringAllergens = useAppSelector(selectIsFilteringAllergens);

    const authors = useAppSelector(selectCheckedAuthors);
    const allergens = useAppSelector(selectCheckedAllergens);
    const query = useAppSelector(selectSearchQuery);
    const meatTypes = useAppSelector(selectCheckedMeatTypes);
    const garnishTypes = useAppSelector(selectCheckedGarnishTypes);

    const categories = useAppSelector(selectCheckedCategories);
    const allCategories = useAppSelector(selectAllCategories);

    const subcategoriesIds = useMemo(() => {
        let filteredCategories;
        if (categorySlug)
            filteredCategories = allCategories.filter((category) => category.slug === categorySlug);
        else
            filteredCategories = allCategories.filter((category) =>
                categories.includes(category.id),
            );
        return filteredCategories.flatMap((category) => category.submenu).join(',');
    }, [allCategories, categories, categorySlug]);

    return useMemo(
        () => ({
            allergens: isFilteringAllergens
                ? allergens.map((allergen) => allergen.title.toLowerCase()).join(',')
                : '',
            authors: authors.map((author) => author.toLowerCase()).join(','),
            garnish: garnishTypes.map((garnishType) => garnishType.toLowerCase()).join(','),
            meat: meatTypes.map((meatType) => meatType.toLowerCase()).join(','),
            searchString: query,
            sortBy: 'createdAt',
            sortOrder: 'ASC',
            subcategoriesIds: subcategoriesIds,
        }),
        [
            allergens,
            authors,
            garnishTypes,
            isFilteringAllergens,
            meatTypes,
            query,
            subcategoriesIds,
        ],
    );
};
