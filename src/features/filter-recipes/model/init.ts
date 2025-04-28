import { AllergenState, getSharedAllergenState } from '~/entities/allergen';
import { Menu } from '~/entities/navigation';
import { Recipe } from '~/entities/recipe';

const allergensInitialState = getSharedAllergenState();

export type FilterState = AllergenState & {
    filterData: {
        categories: Menu[];
        recipes: Recipe[];
    };
    isFullFiltering: boolean;
    selected: {
        authors: string[];
        categories: string[];
        garnishTypes: string[];
        meatTypes: string[];
    };
};

export const initialState: FilterState = {
    filterData: {
        categories: [],
        recipes: [],
    },
    isFullFiltering: false,
    selected: {
        authors: [],
        categories: [],
        garnishTypes: [],
        meatTypes: [],
    },
    ...allergensInitialState,
};
