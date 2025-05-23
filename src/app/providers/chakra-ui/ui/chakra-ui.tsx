import { ChakraProvider } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { theme } from '../config/theme';

export const ChakraUI: FC<PropsWithChildren> = ({ children }) => (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
