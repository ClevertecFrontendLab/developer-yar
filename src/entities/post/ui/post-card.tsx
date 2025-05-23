import { Grid, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { User, UserCard } from '~/entities/user/@x/post';

import { Post } from '../model/types';
import { postCardStyles as styles } from './post-card.styles';

type PostCardProps = {
    author: User;
    text: string;
} & Post;

export const PostCard: FC<PostCardProps> = ({ author, text }) => (
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
