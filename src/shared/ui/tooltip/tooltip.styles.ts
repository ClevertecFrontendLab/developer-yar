import { TooltipProps } from '@chakra-ui/react';

type TooltipStyleProps = {
    tooltip: Omit<TooltipProps, 'children'>;
};

export const tooltipStyles: TooltipStyleProps = {
    tooltip: {
        bgColor: 'blackAlpha.900',
        borderRadius: 'base',
        color: 'white',
        fontSize: 'sm',
        fontWeight: 'normal',
        h: 10,
        lineHeight: '5',
        px: 2,
        w: '144px',
        zIndex: 'tooltip',
    },
};
