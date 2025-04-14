import { RouteNameMap } from '~/shared/model';

import { CATEGORY_NAMES } from '../consts/category-names';
import { ROUTES } from './routes';

export const ROUTE_NAME_MAP: RouteNameMap = {
    HOME: {
        name: 'Главная',
        url: ROUTES.HOME,
    },
    THE_JUICIEST: {
        name: 'Самое сочное',
        url: ROUTES.THE_JUICIEST,
    },
    SALADS: {
        name: CATEGORY_NAMES.SALADS,
        url: ROUTES.SALADS.MEAT,
        nested: {
            MEAT: {
                name: 'Мясные салаты',
                url: ROUTES.SALADS.MEAT,
            },
            FISH: {
                name: 'Рыбные салаты',
                url: ROUTES.SALADS.FISH,
            },
            VEGETABLE: {
                name: 'Овощные салаты',
                url: ROUTES.SALADS.VEGETABLE,
            },
            WARM: {
                name: 'Тёплые салаты',
                url: ROUTES.SALADS.WARM,
            },
        },
    },
    SNACKS: {
        name: CATEGORY_NAMES.SNACKS,
        url: ROUTES.SNACKS.MEAT,
        nested: {
            MEAT: {
                name: 'Мясные закуски',
                url: ROUTES.SNACKS.MEAT,
            },
            FISH: {
                name: 'Рыбные закуски',
                url: ROUTES.SNACKS.FISH,
            },
            VEGETABLE: {
                name: 'Овощные закуски',
                url: ROUTES.SNACKS.VEGETABLE,
            },
            WARM: {
                name: 'Тёплые закуски',
                url: ROUTES.SNACKS.WARM,
            },
            SANDWICHES: {
                name: 'Бутерброды',
                url: ROUTES.SNACKS.SANDWICHES,
            },
            FAST_FOOD: {
                name: 'Фастфуд',
                url: ROUTES.SNACKS.FAST_FOOD,
            },
        },
    },
    FIRST_COURSES: {
        name: CATEGORY_NAMES.FIRST_COURSES,
        url: ROUTES.FIRST_COURSES.MEAT,
        nested: {
            MEAT: {
                name: 'Мясные супы',
                url: ROUTES.FIRST_COURSES.MEAT,
            },
            VEGETABLE: {
                name: 'Овощные супы',
                url: ROUTES.FIRST_COURSES.VEGETABLE,
            },
            BROTHS: {
                name: 'Бульоны',
                url: ROUTES.FIRST_COURSES.BROTHS,
            },
            COLD: {
                name: 'Холодные супы',
                url: ROUTES.FIRST_COURSES.COLD,
            },
            DIET: {
                name: 'Диетические супы',
                url: ROUTES.FIRST_COURSES.DIET,
            },
        },
    },
    SECOND_COURSES: {
        name: CATEGORY_NAMES.SECOND_COURSES,
        url: ROUTES.SECOND_COURSES.MEAT,
        nested: {
            MEAT: {
                name: 'Мясные',
                url: ROUTES.SECOND_COURSES.MEAT,
            },
            FISH: {
                name: 'Рыбные',
                url: ROUTES.SECOND_COURSES.FISH,
            },
            VEGETABLE: {
                name: 'Овощные',
                url: ROUTES.SECOND_COURSES.VEGETABLE,
            },
            POULTRY: {
                name: 'Из птицы',
                url: ROUTES.SECOND_COURSES.POULTRY,
            },
            MUSHROOMS: {
                name: 'Из грибов',
                url: ROUTES.SECOND_COURSES.MUSHROOMS,
            },
            OFFAL: {
                name: 'Из субпродуктов',
                url: ROUTES.SECOND_COURSES.OFFAL,
            },
            STEAMED: {
                name: 'На пару',
                url: ROUTES.SECOND_COURSES.STEAMED,
            },
            DUMPLINGS: {
                name: 'Пельмени, вареники',
                url: ROUTES.SECOND_COURSES.DUMPLINGS,
            },
            FLOUR_GARNISHES: {
                name: 'Мучные гарниры',
                url: ROUTES.SECOND_COURSES.FLOUR_GARNISHES,
            },
            VEGETABLE_GARNISHES: {
                name: 'Овощные гарниры',
                url: ROUTES.SECOND_COURSES.VEGETABLE_GARNISHES,
            },
            PIZZA: {
                name: 'Пицца',
                url: ROUTES.SECOND_COURSES.PIZZA,
            },
            SUSHI: {
                name: 'Суши',
                url: ROUTES.SECOND_COURSES.SUSHI,
            },
        },
    },
    DESSERTS_PASTRIES: {
        name: CATEGORY_NAMES.DESSERTS_PASTRIES,
        url: ROUTES.DESSERTS_PASTRIES.PANCAKES_AND_FRITTERS,
        nested: {
            PANCAKES_AND_FRITTERS: {
                name: 'Блины и оладьи',
                url: ROUTES.DESSERTS_PASTRIES.PANCAKES_AND_FRITTERS,
            },
            PIES_AND_DONUTS: {
                name: 'Пироги и пончики',
                url: ROUTES.DESSERTS_PASTRIES.PIES_AND_DONUTS,
            },
            CAKES: {
                name: 'Торты',
                url: ROUTES.DESSERTS_PASTRIES.CAKES,
            },
            ROLLS: {
                name: 'Рулеты',
                url: ROUTES.DESSERTS_PASTRIES.ROLLS,
            },
            MUFFINS: {
                name: 'Кексы и маффины',
                url: ROUTES.DESSERTS_PASTRIES.MUFFINS,
            },
            CHEESECAKES_AND_VATRUSHKI: {
                name: 'Сырники и ватрушки',
                url: ROUTES.DESSERTS_PASTRIES.CHEESECAKES_AND_VATRUSHKI,
            },
            FILO_DOUGH: {
                name: 'Из слоёного теста',
                url: ROUTES.DESSERTS_PASTRIES.FILO_DOUGH,
            },
            CUSTARD_DOUGH: {
                name: 'Из заварного теста',
                url: ROUTES.DESSERTS_PASTRIES.CUSTARD_DOUGH,
            },
            YESTER_DOUGH: {
                name: 'Из дрожжевого теста',
                url: ROUTES.DESSERTS_PASTRIES.YESTER_DOUGH,
            },
            BUN_AND_BAKERY_PRODUCTS: {
                name: 'Булочки и сдоба',
                url: ROUTES.DESSERTS_PASTRIES.BUN_AND_BAKERY_PRODUCTS,
            },
            BREAD: {
                name: 'Хлеб',
                url: ROUTES.DESSERTS_PASTRIES.BREAD,
            },
            PIZZA_DOUGH: {
                name: 'Тесто на пиццу',
                url: ROUTES.DESSERTS_PASTRIES.PIZZA_DOUGH,
            },
            CREAMS: {
                name: 'Кремы',
                url: ROUTES.DESSERTS_PASTRIES.CREAMS,
            },
        },
    },
    GRILLED_DISHES: {
        name: CATEGORY_NAMES.CHILDRENS_DISHES,
        url: ROUTES.GRILLED_DISHES.BEEF,
        nested: {
            BEEF: {
                name: 'Говядина',
                url: ROUTES.GRILLED_DISHES.BEEF,
            },
            PORK: {
                name: 'Свинина',
                url: ROUTES.GRILLED_DISHES.PORK,
            },
            POULTRY: {
                name: 'Птица',
                url: ROUTES.GRILLED_DISHES.POULTRY,
            },
            FISH: {
                name: 'Рыба',
                url: ROUTES.GRILLED_DISHES.FISH,
            },
            MUSHROOMS: {
                name: 'Грибы',
                url: ROUTES.GRILLED_DISHES.MUSHROOMS,
            },
            VEGETABLES: {
                name: 'Овощи',
                url: ROUTES.GRILLED_DISHES.VEGETABLES,
            },
        },
    },
    VEGAN_CUISINE: {
        name: CATEGORY_NAMES.VEGAN_CUISINE,
        url: ROUTES.VEGAN_CUISINE.APPETIZERS,
        nested: {
            APPETIZERS: {
                name: 'Закуски',
                url: ROUTES.VEGAN_CUISINE.APPETIZERS,
            },
            FIRST_COURSES: {
                name: 'Первые блюда',
                url: ROUTES.VEGAN_CUISINE.FIRST_COURSES,
            },
            SECOND_COURSES: {
                name: 'Вторые блюда',
                url: ROUTES.VEGAN_CUISINE.SECOND_COURSES,
            },
            GARNISHES: {
                name: 'Гарниры',
                url: ROUTES.VEGAN_CUISINE.GARNISHES,
            },
            DESSERTS: {
                name: 'Десерты',
                url: ROUTES.VEGAN_CUISINE.DESSERTS,
            },
            BAKERY: {
                name: 'Выпечка',
                url: ROUTES.VEGAN_CUISINE.BAKERY,
            },
            RAW_FOODS: {
                name: 'Сыроедческие блюда',
                url: ROUTES.VEGAN_CUISINE.RAW_FOODS,
            },
            DRINKS: {
                name: 'Напитки',
                url: ROUTES.VEGAN_CUISINE.DRINKS,
            },
        },
    },
    CHILDRENS_DISHES: {
        name: CATEGORY_NAMES.CHILDRENS_DISHES,
        url: ROUTES.CHILDRENS_DISHES.FIRST_COURSES,
        nested: {
            FIRST_COURSES: {
                name: 'Первые блюда',
                url: ROUTES.CHILDRENS_DISHES.FIRST_COURSES,
            },
            SECOND_COURSES: {
                name: 'Вторые блюда',
                url: ROUTES.CHILDRENS_DISHES.SECOND_COURSES,
            },
            GARNISHES: {
                name: 'Гарниры',
                url: ROUTES.CHILDRENS_DISHES.GARNISHES,
            },
            BAKERY: {
                name: 'Выпечка',
                url: ROUTES.CHILDRENS_DISHES.BAKERY,
            },
            GLUTEN_FREE: {
                name: 'Без глютена',
                url: ROUTES.CHILDRENS_DISHES.GLUTEN_FREE,
            },
            SUGAR_FREE: {
                name: 'Без сахара',
                url: ROUTES.CHILDRENS_DISHES.SUGAR_FREE,
            },
            ALLERGEN_FREE: {
                name: 'Без аллергенов',
                url: ROUTES.CHILDRENS_DISHES.ALLERGEN_FREE,
            },
            SUPPLEMENTARY_FEEDING: {
                name: 'Блюда для прикорма',
                url: ROUTES.CHILDRENS_DISHES.SUPPLEMENTARY_FEEDING,
            },
        },
    },
    THERAPEUTIC_NUTRITION: {
        name: CATEGORY_NAMES.THERAPEUTIC_NUTRITION,
        url: ROUTES.THERAPEUTIC_NUTRITION.CHILDRENS_DIET,
        nested: {
            CHILDRENS_DIET: {
                name: 'Детская диета',
                url: ROUTES.THERAPEUTIC_NUTRITION.CHILDRENS_DIET,
            },
            DIET_1: {
                name: 'Диета №1',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_1,
            },
            DIET_2: {
                name: 'Диета №2',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_2,
            },
            DIET_3: {
                name: 'Диета №3',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_3,
            },
            DIET_4: {
                name: 'Диета №4',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_4,
            },
            DIET_5: {
                name: 'Диета №5',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_5,
            },
            DIET_6: {
                name: 'Диета №6',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_6,
            },
            DIET_7: {
                name: 'Диета №7',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_7,
            },
            DIET_8: {
                name: 'Диета №8',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_8,
            },
            DIET_9: {
                name: 'Диета №9',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_9,
            },
            DIET_10: {
                name: 'Диета №10',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_10,
            },
            DIET_11: {
                name: 'Диета №11',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_11,
            },
            DIET_12: {
                name: 'Диета №12',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_12,
            },
            DIET_13: {
                name: 'Диета №13',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_13,
            },
            DIET_14: {
                name: 'Диета №14',
                url: ROUTES.THERAPEUTIC_NUTRITION.DIET_14,
            },
            GLUTEN_FREE: {
                name: 'Без глютена',
                url: ROUTES.THERAPEUTIC_NUTRITION.GLUTEN_FREE,
            },
            ALLERGEN_FREE: {
                name: 'Без аллергенов',
                url: ROUTES.THERAPEUTIC_NUTRITION.ALLERGEN_FREE,
            },
        },
    },
    NATIONAL_CUISINES: {
        name: CATEGORY_NAMES.NATIONAL_CUISINES,
        url: ROUTES.NATIONAL_CUISINES.AMERICAN,
        nested: {
            AMERICAN: {
                name: 'Американская кухня',
                url: ROUTES.NATIONAL_CUISINES.AMERICAN,
            },
            ARMENIAN: {
                name: 'Армянская кухня',
                url: ROUTES.NATIONAL_CUISINES.ARMENIAN,
            },
            GEORGIAN: {
                name: 'Грузинская кухня',
                url: ROUTES.NATIONAL_CUISINES.GEORGIAN,
            },
            ITALIAN: {
                name: 'Итальянская кухня',
                url: ROUTES.NATIONAL_CUISINES.ITALIAN,
            },
            SPANISH: {
                name: 'Испанская кухня',
                url: ROUTES.NATIONAL_CUISINES.SPANISH,
            },
            CHINESE: {
                name: 'Китайская кухня',
                url: ROUTES.NATIONAL_CUISINES.CHINESE,
            },
            MEXICAN: {
                name: 'Мексиканская кухня',
                url: ROUTES.NATIONAL_CUISINES.MEXICAN,
            },
            PANASIAN: {
                name: 'Паназиатская кухня',
                url: ROUTES.NATIONAL_CUISINES.PANASIAN,
            },
            RUSSIAN: {
                name: 'Русская кухня',
                url: ROUTES.NATIONAL_CUISINES.RUSSIAN,
            },
            TURKISH: {
                name: 'Турецкая кухня',
                url: ROUTES.NATIONAL_CUISINES.TURKISH,
            },
            FRENCH: {
                name: 'Французская кухня',
                url: ROUTES.NATIONAL_CUISINES.FRENCH,
            },
            SWEDISH: {
                name: 'Шведская кухня',
                url: ROUTES.NATIONAL_CUISINES.SWEDISH,
            },
            JAPANESE: {
                name: 'Японская кухня',
                url: ROUTES.NATIONAL_CUISINES.JAPANESE,
            },
            OTHER: {
                name: 'Другая кухня',
                url: ROUTES.NATIONAL_CUISINES.OTHER,
            },
        },
    },
    SAUCES: {
        name: CATEGORY_NAMES.SAUCES,
        url: ROUTES.SAUCES.MEAT,
        nested: {
            MEAT: {
                name: 'Соусы мясные',
                url: ROUTES.SAUCES.MEAT,
            },
            CHEESE: {
                name: 'Соусы сырные',
                url: ROUTES.SAUCES.CHEESE,
            },
            MARINADES: {
                name: 'Маринады',
                url: ROUTES.SAUCES.MARINADES,
            },
        },
    },
    DRINKS: {
        name: CATEGORY_NAMES.DRINKS,
        url: ROUTES.DRINKS.JUICES_AND_FRESHES,
        nested: {
            JUICES_AND_FRESHES: {
                name: 'Соки и фреши',
                url: ROUTES.DRINKS.JUICES_AND_FRESHES,
            },
            SMOOTHIES: {
                name: 'Смузи',
                url: ROUTES.DRINKS.SMOOTHIES,
            },
            COMPOTES: {
                name: 'Компоты',
                url: ROUTES.DRINKS.COMPOTES,
            },
            JELLIES: {
                name: 'Кисели',
                url: ROUTES.DRINKS.JELLIES,
            },
            COFFEE: {
                name: 'Кофе',
                url: ROUTES.DRINKS.COFFEE,
            },
            HERBAL_TEA: {
                name: 'Лечебный чай',
                url: ROUTES.DRINKS.HERBAL_TEA,
            },
            KVASS: {
                name: 'Квас',
                url: ROUTES.DRINKS.KVASS,
            },
            COCKTAILS: {
                name: 'Коктейли',
                url: ROUTES.DRINKS.COCKTAILS,
            },
            ALCOHOLIC: {
                name: 'Алкогольные',
                url: ROUTES.DRINKS.ALCOHOLIC,
            },
        },
    },
    SEMIMANUFACTURES: {
        name: CATEGORY_NAMES.SEMIMANUFACTURES,
        url: ROUTES.SEMIMANUFACTURES.MEAT,
        nested: {
            MEAT: {
                name: 'Мясные заготовки',
                url: ROUTES.SEMIMANUFACTURES.MEAT,
            },
            FISH: {
                name: 'Рыбные заготовки',
                url: ROUTES.SEMIMANUFACTURES.FISH,
            },
            CUCUMBER: {
                name: 'Из огурцов',
                url: ROUTES.SEMIMANUFACTURES.CUCUMBER,
            },
            TOMATO: {
                name: 'Из томатов',
                url: ROUTES.SEMIMANUFACTURES.TOMATO,
            },
            MUSHROOM: {
                name: 'Из грибов',
                url: ROUTES.SEMIMANUFACTURES.MUSHROOM,
            },
            VEGETABLE: {
                name: 'Овощные заготовки',
                url: ROUTES.SEMIMANUFACTURES.VEGETABLE,
            },
            SALADS_AND_CAVIAR: {
                name: 'Салаты и икра',
                url: ROUTES.SEMIMANUFACTURES.SALADS_AND_CAVIAR,
            },
            FRUIT_BERRY: {
                name: 'Из фруктов и ягод',
                url: ROUTES.SEMIMANUFACTURES.FRUIT_BERRY,
            },
        },
    },
};
