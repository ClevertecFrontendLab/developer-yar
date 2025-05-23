import { Alert as ChakraAlert, AlertProps } from '@chakra-ui/react';
import { FC } from 'react';

import { alertStyles as styles } from './index.styles';

export const Alert: FC<AlertProps> = ({ children, status, ...props }) => (
    <ChakraAlert {...props} {...styles.alert(status)}>
        {children}
    </ChakraAlert>
);
