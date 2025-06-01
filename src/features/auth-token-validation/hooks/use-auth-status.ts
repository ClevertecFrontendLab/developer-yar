import { useEffect, useState } from 'react';

import { getAccessToken } from '~/shared/api';
import { useApiStatusSync } from '~/shared/model';

import { useLazyRefreshTokenQuery, useLazyValidateTokenQuery } from '../model/api';

export const useAuthStatus = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const [validateToken, { isLoading: isValidateTokenLoading, isError: isValidateTokenError }] =
        useLazyValidateTokenQuery();
    const [refreshToken, { isLoading: isRefreshTokenLoading, isError: isRefreshTokenError }] =
        useLazyRefreshTokenQuery();

    useApiStatusSync(isValidateTokenLoading || isRefreshTokenLoading, {
        isError: isValidateTokenError || isRefreshTokenError,
        type: 'auth',
    });

    useEffect(() => {
        const checkAuth = async () => {
            const token = getAccessToken();

            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                await validateToken().unwrap();
                setIsAuthenticated(true);
            } catch {
                try {
                    await refreshToken().unwrap();
                    setIsAuthenticated(true);
                } catch {
                    setIsAuthenticated(false);
                }
            }
        };

        checkAuth();
    }, [refreshToken, validateToken]);

    return { isAuthenticated };
};
