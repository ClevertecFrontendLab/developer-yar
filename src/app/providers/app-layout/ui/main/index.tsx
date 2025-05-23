import { Grid } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { mainStyles as styles } from './index.styles';

export const Main: FC<PropsWithChildren> = ({ children }) => (
    <Grid as='main' {...styles.mainGrid}>
        {children}
    </Grid>
);
