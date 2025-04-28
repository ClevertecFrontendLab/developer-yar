import { ChakraProvider } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { theme } from '../config/theme';

type ChakraUIProps = PropsWithChildren;

export const ChakraUI: FC<ChakraUIProps> = ({ children }) => (
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
