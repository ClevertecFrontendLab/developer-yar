import { Box, Tag } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { formatPlural } from '~/shared/lib';

import { bloggerCardHeaderStyles as styles } from './index.styles';

type BloggerCardHeaderProps = Partial<{
    newRecipesCount: number;
}>;

export const BloggerCardHeader: FC<BloggerCardHeaderProps> = memo(({ newRecipesCount }) => {
    if (!newRecipesCount || newRecipesCount <= 0) return null;

    const formattedNewRecipesCount = formatPlural(newRecipesCount, [
        'новый рецепт',
        'новых рецепта',
        'новых рецептов',
    ]);

    return (
        <Box
            {...styles.newRecipesCountContainer}
            data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_CARD_NEW_RECIPES_BADGE}
        >
            <Tag>{formattedNewRecipesCount}</Tag>
        </Box>
    );
});
