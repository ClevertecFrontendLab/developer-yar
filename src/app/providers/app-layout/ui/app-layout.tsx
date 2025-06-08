import { FC } from 'react';
import { Navigate } from 'react-router';

import { ROUTES } from '~/shared/routes';

import { useAppLayout } from '../hooks/use-app-layout';
import { AppRoot } from './app-root';
import { Content } from './content';
import { Header } from './header';
import { LeftSidebar } from './left-sidebar';
import { Main } from './main';
import { MobileTabBar } from './mobile-tab-bar';
import { RightSidebar } from './right-sidebar';

export const AppLayout: FC = () => {
    const { isAuth, shouldShowRightSidebar } = useAppLayout();

    if (!isAuth) {
        return <Navigate replace to={ROUTES.AUTH_SIGN_IN} />;
    } else
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
