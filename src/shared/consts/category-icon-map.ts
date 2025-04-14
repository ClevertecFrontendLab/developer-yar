import { FC } from 'react';

import { Category } from '~/shared/model';
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

import { CATEGORY_NAMES } from './category-names';

export const CATEGORY_ICON_MAP: Record<Category, FC<{ boxSize: number }>> = {
    [CATEGORY_NAMES.CHILDRENS_DISHES]: ChildrensDishesIcon,
    [CATEGORY_NAMES.DESSERTS_PASTRIES]: DessertsPastriesIcon,
    [CATEGORY_NAMES.DRINKS]: DrinksIcon,
    [CATEGORY_NAMES.FIRST_COURSES]: FirstCoursesIcon,
    [CATEGORY_NAMES.GRILLED_DISHES]: GrilledDishesIcon,
    [CATEGORY_NAMES.NATIONAL_CUISINES]: NationalCuisinesIcon,
    [CATEGORY_NAMES.SALADS]: SaladsIcon,
    [CATEGORY_NAMES.SAUCES]: SaucesIcon,
    [CATEGORY_NAMES.SECOND_COURSES]: SecondCoursesIcon,
    [CATEGORY_NAMES.SEMIMANUFACTURES]: SemimanufacturesIcon,
    [CATEGORY_NAMES.SNACKS]: SnacksIcon,
    [CATEGORY_NAMES.THERAPEUTIC_NUTRITION]: TherapeuticNutritionIcon,
    [CATEGORY_NAMES.VEGAN_CUISINE]: VeganCuisineIcon,
};
