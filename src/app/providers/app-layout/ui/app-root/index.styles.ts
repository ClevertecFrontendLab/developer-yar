import { BoxProps } from '@chakra-ui/react';

type AppRoot = {
    container: BoxProps;
};

export const appRootStyles: AppRoot = {
    container: {
        minW: 'var(--chakra-sizes-minPageWidth)',
    },
};
