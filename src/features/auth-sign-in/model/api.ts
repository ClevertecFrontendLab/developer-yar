import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';

import { SignInDataDto } from '../dto/sign-in-data.dto';

export const signInApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        signIn: builder.mutation<unknown, SignInDataDto>({
            query: (body) => ({
                body,
                method: 'POST',
                url: ENDPOINTS.SIGN_IN,
            }),
        }),
    }),
    reducerPath: 'signInApi',
});

export const { useSignInMutation } = signInApi;
