import { FlexProps, IconButtonProps, IconProps } from '@chakra-ui/react';

export const arrowStyles: {
    arrow: IconProps;
    arrowBox: Omit<IconButtonProps, 'aria-label'>;
    arrows: FlexProps;
} = {
    arrow: {
        boxSize: 4,
        color: 'white',
    },
    arrowBox: {
        _hover: {
            bg: 'gray.700',
        },
        bg: 'black',
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
