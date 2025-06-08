import { Center } from '@chakra-ui/react';
import { FC, useState } from 'react';

import { BloggerInfo, BloggerProfileCard } from '~/entities/blogger';
import { BloggerFollowButton } from '~/features/blogger-follow';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { CardWithLoader } from '~/shared/ui/card-with-loader';
import { Tooltip } from '~/shared/ui/tooltip';

import { bloggerPageStyles as styles } from './index.styles';

type BloggerProfileCardWithLoaderProps = {
    blogger: BloggerInfo;
};

export const BloggerProfileCardWithLoader: FC<BloggerProfileCardWithLoaderProps> = ({
    blogger,
}) => {
    const [isFollowLoading, setIsFollowLoading] = useState(false);

    const handleStatusChange = (loading: boolean) => {
        setIsFollowLoading(loading);
    };

    return (
        <Center
            {...styles.profileCardContainer}
            data-test-id={DATA_TEST_ATTRIBUTES.BLOGGER_USER_INFO_BOX}
        >
            <CardWithLoader isLoading={isFollowLoading}>
                <BloggerProfileCard blogger={blogger}>
                    <Tooltip
                        {...styles.tooltip}
                        data-test-id={DATA_TEST_ATTRIBUTES.BLOG_TOOLTIP}
                        hasArrow
                        label='Нажмите, если хотите отписаться'
                    >
                        <BloggerFollowButton
                            bloggerId={blogger.id}
                            isUserFollowing={blogger.isUserFollowing}
                            onStatusChange={handleStatusChange}
                        />
                    </Tooltip>
                </BloggerProfileCard>
            </CardWithLoader>
        </Center>
    );
};
