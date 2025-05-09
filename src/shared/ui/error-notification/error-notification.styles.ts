import {
    AlertDescriptionProps,
    AlertIconProps,
    AlertProps,
    AlertTitleProps,
    BoxProps,
    CloseButtonProps,
} from '@chakra-ui/react';

export type ErrorNotificationStyleProps = {
    alert: AlertProps;
    alertIcon: AlertIconProps;
    closeButton: CloseButtonProps;
    container: BoxProps;
    description: AlertDescriptionProps;
    title: AlertTitleProps;
};

export const errorNotificationStyles: ErrorNotificationStyleProps = {
    alert: {
        bgColor: 'red.500',
        position: 'relative',
        px: 4,
        py: 3,
        status: 'error',
        w: {
            base: '328px',
            xl: '400px',
        },
    },
    alertIcon: {
        boxSize: 6,
        color: 'white',
    },
    closeButton: {
        color: 'white',
        position: 'absolute',
        right: 3,
        top: 3,
    },
    container: {
        bottom: {
            base: 'calc(var(--chakra-sizes-footer) + 16px)',
            xl: 20,
        },
        left: '50%',
        pos: 'fixed',
        transform: 'translateX(-50%)',
        zIndex: 'toast',
    },
    description: {
        color: 'white',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: '6',
    },
    title: {
        color: 'white',
        fontSize: 'md',
        fontWeight: 'bold',
        lineHeight: '6',
    },
};
