import { Box } from '@chakra-ui/react';

import { getDisplayForBreakpoints } from '~/shared/lib';
import { MobileTabBar as _MobileTabBar } from '~/widgets/mobile-tab-bar';

import { mobileTabBarStyles as styles } from './index.styles';

const shownToLgBreakpoint = getDisplayForBreakpoints({ to: 'lg' });

export const MobileTabBar = () => (
    <Box {...shownToLgBreakpoint} {...styles.mobileTabBarWrapper}>
        <_MobileTabBar />
    </Box>
);
