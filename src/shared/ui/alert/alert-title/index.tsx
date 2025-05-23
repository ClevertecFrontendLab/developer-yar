import { AlertTitle as ChakraAlertTitle, AlertTitleProps } from '@chakra-ui/react';
import { FC } from 'react';

import { alertTitleStyles as styles } from './index.styles';

export const AlertTitle: FC<AlertTitleProps> = ({ children, ...props }) => (
    <ChakraAlertTitle {...props} {...styles.title}>
        {children}
    </ChakraAlertTitle>
);
