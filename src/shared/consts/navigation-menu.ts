import { ComponentType } from 'react';

import { createMenu } from '~/shared/lib/helpers/create-menu';
import { ROUTE_CATEGORIES, ROUTE_NAME_MAP } from '~/shared/routes';
import {
    ChildrensDishesIcon,
    DessertsPastriesIcon,
    DrinksIcon,
    FirstCoursesIcon,
    GrilledDishesIcon,
    NationalCuisinesIcon,
    SaladsIcon,
    SaucesIcon,
    SecondCoursesIcon,
    SemimanufacturesIcon,
    SnacksIcon,
    TherapeuticNutritionIcon,
    VeganCuisineIcon,
} from '~/shared/ui/icons';

type MenuItemConfig = {
    categoryKey: keyof typeof ROUTE_CATEGORIES;
    icon: ComponentType;
    dataTestId?: string;
};

const menuItemsConfig: MenuItemConfig[] = [
    { categoryKey: 'SALADS', icon: SaladsIcon },
    { categoryKey: 'SNACKS', icon: SnacksIcon },
    { categoryKey: 'FIRST_COURSES', icon: FirstCoursesIcon },
    { categoryKey: 'SECOND_COURSES', icon: SecondCoursesIcon },
    {
        categoryKey: 'DESSERTS_PASTRIES',
        icon: DessertsPastriesIcon,
    },
    { categoryKey: 'GRILLED_DISHES', icon: GrilledDishesIcon },
    {
        categoryKey: 'VEGAN_CUISINE',
        icon: VeganCuisineIcon,
        dataTestId: 'vegan-cuisine',
    },
    { categoryKey: 'CHILDRENS_DISHES', icon: ChildrensDishesIcon },
    { categoryKey: 'THERAPEUTIC_NUTRITION', icon: TherapeuticNutritionIcon },
    { categoryKey: 'NATIONAL_CUISINES', icon: NationalCuisinesIcon },
    { categoryKey: 'SAUCES', icon: SaucesIcon },
    { categoryKey: 'DRINKS', icon: DrinksIcon },
    { categoryKey: 'SEMIMANUFACTURES', icon: SemimanufacturesIcon },
];

export const navigationMenu = menuItemsConfig.map((item, index) => {
    const menuItem = ROUTE_NAME_MAP[item.categoryKey];
    const nested = menuItem?.nested;

    return {
        id: index + 1,
        icon: item.icon,
        name: menuItem.name,
        url: menuItem.url,
        menu: nested ? createMenu(nested) : [],
        ...(item.dataTestId && { dataTestId: item.dataTestId }),
    };
});
