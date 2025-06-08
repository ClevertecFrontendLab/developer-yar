import { Grid, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { ProfileCard } from '~/shared/ui/profile-card';

import { postCardStyles as styles } from './post-card.styles';

type PostCardProps = {
    fullName: string;
    post: string;
    username: string;
};

export const PostCard: FC<PostCardProps> = ({ fullName, post, username }) => (
    <Grid {...styles.container}>
        <GridItem {...styles.authorBlock}>
            <ProfileCard fullName={fullName} username={username} />
        </GridItem>
        <GridItem {...styles.textBlock}>
            <Text noOfLines={3} {...styles.contentText}>
                {post}
            </Text>
        </GridItem>
    </Grid>
);
