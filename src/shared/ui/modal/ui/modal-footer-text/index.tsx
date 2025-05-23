import { Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { modalFooterTextStyles as styles } from './index.styles';

export const ModalFooterText: FC<PropsWithChildren> = ({ children }) => (
    <Text {...styles.text}>{children}</Text>
);
