import { CenterProps, FlexProps, IconProps } from '@chakra-ui/react';

type ArrowsStyleProps = {
    arrow: IconProps;
    arrowBox: CenterProps;
    arrows: FlexProps;
};

export const arrowStyles: ArrowsStyleProps = {
    arrow: {
        boxSize: 4,
        color: 'white',
    },
    arrowBox: {
        bgColor: 'black',
        borderRadius: 'md',
        cursor: 'pointer',
        p: 3,
    },
    arrows: {
        justify: 'space-between',
        left: '50%',
        pos: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        w: 'calc(100% + 16px)',
        zIndex: 'docked',
    },
};
