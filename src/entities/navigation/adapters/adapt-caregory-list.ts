import { CategoryDto } from '../dto/category.dto';

const getFallbackCategoryList = (): CategoryDto[] => [
    {
        _id: '67c46dc5f51967aa8390bee6',
        category: 'salads',
        description:
            'В том виде и разнообразии, к которому мы привыкли, салаты существуют только в России и нигде больше. Чем закусывать первую рюмку? Винегретом! Без чего не бывает Нового года? Без оливье. Чем угощать гостей на Восьмое марта? «Мимозой», желтой и пушистой, как сам весенний цветок.',
        icon: '/media/icons/b052e552-3f18-46a1-bb67-7664da1f80cb.svg',
        subCategories: [
            {
                _id: '67c46df5f51967aa8390bee7',
                category: 'meat-salads',
                rootCategoryId: '67c46dc5f51967aa8390bee6',
                title: 'Мясные салаты',
            },
            {
                _id: '67c46e19f51967aa8390bee8',
                category: 'fish-salads',
                rootCategoryId: '67c46dc5f51967aa8390bee6',
                title: 'Рыбные салаты',
            },
            {
                _id: '67c46e2bf51967aa8390bee9',
                category: 'vegetables-salads',
                rootCategoryId: '67c46dc5f51967aa8390bee6',
                title: 'Овощные салаты',
            },
            {
                _id: '67c46e3ff51967aa8390beea',
                category: 'warm-salads',
                rootCategoryId: '67c46dc5f51967aa8390bee6',
                title: 'Теплые салаты',
            },
        ],
        title: 'Салаты',
    },
    {
        _id: '67c46e93f51967aa8390beeb',
        category: 'snacks',
        description:
            'Небольшое вступление к основным блюдам, основная роль которого — возбудить аппетит, — вот классическое определение закуски. Но для русского стола закуска — это нечто большее.',
        icon: '/media/icons/d81dc799-aa68-4ae2-8c1b-f3fb6709c1fe.svg',
        subCategories: [
            {
                _id: '67c46eb2f51967aa8390beec',
                category: 'meat-snacks',
                rootCategoryId: '67c46e93f51967aa8390beeb',
                title: 'Мясные закуски',
            },
            {
                _id: '67c46ec4f51967aa8390beed',
                category: 'fish-snacks',
                rootCategoryId: '67c46e93f51967aa8390beeb',
                title: 'Рыбные закуски',
            },
            {
                _id: '67c46ed2f51967aa8390beee',
                category: 'vegetables-snacks',
                rootCategoryId: '67c46e93f51967aa8390beeb',
                title: 'Овощные закуски',
            },
            {
                _id: '67c46ee5f51967aa8390beef',
                category: 'warm-snacks',
                rootCategoryId: '67c46e93f51967aa8390beeb',
                title: 'Теплые закуски',
            },
            {
                _id: '67c46efbf51967aa8390bef0',
                category: 'warm-sandwiches',
                rootCategoryId: '67c46e93f51967aa8390beeb',
                title: 'Бутерброды',
            },
            {
                _id: '67c46f07f51967aa8390bef1',
                category: 'fast-food',
                rootCategoryId: '67c46e93f51967aa8390beeb',
                title: 'Фастфуд',
            },
        ],
        title: 'Закуски',
    },
    {
        _id: '67c4704cf51967aa8390bef2',
        category: 'first-dish',
        description:
            'Суп для нас — воплощение домашнего обеда. Он наполняет кухню особенным ароматом, сигнализирующим домашним: «Пора садиться за стол и брать большую ложку». ',
        icon: '/media/icons/0f1cff61-f5b6-4582-9e3e-c39dcf6855a6.svg',
        subCategories: [
            {
                _id: '67c47067f51967aa8390bef3',
                category: 'meat-soups',
                rootCategoryId: '67c4704cf51967aa8390bef2',
                title: 'Мясные супы',
            },
            {
                _id: '67c47074f51967aa8390bef4',
                category: 'vegetables-soups',
                rootCategoryId: '67c4704cf51967aa8390bef2',
                title: 'Овощные супы',
            },
            {
                _id: '67c47082f51967aa8390bef5',
                category: 'bouillons',
                rootCategoryId: '67c4704cf51967aa8390bef2',
                title: 'Бульоны',
            },
            {
                _id: '67c47090f51967aa8390bef6',
                category: 'cold-soups',
                rootCategoryId: '67c4704cf51967aa8390bef2',
                title: 'Холодные супы',
            },
            {
                _id: '67c4711af51967aa8390bef7',
                category: 'diet-soups',
                rootCategoryId: '67c4704cf51967aa8390bef2',
                title: 'Диетические супы',
            },
        ],
        title: 'Первые блюда',
    },
    {
        _id: '67c471b7f51967aa8390bef8',
        category: 'second-dish',
        description:
            'Основное блюдо — кульминация любого обеда или ужина. Обычно это мясо, птица или рыба, приготовленные целиком или порционно в духовке или на сковороде.',
        icon: '/media/icons/1193e7c3-c675-4faa-9b9a-c9d1a7691cb8.svg',
        subCategories: [
            {
                _id: '67c47208f51967aa8390bef9',
                category: 'meat',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Мясные',
            },
            {
                _id: '67c47218f51967aa8390befa',
                category: 'fish',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Рыбные',
            },
            {
                _id: '67c47222f51967aa8390befb',
                category: 'vegetables',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Овощные',
            },
            {
                _id: '67c47232f51967aa8390befc',
                category: 'poultry-dish',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Из птицы',
            },
            {
                _id: '67c47243f51967aa8390befd',
                category: 'mushroom-dish',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Из грибов',
            },
            {
                _id: '67c47250f51967aa8390befe',
                category: 'offal-dish',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Из субпродуктов',
            },
            {
                _id: '67c4727ff51967aa8390beff',
                category: 'steamed-soups',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'На пару',
            },
            {
                _id: '67c4728df51967aa8390bf00',
                category: 'dumplings',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Пельмени, вареники',
            },
            {
                _id: '67c4729ff51967aa8390bf01',
                category: 'flour-side-dishes',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Мучные гарниры',
            },
            {
                _id: '67c472b5f51967aa8390bf02',
                category: 'vegetable-side-dishes',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Овощные гарниры',
            },
            {
                _id: '67c472c5f51967aa8390bf03',
                category: 'pizza',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Пицца',
            },
            {
                _id: '67c472cdf51967aa8390bf04',
                category: 'sushi',
                rootCategoryId: '67c471b7f51967aa8390bef8',
                title: 'Суши',
            },
        ],
        title: 'Вторые блюда',
    },
    {
        _id: '67c47365f51967aa8390bf05',
        category: 'dessert',
        description:
            'Самая сакральная часть кулинарной науки. Есть в этом своя алхимия: как из разрозненных элементарных частиц вроде муки, воды, молока и масла рождаются воздушное тесто для профитролей, нежный массив домашнего «Наполеона» или хрустящее песочное печенье.',
        icon: '/media/icons/76f24a73-6ace-42b1-99f5-7adbc29b8ac0.svg',
        subCategories: [
            {
                _id: '67c47377f51967aa8390bf06',
                category: 'pancakes',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Блины и оладьи',
            },
            {
                _id: '67c47383f51967aa8390bf07',
                category: 'pies',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Пироги и пончики',
            },
            {
                _id: '67c47395f51967aa8390bf08',
                category: 'rolls',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Рулеты',
            },
            {
                _id: '67c4739ef51967aa8390bf09',
                category: 'cupcakes',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Кексы и маффины',
            },
            {
                _id: '67c473d6f51967aa8390bf0a',
                category: 'cottage-cheese-pancakes',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Сырники и ватрушки',
            },
            {
                _id: '67c473e5f51967aa8390bf0b',
                category: 'puff-pastry',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Из слоеного теста',
            },
            {
                _id: '67c473f4f51967aa8390bf0c',
                category: 'choux-pastry',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Из заварного теста',
            },
            {
                _id: '67c4740af51967aa8390bf0d',
                category: 'yeast-dough',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Из дрожжевого теста',
            },
            {
                _id: '67c4741af51967aa8390bf0e',
                category: 'bun',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Булочки и сдоба',
            },
            {
                _id: '67c47490f51967aa8390bf0f',
                category: 'bread',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Хлеб',
            },
            {
                _id: '67c4749bf51967aa8390bf10',
                category: 'pizza-dough',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Тесто на пиццу',
            },
            {
                _id: '67c474a5f51967aa8390bf11',
                category: 'creams',
                rootCategoryId: '67c47365f51967aa8390bf05',
                title: 'Кремы',
            },
        ],
        title: 'Десерты и выпечка',
    },
    {
        _id: '67c47587f51967aa8390bf12',
        category: 'grilled-dishes',
        description:
            'Еда, приготовленная на гриле, имеет особый аромат и вкус. Даже обычная куриная грудка станет изысканным блюдом при готовке на огне, что уж говорить о стейках, рёбрышках.',
        icon: '/media/icons/6600bab0-6082-4766-8376-ca70c93c916f.svg',
        subCategories: [
            {
                _id: '67c475a0f51967aa8390bf13',
                category: 'grilled-beef',
                rootCategoryId: '67c47587f51967aa8390bf12',
                title: 'Говядина',
            },
            {
                _id: '67c475abf51967aa8390bf14',
                category: 'grilled-pork',
                rootCategoryId: '67c47587f51967aa8390bf12',
                title: 'Свинина',
            },
            {
                _id: '67c475b6f51967aa8390bf15',
                category: 'grilled-poultry',
                rootCategoryId: '67c47587f51967aa8390bf12',
                title: 'Птица',
            },
            {
                _id: '67c475c0f51967aa8390bf16',
                category: 'grilled-fish',
                rootCategoryId: '67c47587f51967aa8390bf12',
                title: 'Рыба',
            },
            {
                _id: '67c475c9f51967aa8390bf17',
                category: 'grilled-mushrooms',
                rootCategoryId: '67c47587f51967aa8390bf12',
                title: 'Грибы',
            },
            {
                _id: '67c475d9f51967aa8390bf18',
                category: 'grilled-vegetables',
                rootCategoryId: '67c47587f51967aa8390bf12',
                title: 'Овощи',
            },
        ],
        title: 'Блюда на гриле',
    },
    {
        _id: '67c48d99d02fb83fc3d8100f',
        category: 'vegan',
        description:
            'Веганская кухня предлагает бесчисленное множество вариантов блюд, включая разнообразные супы, салаты, гарниры, основные блюда и десерты, приготовленные из самых разнообразных растительных ингредиентов.',
        icon: '/media/icons/35305129-05b0-49d9-a634-1ca4da7195e5.svg',
        subCategories: [
            {
                _id: '67c48e627b493acd8a41030c',
                category: 'snacks',
                rootCategoryId: '67c48d99d02fb83fc3d8100f',
                title: 'Закуски',
            },
            {
                _id: '67c48f07ed67ca980917d64c',
                category: 'first-dish',
                rootCategoryId: '67c48d99d02fb83fc3d8100f',
                title: 'Первые блюда',
            },
            {
                _id: '67c48f28ed67ca980917d64d',
                category: 'second-dish',
                rootCategoryId: '67c48d99d02fb83fc3d8100f',
                title: 'Вторые блюда',
            },
            {
                _id: '67c48f60ed67ca980917d64e',
                category: 'side-dishes',
                rootCategoryId: '67c48d99d02fb83fc3d8100f',
                title: 'Гарниры',
            },
            {
                _id: '67c48f6ded67ca980917d64f',
                category: 'desserts',
                rootCategoryId: '67c48d99d02fb83fc3d8100f',
                title: 'Десерты',
            },
            {
                _id: '67c48f7aed67ca980917d650',
                category: 'bakery',
                rootCategoryId: '67c48d99d02fb83fc3d8100f',
                title: 'Выпечка',
            },
            {
                _id: '67c48f85ed67ca980917d651',
                category: 'row-food-dishes',
                rootCategoryId: '67c48d99d02fb83fc3d8100f',
                title: 'Сыроедческие блюда',
            },
            {
                _id: '67c48f97ed67ca980917d652',
                category: 'drinks',
                rootCategoryId: '67c48d99d02fb83fc3d8100f',
                title: 'Напитки',
            },
        ],
        title: 'Веганская кухня',
    },
    {
        _id: '67c4941eed67ca980917d653',
        category: 'children-dishes',
        description: 'Вкусные и полезные блюда для детей',
        icon: '/media/icons/6a9ef3b6-9c48-4844-a3ff-784a9f9f4de2.svg',
        subCategories: [
            {
                _id: '67c49443ed67ca980917d654',
                category: 'first-dish',
                rootCategoryId: '67c4941eed67ca980917d653',
                title: 'Первые блюда',
            },
            {
                _id: '67c49471ed67ca980917d655',
                category: 'second-dish',
                rootCategoryId: '67c4941eed67ca980917d653',
                title: 'Вторые блюда',
            },
            {
                _id: '67c49480ed67ca980917d656',
                category: 'side-dishes',
                rootCategoryId: '67c4941eed67ca980917d653',
                title: 'Гарниры',
            },
            {
                _id: '67c49686ed67ca980917d657',
                category: 'bakery',
                rootCategoryId: '67c4941eed67ca980917d653',
                title: 'Выпечка',
            },
            {
                _id: '67c49695ed67ca980917d658',
                category: 'gluten-dish',
                rootCategoryId: '67c4941eed67ca980917d653',
                title: 'Без глютена',
            },
            {
                _id: '67c496a5ed67ca980917d659',
                category: 'sugar-dish',
                rootCategoryId: '67c4941eed67ca980917d653',
                title: 'Без сахара',
            },
            {
                _id: '67c496c5ed67ca980917d65a',
                category: 'allergen-dishes',
                rootCategoryId: '67c4941eed67ca980917d653',
                title: 'Без аллергенов',
            },
            {
                _id: '67c496e1ed67ca980917d65b',
                category: 'for-baby',
                rootCategoryId: '67c4941eed67ca980917d653',
                title: 'Блюда для прикорма',
            },
        ],
        title: 'Детские блюда',
    },
    {
        _id: '67c49716ed67ca980917d65c',
        category: 'healthy-food',
        description:
            'Лечебные диеты способствуют скорейшему выздоровлению, восполняя недостаток питательных веществ и витаминов',
        icon: '/media/icons/76194b0b-b336-4baa-8c54-43e828b0c561.svg',
        subCategories: [
            {
                _id: '67c49732ed67ca980917d65d',
                category: 'children-diet',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Детская диета',
            },
            {
                _id: '67c4974aed67ca980917d65e',
                category: 'diet-1',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №1',
            },
            {
                _id: '67c4974fed67ca980917d65f',
                category: 'diet-2',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №2',
            },
            {
                _id: '67c49752ed67ca980917d660',
                category: 'diet-3',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №3',
            },
            {
                _id: '67c49757ed67ca980917d661',
                category: 'diet-4',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №4',
            },
            {
                _id: '67c4975bed67ca980917d662',
                category: 'diet-5',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №5',
            },
            {
                _id: '67c49760ed67ca980917d663',
                category: 'diet-6',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №6',
            },
            {
                _id: '67c49765ed67ca980917d664',
                category: 'diet-7',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №7',
            },
            {
                _id: '67c49769ed67ca980917d665',
                category: 'diet-8',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №8',
            },
            {
                _id: '67c4976eed67ca980917d666',
                category: 'diet-9',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №9',
            },
            {
                _id: '67c49775ed67ca980917d667',
                category: 'diet-10',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №10',
            },
            {
                _id: '67c49778ed67ca980917d668',
                category: 'diet-11',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №11',
            },
            {
                _id: '67c4977ced67ca980917d669',
                category: 'diet-12',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Диета №12',
            },
            {
                _id: '67c49a3aed67ca980917d66a',
                category: 'gluten-free-diet',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Без глютена',
            },
            {
                _id: '67c49a56ed67ca980917d66b',
                category: 'allergen-free-diet',
                rootCategoryId: '67c49716ed67ca980917d65c',
                title: 'Без аллергенов',
            },
        ],
        title: 'Лечебное питание',
    },
    {
        _id: '67c49b8ded67ca980917d66c',
        category: 'national',
        description: 'Популярные блюда разных стран',
        icon: '/media/icons/fa7b6be6-9a0e-42d9-8b95-4a378a96782a.svg',
        subCategories: [
            {
                _id: '67c49ff3ed67ca980917d66d',
                category: 'american',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Американская кухня',
            },
            {
                _id: '67c4a003ed67ca980917d66e',
                category: 'armenians',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Армянская кухня',
            },
            {
                _id: '67c4a00fed67ca980917d66f',
                category: 'greek',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Греческая кухня',
            },
            {
                _id: '67c4a01bed67ca980917d670',
                category: 'georgian',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Грузинская кухня',
            },
            {
                _id: '67c4a025ed67ca980917d671',
                category: 'italian',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Итальянская кухня',
            },
            {
                _id: '67c4a02eed67ca980917d672',
                category: 'spanish',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Испанская кухня',
            },
            {
                _id: '67c4a038ed67ca980917d673',
                category: 'chinese',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Китайская кухня',
            },
            {
                _id: '67c4a045ed67ca980917d674',
                category: 'mexican',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Мексиканская кухня',
            },
            {
                _id: '67c4a050ed67ca980917d675',
                category: 'pan-asian',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Паназиатская кухня',
            },
            {
                _id: '67c4a05bed67ca980917d676',
                category: 'russian',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Русская кухня',
            },
            {
                _id: '67c4a067ed67ca980917d677',
                category: 'turkish',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Турецкая кухня',
            },
            {
                _id: '67c4a072ed67ca980917d678',
                category: 'french',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Французская кухня',
            },
            {
                _id: '67c4a083ed67ca980917d679',
                category: 'swedish',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Шведская кухня',
            },
            {
                _id: '67c4a08ded67ca980917d67a',
                category: 'japanese',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Японская кухня',
            },
            {
                _id: '67c4a097ed67ca980917d67b',
                category: 'different',
                rootCategoryId: '67c49b8ded67ca980917d66c',
                title: 'Другая кухня',
            },
        ],
        title: 'Национальные',
    },

    {
        _id: '67c4a0c5ed67ca980917d67c',
        category: 'souses',
        description: 'Соус — визитная карточка любого блюда.',
        icon: '/media/icons/8a17f215-ecea-45e1-aa82-3480dbb43372.svg',
        subCategories: [
            {
                _id: '67c4a0e0ed67ca980917d67d',
                category: 'meat-souses',
                rootCategoryId: '67c4a0c5ed67ca980917d67c',
                title: 'Соусы мясные',
            },
            {
                _id: '67c4a0eced67ca980917d67e',
                category: 'cheese-souses',
                rootCategoryId: '67c4a0c5ed67ca980917d67c',
                title: 'Соусы сырные',
            },
            {
                _id: '67c4a105ed67ca980917d67f',
                category: 'marinades',
                rootCategoryId: '67c4a0c5ed67ca980917d67c',
                title: 'Маринады',
            },
        ],
        title: 'Соусы',
    },

    {
        _id: '67c4a130ed67ca980917d680',
        category: 'zagotovki',
        description:
            'Мы давно перестали относиться к консервированию как к унылой обязанности. Солить огурцы, квасить капусту, мариновать помидоры и грибы — это не только бюджетный способ обеспечить себя витаминами на зиму, но и в каком-то смысле акт творчества.',
        icon: '/media/icons/5992eec2-4144-4db4-8401-0195bbb0b1f9.svg',
        subCategories: [
            {
                _id: '67c4a156ed67ca980917d681',
                category: 'meat-zagotovki',
                rootCategoryId: '67c4a130ed67ca980917d680',
                title: 'Мясные заготовки',
            },
            {
                _id: '67c4a165ed67ca980917d682',
                category: 'fish-zagotovki',
                rootCategoryId: '67c4a130ed67ca980917d680',
                title: 'Рыбные заготовки',
            },
            {
                _id: '67c4a177ed67ca980917d683',
                category: 'cucumber-zagotovki',
                rootCategoryId: '67c4a130ed67ca980917d680',
                title: 'Из огурцов',
            },
            {
                _id: '67c4a189ed67ca980917d684',
                category: 'tomato-zagotovki',
                rootCategoryId: '67c4a130ed67ca980917d680',
                title: 'Из томатов',
            },
            {
                _id: '67c4a199ed67ca980917d685',
                category: 'mushroom-zagotovki',
                rootCategoryId: '67c4a130ed67ca980917d680',
                title: 'Из грибов',
            },
            {
                _id: '67c4a1a4ed67ca980917d686',
                category: 'vegetables-zagotovki',
                rootCategoryId: '67c4a130ed67ca980917d680',
                title: 'Овощные заготовки',
            },
            {
                _id: '67c4a1d1ed67ca980917d687',
                category: 'salads-zagotovki',
                rootCategoryId: '67c4a130ed67ca980917d680',
                title: 'Салаты, икра',
            },
            {
                _id: '67c4a1e6ed67ca980917d688',
                category: 'fruit-zagotovki',
                rootCategoryId: '67c4a130ed67ca980917d680',
                title: 'Из фруктов и ягод',
            },
        ],
        title: 'Домашние заготовки',
    },

    {
        _id: '67c4a2888de8ed789d508971',
        category: 'drinks',
        description:
            'Культура приготовления напитков — целая вселенная. Кофе, чай, какао — классические напитки на завтрак. Компоты, морсы, соки — на обед. Вечером не грех выпить коктейль. А есть еще напитки сезонные: зимние и согревающие (глег, грог, пунш или глинтвейн) и прохладительные для жаркого лета (лимонад, крюшон или сангрия).',
        icon: '/media/icons/4223cd13-067c-47ed-953d-417feb71c9cc.svg',
        subCategories: [
            {
                _id: '67c4a4898de8ed789d508972',
                category: 'juices',
                rootCategoryId: '67c4a2888de8ed789d508971',
                title: 'Соки и фреши',
            },
            {
                _id: '67c4a4968de8ed789d508973',
                category: 'smoothie',
                rootCategoryId: '67c4a2888de8ed789d508971',
                title: 'Смузи',
            },
            {
                _id: '67c4a49f8de8ed789d508974',
                category: 'compotes',
                rootCategoryId: '67c4a2888de8ed789d508971',
                title: 'Компоты',
            },
            {
                _id: '67c4a4aa8de8ed789d508975',
                category: 'jelly',
                rootCategoryId: '67c4a2888de8ed789d508971',
                title: 'Кисели',
            },
            {
                _id: '67c4a4b38de8ed789d508976',
                category: 'coffee',
                rootCategoryId: '67c4a2888de8ed789d508971',
                title: 'Кофе',
            },
            {
                _id: '67c4a4bb8de8ed789d508977',
                category: 'health-tea',
                rootCategoryId: '67c4a2888de8ed789d508971',
                title: 'Лечебный чай',
            },
            {
                _id: '67c4a4c68de8ed789d508978',
                category: 'kvass',
                rootCategoryId: '67c4a2888de8ed789d508971',
                title: 'Квас',
            },
            {
                _id: '67c4a4d08de8ed789d508979',
                category: 'cocktails',
                rootCategoryId: '67c4a2888de8ed789d508971',
                title: 'Коктейли',
            },
            {
                _id: '67c4a4dd8de8ed789d50897a',
                category: 'alcohol',
                rootCategoryId: '67c4a2888de8ed789d508971',
                title: 'Алкогольные',
            },
        ],
        title: 'Напитки',
    },
];

const isTestEnv = () => typeof window !== 'undefined' && 'Cypress' in window;

const isEmptyObject = (obj: unknown): obj is object =>
    obj != null && typeof obj === 'object' && Object.keys(obj).length === 0;

export const adaptCategoryList = (data: CategoryDto[]): CategoryDto[] => {
    if (isEmptyObject(data) && isTestEnv()) {
        return getFallbackCategoryList();
    }

    return data;
};
