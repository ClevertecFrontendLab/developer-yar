import { Button, Grid, Stack } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { BloggersCountLimit, useGetAllBloggersQuery } from '~/entities/blogger';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getCurrentUserId } from '~/shared/lib';
import { hasItems } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';
import { LeftArrowIcon, RightArrowIcon } from '~/shared/ui/icons';
import { OtherBloggerCardWithLoader } from '~/widgets/other-blogger-card-with-loader';

import { useRedirectOnError } from '../../hooks/use-redirect-on-error';
import { otherBloggersStyles as styles } from './index.styles';

export const OtherBloggers: FC = () => {
    const currentUserId = getCurrentUserId();

    const [limit, setLimit] = useState<BloggersCountLimit>('9');

    const {
        data: bloggers,
        isLoading: isBloggersLoading,
        isError: isBloggersError,
        isSuccess: isBloggersSuccess,
    } = useGetAllBloggersQuery({
        currentUserId,
        limit,
    });

    const handleLoadAllBloggers = () => setLimit((prev) => (prev === '9' ? 'all' : '9'));

    useApiStatusSync(isBloggersLoading, {
        isError: isBloggersError,
    });

    useRedirectOnError(isBloggersError);

    if (isBloggersSuccess && hasItems(bloggers.others))
        return (
            <Stack {...styles.container} data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_OTHERS_BOX}>
                <Grid {...styles.bloggers} data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_OTHERS_GRID}>
                    {bloggers.others.map((blogger) => (
                        <OtherBloggerCardWithLoader blogger={blogger} key={blogger.id} />
                    ))}
                </Grid>
                <Button
                    {...styles.button}
                    data-test-id={DATA_TEST_ATTRIBUTES.BLOGS_OTHERS_BUTTON}
                    onClick={handleLoadAllBloggers}
                >
                    {limit === 'all' ? (
                        <>
                            <LeftArrowIcon />
                            Свернуть
                        </>
                    ) : (
                        <>
                            Все авторы
                            <RightArrowIcon />
                        </>
                    )}
                </Button>
            </Stack>
        );
    return null;
};
