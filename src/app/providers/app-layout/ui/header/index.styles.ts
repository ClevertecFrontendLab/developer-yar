import { BoxProps } from '@chakra-ui/react';

type HeaderStyleProps = {
    headerWrapper: BoxProps;
};

export const headerStyles: HeaderStyleProps = {
    headerWrapper: {
        pos: { base: 'fixed', xl: 'absolute' },
        top: 0,
        w: 'full',
        zIndex: 'docked',
    },
};
