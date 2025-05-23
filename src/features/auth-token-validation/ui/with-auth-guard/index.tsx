import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router';

import { ROUTES } from '~/shared/routes';

import { useAuthStatus } from '../../hooks/use-auth-status';

export const withAuthGuard: FC<ReactNode> = (element: ReactNode) => {
    const GuardedComponent = () => {
        const { isAuthenticated } = useAuthStatus();

        if (isAuthenticated === null) return null;

        return !isAuthenticated ? <Navigate replace to={ROUTES.AUTH_SIGN_IN} /> : element;
    };

    return <GuardedComponent />;
};
