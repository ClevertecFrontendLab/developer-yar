import { FC } from 'react';

import { useHandleRedirectError } from '~/shared/model';

import { AppRoot } from './app-root';
import { Content } from './content';
import { Header } from './header';
import { LeftSidebar } from './left-sidebar';
import { Main } from './main';
import { MobileTabBar } from './mobile-tab-bar';
import { RightSidebar } from './right-sidebar';

export const AppLayout: FC = () => {
    useHandleRedirectError();

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
