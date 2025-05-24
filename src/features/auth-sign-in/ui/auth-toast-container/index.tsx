import { Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { authToastContainerStyles as styles } from './index.styles';

export const AuthToastContainer: FC<PropsWithChildren> = ({ children }) => (
    <Box {...styles.container}>{children}</Box>
);
