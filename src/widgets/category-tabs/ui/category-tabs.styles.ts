import { StackProps, TabListProps, TabPanelProps, TabProps } from '@chakra-ui/react';

type CategoryTabsStyleProps = {
    stackContainer: StackProps;
    tab: TabProps;
    tabList: TabListProps;
    tabPanel: TabPanelProps;
};

export const categoryTabsStyles: CategoryTabsStyleProps = {
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
        alignItems: { xl: 'center' },
        flexWrap: { xl: 'wrap' },
        justifyContent: { xl: 'center' },
        mb: 3,
        overflowX: { base: 'scroll', xl: 'auto' },
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
