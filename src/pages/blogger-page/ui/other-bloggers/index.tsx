import { Button, Flex, Grid, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { useGetAllBloggersQuery } from '~/entities/blogger';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getCurrentUserId } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';
import { ROUTES } from '~/shared/routes';
import { RightArrowIcon } from '~/shared/ui/icons';
import { SectionTitle } from '~/shared/ui/section-title';
import { OtherBloggerCardWithLoader } from '~/widgets/other-blogger-card-with-loader';

import { otherBloggersStyles as styles } from './index.styles';

export const OtherBloggers: FC = () => {
    const currentUserId = getCurrentUserId();

    const {
        data: otherBloggers,
        isError: isOtherBloggersError,
        isLoading: isOtherBloggersLoading,
        isSuccess: isOtherBloggersSuccess,
    } = useGetAllBloggersQuery({
        currentUserId,
        limit: '',
    });

    useApiStatusSync(isOtherBloggersLoading, { isError: isOtherBloggersError });

    const navigate = useNavigate();

    const handleNavigateToAllAuthors = () => navigate(ROUTES.BLOGS);

    if (isOtherBloggersSuccess && otherBloggers)
        return (
            <Stack {...styles.container}>
                <Flex {...styles.titleContainer}>
                    <SectionTitle>Другие блоги</SectionTitle>
                    <Button
                        {...styles.button}
                        data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_USER_OTHER_BLOGS_BUTTON}
                        onClick={handleNavigateToAllAuthors}
                    >
                        Всe авторы <RightArrowIcon />
                    </Button>
                </Flex>
                <Grid
                    {...styles.otherBloggers}
                    data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_USER_OTHER_BLOGS_GRID}
                >
                    {otherBloggers.others.map((blogger) => (
                        <OtherBloggerCardWithLoader blogger={blogger} key={blogger.id} />
                    ))}
                </Grid>
            </Stack>
        );
    else return null;
};
