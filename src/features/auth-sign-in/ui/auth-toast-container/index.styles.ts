import { BoxProps } from '@chakra-ui/react';

type AuthToastContainerStyleProps = {
    container: BoxProps;
};

export const authToastContainerStyles: AuthToastContainerStyleProps = {
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
