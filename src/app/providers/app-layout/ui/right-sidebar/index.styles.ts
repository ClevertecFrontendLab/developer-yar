import { BoxProps, FlexProps, GridProps } from '@chakra-ui/react';

type RightSidebarStyleProps = {
    container: BoxProps;
    contentArea: BoxProps;
    headerWrapper: BoxProps;
    mainGrid: GridProps;
    rightSidebar: FlexProps;
    userStatsWrapper: BoxProps;
    writeRecipeWrapper: BoxProps;
};

export const rightSidebarStyles: RightSidebarStyleProps = {
    container: {
        minW: 'var(--chakra-sizes-minPageWidth)',
    },
    contentArea: {
        maxW: 'var(--chakra-sizes-maxContentWith)',
        minW: 0,
        ml: { xl: 6 },
        mr: { xl: '72px' },
    },
    headerWrapper: {
        pos: { base: 'fixed', xl: 'absolute' },
        top: 0,
        w: 'full',
        zIndex: 'overlay',
    },
    mainGrid: {
        margin: 'auto',
        maxW: 'var(--chakra-sizes-maxPageWidth)',
        pb: { base: 'var(--chakra-sizes-footer)', xl: 0 },
        pt: { base: 'var(--chakra-sizes-headerBase)', xl: 'var(--chakra-sizes-headerXL)' },
        templateColumns: { base: '1fr', xl: '256px 1fr 208px' },
    },
    rightSidebar: {
        direction: 'column',
        pos: 'relative',
    },
    userStatsWrapper: {
        pos: 'sticky',
        right: 0,
        top: 0,
    },
    writeRecipeWrapper: {
        bottom: 0,
        pos: 'fixed',
        right: 0,
    },
};
