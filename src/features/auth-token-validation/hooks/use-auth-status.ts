import { useEffect, useState } from 'react';

import { getAccessToken } from '~/shared/api';

export const useAuthStatus = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuth = () => {
            const accessToken = getAccessToken();
            setIsAuthenticated(!!accessToken);
        };

        checkAuth();
    }, []);

    return { isAuthenticated };
};
