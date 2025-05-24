import { Box, Center, Flex, Image, Stack, Tabs, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link, Outlet } from 'react-router';

import { getDisplayForBreakpoints } from '~/shared/lib';
import { ROUTES } from '~/shared/routes';
import { LogoBigIcon } from '~/shared/ui/icons';
import { Tab, TabList } from '~/shared/ui/tabs';

import authPageImage from '../assets/auth-page-image.png';
import { useAuthTabs } from '../hooks/use-auth-tabs';
import { authPageStyles as styles } from './auth-page.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

const AuthPage: FC = () => {
    const { index, onChange } = useAuthTabs();

    return (
        <Flex {...styles.authPageWrapper}>
            <Center {...styles.contentWrapper}>
                <Stack {...styles.content}>
                    <LogoBigIcon {...styles.logotype} />

                    <Tabs index={index} onChange={onChange}>
                        <TabList {...styles.tabList}>
                            <Tab variant='auth'>
                                <Link to={ROUTES.AUTH_SIGN_IN}>Вход на сайт</Link>
                            </Tab>
                            <Tab variant='auth'>
                                <Link to={ROUTES.AUTH_SIGN_UP}>Регистрация</Link>
                            </Tab>
                        </TabList>
                        <Box {...styles.tabPanels}>
                            <Outlet />
                        </Box>
                    </Tabs>
                </Stack>
            </Center>
            <Image
                alt='Регистрация и авторизация'
                src={authPageImage}
                {...shownFromXlBreakpoint}
                {...styles.image}
            />
            <Flex {...styles.meta}>
                <Text {...styles.metaDescription}>
                    Все права защищены, ученический файл, © Клевер Технолоджи, 2025
                </Text>
                <Text {...shownFromXlBreakpoint} {...styles.metaDescription}>
                    – Лучший сервис для ваших кулинарных побед
                </Text>
            </Flex>
        </Flex>
    );
};

export default AuthPage;
