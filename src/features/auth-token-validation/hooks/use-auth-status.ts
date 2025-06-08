import { useEffect, useState } from 'react';

import { getAccessToken } from '~/shared/api';
import { useApiStatusSync } from '~/shared/model';

import { useLazyRefreshTokenQuery, useLazyValidateTokenQuery } from '../model/api';

export const useAuthStatus = () => {
    const [isAuth, setIsAuth] = useState(true);

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
                setIsAuth(false);
                return;
            }

            try {
                await validateToken().unwrap();
                setIsAuth(true);
            } catch {
                try {
                    await refreshToken().unwrap();
                    setIsAuth(true);
                } catch {
                    setIsAuth(false);
                }
            }
        };

        checkAuth();
    }, [refreshToken, validateToken]);

    return { isAuth };
};
