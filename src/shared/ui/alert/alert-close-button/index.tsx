import { CloseButton as ChakraCloseButton, CloseButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

import { alertCloseButtonStyles as styles } from './index.styles';

export const AlertCloseButton: FC<CloseButtonProps> = (props) => (
    <ChakraCloseButton {...props} {...styles.closeButton} />
);
