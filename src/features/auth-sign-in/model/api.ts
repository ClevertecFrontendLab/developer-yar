import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';

import { SignInDataApi } from '../api/sign-in-data.api';

export const signInApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        checkAuth: builder.query<unknown, void>({
            query: () => ENDPOINTS.CHECK_AUTH,
        }),
        signIn: builder.mutation<unknown, SignInDataApi>({
            query: (body) => ({
                body,
                method: 'POST',
                url: ENDPOINTS.SIGN_IN,
            }),
        }),
    }),
    reducerPath: 'signInApi',
});

export const { useSignInMutation, useCheckAuthQuery, useLazyCheckAuthQuery } = signInApi;
