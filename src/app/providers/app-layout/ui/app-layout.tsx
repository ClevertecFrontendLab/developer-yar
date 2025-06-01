import { FC } from 'react';
import { matchPath, Navigate, useLocation } from 'react-router';

import { useAuthStatus } from '~/features/auth-token-validation';
import { useHandleRedirectError } from '~/shared/model';
import { ROUTES } from '~/shared/routes';

import { AppRoot } from './app-root';
import { Content } from './content';
import { Header } from './header';
import { LeftSidebar } from './left-sidebar';
import { Main } from './main';
import { MobileTabBar } from './mobile-tab-bar';
import { RightSidebar } from './right-sidebar';

export const AppLayout: FC = () => {
    useHandleRedirectError();

    const { isAuthenticated } = useAuthStatus();
    const { pathname } = useLocation();

    if (!isAuthenticated) {
        return <Navigate replace to={ROUTES.AUTH_SIGN_IN} />;
    }

    const hideSidebarPatterns = [ROUTES.NEW_RECIPE, ROUTES.EDIT_RECIPE];

    const shouldShowRightSidebar = !hideSidebarPatterns.some(
        (pattern) => matchPath({ end: true, path: pattern }, pathname) !== null,
    );

    return (
        <AppRoot>
            <Header />

            <Main>
                <LeftSidebar />
                <Content />
                {shouldShowRightSidebar && <RightSidebar />}
            </Main>

            <MobileTabBar />
        </AppRoot>
    );
};
