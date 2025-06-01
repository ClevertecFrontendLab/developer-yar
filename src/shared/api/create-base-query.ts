import {
    BaseQueryFn,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryReturnValue,
} from '@reduxjs/toolkit/query/react';

import { ENDPOINTS, ERRORS, getAccessToken } from '~/shared/api';
import { saveAccessToken } from '~/shared/api';

const prepareAuthHeader = (headers: Headers): Headers => {
    const token = getAccessToken();
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
};

const getAndSaveAccessToken = (
    result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
) => {
    const headers = result.meta?.response?.headers;
    const accessToken = headers?.get('authentication-access');

    if (accessToken) saveAccessToken(accessToken);
};

export const createBaseQuery = (
    baseUrl: string = import.meta.env.VITE_DATA_API_URL,
): BaseQueryFn => {
    const rawBaseQuery = fetchBaseQuery({
        baseUrl,
        credentials: 'include',
        prepareHeaders: prepareAuthHeader,
    });

    return async (args, api, extraOptions) => {
        const result = await rawBaseQuery(args, api, extraOptions);

        if (result.error && result.error.status === ERRORS.FORBIDDEN) {
            const refreshResult = await rawBaseQuery(
                { method: 'GET', url: ENDPOINTS.REFRESH_TOKEN },
                api,
                extraOptions,
            );

            if (refreshResult.data) {
                getAndSaveAccessToken(refreshResult);
                const retryResult = await rawBaseQuery(args, api, extraOptions);

                return retryResult;
            }
        }
        getAndSaveAccessToken(result);
        return result;
    };
};
