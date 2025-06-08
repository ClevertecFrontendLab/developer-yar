import { Box, Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useParams } from 'react-router';

import { useGetBloggerByIdQuery } from '~/entities/blogger';
import { useRecipesByUserId } from '~/entities/recipe';
import { getCurrentUserId } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';

import { bloggerPageStyles as styles } from './blogger-page.styles';
import { BloggerProfileCardWithLoader } from './blogger-profile-card';
import { Notes } from './notes';
import { OtherBloggers } from './other-bloggers';
import { RecipesWithLoadMore } from './recipes-with-load-more';

const BloggerPage: FC = () => {
    const { bloggerId } = useParams();

    const currentUserId = getCurrentUserId();

    const {
        data: blogger,
        isError: isBloggerError,
        isLoading: isBloggerLoading,
        isSuccess: isBloggerSuccess,
    } = useGetBloggerByIdQuery(
        {
            bloggerId: bloggerId ?? '',
            currentUserId,
        },
        { skip: !bloggerId },
    );

    const {
        notes,
        recipes,
        isLoading: isRecipesLoading,
        isError: isRecipesError,
        isSuccess: isRecipesSuccess,
    } = useRecipesByUserId(bloggerId ?? '');

    const isLoading = isBloggerLoading || isRecipesLoading;
    const isError = isBloggerError || isRecipesError;
    const isSuccess = isBloggerSuccess && isRecipesSuccess;

    useApiStatusSync(isLoading, { isError });

    if (isSuccess && blogger && recipes && notes)
        return (
            <Box {...styles.container}>
                <Flex {...styles.layout}>
                    <Stack {...styles.topLayout}>
                        <BloggerProfileCardWithLoader blogger={blogger} />
                        <RecipesWithLoadMore recipes={recipes} />
                    </Stack>
                    <Notes notes={notes} />
                    <OtherBloggers />
                </Flex>
            </Box>
        );
};

export default BloggerPage;
