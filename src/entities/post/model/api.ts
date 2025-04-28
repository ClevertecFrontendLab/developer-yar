import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

import { mockPosts } from '../consts/mock-posts';
import { Post } from './types';

export const postsApi = createApi({
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getAllPosts: builder.query<Post[], void>({
            queryFn: async () => ({ data: mockPosts }),
        }),
    }),
    reducerPath: 'postsApi',
});

export const { useGetAllPostsQuery } = postsApi;
