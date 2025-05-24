import {
    AlertDescription as ChakraAlertDescription,
    AlertDescriptionProps,
} from '@chakra-ui/react';
import { FC } from 'react';

import { alertDescriptionStyles as styles } from './index.styles';

export const AlertDescription: FC<AlertDescriptionProps> = ({ children, ...props }) => (
    <ChakraAlertDescription {...props} {...styles.description}>
        {children}
    </ChakraAlertDescription>
);
