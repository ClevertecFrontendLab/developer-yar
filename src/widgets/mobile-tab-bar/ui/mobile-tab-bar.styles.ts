import { FlexProps } from '@chakra-ui/react';

type MobileTabBarStyleProps = {
    barContainer: FlexProps;
};

export const mobileTabBarStyles: MobileTabBarStyleProps = {
    barContainer: {
        align: 'center',
        bg: 'lime.50',
        bottom: 0,
        h: '84px',
        justify: 'space-around',
        pos: 'fixed',
        w: 'full',
        zIndex: 'docked',
    },
};
