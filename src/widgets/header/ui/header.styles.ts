import type { BoxProps, FlexProps, MenuButtonProps } from '@chakra-ui/react';

type HeaderStyleProps = {
    breadcrumbsContainer: BoxProps;
    burgerButton: MenuButtonProps;
    headerContainer: BoxProps;
    headerContent: FlexProps;
    logotypeContainer: BoxProps;
    navigationContainer: BoxProps;
    profileContainer: BoxProps;
};

export const headerStyles: HeaderStyleProps = {
    breadcrumbsContainer: {
        px: 32,
    },
    burgerButton: {
        bg: 'transparent',
        boxSize: 12,
        cursor: 'pointer',
        zIndex: 'tooltip',
        _active: { bg: 'transparent' },
        _hover: { bg: 'transparent' },
    },
    headerContainer: {
        bg: 'lime.50',
        w: 'full',
    },
    headerContent: {
        align: 'center',
        bg: 'lime.50',
        m: 'auto',
        maxW: 'var(--chakra-sizes-maxPageWidth)',
        pl: { base: 4, md: 5 },
        pr: { base: 4, md: 5, xl: 20 },
        py: { base: 2, xl: 4 },
    },
    logotypeContainer: {
        mr: { base: 'auto', xl: 0 },
        zIndex: 'tooltip',
    },
    navigationContainer: {
        bgColor: 'white',
        h: 'calc(100vh - var(--chakra-sizes-headerBase))',
        overflow: 'auto',
        position: 'absolute',
        right: 0,
        top: 'var(--chakra-sizes-headerBase)',
        zIndex: 'docked',
    },
    profileContainer: {
        ml: 'auto',
    },
};
