import { Grid, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { infoPanelStyles as styles } from './info-panel.styles';

type InfoPanelProps = PropsWithChildren;

export const InfoPanel: FC<InfoPanelProps> = ({ children }) => (
    <Grid {...styles.infoPanel}>
        <Text {...styles.version}>Версия программы 03.25</Text>
        <Text {...styles.rights}>
            Все права защищены, ученический файл,
            <br />© Клевер Технолоджи, 2025
        </Text>
        {children}
    </Grid>
);
