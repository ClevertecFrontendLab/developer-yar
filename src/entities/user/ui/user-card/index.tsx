import { Avatar, Grid, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { userCardStyles as styles } from './index.styles';

type UserCardProps = {
    avatar: string;
    fullName: string;
    username: string;
};

export const UserCard: FC<UserCardProps> = ({ avatar, fullName, username }) => (
    <Grid {...styles.container}>
        <GridItem {...styles.avatarBox}>
            <Avatar name={fullName} src={avatar} {...styles.avatar} />
        </GridItem>
        <GridItem {...styles.nameBox}>
            <Text noOfLines={1} {...styles.fullName}>
                {fullName}
            </Text>
        </GridItem>
        <GridItem {...styles.usernameBox}>
            <Text noOfLines={1} {...styles.username}>
                {username}
            </Text>
        </GridItem>
    </Grid>
);
