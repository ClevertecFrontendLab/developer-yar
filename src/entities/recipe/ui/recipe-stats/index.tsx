import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { BookmarksBadge, LikesBadge } from '~/shared/ui/badges';

import { recipeStatsStyles as styles } from './index.styles';

type RecipeStatsProps = {
    bookmarks: number;
    likes: number;
};

export const RecipeStats: FC<RecipeStatsProps> = ({ bookmarks, likes }) => (
    <Flex {...styles.badges}>
        <BookmarksBadge value={bookmarks} />
        <LikesBadge value={likes} />
    </Flex>
);
