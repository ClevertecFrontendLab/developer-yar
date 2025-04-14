import {
    ButtonProps,
    GridProps,
    StackProps,
    TabListProps,
    TabPanelProps,
    TabProps,
} from '@chakra-ui/react';

type CategoryTabsStyleProps = {
    buttonLoadMore: ButtonProps;
    gridTabContent: GridProps;
    stackContainer: StackProps;
    tab: TabProps;
    tabList: TabListProps;
    tabPanel: TabPanelProps;
};

export const categoryTabsStyles: CategoryTabsStyleProps = {
    buttonLoadMore: {
        bg: 'lime.400',
        borderRadius: 'lg',
        color: 'black',
        fontSize: 'md',
        fontWeight: 600,
        h: 10,
        lineHeight: '6',
        margin: 'auto',
        px: 4,
        w: '152px',
    },
    gridTabContent: {
        layerStyle: 'gridLayout',
    },
    stackContainer: {
        gap: 4,
        pb: 3,
    },
    tab: {
        _selected: {
            borderColor: 'lime.600',
            color: 'lime.600',
        },
        color: 'lime.800',
        fontSize: 'md',
        fontWeight: 'medium',
        lineHeight: '6',
        px: 4,
    },
    tabList: {
        alignItems: 'center',
        mb: 3,
        overflowX: 'scroll',
        py: 1,
        sx: {
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
        },
        whiteSpace: 'nowrap',
    },
    tabPanel: {
        p: 0,
    },
};
