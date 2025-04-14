import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { BookmarkBadge, EmojiBadge } from '../badges';
import { recipeStatsStyles as styles } from './recipe-stats.styles';

interface RecipeStatsProps {
    bookmarks: number;
    emojies: number;
}

export const RecipeStats: FC<RecipeStatsProps> = ({ bookmarks, emojies }) => (
    <Flex {...styles.badges}>
        <BookmarkBadge
            wrapperStyles={styles.badgeContainer}
            iconStyles={styles.badgeImage}
            textStyles={styles.badgeLabel}
            value={bookmarks}
        />
        <EmojiBadge
            wrapperStyles={styles.badgeContainer}
            iconStyles={styles.badgeImage}
            textStyles={styles.badgeLabel}
            value={emojies}
        />
    </Flex>
);
