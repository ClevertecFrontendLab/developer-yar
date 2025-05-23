import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { UserStats } from '~/entities/user';
import { RecipeCreationButton } from '~/features/recipe-creation';
import { getDisplayForBreakpoints } from '~/shared/lib';

import { rightSidebarStyles as styles } from './index.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

export const RightSidebar: FC = () => (
    <Flex {...shownFromXlBreakpoint} {...styles.rightSidebar}>
        <Box {...styles.userStatsWrapper}>
            <UserStats />
        </Box>
        <Box {...styles.writeRecipeWrapper}>
            <RecipeCreationButton />
        </Box>
    </Flex>
);
