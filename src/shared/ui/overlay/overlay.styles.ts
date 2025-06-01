import { BoxProps } from '@chakra-ui/react';

type OverlayStyleProps = {
    overlay: BoxProps;
};

export const overlayStyles: OverlayStyleProps = {
    overlay: {
        layerStyle: 'overlay',
        zIndex: 'tooltip',
    },
};
