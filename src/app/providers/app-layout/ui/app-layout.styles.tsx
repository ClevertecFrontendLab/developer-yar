import { BoxProps, FlexProps, GridProps, StackProps } from '@chakra-ui/react';

type AppLayoutStyleProps = {
    container: BoxProps;
    contentArea: StackProps;
    headerWrapper: BoxProps;
    infoPanelWrapper: BoxProps;
    leftSidebar: FlexProps;
    mainGrid: GridProps;
    navigationWrapper: BoxProps;
    rightSidebar: FlexProps;
    userStatsWrapper: BoxProps;
    writeRecipeWrapper: BoxProps;
};

export const appLayoutStyles: AppLayoutStyleProps = {
    container: {
        minW: 'var(--chakra-sizes-minPageWidth)',
    },
    contentArea: {
        gap: { base: 4, xl: 0 },
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
    infoPanelWrapper: {
        mt: 'auto',
    },
    leftSidebar: {
        boxShadow:
            '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
        direction: 'column',
        h: '100vh',
        overflow: 'hidden',
        pos: 'sticky',
        pt: 6,
        top: 0,
    },
    mainGrid: {
        margin: 'auto',
        maxW: 'var(--chakra-sizes-maxPageWidth)',
        pb: { base: 'var(--chakra-sizes-footer)', xl: 0 },
        pt: { base: 'var(--chakra-sizes-headerBase)', xl: 'var(--chakra-sizes-headerXL)' },
        templateColumns: { base: '1fr', xl: '256px 1fr 208px' },
        w: 'full',
    },
    navigationWrapper: {
        overflowX: 'hidden',
        overflowY: 'auto',
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
