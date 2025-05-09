import { Grid } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { mainStyles as styles } from './index.styles';

type MainProps = PropsWithChildren;

export const Main: FC<MainProps> = ({ children }) => (
    <Grid as='main' {...styles.mainGrid}>
        {children}
    </Grid>
);
