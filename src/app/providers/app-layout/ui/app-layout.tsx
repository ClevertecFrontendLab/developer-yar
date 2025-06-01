import { FC } from 'react';
import { Navigate } from 'react-router';

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

    useAuthStatus();

    const { isAuthenticated } = useAuthStatus();

    if (!isAuthenticated) return <Navigate replace to={ROUTES.AUTH_SIGN_IN} />;

    return (
        <AppRoot>
            <Header />

            <Main>
                <LeftSidebar />
                <Content />
                <RightSidebar />
            </Main>

            <MobileTabBar />
        </AppRoot>
    );
};
