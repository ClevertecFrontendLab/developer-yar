import { ChakraProvider } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { theme } from '../config/theme';

interface ChakraUIProps {
    children: ReactNode;
}

export const ChakraUI: FC<ChakraUIProps> = ({ children }) => (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
