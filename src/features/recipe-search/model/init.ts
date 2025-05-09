import { Category } from '~/entities/navigation';
import { RecipeItem } from '~/entities/recipe';

import { Allergen } from '../model/types';

export type RecipeSearchState = {
    allergens: Allergen[];
    filterData: {
        categories: Category[];
        recipes: RecipeItem[];
    };
    filteringAllergens: boolean;
    isFetching: boolean;
    isRecipeQueryActive: boolean;
    query: string;
    selected: {
        authors: string[];
        categories: string[];
        garnishTypes: string[];
        meatTypes: string[];
    };
};

export const initialState: RecipeSearchState = {
    allergens: [
        { custom: false, id: 0, selected: false, title: 'Молочные продукты' },
        { custom: false, id: 1, selected: false, title: 'Яйцо' },
        { custom: false, id: 2, selected: false, title: 'Рыба' },
        { custom: false, id: 3, selected: false, title: 'Моллюски' },
        { custom: false, id: 4, selected: false, title: 'Орехи' },
        { custom: false, id: 5, selected: false, title: 'Томат' },
        { custom: false, id: 6, selected: false, title: 'Цитрусовые' },
        { custom: false, id: 7, selected: false, title: 'Клубника (ягоды)' },
        { custom: false, id: 8, selected: false, title: 'Шоколад' },
    ],
    filterData: {
        categories: [],
        recipes: [],
    },
    filteringAllergens: false,
    isFetching: false,
    isRecipeQueryActive: false,
    query: '',
    selected: {
        authors: [],
        categories: [],
        garnishTypes: [],
        meatTypes: [],
    },
};
