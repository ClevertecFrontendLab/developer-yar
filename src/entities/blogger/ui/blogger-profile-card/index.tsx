import { Avatar, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { BloggerInfo } from '../../model/types';
import { BloggerCardFooter } from '../blogger-card-footer';
import { bloggerProfileCardStyles as styles } from './index.styles';

type BloggerProfileCardProps = {
    blogger: BloggerInfo;
} & PropsWithChildren;

export const BloggerProfileCard: FC<BloggerProfileCardProps> = ({ blogger, children }) => (
    <Flex {...styles.profileCard}>
        <Avatar name={blogger.fullName} src='' {...styles.profileAvatar} />
        <Stack {...styles.profileData}>
            <Heading
                as='h1'
                {...styles.profileFullName}
                data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_USER_INFO_NAME}
            >
                {blogger.fullName}
            </Heading>
            <Text
                {...styles.profileUsername}
                data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_USER_INFO_LOGIN}
            >
                {blogger.username}
            </Text>
            <BloggerCardFooter
                bookmarks={blogger.totalBookmarks}
                followers={blogger.totalFollowers}
            >
                {children}
            </BloggerCardFooter>
        </Stack>
    </Flex>
);
