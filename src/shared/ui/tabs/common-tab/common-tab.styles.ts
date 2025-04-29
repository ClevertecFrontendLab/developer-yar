import { CenterProps, TextProps } from '@chakra-ui/react';

type CommonTabStyleProps = {
    tabContainer: (isActiveTab?: boolean) => CenterProps;
    tabIcon: (isActiveTab?: boolean) => CenterProps;
    tabLabel: (isActiveTab?: boolean) => TextProps;
};

export const commonTabStyles: CommonTabStyleProps = {
    tabContainer: (isActiveTab) => ({
        alignItems: 'center',
        bgImage: isActiveTab
            ? 'radial-gradient(62.52% 62.51% at 48.89% 37.5%, rgba(196, 255, 97, 0.4) 0%, rgba(255, 255, 255, 0) 100%)'
            : 'none',
        cursor: 'pointer',
        flexDirection: 'column',
        gap: 1,
        h: 20,
        w: 20,
    }),
    tabIcon: (isActiveTab) => ({
        borderRadius: isActiveTab ? 'full' : 0,
        boxSize: 10,
    }),
    tabLabel: (isActiveTab) => ({
        color: isActiveTab ? 'black' : 'blackAlpha.700',
        fontSize: 'xs',
        fontWeight: 'medium',
        lineHeight: '4',
    }),
};
