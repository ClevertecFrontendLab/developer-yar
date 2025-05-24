import { useNavigate } from 'react-router';

import { removeAccessToken } from '~/shared/api';
import { ROUTES } from '~/shared/routes';

export const useLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeAccessToken();
        navigate(ROUTES.AUTH_SIGN_IN, { replace: true });
    };

    return { handleLogout };
};
