import { Stack } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { authControlsStyles as styles } from './index.styles';

export const AuthControls: FC<PropsWithChildren> = ({ children }) => (
    <Stack {...styles.controls}>{children}</Stack>
);
