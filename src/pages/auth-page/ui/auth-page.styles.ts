import {
    CenterProps,
    FlexProps,
    GridProps,
    IconProps,
    ImageProps,
    StackProps,
    TabListProps,
    TabPanelsProps,
    TextProps,
} from '@chakra-ui/react';

type AuthPageStyleProps = {
    authPageWrapper: GridProps;
    content: StackProps;
    contentWrapper: CenterProps;
    image: ImageProps;
    logotype: IconProps;
    meta: FlexProps;
    metaDescription: TextProps;
    tabList: TabListProps;
    tabPanels: TabPanelsProps;
};

export const authPageStyles: AuthPageStyleProps = {
    authPageWrapper: {
        alignItems: 'center',
        background: 'linear-gradient(208deg, #eaffc7 50%, #29813f 100%)',
        flexDirection: { base: 'column', xl: 'row' },
        minH: '100vh',
        pt: { base: '72px', md: 0 },
    },
    content: {
        gap: { base: 10, md: 14, xl: 20 },
        maxW: { '2xl': '461px', base: '100%', sm: '355px', xl: '451px' },
        px: { base: 4, sm: 0 },
        w: 'full',
    },
    contentWrapper: {
        flex: '1 0 50%',
        w: 'full',
    },
    image: {
        flex: '1 0 50%',
        h: '100vh',
        minW: 0,
        objectFit: 'cover',
    },
    logotype: {
        h: '64px',
        m: 'auto',
        w: { base: '158px', xl: '271px' },
    },
    meta: {
        bottom: { xl: 0 },
        justify: 'space-between',
        p: { base: 4, md: 5 },
        pos: { xl: 'absolute' },
        w: 'full',
    },
    metaDescription: {
        color: 'black',
        fontSize: 'xs',
        fontWeight: 'semibold',
        lineHeight: '4',
        padding: 2.5,
    },
    tabList: {
        mb: 10,
    },
    tabPanels: {
        minH: '468px',
    },
};
