import { FC } from 'react';

import { AppRoot } from './app-root';
import { AppStatus } from './app-status';
import { Content } from './content';
import { Header } from './header';
import { LeftSidebar } from './left-sidebar';
import { Main } from './main';
import { MobileTabBar } from './mobile-tab-bar';
import { RightSidebar } from './right-sidebar';

export const AppLayout: FC = () => (
    <AppRoot>
        <Header />

        <Main>
            <LeftSidebar />
            <Content />
            <RightSidebar />
        </Main>

        <MobileTabBar />

        <AppStatus />
    </AppRoot>
);
