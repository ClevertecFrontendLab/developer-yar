import { Box, Flex, Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router';

import { WriteRecipe } from '~/features/write-recipe';
import { getDisplayForBreakpoints, useScrollOnNavigate } from '~/shared/lib';
import { Navigation } from '~/shared/ui/navigation';
import { StatsBar } from '~/shared/ui/stats-bar';
import { Footer } from '~/widgets/footer';
import { Header } from '~/widgets/header';
import { MobileTabBar } from '~/widgets/mobile-tab-bar';

import { appLayoutStyles as styles } from './app-layout.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });
const shownToLgBreakpoint = getDisplayForBreakpoints({ to: 'lg' });

export const AppLayout: FC = () => {
    useScrollOnNavigate();

    return (
        <Grid {...styles.container}>
            <Box {...styles.headerWrapper}>
                <Header />
            </Box>
            <Grid as='main' {...styles.mainGrid}>
                <Flex {...shownFromXlBreakpoint} {...styles.leftSidebar}>
                    <Box {...styles.navigationWrapper}>
                        <Navigation />
                    </Box>
                    <Box {...styles.footerWrapper}>
                        <Footer />
                    </Box>
                </Flex>
                <Box {...styles.contentArea}>
                    <Outlet />
                </Box>
                <Flex {...shownFromXlBreakpoint} {...styles.rightSidebar}>
                    <Box {...styles.statsBarWrapper}>
                        <StatsBar />
                    </Box>
                    <Box {...styles.writeRecipeWrapper}>
                        <WriteRecipe />
                    </Box>
                </Flex>
            </Grid>
            <Box {...shownToLgBreakpoint}>
                <MobileTabBar />
            </Box>
        </Grid>
    );
};
