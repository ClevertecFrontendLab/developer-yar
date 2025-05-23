import { AlertIcon as ChakraAlertIcon, AlertIconProps } from '@chakra-ui/react';
import { FC } from 'react';

import { alertIconStyles as styles } from './index.styles';

export const AlertIcon: FC<AlertIconProps> = (props) => (
    <ChakraAlertIcon {...props} {...styles.alertIcon} />
);
