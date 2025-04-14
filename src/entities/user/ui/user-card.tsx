import { Avatar, Grid, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { User } from '../model/user';
import { userCardStyles as styles } from './user-card.styles';

interface UserCardProps extends User {}

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
