import { CenterProps, IconProps, StackProps, TextProps } from '@chakra-ui/react';

type StatsBarStyleProps = {
    badgeContainer: CenterProps;
    badgeIcon: IconProps;
    badgeText: TextProps;
    container: StackProps;
};

export const statsBarStyles: StatsBarStyleProps = {
    badgeContainer: {
        gap: { base: 1.5, xl: 2 },
        h: 10,
        px: { base: 2, xl: 0 },
    },
    badgeIcon: {
        boxSize: { base: 3, xl: 4 },
    },
    badgeText: {
        fontSize: { base: 'xs', xl: 'md' },
        lineHeight: { base: '4', xl: '6' },
    },
    container: {
        direction: { base: 'row', xl: 'column' },
        px: { base: 2, sm: 4, xl: 0 },
        py: { xl: 4 },
        spacing: { xl: 6 },
        w: { xl: 52 },
    },
};
