import { Menu } from '../model/types';

export const mockMenu: Menu[] = [
    {
        id: '0',
        submenu: [
            {
                id: '1',
                title: 'Мясные салаты',
                url: '/salads/meat-salads',
            },
            {
                id: '2',
                title: 'Рыбные салаты',
                url: '/salads/fish-salads',
            },
            {
                id: '3',
                title: 'Овощные салаты',
                url: '/salads/vegetable-salads',
            },
            {
                id: '4',
                title: 'Тёплые салаты',
                url: '/salads/warm-salads',
            },
        ],
        title: 'Салаты',
        url: '/salads/meat-salads',
    },
    {
        id: '1',
        submenu: [
            {
                id: '1',
                title: 'Мясные закуски',
                url: '/snacks/meat-snacks',
            },
            {
                id: '2',
                title: 'Рыбные закуски',
                url: '/snacks/fish-snacks',
            },
            {
                id: '3',
                title: 'Овощные закуски',
                url: '/snacks/vegetable-snacks',
            },
            {
                id: '4',
                title: 'Тёплые закуски',
                url: '/snacks/warm-snacks',
            },
            {
                id: '5',
                title: 'Бутерброды',
                url: '/snacks/sandwiches',
            },
            {
                id: '6',
                title: 'Фастфуд',
                url: '/snacks/fast-food',
            },
        ],
        title: 'Закуски',
        url: '/snacks/meat-snacks',
    },
    {
        id: '2',
        submenu: [
            {
                id: '1',
                title: 'Мясные супы',
                url: '/first-dish/meat-soups',
            },
            {
                id: '2',
                title: 'Овощные супы',
                url: '/first-dish/vegetable-soups',
            },
            {
                id: '3',
                title: 'Бульоны',
                url: '/first-dish/broths',
            },
            {
                id: '4',
                title: 'Холодные супы',
                url: '/first-dish/cold-soups',
            },
            {
                id: '5',
                title: 'Диетические супы',
                url: '/first-dish/diet-soups',
            },
        ],
        title: 'Первые блюда',
        url: '/first-dish/meat-soups',
    },
    {
        id: '3',
        submenu: [
            {
                id: '1',
                title: 'Мясные',
                url: '/second-dish/meat',
            },
            {
                id: '2',
                title: 'Рыбные',
                url: '/second-dish/fish',
            },
            {
                id: '3',
                title: 'Овощные',
                url: '/second-dish/vegetable',
            },
            {
                id: '4',
                title: 'Из птицы',
                url: '/second-dish/poultry-dish',
            },
            {
                id: '5',
                title: 'Из грибов',
                url: '/second-dish/mushrooms',
            },
            {
                id: '6',
                title: 'Из субпродуктов',
                url: '/second-dish/offal',
            },
            {
                id: '7',
                title: 'На пару',
                url: '/second-dish/steamed',
            },
            {
                id: '8',
                title: 'Пельмени, вареники',
                url: '/second-dish/dumplings',
            },
            {
                id: '9',
                title: 'Мучные гарниры',
                url: '/second-dish/flour-garnishes',
            },
            {
                id: '10',
                title: 'Овощные гарниры',
                url: '/second-dish/vegetable-garnishes',
            },
            {
                id: '11',
                title: 'Пицца',
                url: '/second-dish/pizza',
            },
            {
                id: '12',
                title: 'Суши',
                url: '/second-dish/sushi',
            },
        ],
        title: 'Вторые блюда',
        url: '/second-dish/meat',
    },
    {
        id: '4',
        submenu: [
            {
                id: '1',
                title: 'Блины и оладьи',
                url: '/desserts-pastries/pancakes-and-fritters',
            },
            {
                id: '2',
                title: 'Пироги и пончики',
                url: '/desserts-pastries/pies-and-donuts',
            },
            {
                id: '3',
                title: 'Торты',
                url: '/desserts-pastries/cakes',
            },
            {
                id: '4',
                title: 'Рулеты',
                url: '/desserts-pastries/rolls',
            },
            {
                id: '5',
                title: 'Кексы и маффины',
                url: '/desserts-pastries/muffins',
            },
            {
                id: '6',
                title: 'Сырники и ватрушки',
                url: '/desserts-pastries/cheesecakes-and-vatrushki',
            },
            {
                id: '7',
                title: 'Из слоёного теста',
                url: '/desserts-pastries/filo-dough-dish',
            },
            {
                id: '8',
                title: 'Из заварного теста',
                url: '/desserts-pastries/custard-dough-dish',
            },
            {
                id: '9',
                title: 'Из дрожжевого теста',
                url: '/desserts-pastries/yeast-dough-dish',
            },
            {
                id: '10',
                title: 'Булочки и сдоба',
                url: '/desserts-pastries/buns-and-bakery-products',
            },
            {
                id: '11',
                title: 'Хлеб',
                url: '/desserts-pastries/bread',
            },
            {
                id: '12',
                title: 'Тесто на пиццу',
                url: '/desserts-pastries/pizza-dough-dish',
            },
            {
                id: '13',
                title: 'Кремы',
                url: '/desserts-pastries/creams',
            },
        ],
        title: 'Десерты, выпечка',
        url: '/desserts-pastries/pancakes-and-fritters',
    },
    {
        id: '5',
        submenu: [
            {
                id: '1',
                title: 'Говядина',
                url: '/grilled-dish/beef',
            },
            {
                id: '2',
                title: 'Свинина',
                url: '/grilled-dish/pork',
            },
            {
                id: '3',
                title: 'Птица',
                url: '/grilled-dish/poultry',
            },
            {
                id: '4',
                title: 'Рыба',
                url: '/grilled-dish/fish',
            },
            {
                id: '5',
                title: 'Грибы',
                url: '/grilled-dish/mushrooms',
            },
            {
                id: '6',
                title: 'Овощи',
                url: '/grilled-dish/vegetables',
            },
        ],
        title: 'Блюда на гриле',
        url: '/grilled-dish/beef',
    },
    {
        id: '6',
        submenu: [
            {
                id: '1',
                title: 'Закуски',
                url: '/vegan/snacks',
            },
            {
                id: '2',
                title: 'Первые блюда',
                url: '/vegan/first-dish',
            },
            {
                id: '3',
                title: 'Вторые блюда',
                url: '/vegan/second-dish',
            },
            {
                id: '4',
                title: 'Гарниры',
                url: '/vegan/side-dishes',
            },
            {
                id: '5',
                title: 'Десерты',
                url: '/vegan/desserts',
            },
            {
                id: '6',
                title: 'Выпечка',
                url: '/vegan/bakery',
            },
            {
                id: '7',
                title: 'Сыроедческие блюда',
                url: '/vegan/raw-foods',
            },
            {
                id: '8',
                title: 'Напитки',
                url: '/vegan/drinks',
            },
        ],
        title: 'Веганская кухня',
        url: '/vegan/snacks',
    },
    {
        id: '7',
        submenu: [
            {
                id: '1',
                title: 'Первые блюда',
                url: '/childrens-dish/first-dish',
            },
            {
                id: '2',
                title: 'Вторые блюда',
                url: '/childrens-dish/second-dish',
            },
            {
                id: '3',
                title: 'Гарниры',
                url: '/childrens-dish/garnishes',
            },
            {
                id: '4',
                title: 'Выпечка',
                url: '/childrens-dish/bakery',
            },
            {
                id: '5',
                title: 'Без глютена',
                url: '/childrens-dish/gluten-free',
            },
            {
                id: '6',
                title: 'Без сахара',
                url: '/childrens-dish/sugar-free',
            },
            {
                id: '7',
                title: 'Без аллергенов',
                url: '/childrens-dish/allergen-free',
            },
            {
                id: '8',
                title: 'Блюда для прикорма',
                url: '/childrens-dish/supplementary-feeding',
            },
        ],
        title: 'Детские блюда',
        url: '/childrens-dish/first-dish',
    },
    {
        id: '8',
        submenu: [
            {
                id: '1',
                title: 'Детская диета',
                url: "/therapeutic-nutrition/children's-diet",
            },
            {
                id: '2',
                title: 'Диета №1',
                url: '/therapeutic-nutrition/diet-1',
            },
            {
                id: '3',
                title: 'Диета №2',
                url: '/therapeutic-nutrition/diet-2',
            },
            {
                id: '4',
                title: 'Диета №3',
                url: '/therapeutic-nutrition/diet-3',
            },
            {
                id: '5',
                title: 'Диета №4',
                url: '/therapeutic-nutrition/diet-4',
            },
            {
                id: '6',
                title: 'Диета №5',
                url: '/therapeutic-nutrition/diet-5',
            },
            {
                id: '7',
                title: 'Диета №6',
                url: '/therapeutic-nutrition/diet-6',
            },
            {
                id: '8',
                title: 'Диета №7',
                url: '/therapeutic-nutrition/diet-7',
            },
            {
                id: '9',
                title: 'Диета №8',
                url: '/therapeutic-nutrition/diet-8',
            },
            {
                id: '10',
                title: 'Диета №9',
                url: '/therapeutic-nutrition/diet-9',
            },
            {
                id: '11',
                title: 'Диета №10',
                url: '/therapeutic-nutrition/diet-10',
            },
            {
                id: '12',
                title: 'Диета №11',
                url: '/therapeutic-nutrition/diet-11',
            },
            {
                id: '13',
                title: 'Диета №12',
                url: '/therapeutic-nutrition/diet-12',
            },
            {
                id: '14',
                title: 'Диета №13',
                url: '/therapeutic-nutrition/diet-13',
            },
            {
                id: '15',
                title: 'Диета №14',
                url: '/therapeutic-nutrition/diet-14',
            },
            {
                id: '16',
                title: 'Без глютена',
                url: '/therapeutic-nutrition/gluten-free',
            },
            {
                id: '17',
                title: 'Без аллергенов',
                url: '/therapeutic-nutrition/allergen-free',
            },
        ],
        title: 'Лечебное питание',
        url: "/therapeutic-nutrition/children's-diet",
    },
    {
        id: '9',
        submenu: [
            {
                id: '1',
                title: 'Американская кухня',
                url: '/national/american',
            },
            {
                id: '2',
                title: 'Армянская кухня',
                url: '/national/armenian',
            },
            {
                id: '3',
                title: 'Грузинская кухня',
                url: '/national/georgian',
            },
            {
                id: '4',
                title: 'Итальянская кухня',
                url: '/national/italian',
            },
            {
                id: '5',
                title: 'Испанская кухня',
                url: '/national/spanish',
            },
            {
                id: '6',
                title: 'Китайская кухня',
                url: '/national/chinese',
            },
            {
                id: '7',
                title: 'Мексиканская кухня',
                url: '/national/mexican',
            },
            {
                id: '8',
                title: 'Паназиатская кухня',
                url: '/national/panasian',
            },
            {
                id: '9',
                title: 'Русская кухня',
                url: '/national/russian',
            },
            {
                id: '10',
                title: 'Турецкая кухня',
                url: '/national/turkish',
            },
            {
                id: '11',
                title: 'Французская кухня',
                url: '/national/french',
            },
            {
                id: '12',
                title: 'Шведская кухня',
                url: '/national/swedish',
            },
            {
                id: '13',
                title: 'Японская кухня',
                url: '/national/japanese',
            },
            {
                id: '14',
                title: 'Другая кухня',
                url: '/national/other',
            },
        ],
        title: 'Национальные',
        url: '/national/american',
    },
    {
        id: '10',
        submenu: [
            {
                id: '1',
                title: 'Соусы мясные',
                url: '/sauces/meat-sauces',
            },
            {
                id: '2',
                title: 'Соусы сырные',
                url: '/sauces/cheese-sauces',
            },
            {
                id: '3',
                title: 'Маринады',
                url: '/sauces/marinades',
            },
        ],
        title: 'Соусы',
        url: '/sauces/meat-sauces',
    },
    {
        id: '11',
        submenu: [
            {
                id: '1',
                title: 'Соки и фреши',
                url: '/drinks/juices-and-freshes',
            },
            {
                id: '2',
                title: 'Смузи',
                url: '/drinks/smoothies',
            },
            {
                id: '3',
                title: 'Компоты',
                url: '/drinks/compotes',
            },
            {
                id: '4',
                title: 'Кисели',
                url: '/drinks/jellies',
            },
            {
                id: '5',
                title: 'Кофе',
                url: '/drinks/coffee',
            },
            {
                id: '6',
                title: 'Лечебный чай',
                url: '/drinks/herbal-tea',
            },
            {
                id: '7',
                title: 'Квас',
                url: '/drinks/kvass',
            },
            {
                id: '8',
                title: 'Коктейли',
                url: '/drinks/cocktails',
            },
            {
                id: '9',
                title: 'Алкогольные',
                url: '/drinks/alcoholic-drinks',
            },
        ],
        title: 'Напитки',
        url: '/drinks/juices-and-freshes',
    },
    {
        id: '12',
        submenu: [
            {
                id: '1',
                title: 'Мясные заготовки',
                url: '/semimanufactures/meat-preparations',
            },
            {
                id: '2',
                title: 'Рыбные заготовки',
                url: '/semimanufactures/fish-preparations',
            },
            {
                id: '3',
                title: 'Из огурцов',
                url: '/semimanufactures/cucumber-preparations',
            },
            {
                id: '4',
                title: 'Из томатов',
                url: '/semimanufactures/tomato-preparations',
            },
            {
                id: '5',
                title: 'Из грибов',
                url: '/semimanufactures/mushroom-preparations',
            },
            {
                id: '6',
                title: 'Овощные заготовки',
                url: '/semimanufactures/vegetable-preparations',
            },
            {
                id: '7',
                title: 'Салаты и икра',
                url: '/semimanufactures/salads-and-caviar',
            },
            {
                id: '8',
                title: 'Из фруктов и ягод',
                url: '/semimanufactures/fruit-berry-preparations',
            },
        ],
        title: 'Заготовки',
        url: '/semimanufactures/meat-preparations',
    },
];
