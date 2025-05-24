import { Center, CenterProps } from '@chakra-ui/react';
import { FC } from 'react';

import { overlayStyles as styles } from './overlay.styles';

export const Overlay: FC<CenterProps> = ({ children, ...props }) => (
    <Center {...props} {...styles.overlay}>
        {children}
    </Center>
);
