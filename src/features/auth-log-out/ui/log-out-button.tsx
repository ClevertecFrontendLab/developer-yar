import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { LogoutIcon } from '~/shared/ui/icons';

import { useLogout } from '../hooks/use-logout';
import { logOutButtonStyles as styles } from './log-out-button.styles';

export const LogOutButton: FC = () => {
    const { handleLogout } = useLogout();

    return (
        <Flex {...styles.container} onClick={handleLogout}>
            <LogoutIcon {...styles.icon} />
            <Text {...styles.label}>Выйти</Text>
        </Flex>
    );
};
