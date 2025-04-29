import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const useScrollOnNavigate = (): void => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            behavior: 'auto',
            top: 0,
        });
    }, [pathname]);
};
