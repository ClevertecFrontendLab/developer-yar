import { StackProps, TabListProps } from '@chakra-ui/react';

type CategoryTabsStyleProps = {
    stackContainer: StackProps;
    tabList: TabListProps;
};

export const categoryTabsStyles: CategoryTabsStyleProps = {
    stackContainer: {
        gap: 4,
        pb: 3,
    },
    tabList: {
        mb: 6,
    },
};
