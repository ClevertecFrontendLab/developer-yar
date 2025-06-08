import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

import {
    BloggersContainerTitle,
    FollowedBloggerCard,
    useGetAllBloggersQuery,
} from '~/entities/blogger';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getCurrentUserId } from '~/shared/lib';
import { hasItems } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';

import { useRedirectOnError } from '../../hooks/use-redirect-on-error';
import { followedBloggersStyles as styles } from './index.styles';

export const FollowedBloggers: FC = () => {
    const currentUserId = getCurrentUserId();

    const {
        data: bloggers,
        isLoading: isBloggersLoading,
        isError: isBloggersError,
        isSuccess: isBloggersSuccess,
    } = useGetAllBloggersQuery({
        currentUserId,
        limit: '9',
    });

    useApiStatusSync(isBloggersLoading, {
        isError: isBloggersError,
    });

    useRedirectOnError(isBloggersError);

    if (isBloggersSuccess && hasItems(bloggers.followed))
        return (
            <Grid {...styles.gridContainer} data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_FAVORITES_BOX}>
                <GridItem {...styles.titleContainer}>
                    <BloggersContainerTitle>Избранные блоги</BloggersContainerTitle>
                </GridItem>
                <GridItem {...styles.bloggersContainer}>
                    <Grid
                        {...styles.bloggers}
                        data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_FAVORITES_GRID}
                    >
                        {bloggers.followed.map((blogger) => (
                            <FollowedBloggerCard blogger={blogger} key={blogger.id} />
                        ))}
                    </Grid>
                </GridItem>
            </Grid>
        );
    return null;
};
