import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { BookmarksBadge, FollowersBadge, LikesBadge } from '~/shared/ui/badges';

import { userStatsStyles as styles } from './index.styles';

export const UserStats: FC = () => (
    <Stack {...styles.container}>
        <BookmarksBadge value={185} variant='big' />
        <FollowersBadge value={589} variant='big' />
        <LikesBadge value={597} variant='big' />
    </Stack>
);
