import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';

import { SignUpDataApi } from '../api/sign-up-data.api';

export const signUpApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        signUp: builder.mutation<unknown, SignUpDataApi>({
            query: (body) => ({
                body,
                method: 'POST',
                url: ENDPOINTS.SIGN_UP,
            }),
        }),
    }),
    reducerPath: 'signUpApi',
});

export const { useSignUpMutation } = signUpApi;
