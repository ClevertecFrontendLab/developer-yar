import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';

import { SignUpDataDto } from '../dto/sign-up-data.dto';

export const signUpApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        signUp: builder.mutation<unknown, SignUpDataDto>({
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
