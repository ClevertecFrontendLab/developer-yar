import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { BloggerInfo } from '~/entities/blogger';
import { BloggerFollowButton } from '~/features/blogger-follow';
import { FollowersBadge } from '~/shared/ui/badges';

import { authorStyles as styles } from './index.styles';

type RecipeAuthorProps = {
    author: BloggerInfo;
};

export const RecipeAuthor: FC<RecipeAuthorProps> = memo(({ author }) => (
    <Flex {...styles.authorContainer}>
        <Avatar name={author.fullName} {...styles.avatar} />
        <Stack {...styles.authorContentWrapper}>
            <Flex {...styles.authorTextWrapper}>
                <Text {...styles.authorLabelText}>Автор рецепта</Text>
                <Stack {...styles.authorNameWrapper}>
                    <Text {...styles.authorFullName}>{author.fullName}</Text>
                    <Text {...styles.authorUsername}>{author.username}</Text>
                </Stack>
            </Flex>
            <Flex {...styles.authorMeta}>
                <BloggerFollowButton
                    bloggerId={author.id}
                    isUserFollowing={author.isUserFollowing}
                />
                <FollowersBadge value={author.totalFollowers} />
            </Flex>
        </Stack>
    </Flex>
));
