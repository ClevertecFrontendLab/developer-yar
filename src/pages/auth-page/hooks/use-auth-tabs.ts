import { useMemo } from 'react';
import { matchPath, useLocation, useNavigate } from 'react-router';

import { ROUTES } from '~/shared/routes';

const authPages = [ROUTES.AUTH_SIGN_IN, ROUTES.AUTH_SIGN_UP] as const;

export const useAuthTabs = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const index = useMemo(
        () => authPages.findIndex((path) => matchPath({ end: true, path }, pathname)),
        [pathname],
    );

    const onChange = (index: number) => {
        navigate(authPages[index]);
    };

    return {
        index,
        onChange,
    };
};
