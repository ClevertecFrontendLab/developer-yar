import { BoxProps, FlexProps, IconProps, MenuButtonProps, StackProps } from '@chakra-ui/react';

type HeaderStyleProps = {
    breadcrumbsBox: BoxProps;
    burgerButton: MenuButtonProps;
    closeMenuIcon: IconProps;
    headerContainer: (withMenu: boolean) => BoxProps;
    headerContent: FlexProps;
    infoPanelWrapper: BoxProps;
    logoBox: BoxProps;
    menuListWrapper: BoxProps;
    mobileUserStats: (withMenu: boolean) => BoxProps;
    navOverlay: BoxProps;
    openMenuIcon: IconProps;
    profileBox: BoxProps;
    slideOutMenuBox: StackProps;
};

export const headerStyles: HeaderStyleProps = {
    breadcrumbsBox: {
        minH: { base: '52px', xl: 'auto' },
        px: { base: 5, xl: 32 },
    },
    burgerButton: {
        _active: { bg: 'transparent' },
        _hover: { bg: 'transparent' },
        bg: 'transparent',
        boxSize: 12,
        cursor: 'pointer',
        zIndex: 'docked',
    },
    closeMenuIcon: {
        boxSize: 3,
    },
    headerContainer: (withMenu) => ({
        bg: { base: withMenu ? 'white' : 'lime.50', xl: 'lime.50' },
        w: 'full',
    }),
    headerContent: {
        align: 'center',
        m: 'auto',
        maxW: 'var(--chakra-sizes-maxPageWidth)',
        pl: { base: 4, md: 5 },
        pr: { base: 4, md: 5, xl: 20 },
        py: { base: 2, xl: 4 },
    },
    infoPanelWrapper: {
        pt: 4,
    },
    logoBox: {
        mr: { base: 'auto', xl: 0 },
        zIndex: 'docked',
    },
    menuListWrapper: {
        maxH: '668px',
        overflowY: 'auto',
        pr: 2,
        py: 2,
    },
    mobileUserStats: (withMenu) => ({
        display: { base: withMenu ? 'none' : 'block', xl: 'none' },
    }),
    navOverlay: {
        backdropFilter: 'blur(4px)',
        bg: 'blackAlpha.300',
        bottom: 0,
        h: 'calc(100vh - var(--chakra-sizes-headerBase))',
        pos: 'fixed',
        w: 'full',
    },
    openMenuIcon: { boxSize: 6 },
    profileBox: {
        ml: 'auto',
    },
    slideOutMenuBox: {
        bg: 'white',
        borderBottomRadius: 'lg',
        borderLeftRadius: 'lg',
        boxShadow: '0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        gap: 3,
        maxH: 'calc(100vh - var(--chakra-sizes-headerBase))',
        maxW: '344px',
        minW: 'var(--chakra-sizes-minPageWidth)',
        ml: 'auto',
        overflowY: 'auto',
        pos: 'relative',
        pt: 4,
        right: 2,
        sx: {
            '@media screen and (max-width: 359px)': {
                maxWidth: 'calc(100vw - 16px)',
            },
        },
        top: 'var(--chakra-sizes-headerBase)',
        w: 'full',
    },
};
