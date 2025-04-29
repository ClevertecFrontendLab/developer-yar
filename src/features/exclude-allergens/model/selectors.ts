import { getSharedAllergenSelectors } from '~/entities/allergen';

export const { selectIsFilteringAllergens, selectAllAllergens, selectCheckedAllergens } =
    getSharedAllergenSelectors((state) => state.allergens);
