import { matchPath, useLocation } from 'react-router';

import { useAuthStatus } from '~/features/auth-token-validation';
import { useHandleRedirectError } from '~/shared/model';
import { ROUTES } from '~/shared/routes';

export const useAppLayout = () => {
    useHandleRedirectError();

    const { isAuth } = useAuthStatus();
    const { pathname } = useLocation();

    const hideSidebarPatterns = [ROUTES.NEW_RECIPE, ROUTES.EDIT_RECIPE];

    const shouldShowRightSidebar = !hideSidebarPatterns.some(
        (pattern) => matchPath({ end: true, path: pattern }, pathname) !== null,
    );

    return { isAuth, shouldShowRightSidebar };
};
