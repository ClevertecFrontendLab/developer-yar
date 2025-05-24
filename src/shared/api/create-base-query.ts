import { BaseQueryFn, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getAccessToken } from '~/shared/api';
import { saveAccessToken } from '~/shared/api';

const prepareAuthHeader = (headers: Headers): Headers => {
    const token = getAccessToken();
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
};

export const createBaseQuery = (
    baseUrl: string = import.meta.env.VITE_DATA_API_URL,
): BaseQueryFn => {
    const rawBaseQuery = fetchBaseQuery({
        baseUrl,
        prepareHeaders: prepareAuthHeader,
    });

    return async (args, api, extraOptions) => {
        const result = await rawBaseQuery(args, api, extraOptions);

        const headers = result.meta?.response?.headers;
        const accessToken = headers?.get('authentication-access');
        if (accessToken) saveAccessToken(accessToken);

        return result;
    };
};
