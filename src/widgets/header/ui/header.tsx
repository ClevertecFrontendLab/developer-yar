import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Slide, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { Breadcrumbs, MenuTree } from '~/entities/navigation';
import { UserStats } from '~/entities/user';
import { LogOutButton } from '~/features/auth-log-out';
import { DATA_TEST_ATTRIBUTES, mockCurrentUser } from '~/shared/consts';
import { getDisplayForBreakpoints, useToggleMenu } from '~/shared/lib';
import { InfoPanel } from '~/shared/ui/info-panel';
import { Logotype } from '~/shared/ui/logotype';
import { ProfileCard } from '~/shared/ui/profile-card';

import { BreadcrumbsMobile } from './breadcrumbs-mobile';
import { headerStyles as styles } from './header.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });
const shownToLgBreakpoint = getDisplayForBreakpoints({ to: 'lg' });

export const Header: FC = () => {
    const { isOpen, onClose, onToggle } = useToggleMenu();

    return (
        <Box
            as='header'
            data-test-id={DATA_TEST_ATTRIBUTES.HEADER}
            {...styles.headerContainer(isOpen)}
        >
            <Flex {...styles.headerContent}>
                <Box {...styles.logoBox}>
                    <Logotype />
                </Box>

                <Box {...shownFromXlBreakpoint} {...styles.breadcrumbsBox}>
                    <Breadcrumbs />
                </Box>

                <Box {...shownFromXlBreakpoint} {...styles.profileBox}>
                    <ProfileCard {...mockCurrentUser} />
                </Box>

                <Box {...shownToLgBreakpoint} {...styles.mobileUserStats(isOpen)}>
                    <UserStats />
                </Box>

                <Box {...shownToLgBreakpoint}>
                    <IconButton
                        aria-label='Navigation menu'
                        data-test-id={
                            isOpen
                                ? DATA_TEST_ATTRIBUTES.CLOSE_ICON
                                : DATA_TEST_ATTRIBUTES.HAMBURGER_ICON
                        }
                        icon={
                            isOpen ? (
                                <CloseIcon {...styles.closeMenuIcon} />
                            ) : (
                                <HamburgerIcon {...styles.openMenuIcon} />
                            )
                        }
                        onClick={onToggle}
                        {...styles.burgerButton}
                    />

                    <Slide in={isOpen}>
                        <Box as='span' onClick={onClose} {...styles.navOverlay} />
                        <Stack {...styles.slideOutMenuBox}>
                            <Box {...styles.breadcrumbsBox}>
                                <BreadcrumbsMobile onLinkClick={onClose} />
                            </Box>
                            <Box {...styles.menuListWrapper}>{isOpen && <MenuTree />}</Box>
                            <Box {...styles.infoPanelWrapper}>
                                <InfoPanel>
                                    <LogOutButton />
                                </InfoPanel>
                            </Box>
                        </Stack>
                    </Slide>
                </Box>
            </Flex>
        </Box>
    );
};
