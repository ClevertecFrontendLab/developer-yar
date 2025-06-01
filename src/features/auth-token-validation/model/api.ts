import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';

import { ValidateTokenResponse } from './types';

export const tokenValidationApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        refreshToken: builder.query<ValidateTokenResponse, void>({
            query: () => ENDPOINTS.REFRESH_TOKEN,
        }),
        validateToken: builder.query<ValidateTokenResponse, void>({
            query: () => ENDPOINTS.VALIDATE_TOKEN,
        }),
    }),
    reducerPath: 'tokenValidationApi',
});

export const { useLazyValidateTokenQuery, useLazyRefreshTokenQuery } = tokenValidationApi;
