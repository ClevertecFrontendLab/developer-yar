import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';
import { buildRelativeUrl, queryWithParams } from '~/shared/lib';

import { BloggerFollowDto } from '../dto/blogger-follow.dto';
import { mapBloggerInfoFromDto } from '../mappers/map-blogger-info-from-dto';
import { mapBloggersFromDto } from '../mappers/map-bloggers-from-dto';
import {
    BloggerInfo,
    BloggersData,
    GetAllBloggersQueryParams,
    GetBloggerByIdQueryParams,
} from './types';

export const bloggersApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        followBlogger: builder.mutation<void, BloggerFollowDto>({
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
            transformResponse: mapBloggersFromDto,
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
            transformResponse: mapBloggerInfoFromDto,
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
