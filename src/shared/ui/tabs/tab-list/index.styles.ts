import { TabListProps } from '@chakra-ui/react';

type TabListStyleProps = {
    tabList: TabListProps;
};

export const TabListStyles: TabListStyleProps = {
    tabList: {
        alignItems: { xl: 'center' },
        boxShadow: 'inset 0 -1px 0 0 var(--chakra-colors-blackAlpha-200)',
        flexWrap: { xl: 'wrap' },
        justifyContent: { xl: 'center' },
        overflowX: { base: 'scroll', xl: 'auto' },
        sx: {
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
        },
        whiteSpace: 'nowrap',
    },
};
