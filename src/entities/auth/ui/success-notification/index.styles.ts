import { BoxProps } from '@chakra-ui/react';

type SuccessNotificationStyleProps = {
    container: BoxProps;
};

export const SuccessNotificationStyles: SuccessNotificationStyleProps = {
    container: {
        bottom: {
            base: 'calc(var(--chakra-sizes-footer) + 16px)',
            xl: 20,
        },
        left: { base: '50%', xl: '25%' },
        pos: 'fixed',
        transform: 'translateX(-50%)',
        zIndex: 'toast',
    },
};
