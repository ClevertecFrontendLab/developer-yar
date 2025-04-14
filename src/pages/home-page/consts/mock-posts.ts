import { Post } from '~/entities/post';
import { mockUser1, mockUser2, mockUser3 } from '~/shared/consts';

export const mockPosts: Post[] = [
    {
        id: 0,
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        author: mockUser1,
    },
    {
        id: 1,
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        author: mockUser2,
    },
    {
        id: 2,
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        author: mockUser3,
    },
];
