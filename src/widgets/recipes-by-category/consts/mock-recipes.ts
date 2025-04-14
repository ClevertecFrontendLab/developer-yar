import { CATEGORY_NAMES } from '~/shared/consts';

export const mockRecipes = [
    {
        id: 0,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        category: CATEGORY_NAMES.SECOND_COURSES,
        bookmarks: 1,
        emojies: 1,
    },
    {
        id: 1,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        category: CATEGORY_NAMES.SECOND_COURSES,
        bookmarks: 2,
        emojies: 1,
    },
    {
        id: 2,
        title: 'Стейк для вегетарианцев',
        description: '',
        category: CATEGORY_NAMES.SECOND_COURSES,
    },
    {
        id: 3,
        title: 'Котлеты из гречки и фасоли',
        description: '',
        category: CATEGORY_NAMES.SECOND_COURSES,
    },
    {
        id: 4,
        title: 'Сырный суп с лапшой и брокколи',
        description: '',
        category: CATEGORY_NAMES.FIRST_COURSES,
    },
];
