import { useLocation } from 'react-router';

export const useIsActiveLink = (link: string): boolean => {
    const location = useLocation();
    return location.pathname === `/${link}`;
};
