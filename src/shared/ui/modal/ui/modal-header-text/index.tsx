import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

import { modalHeaderTextStyles as styles } from './index.styles';

export const ModalHeaderText: FC<TextProps> = ({ children, ...props }) => (
    <Text {...props} {...styles.text}>
        {children}
    </Text>
);
