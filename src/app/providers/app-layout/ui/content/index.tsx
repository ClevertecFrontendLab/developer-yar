import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Outlet } from 'react-router';

import { contentStyles as styles } from './index.styles';

export const Content: FC = () => (
    <Box {...styles.contentArea}>
        <Outlet />
    </Box>
);
