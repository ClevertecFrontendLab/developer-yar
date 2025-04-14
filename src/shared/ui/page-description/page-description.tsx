import { Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { pageDescriptionStyles as styles } from './page-description.styles';

interface PageDescriptionProps {
    children: ReactNode;
}

export const PageDescription: FC<PageDescriptionProps> = ({ children }) => (
    <Text {...styles.descriptionText}>{children}</Text>
);
