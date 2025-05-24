import { Stack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';

import { modalBodyStyles as styles } from './index.styles';

export const ModalBody: FC<StackProps> = ({ children, ...props }) => (
    <Stack {...props} {...styles.modalBody}>
        {children}
    </Stack>
);
