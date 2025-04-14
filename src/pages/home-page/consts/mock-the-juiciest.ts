import { Recipe } from '~/entities/recipe';
import { mockUser1, mockUser2 } from '~/shared/consts';

import image1 from '../assets/mock-the-juiciest-1.png';
import image2 from '../assets/mock-the-juiciest-2.png';
import image3 from '../assets/mock-the-juiciest-3.png';
import image4 from '../assets/mock-the-juiciest-4.png';

export const mockTheJuiciest: Recipe[] = [
    {
        id: 0,
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Вторые блюда',
        image: image1,
        bookmarks: 85,
        emojies: 152,
    },
    {
        id: 1,
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Вторые блюда',
        image: image2,
        bookmarks: 159,
        emojies: 257,
        recommendedBy: mockUser1,
    },
    {
        id: 2,
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Вторые блюда',
        image: image3,
        bookmarks: 258,
        emojies: 342,
        recommendedBy: mockUser2,
    },
    {
        id: 3,
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Национальные',
        image: image4,
        bookmarks: 124,
        emojies: 324,
    },
];
