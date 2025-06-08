import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { ProfileCard } from '~/shared/ui/profile-card';

import { getBloggerFirstNote } from '../../lib/get-blogger-first-note';
import { Blogger } from '../../model/types';
import { baseBloggerCardStyles as styles } from './index.styles';

type BaseBloggerCardProps = {
    blogger: Blogger;
    footer?: ReactNode;
    header?: ReactNode;
} & PropsWithChildren;

export const BaseBloggerCard: FC<BaseBloggerCardProps> = ({ blogger, header, footer }) => (
    <Flex {...styles.bloggerCardContainer} data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_CARD}>
        {header}
        <Box {...styles.profileCardContainer}>
            <ProfileCard
                fullName={blogger.fullName}
                fullNameId={DATA_TEST_ATTRIBUTES.BLOGS_CARD_NAME}
                username={blogger.username}
                usernameId={DATA_TEST_ATTRIBUTES.BLOGS_CARD_LOGIN}
            />
        </Box>
        <Stack {...styles.cardPostContainer}>
            <Text {...styles.postText} data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_CARD_NOTES_TEXT}>
                {getBloggerFirstNote(blogger)}
            </Text>
            {footer}
        </Stack>
    </Flex>
);
