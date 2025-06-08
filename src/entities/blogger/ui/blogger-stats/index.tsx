import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { BookmarksBadge, FollowersBadge } from '~/shared/ui/badges';

import { bloggerStatsStyles as styles } from './index.styles';

type BloggerStatsProps = {
    bookmarks: number;
    followers: number;
};

export const BloggerStats: FC<BloggerStatsProps> = ({ bookmarks, followers }) => (
    <Flex {...styles.badges}>
        <Box data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_FOLLOWERS_BOOKMARKS}>
            <BookmarksBadge value={bookmarks} />
        </Box>
        <Box data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_FOLLOWERS_COUNT}>
            <FollowersBadge value={followers} />
        </Box>
    </Flex>
);
