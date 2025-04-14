import { Recipe } from '~/entities/recipe';
import { mockUser1, mockUser2 } from '~/shared/consts';

import image1 from '../assets/mock-the-juiciest-1.png';
import image2 from '../assets/mock-the-juiciest-2.png';
import image3 from '../assets/mock-the-juiciest-3.png';
import image4 from '../assets/mock-the-juiciest-4.png';
import image5 from '../assets/mock-the-juiciest-5.png';
import image6 from '../assets/mock-the-juiciest-6.png';
import image7 from '../assets/mock-the-juiciest-7.png';
import image8 from '../assets/mock-the-juiciest-8.png';

export const mockTheJuiciest: Recipe[] = [
    {
        id: 0,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Вторые блюда',
        image: image1,
        bookmarks: 258,
        emojies: 342,
        recommendedBy: mockUser2,
    },
    {
        id: 1,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Национальные',
        image: image2,
        bookmarks: 124,
        emojies: 384,
    },
    {
        id: 2,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Вторые блюда',
        image: image3,
        bookmarks: 159,
        emojies: 257,
        recommendedBy: mockUser1,
    },
    {
        id: 3,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Вторые блюда',
        image: image4,
        bookmarks: 124,
        emojies: 231,
    },
    {
        id: 4,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        category: 'Вторые блюда',
        image: image5,
        bookmarks: 120,
        emojies: 180,
    },
    {
        id: 5,
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        category: 'Детские блюда',
        image: image6,
        bookmarks: 85,
        emojies: 180,
    },
    {
        id: 6,
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        category: 'Блюда на гриле',
        image: image7,
        bookmarks: 85,
        emojies: 152,
    },
    {
        id: 7,
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        category: 'Вторые блюда',
        image: image8,
        bookmarks: 85,
        emojies: 150,
    },
];
