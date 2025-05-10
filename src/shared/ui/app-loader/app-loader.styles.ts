import { CenterProps } from '@chakra-ui/react';

type AppLoaderStyleProps = {
    box: CenterProps;
};

export const appLoaderStyles: AppLoaderStyleProps = {
    box: {
        backdropFilter: 'blur(4px)',
        background: 'blackAlpha.300',
        h: '100vh',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        pos: 'absolute',
        zIndex: 'tooltip',
    },
};
