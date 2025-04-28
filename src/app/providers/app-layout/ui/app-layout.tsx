import { Box, Flex, Grid, Stack, useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router';

import { MenuTree } from '~/entities/navigation';
import { UserStats } from '~/entities/user';
import { LogOut } from '~/features/log-out';
import { WriteRecipe } from '~/features/write-recipe';
import { getDisplayForBreakpoints, useScrollOnNavigate } from '~/shared/lib';
import { InfoPanel } from '~/shared/ui/info-panel';
import { Header } from '~/widgets/header';
import { MobileTabBar } from '~/widgets/mobile-tab-bar';

import { appLayoutStyles as styles } from './app-layout.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });
const shownToLgBreakpoint = getDisplayForBreakpoints({ to: 'lg' });

export const AppLayout: FC = () => {
    useScrollOnNavigate();

    const isDesktop = useBreakpointValue({ base: false, xl: true });

    return (
        <Box {...styles.container}>
            <Box {...styles.headerWrapper}>
                <Header />
            </Box>

            <Grid as='main' {...styles.mainGrid}>
                <Flex {...shownFromXlBreakpoint} {...styles.leftSidebar}>
                    <Box {...styles.navigationWrapper}>{isDesktop && <MenuTree />}</Box>

                    <Box {...styles.infoPanelWrapper}>
                        <InfoPanel>
                            <LogOut />
                        </InfoPanel>
                    </Box>
                </Flex>

                <Stack {...styles.contentArea}>
                    <Outlet />
                </Stack>

                <Flex {...shownFromXlBreakpoint} {...styles.rightSidebar}>
                    <Box {...styles.userStatsWrapper}>
                        <UserStats />
                    </Box>

                    <Box {...styles.writeRecipeWrapper}>
                        <WriteRecipe />
                    </Box>
                </Flex>
            </Grid>
            <Box {...shownToLgBreakpoint}>
                <MobileTabBar />
            </Box>
        </Box>
    );
};
