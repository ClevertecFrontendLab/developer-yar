import { Center, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { commonTabStyles as styles } from './common-tab.styles';

interface CommonTabProps {
    children: ReactNode;
    isActiveTab?: boolean;
    text: string;
}

export const CommonTab: FC<CommonTabProps> = ({ children, text, isActiveTab }) => (
    <Center {...styles.tabContainer(isActiveTab)}>
        <Center {...styles.tabIcon(isActiveTab)}>{children}</Center>
        <Text {...styles.tabLabel(isActiveTab)}>{text}</Text>
    </Center>
);
