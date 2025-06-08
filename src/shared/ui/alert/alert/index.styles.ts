import { AlertProps } from '@chakra-ui/react';

import { AlertVariant } from './index.types';

export type AlertStyleProps = {
    alert: (variant: AlertVariant) => AlertProps;
};

export const alertStyles: AlertStyleProps = {
    alert: (variant: AlertVariant): AlertProps => {
        let color;

        switch (variant) {
            case 'error':
                color = 'red.500';
                break;
            case 'success':
                color = 'green.500';
                break;
            case 'warning':
                color = 'orange.500';
                break;
            case 'info':
                color = 'blue.500';
                break;
            default:
                color = 'black.500';
                break;
        }

        return {
            bgColor: color,
            pos: 'relative',
            px: 4,
            py: 3,
            status: 'error',
            w: {
                base: '328px',
                xl: '400px',
            },
        };
    },
};
