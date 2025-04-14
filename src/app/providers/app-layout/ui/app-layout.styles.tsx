import { BoxProps, FlexProps, GridProps } from '@chakra-ui/react';

type AppLayoutStyleProps = {
    container: GridProps;
    contentArea: BoxProps;
    footerWrapper: BoxProps;
    headerWrapper: BoxProps;
    leftSidebar: FlexProps;
    mainGrid: GridProps;
    navigationWrapper: BoxProps;
    rightSidebar: FlexProps;
    statsBarWrapper: BoxProps;
    writeRecipeWrapper: BoxProps;
};

export const appLayoutStyles: AppLayoutStyleProps = {
    container: {
        alignContent: 'start',
        minW: 80,
    },
    contentArea: {
        maxW: 'var(--chakra-sizes-maxContentWith)',
        minW: 0,
        ml: { xl: 6 },
        mr: { xl: '72px' },
        pl: { base: 4, md: 5, xl: 0 },
        pr: { base: 4, md: 5, xl: 0 },
        pt: { base: 4, xl: 0 },
    },
    footerWrapper: {
        mt: 'auto',
    },
    headerWrapper: {
        pos: { base: 'sticky', xl: 'static' },
        top: 0,
        zIndex: 'overlay',
    },
    leftSidebar: {
        boxShadow:
            '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
        direction: 'column',
        maxH: '100vh',
        overflow: 'hidden',
        pos: 'sticky',
        pt: 6,
        top: 0,
    },
    mainGrid: {
        margin: 'auto',
        maxW: 'var(--chakra-sizes-maxPageWidth)',
        pb: { base: '84px', xl: 0 },
        templateColumns: { base: '1fr', xl: '256px 1fr 208px' },
        w: 'full',
    },
    navigationWrapper: {
        overflowX: 'hidden',
        overflowY: 'auto',

        sx: {
            scrollbarColor:
                'var(--chakra-colors-blackAlpha-300) var(--chakra-colors-blackAlpha-50)',
            scrollbarWidth: 'thin',

            '::-webkit-scrollbar': {
                w: 2,
            },
            '::-webkit-scrollbar-thumb': {
                bgColor: 'blackAlpha.300',
                borderRadius: 'lg',
            },
            '::-webkit-scrollbar-track': {
                bgColor: 'blackAlpha.50',
                borderRadius: 'lg',
            },
        },
    },
    rightSidebar: {
        direction: 'column',
        pos: 'relative',
    },
    statsBarWrapper: {
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
