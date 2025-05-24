import { Stack, StackProps } from '@chakra-ui/react';
import { FC } from 'react';

import { modalContentGroupStyles as styles } from './index.styles';

export const ModalContentGroup: FC<StackProps> = ({ children, spacing = 4, ...props }) => (
    <Stack {...props} spacing={spacing} {...styles.contentGroup}>
        {children}
    </Stack>
);
