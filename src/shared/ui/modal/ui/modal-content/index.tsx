import { Box, BoxProps } from '@chakra-ui/react';
import { FC } from 'react';

import { modalContentStyles as styles } from './index.styles';

export const ModalContent: FC<BoxProps> = ({ children, ...props }) => (
    <Box {...props} {...styles.modalContent}>
        {children}
    </Box>
);
