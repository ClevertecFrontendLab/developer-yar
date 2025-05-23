import { Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { alertBodyStyles as styles } from './index.styles';

export const AlertBody: FC<PropsWithChildren> = ({ children }) => (
    <Box {...styles.body}>{children}</Box>
);
