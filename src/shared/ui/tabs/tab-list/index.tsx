import { TabList as ChakraTabList, TabListProps } from '@chakra-ui/react';
import { FC } from 'react';

import { TabListStyles as styles } from './index.styles';

export const TabList: FC<TabListProps> = ({ children, ...props }) => (
    <ChakraTabList {...styles.tabList} {...props}>
        {children}
    </ChakraTabList>
);
