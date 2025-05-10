import { BoxProps, FlexProps } from '@chakra-ui/react';

type LeftSidebarStyleProps = {
    infoPanelWrapper: BoxProps;
    leftSidebar: (headerVisibleHeight: number) => FlexProps;
    navigationWrapper: BoxProps;
};

export const leftSidebarStyles: LeftSidebarStyleProps = {
    infoPanelWrapper: {
        mt: 'auto',
    },
    leftSidebar: (headerVisibleHeight: number): FlexProps => ({
        boxShadow:
            '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)',
        direction: 'column',
        h: `calc(100vh - ${headerVisibleHeight}px)`,
        overflow: 'hidden',
        pos: 'sticky',
        pt: 6,
        top: 0,
    }),
    navigationWrapper: {
        overflowX: 'hidden',
        overflowY: 'auto',
    },
};
