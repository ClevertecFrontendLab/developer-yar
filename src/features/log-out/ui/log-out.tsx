import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { LogoutIcon } from '~/shared/ui/icons';

import { logOutStyles as styles } from './log-out.styles';

export const LogOut: FC = () => (
    <Flex {...styles.container}>
        <LogoutIcon {...styles.icon} />
        <Text {...styles.label}>Выйти</Text>
    </Flex>
);
