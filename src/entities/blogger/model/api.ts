import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';
import { buildRelativeUrl, queryWithParams } from '~/shared/lib';

import { BloggerFollowApi } from '../api/blogger-follow.api';
import { mapBloggerInfoFromApi } from '../mappers/map-blogger-info-from-api';
import { mapBloggersFromApi } from '../mappers/map-bloggers-from-api';
import {
    BloggerInfo,
    BloggersData,
    GetAllBloggersQueryParams,
    GetBloggerByIdQueryParams,
} from './types';

export const bloggersApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        followBlogger: builder.mutation<void, BloggerFollowApi>({
            invalidatesTags: (_result, _error, dto) => [
                { id: dto.toUserId, type: 'BloggerInfo' },
                'BloggersList',
            ],
            query: (data) => ({
                body: data,
                method: 'PATCH',
                url: ENDPOINTS.FOLLOW_BLOGGER,
            }),
        }),
        getAllBloggers: builder.query<BloggersData, GetAllBloggersQueryParams>({
            providesTags: ['BloggersList'],
            query: (params: GetAllBloggersQueryParams) =>
                queryWithParams({ params, url: ENDPOINTS.BLOGGERS }),
            transformResponse: mapBloggersFromApi,
        }),
        getBloggerById: builder.query<BloggerInfo, GetBloggerByIdQueryParams>({
            providesTags: (_result, _error, params) => [
                { id: params.bloggerId, type: 'BloggerInfo' },
            ],
            query: ({ bloggerId, currentUserId }: GetBloggerByIdQueryParams) =>
                queryWithParams({
                    params: { currentUserId },
                    url: buildRelativeUrl(ENDPOINTS.BLOGGERS, bloggerId),
                }),
            transformResponse: mapBloggerInfoFromApi,
        }),
    }),
    reducerPath: 'bloggersApi',

    tagTypes: ['BloggersList', 'BloggerInfo', 'BloggerActivity'],
});

export const {
    endpoints: { getBloggerById },
    useGetAllBloggersQuery,
    useGetBloggerByIdQuery,
    useFollowBloggerMutation,
} = bloggersApi;
