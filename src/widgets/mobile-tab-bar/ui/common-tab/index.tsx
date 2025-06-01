import { Center, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { commonTabStyles as styles } from './index.styles';

type CommonTabProps = {
    children: ReactNode;
    text: string;
    isActiveTab?: boolean;
};

export const CommonTab: FC<CommonTabProps> = ({ children, isActiveTab, text }) => (
    <Center {...styles.tabContainer(isActiveTab)}>
        <Center {...styles.tabIcon(isActiveTab)}>{children}</Center>
        <Text {...styles.tabLabel(isActiveTab)}>{text}</Text>
    </Center>
);
