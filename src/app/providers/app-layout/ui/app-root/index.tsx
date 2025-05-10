import { Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { appRootStyles as styles } from './index.styles';

type AppRootProps = PropsWithChildren;

export const AppRoot: FC<AppRootProps> = ({ children }) => (
    <Box {...styles.container}>{children}</Box>
);
