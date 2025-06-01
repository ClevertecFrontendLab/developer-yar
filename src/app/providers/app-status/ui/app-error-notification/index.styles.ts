import { BoxProps } from '@chakra-ui/react';

import { AppErrorType, AppMessageAlignment } from '~/shared/model';

type AppErrorNotificationStyleProps = {
    container: (alignment: AppMessageAlignment, type: AppErrorType) => BoxProps;
};

export const appErrorNotificationStyles: AppErrorNotificationStyleProps = {
    container: (alignment: AppMessageAlignment, type: AppErrorType): BoxProps => ({
        bottom: {
            base: type === 'auth' ? 8 : 'calc(var(--chakra-sizes-footer) + 16px)',
            xl: 20,
        },
        left: {
            base: '50%',
            xl: alignment === 'left' ? '25%' : alignment === 'center' ? '50%' : '75%',
        },
        pos: 'fixed',
        transform: 'translateX(-50%)',
        zIndex: 'toast',
    }),
};
