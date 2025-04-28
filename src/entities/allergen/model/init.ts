import type { Allergen } from './allergen';

export type AllergenState = {
    allergens: Allergen[];
    filteringAllergens: boolean;
};

export const initialAllergenState: AllergenState = {
    allergens: [
        { custom: false, id: 0, selected: false, title: 'Молочные продукты' },
        { custom: false, id: 1, selected: false, title: 'Яйцо' },
        { custom: false, id: 2, selected: false, title: 'Рыба' },
        { custom: false, id: 3, selected: false, title: 'Моллюски' },
        { custom: false, id: 4, selected: false, title: 'Орехи' },
        { custom: false, id: 5, selected: false, title: 'Томат (помидор)' },
        { custom: false, id: 6, selected: false, title: 'Цитрусовые' },
        { custom: false, id: 7, selected: false, title: 'Клубника (ягоды)' },
        { custom: false, id: 8, selected: false, title: 'Шоколад' },
    ],
    filteringAllergens: false,
};
