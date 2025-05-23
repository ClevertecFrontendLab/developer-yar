import { BoxProps } from '@chakra-ui/react';

type OverlayStyleProps = {
    overlay: BoxProps;
};

export const overlayStyles: OverlayStyleProps = {
    overlay: {
        backdropFilter: 'blur(4px)',
        background: 'blackAlpha.300',
        h: 'full',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        pos: 'absolute',
        zIndex: 'overlay',
    },
};
