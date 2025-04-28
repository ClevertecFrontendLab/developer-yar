import { Recipe } from '~/entities/recipe';

import image1 from '../assets/mock-recipe-1.png';
import image2 from '../assets/mock-recipe-2.png';
import image3 from '../assets/mock-recipe-3.png';
import image4 from '../assets/mock-recipe-4.png';
import image5 from '../assets/mock-recipe-5.png';
import image6 from '../assets/mock-recipe-6.png';
import image7 from '../assets/mock-recipe-7.png';
import image8 from '../assets/mock-recipe-8.png';
import image9 from '../assets/mock-recipe-9.png';
import image10 from '../assets/mock-recipe-10.png';
import mockStepPhoto from '../assets/mock-step-photo.png';
import { mockRecipeAuthor } from './mock-recipe-author';

export const mockRecipes: Recipe[] = [
    {
        author: mockRecipeAuthor,
        bookmarks: 258,
        category: ['second-dish'],
        date: '2024-03-08T00:00:00Z',
        description: 'Ароматная лапша с курицей и шафраном, идеальное сочетание для сытного обеда.',
        id: '1',
        image: image8,
        ingredients: [
            { count: 200, measureUnit: 'г', title: 'лапша' },
            { count: 300, measureUnit: 'г', title: 'курица' },
            { count: 1, measureUnit: 'ч. л.', title: 'шафран' },
            { count: 1, measureUnit: 'шт.', title: 'лук' },
        ],
        likes: 1342,
        nutritionValue: { calories: 400, carbohydrates: 50, fats: 15, proteins: 30 },
        portions: 4,
        steps: [
            {
                description: 'Отварить лапшу.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Обжарить курицу с луком и шафраном.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
            {
                description: 'Смешать лапшу с курицей и подавать.',
                image: mockStepPhoto,
                stepNumber: 3,
            },
        ],
        subcategory: ['poultry-dish'],
        time: '40 минут',
        title: 'Лапша с курицей и шафраном',
    },
    {
        author: mockRecipeAuthor,
        bookmarks: 85,
        category: ['vegan', 'second-dish'],
        date: '2025-03-28T00:00:00Z',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        id: '0',
        image: image1,
        ingredients: [
            { count: 4, measureUnit: 'шт.', title: 'картошка' },
            { count: 2, measureUnit: 'шт.', title: 'болгарский перец' },
            { count: 200, measureUnit: 'г', title: 'фасоль' },
            { count: 200, measureUnit: 'мл', title: 'томатный соус' },
            { count: 1, measureUnit: 'шт.', title: 'лук' },
            { count: 0, measureUnit: 'по вкусу', title: 'специи' },
        ],
        likes: 152,
        meat: '',
        nutritionValue: { calories: 250, carbohydrates: 40, fats: 8, proteins: 5 },
        portions: 2,
        side: 'potatoes',
        steps: [
            {
                description: 'Нарезать картошку и перец.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Обжарить лук до золотистого цвета.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
            {
                description: 'Добавить картошку, перец и фасоль, залить соусом.',
                image: mockStepPhoto,
                stepNumber: 3,
            },
            {
                description: 'Тушить на медленном огне 30 минут.',
                image: mockStepPhoto,
                stepNumber: 4,
            },
        ],
        subcategory: ['snacks', 'vegetables'],
        time: '40 минут',
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
    },
    {
        author: mockRecipeAuthor,
        bookmarks: 85,
        category: ['vegan', 'snacks'],
        date: '2024-02-20T00:00:00Z',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов. Готовится это блюдо без яиц, без мяса и без сыра, из самых простых ингредиентов, а получается очень вкусно и сытно. Постный рецепт картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и даже на праздничный стол!',
        id: '2',
        image: image2,
        ingredients: [
            { count: 3, measureUnit: 'шт.', title: 'картошка' },
            { count: 200, measureUnit: 'г', title: 'грибы' },
            { count: 100, measureUnit: 'г', title: 'мука' },
            { count: 0, measureUnit: 'по вкусу', title: 'специи' },
        ],
        likes: 1152,
        nutritionValue: { calories: 180, carbohydrates: 28, fats: 6, proteins: 4 },
        portions: 2,
        side: 'potatoes',
        steps: [
            {
                description: 'Отварить картошку и сделать пюре.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Обжарить грибы до готовности.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
            {
                description: 'Сформировать рулетики и обжарить.',
                image: mockStepPhoto,
                stepNumber: 3,
            },
        ],
        subcategory: ['snacks', 'warm-snacks'],
        time: '30 минут',
        title: 'Картофельные рулетики с грибами',
    },
    {
        author: mockRecipeAuthor,
        bookmarks: 85,
        category: ['vegan', 'second-dish', 'national'],
        date: '2023-01-25T00:00:00Z',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья готовится с овощным соусом и соусом бешамель, а вместо листов для лазаньи используется тонкий лаваш.',
        id: '3',
        image: image3,
        ingredients: [
            { count: 3, measureUnit: 'листов', title: 'лаваш' },
            { count: 300, measureUnit: 'мл', title: 'овощной соус' },
            { count: 200, measureUnit: 'мл', title: 'соус бешамель' },
            { count: 100, measureUnit: 'г', title: 'сыр' },
        ],
        likes: 152,
        nutritionValue: { calories: 300, carbohydrates: 45, fats: 8, proteins: 12 },
        portions: 1,
        steps: [
            {
                description: 'Приготовить соусы.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Сложить слои лазаньи.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
            {
                description: 'Запекать 30 минут.',
                image: mockStepPhoto,
                stepNumber: 3,
            },
        ],
        subcategory: ['second-dish', 'vegetables', 'italian', 'snacks'],
        time: '1 час',
        title: 'Овощная лазанья из лаваша',
    },
    {
        author: mockRecipeAuthor,
        bookmarks: 85,
        category: ['vegan', 'second-dish'],
        date: '2023-02-15T00:00:00Z',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        id: '4',
        image: image4,
        ingredients: [
            { count: 150, measureUnit: 'г', title: 'булгур' },
            { count: 100, measureUnit: 'г', title: 'чечевица' },
            { count: 200, measureUnit: 'мл', title: 'томатный соус' },
            { count: 1, measureUnit: 'шт.', title: 'лук' },
        ],
        likes: 152,
        nutritionValue: { calories: 200, carbohydrates: 30, fats: 5, proteins: 10 },
        portions: 4,
        steps: [
            {
                description: 'Смешать булгур и чечевицу.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Сформировать тефтели и запечь.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
            {
                description: 'Подавать с соусом.',
                image: mockStepPhoto,
                stepNumber: 3,
            },
        ],
        subcategory: ['second-dish', 'poultry-dish'],
        time: '50 минут',
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
    },
    {
        author: mockRecipeAuthor,
        bookmarks: 124,
        category: ['vegan', 'second-dish'],
        date: '2024-03-01T00:00:00Z',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном восторге, очень вкусно! Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        id: '5',
        image: image5,
        ingredients: [
            { count: 6, measureUnit: 'шт.', title: 'картошка' },
            { count: 5, measureUnit: 'зубчиков', title: 'чеснок' },
            { count: 50, measureUnit: 'мл', title: 'масло' },
            { count: 0, measureUnit: 'по вкусу', title: 'специи' },
        ],
        likes: 342,
        nutritionValue: { calories: 220, carbohydrates: 35, fats: 7, proteins: 4 },
        portions: 2,
        side: 'potatoes',
        steps: [
            {
                description: 'Очистить и нарезать картошку.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Обжарить с чесноком.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
            {
                description: 'Подавать горячей.',
                image: mockStepPhoto,
                stepNumber: 3,
            },
        ],
        subcategory: ['side-dishes', 'second-dish', 'vegetables'],
        time: '30 минут',
        title: 'Чесночная картошка',
    },
    {
        author: mockRecipeAuthor,
        bookmarks: 2,
        category: ['vegan'],
        date: '2024-02-05T00:00:00Z',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        id: '6',
        image: image6,
        ingredients: [
            { count: 300, measureUnit: 'г', title: 'капуста' },
            { count: 50, measureUnit: 'г', title: 'мука' },
            { count: 0, measureUnit: 'по вкусу', title: 'специи' },
        ],
        likes: 1,
        nutritionValue: { calories: 150, carbohydrates: 20, fats: 4, proteins: 5 },
        portions: 4,
        steps: [
            {
                description: 'Нарезать капусту и отварить.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Смешать с мукой и сформировать котлеты.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
            {
                description: 'Обжарить до золотистой корочки.',
                image: mockStepPhoto,
                stepNumber: 3,
            },
        ],
        subcategory: ['second-dish', 'snacks'],
        time: '35 минут',
        title: 'Капустные котлеты',
    },
    {
        author: mockRecipeAuthor,
        bookmarks: 8,
        category: ['vegan', 'second-dish'],
        date: '2023-03-12T00:00:00Z',
        description: 'Сытное рагу из сезонных овощей и грибов, приправленное травами.',
        id: '7',
        image: image7,
        ingredients: [
            { count: 1, measureUnit: 'шт.', title: 'цуккини' },
            { count: 1, measureUnit: 'шт.', title: 'болгарский перец' },
            { count: 1, measureUnit: 'шт.', title: 'морковь' },
            { count: 2, measureUnit: 'шт.', title: 'картошка' },
            { count: 150, measureUnit: 'г', title: 'грибы' },
            { count: 0, measureUnit: 'по вкусу', title: 'специи' },
        ],
        likes: 60,
        nutritionValue: { calories: 200, carbohydrates: 30, fats: 8, proteins: 5 },
        portions: 2,
        steps: [
            {
                description: 'Нарезать все овощи.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Обжарить на сковороде.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
            {
                description: 'Добавить специи и тушить до готовности.',
                image: mockStepPhoto,
                stepNumber: 3,
            },
        ],
        subcategory: ['side-dishes', 'vegetables', 'snacks'],
        time: '1 час',
        title: 'Овощное рагу',
    },
    {
        author: mockRecipeAuthor,
        bookmarks: 10,
        category: ['salads'],
        date: '2023-03-20T00:00:00Z',
        description: 'Салат с обжаренными на гриле овощами и легкой заправкой.',
        id: '8',
        image: image9,
        ingredients: [
            { count: 1, measureUnit: 'шт.', title: 'цуккини' },
            { count: 1, measureUnit: 'шт.', title: 'болгарский перец' },
            { count: 1, measureUnit: 'шт.', title: 'баклажан' },
            { count: 0, measureUnit: 'по вкусу', title: 'оливковое масло' },
        ],
        likes: 80,
        nutritionValue: { calories: 150, carbohydrates: 20, fats: 6, proteins: 4 },
        steps: [
            {
                description: 'Обжарить овощи на гриле.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Смешать с заправкой и подавать.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
        ],
        subcategory: ['warm-salads'],
        time: '25 минут',
        title: 'Гриль-салат из куриного мяса и капусты',
    },
    {
        author: mockRecipeAuthor,
        bookmarks: 25,
        category: ['grilled-dish'],
        date: '2023-04-15T00:00:00Z',
        description:
            'Оригинальное и ароматное блюдо из куриного мяса и пекинской капусты. Пекинская капуста добавляет жареной курице нежность и сочность, а соевый соус, чеснок и острый перец придают лёгкую пикантность и аппетитный аромат.',
        id: '9',
        image: image10,
        ingredients: [
            { count: 300, measureUnit: 'г', title: 'курица' },
            { count: 1, measureUnit: 'шт.', title: 'чеснок' },
            { count: 1, measureUnit: 'шт.', title: 'лук' },
            { count: 20, measureUnit: 'г', title: 'масло' },
        ],
        likes: 120,
        nutritionValue: { calories: 230, carbohydrates: 10, fats: 10, proteins: 25 },
        steps: [
            {
                description: 'Подготавливаем все необходимые продукты.',
                image: mockStepPhoto,
                stepNumber: 1,
            },
            {
                description: 'Репчатый лук очищаем и нарезаем некрупными кубиками.',
                image: mockStepPhoto,
                stepNumber: 2,
            },
            {
                description:
                    'В сковороде разогреваем растительное масло и обжариваем лук на среднем огне до мягкости, около 5 минут.',
                image: mockStepPhoto,
                stepNumber: 3,
            },
            {
                description:
                    'Куриное филе промываем, обсушиваем и нарезаем небольшими кусочками, примерно 2х3 см.',
                image: mockStepPhoto,
                stepNumber: 4,
            },
            {
                description:
                    'Курицу добавляем к луку. Всыпаем чёрный молотый перец, кориандр и острый перец.',
                image: mockStepPhoto,
                stepNumber: 5,
            },
        ],
        subcategory: ['poultry'],
        time: '15 минут',
        title: 'Жареная курица с пекинской капустой и соевым соусом',
    },
];
