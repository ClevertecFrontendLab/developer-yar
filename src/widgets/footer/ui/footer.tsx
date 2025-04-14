import { Grid, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { LogOut } from '~/features/log-out';

import { footerStyles as styles } from './footer.styles';

export const Footer: FC = () => (
    <Grid as='footer' {...styles.footer}>
        <Text {...styles.version}>Версия программы 03.25</Text>
        <Text {...styles.rights}>
            Все права защищены,
            <br />
            ученический файл,
            <br />
            ©Клевер Технолоджи, 2025
        </Text>
        <LogOut />
    </Grid>
);
