import { ApiEndpoints } from '~/query/constants/api.ts';
import { ApiGroupNames } from '~/query/constants/api-group-names.ts';
import { EndpointNames } from '~/query/constants/endpoint-names.ts';
import { Tags } from '~/query/constants/tags.ts';
import { apiSlice } from '~/query/create-api.ts';

export const postsApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.POSTS],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getPosts: builder.query<void, void>({
                providesTags: [Tags.POSTS],
                query: () => ({
                    apiGroupName: ApiGroupNames.POSTS,
                    method: 'GET',
                    name: EndpointNames.GET_POSTS,
                    url: ApiEndpoints.POSTS,
                }),
            }),
        }),
    });

export const { useGetPostsQuery } = postsApiSlice;
