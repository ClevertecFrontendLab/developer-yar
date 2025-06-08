import { Box, Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { PageTitle } from '~/shared/ui/page-title';
import { NewRecipes } from '~/widgets/new-recipes';

import { blogsPageStyles as styles } from './blogs-page.styles';
import { FollowedBloggers } from './followed-bloggers';
import { OtherBloggers } from './other-bloggers';

const BlogsPage: FC = () => (
    <>
        <Box {...styles.pageTitleContainer}>
            <PageTitle>Кулинарные блоги</PageTitle>
        </Box>
        <Flex {...styles.layout}>
            <FollowedBloggers />
            <Stack {...styles.bottomLayout}>
                <OtherBloggers />
                <NewRecipes />
            </Stack>
        </Flex>
    </>
);

export default BlogsPage;
