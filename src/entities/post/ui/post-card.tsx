import { Grid, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { UserCard } from '~/entities/user/@x/post';

import { Post } from '../model/post';
import { postCardStyles as styles } from './post-card.styles';

interface PostCardProps extends Post {}

export const PostCard: FC<PostCardProps> = ({ text, author }) => (
    <Grid {...styles.container}>
        <GridItem {...styles.authorBlock}>
            <UserCard
                avatar={author.avatar}
                fullName={author.fullName}
                username={author.username}
            />
        </GridItem>
        <GridItem {...styles.textBlock}>
            <Text noOfLines={3} {...styles.contentText}>
                {text}
            </Text>
        </GridItem>
    </Grid>
);
