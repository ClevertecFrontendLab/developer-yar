import { buildRoute } from '~/shared/lib';

import { ROUTE_CATEGORIES } from './route-categories';

export const ROUTES = {
    HOME: '/',
    THE_JUICIEST: '/the-juiciest',

    // salads
    SALADS: {
        MEAT: buildRoute(ROUTE_CATEGORIES.SALADS, 'meat-salads'),
        FISH: buildRoute(ROUTE_CATEGORIES.SALADS, 'fish-salads'),
        VEGETABLE: buildRoute(ROUTE_CATEGORIES.SALADS, 'vegetable-salads'),
        WARM: buildRoute(ROUTE_CATEGORIES.SALADS, 'warm-salads'),
    },

    // snacks
    SNACKS: {
        MEAT: buildRoute(ROUTE_CATEGORIES.SNACKS, 'meat-snacks'),
        FISH: buildRoute(ROUTE_CATEGORIES.SNACKS, 'fish-snacks'),
        VEGETABLE: buildRoute(ROUTE_CATEGORIES.SNACKS, 'vegetable-snacks'),
        WARM: buildRoute(ROUTE_CATEGORIES.SNACKS, 'warm-snacks'),
        SANDWICHES: buildRoute(ROUTE_CATEGORIES.SNACKS, 'sandwiches'),
        FAST_FOOD: buildRoute(ROUTE_CATEGORIES.SNACKS, 'fast-food'),
    },

    // first-courses
    FIRST_COURSES: {
        MEAT: buildRoute(ROUTE_CATEGORIES.FIRST_COURSES, 'meat-soups'),
        VEGETABLE: buildRoute(ROUTE_CATEGORIES.FIRST_COURSES, 'vegetable-soups'),
        BROTHS: buildRoute(ROUTE_CATEGORIES.FIRST_COURSES, 'broths'),
        COLD: buildRoute(ROUTE_CATEGORIES.FIRST_COURSES, 'cold-soups'),
        DIET: buildRoute(ROUTE_CATEGORIES.FIRST_COURSES, 'diet-soups'),
    },

    // second-courses
    SECOND_COURSES: {
        MEAT: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'meat'),
        FISH: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'fish'),
        VEGETABLE: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'vegetable'),
        POULTRY: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'poultry'),
        MUSHROOMS: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'mushrooms'),
        OFFAL: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'offal'),
        STEAMED: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'steamed'),
        DUMPLINGS: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'dumplings'),
        FLOUR_GARNISHES: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'flour-garnishes'),
        VEGETABLE_GARNISHES: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'vegetable-garnishes'),
        PIZZA: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'pizza'),
        SUSHI: buildRoute(ROUTE_CATEGORIES.SECOND_COURSES, 'sushi'),
    },

    // desserts-pastries
    DESSERTS_PASTRIES: {
        PANCAKES_AND_FRITTERS: buildRoute(
            ROUTE_CATEGORIES.DESSERTS_PASTRIES,
            'pancakes-and-fritters',
        ),
        PIES_AND_DONUTS: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'pies-and-donuts'),
        CAKES: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'cakes'),
        ROLLS: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'rolls'),
        MUFFINS: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'muffins'),
        CHEESECAKES_AND_VATRUSHKI: buildRoute(
            ROUTE_CATEGORIES.DESSERTS_PASTRIES,
            'cheesecakes-and-vatrushki',
        ),
        FILO_DOUGH: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'filo-dough-dishes'),
        CUSTARD_DOUGH: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'custard-dough-dishes'),
        YESTER_DOUGH: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'yeast-dough-dishes'),
        BUN_AND_BAKERY_PRODUCTS: buildRoute(
            ROUTE_CATEGORIES.DESSERTS_PASTRIES,
            'buns-and-bakery-products',
        ),
        BREAD: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'bread'),
        PIZZA_DOUGH: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'pizza-dough-dishes'),
        CREAMS: buildRoute(ROUTE_CATEGORIES.DESSERTS_PASTRIES, 'creams'),
    },

    // grilled-dishes
    GRILLED_DISHES: {
        BEEF: buildRoute(ROUTE_CATEGORIES.GRILLED_DISHES, 'beef'),
        PORK: buildRoute(ROUTE_CATEGORIES.GRILLED_DISHES, 'pork'),
        POULTRY: buildRoute(ROUTE_CATEGORIES.GRILLED_DISHES, 'poultry'),
        FISH: buildRoute(ROUTE_CATEGORIES.GRILLED_DISHES, 'fish'),
        MUSHROOMS: buildRoute(ROUTE_CATEGORIES.GRILLED_DISHES, 'mushrooms'),
        VEGETABLES: buildRoute(ROUTE_CATEGORIES.GRILLED_DISHES, 'vegetables'),
    },

    // vegan-cuisine
    VEGAN_CUISINE: {
        APPETIZERS: buildRoute(ROUTE_CATEGORIES.VEGAN_CUISINE, 'appetizers'),
        FIRST_COURSES: buildRoute(ROUTE_CATEGORIES.VEGAN_CUISINE, 'first-courses'),
        SECOND_COURSES: buildRoute(ROUTE_CATEGORIES.VEGAN_CUISINE, 'second-courses'),
        GARNISHES: buildRoute(ROUTE_CATEGORIES.VEGAN_CUISINE, 'garnishes'),
        DESSERTS: buildRoute(ROUTE_CATEGORIES.VEGAN_CUISINE, 'desserts'),
        BAKERY: buildRoute(ROUTE_CATEGORIES.VEGAN_CUISINE, 'bakery'),
        RAW_FOODS: buildRoute(ROUTE_CATEGORIES.VEGAN_CUISINE, 'raw-foods'),
        DRINKS: buildRoute(ROUTE_CATEGORIES.VEGAN_CUISINE, 'drinks'),
    },

    // children's-dishes
    CHILDRENS_DISHES: {
        FIRST_COURSES: buildRoute(ROUTE_CATEGORIES.CHILDRENS_DISHES, 'first-courses'),
        SECOND_COURSES: buildRoute(ROUTE_CATEGORIES.CHILDRENS_DISHES, 'second-courses'),
        GARNISHES: buildRoute(ROUTE_CATEGORIES.CHILDRENS_DISHES, 'garnishes'),
        BAKERY: buildRoute(ROUTE_CATEGORIES.CHILDRENS_DISHES, 'bakery'),
        GLUTEN_FREE: buildRoute(ROUTE_CATEGORIES.CHILDRENS_DISHES, 'gluten-free'),
        SUGAR_FREE: buildRoute(ROUTE_CATEGORIES.CHILDRENS_DISHES, 'sugar-free'),
        ALLERGEN_FREE: buildRoute(ROUTE_CATEGORIES.CHILDRENS_DISHES, 'allergen-free'),
        SUPPLEMENTARY_FEEDING: buildRoute(
            ROUTE_CATEGORIES.CHILDRENS_DISHES,
            'supplementary-feeding',
        ),
    },

    // therapeutic-nutrition
    THERAPEUTIC_NUTRITION: {
        CHILDRENS_DIET: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, "children's-diet"),
        DIET_1: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-1'),
        DIET_2: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-2'),
        DIET_3: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-3'),
        DIET_4: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-4'),
        DIET_5: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-5'),
        DIET_6: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-6'),
        DIET_7: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-7'),
        DIET_8: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-8'),
        DIET_9: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-9'),
        DIET_10: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-10'),
        DIET_11: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-11'),
        DIET_12: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-12'),
        DIET_13: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-13'),
        DIET_14: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'diet-14'),
        GLUTEN_FREE: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'gluten-free'),
        ALLERGEN_FREE: buildRoute(ROUTE_CATEGORIES.THERAPEUTIC_NUTRITION, 'allergen-free'),
    },

    // national-cuisines
    NATIONAL_CUISINES: {
        AMERICAN: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'american'),
        ARMENIAN: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'armenian'),
        GEORGIAN: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'georgian'),
        ITALIAN: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'italian'),
        SPANISH: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'spanish'),
        CHINESE: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'chinese'),
        MEXICAN: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'mexican'),
        PANASIAN: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'panasian'),
        RUSSIAN: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'russian'),
        TURKISH: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'turkish'),
        FRENCH: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'french'),
        SWEDISH: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'swedish'),
        JAPANESE: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'japanese'),
        OTHER: buildRoute(ROUTE_CATEGORIES.NATIONAL_CUISINES, 'other'),
    },

    // sauces
    SAUCES: {
        MEAT: buildRoute(ROUTE_CATEGORIES.SAUCES, 'meat-sauces'),
        CHEESE: buildRoute(ROUTE_CATEGORIES.SAUCES, 'cheese-sauces'),
        MARINADES: buildRoute(ROUTE_CATEGORIES.SAUCES, 'marinades'),
    },

    // drinks
    DRINKS: {
        JUICES_AND_FRESHES: buildRoute(ROUTE_CATEGORIES.DRINKS, 'juices-and-freshes'),
        SMOOTHIES: buildRoute(ROUTE_CATEGORIES.DRINKS, 'smoothies'),
        COMPOTES: buildRoute(ROUTE_CATEGORIES.DRINKS, 'compotes'),
        JELLIES: buildRoute(ROUTE_CATEGORIES.DRINKS, 'jellies'),
        COFFEE: buildRoute(ROUTE_CATEGORIES.DRINKS, 'coffee'),
        HERBAL_TEA: buildRoute(ROUTE_CATEGORIES.DRINKS, 'herbal-tea'),
        KVASS: buildRoute(ROUTE_CATEGORIES.DRINKS, 'kvass'),
        COCKTAILS: buildRoute(ROUTE_CATEGORIES.DRINKS, 'cocktails'),
        ALCOHOLIC: buildRoute(ROUTE_CATEGORIES.DRINKS, 'alcoholic-drinks'),
    },

    // semimanufactures
    SEMIMANUFACTURES: {
        MEAT: buildRoute(ROUTE_CATEGORIES.SEMIMANUFACTURES, 'meat-preparations'),
        FISH: buildRoute(ROUTE_CATEGORIES.SEMIMANUFACTURES, 'fish-preparations'),
        CUCUMBER: buildRoute(ROUTE_CATEGORIES.SEMIMANUFACTURES, 'cucumber-preparations'),
        TOMATO: buildRoute(ROUTE_CATEGORIES.SEMIMANUFACTURES, 'tomato-preparations'),
        MUSHROOM: buildRoute(ROUTE_CATEGORIES.SEMIMANUFACTURES, 'mushroom-preparations'),
        VEGETABLE: buildRoute(ROUTE_CATEGORIES.SEMIMANUFACTURES, 'vegetable-preparations'),
        SALADS_AND_CAVIAR: buildRoute(ROUTE_CATEGORIES.SEMIMANUFACTURES, 'salads-and-caviar'),
        FRUIT_BERRY: buildRoute(ROUTE_CATEGORIES.SEMIMANUFACTURES, 'fruit-berry-preparations'),
    },
};
