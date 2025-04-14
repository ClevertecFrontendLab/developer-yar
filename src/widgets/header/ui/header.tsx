import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Slide } from '@chakra-ui/react';
import { FC } from 'react';

import { UserCard } from '~/entities/user';
import { mockCurrentUser } from '~/shared/consts';
import { getDisplayForBreakpoints, useToggleMenu } from '~/shared/lib';
import { Breadcrumbs } from '~/shared/ui/breadcrumbs';
import { Logotype } from '~/shared/ui/logotype';
import { Navigation } from '~/shared/ui/navigation';
import { StatsBar } from '~/shared/ui/stats-bar';

import { headerStyles as styles } from './header.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });
const shownToLgBreakpoint = getDisplayForBreakpoints({ to: 'lg' });

export const Header: FC = () => {
    const { isOpen, toggle } = useToggleMenu();

    return (
        <Box as='header' data-test-id='header' {...styles.headerContainer}>
            <Flex {...styles.headerContent}>
                <Box {...styles.logotypeContainer}>
                    <Logotype />
                </Box>
                <Box {...shownFromXlBreakpoint} {...styles.breadcrumbsContainer}>
                    <Breadcrumbs />
                </Box>
                <Box {...shownFromXlBreakpoint} {...styles.profileContainer}>
                    <UserCard {...mockCurrentUser} />
                </Box>
                <Box {...shownToLgBreakpoint}>
                    <StatsBar />
                </Box>
                <IconButton
                    icon={<HamburgerIcon boxSize={6} />}
                    onClick={toggle}
                    aria-label='Navigation menu'
                    {...shownToLgBreakpoint}
                    {...styles.burgerButton}
                />
                <Slide direction='right' in={isOpen} unmountOnExit={true}>
                    <Box {...shownToLgBreakpoint} {...styles.navigationContainer}>
                        <Navigation />
                    </Box>
                </Slide>
            </Flex>
        </Box>
    );
};
