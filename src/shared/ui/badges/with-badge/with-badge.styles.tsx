import { TextProps } from '@chakra-ui/react';

type WithBadgeStyleProps = {
    text: TextProps;
};

export const withBadgeStyles: WithBadgeStyleProps = {
    text: {
        color: 'lime.600',
        fontWeight: 'semibold',
    },
};
