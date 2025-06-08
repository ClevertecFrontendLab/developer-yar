import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { ROUTES } from '~/shared/routes';

export const useRedirectOnError = (isError?: boolean) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isError) navigate(ROUTES.HOME);
    }, [isError, navigate]);
};
