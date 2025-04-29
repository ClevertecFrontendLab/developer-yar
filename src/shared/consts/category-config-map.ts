import { ComponentType } from 'react';

import {
    DessertIcon,
    DrinkIcon,
    GrilledIcon,
    HealthyFoodIcon,
    KidsMealIcon,
    MainCourseIcon,
    PreparedFoodIcon,
    SaladIcon,
    SauceIcon,
    SnackIcon,
    SoupIcon,
    VeganFoodIcon,
    WorldCuisineIcon,
} from '~/shared/ui/icons';

type CategoryConfig = {
    Icon: ComponentType<{ boxSize: number }>;
    name: string;
};

export const CATEGORY_CONFIG_MAP: Record<string, CategoryConfig> = {
    'childrens-dish': { Icon: KidsMealIcon, name: 'Детские блюда' },
    'desserts-pastries': { Icon: DessertIcon, name: 'Десерты, выпечка' },
    drinks: { Icon: DrinkIcon, name: 'Напитки' },
    'first-dish': { Icon: SoupIcon, name: 'Первые блюда' },
    'grilled-dish': { Icon: GrilledIcon, name: 'Блюда на гриле' },
    national: { Icon: WorldCuisineIcon, name: 'Национальные' },
    salads: { Icon: SaladIcon, name: 'Салаты' },
    sauces: { Icon: SauceIcon, name: 'Соусы' },
    'second-dish': { Icon: MainCourseIcon, name: 'Вторые блюда' },
    semimanufactures: { Icon: PreparedFoodIcon, name: 'Заготовки' },
    snacks: { Icon: SnackIcon, name: 'Закуски' },
    'therapeutic-nutrition': {
        Icon: HealthyFoodIcon,
        name: 'Лечебное питание',
    },
    vegan: { Icon: VeganFoodIcon, name: 'Веганская кухня' },
} as const;
