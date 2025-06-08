import { Avatar, Grid, GridItem, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { profileCardStyles as styles } from './profile-card.styles';

type ProfileCardProps = {
    fullName: string;
    username: string;
    avatar?: string;
    fullNameId?: string;
    usernameId?: string;
};

export const ProfileCard: FC<ProfileCardProps> = memo(
    ({ avatar, fullName, username, fullNameId, usernameId }) => (
        <Grid {...styles.container}>
            <GridItem {...styles.avatarBox}>
                <Avatar name={fullName} src={avatar} {...styles.avatar} />
            </GridItem>
            <GridItem {...styles.nameBox}>
                <Text noOfLines={1} {...styles.fullName} data-test-id={fullNameId}>
                    {fullName}
                </Text>
            </GridItem>
            <GridItem {...styles.usernameBox}>
                <Text noOfLines={1} {...styles.username} data-test-id={usernameId}>
                    {username}
                </Text>
            </GridItem>
        </Grid>
    ),
);
