import { BoxProps } from '@chakra-ui/react';

import { AppErrorAlignment, AppErrorType } from '~/shared/model';

type AppErrorNotificationStyleProps = {
    container: (alignment: AppErrorAlignment, type: AppErrorType) => BoxProps;
};

export const appErrorNotificationStyles: AppErrorNotificationStyleProps = {
    container: (alignment: AppErrorAlignment, type: AppErrorType): BoxProps => ({
        bottom: {
            base: type === 'auth' ? 25 : 'calc(var(--chakra-sizes-footer) + 16px)',
            xl: 20,
        },
        mt: { base: type === 'auth' ? 16 : 0, xl: 0 },
        left: {
            base: '50%',
            xl: alignment === 'left' ? '25%' : alignment === 'center' ? '50%' : '75%',
        },
        pos: 'fixed',
        transform: 'translateX(-50%)',
        zIndex: 'toast',
    }),
};
