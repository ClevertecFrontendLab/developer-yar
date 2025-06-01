import { BoxProps } from '@chakra-ui/react';

import { AppMessageAlignment } from '~/shared/model';

type SuccessNotificationStyleProps = {
    container: (variant: AppMessageAlignment) => BoxProps;
};

export const successNotificationStyles: SuccessNotificationStyleProps = {
    container: (variant: AppMessageAlignment): BoxProps => ({
        bottom: {
            base: 'calc(var(--chakra-sizes-footer) + 16px)',
            xl: 20,
        },
        left: { base: '50%', xl: variant === 'center' ? '50%' : '25%' },
        pos: 'fixed',
        transform: 'translateX(-50%)',
        zIndex: 'toast',
    }),
};
