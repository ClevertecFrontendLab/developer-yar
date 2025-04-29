import { StackProps } from '@chakra-ui/react';

type UserStatsStyleProps = {
    container: StackProps;
};

export const userStatsStyles: UserStatsStyleProps = {
    container: {
        direction: { base: 'row', xl: 'column' },
        px: { base: 2, sm: 4, xl: 0 },
        py: { xl: 4 },
        spacing: { xl: 6 },
        w: { xl: 52 },
    },
};
