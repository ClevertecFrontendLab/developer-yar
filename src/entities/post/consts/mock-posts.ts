import { mockUser1, mockUser2, mockUser3 } from '~/shared/consts';

import { Post } from '../model/types';

export const mockPosts: Post[] = [
    {
        author: mockUser1,
        id: 0,
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        author: mockUser2,
        id: 1,
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        author: mockUser3,
        id: 2,
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];
