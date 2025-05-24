import { Box } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { modalTextGroupStyles as styles } from './index.styles';

export const ModalTextGroup: FC<PropsWithChildren> = ({ children }) => (
    <Box {...styles.textGroup}>{children}</Box>
);
