import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { MenuTree } from '~/entities/navigation';
import { LogOut } from '~/features/log-out';
import { getDisplayForBreakpoints } from '~/shared/lib';
import { InfoPanel } from '~/shared/ui/info-panel';

import { useHeaderOffset } from '../../hooks/use-header-offset';
import { leftSidebarStyles as styles } from './index.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

export const LeftSidebar: FC = memo(() => {
    const isDesktop = useBreakpointValue({ base: false, xl: true });
    const headerVisibleHeight = useHeaderOffset();

    return (
        <Flex {...shownFromXlBreakpoint} {...styles.leftSidebar(headerVisibleHeight)}>
            <Box {...styles.navigationWrapper}>{isDesktop && <MenuTree />}</Box>
            <Box {...styles.infoPanelWrapper}>
                <InfoPanel>
                    <LogOut />
                </InfoPanel>
            </Box>
        </Flex>
    );
});
