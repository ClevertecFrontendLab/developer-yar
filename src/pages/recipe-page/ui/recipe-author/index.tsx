import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { User } from '~/entities/user';
import { FollowAuthorButton } from '~/features/follow-author';
import { FollowersBadge } from '~/shared/ui/badges';

import { authorStyles as styles } from './index.styles';

type RecipeAuthorProps = {
    author: User;
};

export const RecipeAuthor: FC<RecipeAuthorProps> = memo(({ author }) => (
    <Flex {...styles.authorContainer}>
        <Avatar src={author.avatar} {...styles.avatar} />
        <Stack {...styles.authorContentWrapper}>
            <Flex {...styles.authorTextWrapper}>
                <Text {...styles.authorLabelText}>Автор рецепта</Text>
                <Stack {...styles.authorNameWrapper}>
                    <Text {...styles.authorFullName}>{author.fullName}</Text>
                    <Text {...styles.authorUsername}>{author.username}</Text>
                </Stack>
            </Flex>
            <Flex {...styles.authorMeta}>
                <FollowAuthorButton />
                <FollowersBadge value={125} />
            </Flex>
        </Stack>
    </Flex>
));
