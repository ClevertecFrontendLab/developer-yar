import { Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { appRootStyles as styles } from './index.styles';

export const AppRoot: FC<PropsWithChildren> = ({ children }) => (
    <Box {...styles.container}>{children}</Box>
);
