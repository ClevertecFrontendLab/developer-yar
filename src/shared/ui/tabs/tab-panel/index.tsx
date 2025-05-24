import { TabPanel as ChakraTabPanel, TabPanelProps } from '@chakra-ui/react';
import { FC } from 'react';

import { TabPanelStyles as styles } from './index.styles';

export const TabPanel: FC<TabPanelProps> = ({ children, ...props }) => (
    <ChakraTabPanel {...styles.tabPanel} {...props}>
        {children}
    </ChakraTabPanel>
);
