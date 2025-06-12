import { Button } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

import { mapBloggerFollowToApi, useFollowBloggerMutation } from '~/entities/blogger';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getCurrentUserId } from '~/shared/lib';
import { FollowIcon, UnfollowIcon } from '~/shared/ui/icons';

import { bloggerFollowButtonStyles as styles } from './blogger-follow-button.styles';

type BloggerFollowButtonProps = {
    bloggerId: string;
    isUserFollowing: boolean;
    onStatusChange?: (value: boolean) => void;
};

export const BloggerFollowButton: FC<BloggerFollowButtonProps> = ({
    bloggerId,
    isUserFollowing,
    onStatusChange,
}) => {
    const currentUserId = getCurrentUserId();

    const [followBlogger, { isLoading }] = useFollowBloggerMutation();

    const handleBloggerToggleStatus = () => {
        const data = mapBloggerFollowToApi({ bloggerId, currentUserId });
        followBlogger(data).unwrap();
    };

    useEffect(() => {
        onStatusChange?.(isLoading);
    }, [isLoading, onStatusChange]);

    return (
        <>
            <Button
                {...styles.button(true)}
                data-test-id={DATA_TEST_ATTRIBUTES.BLOG_TOGGLE_UNSUBSCRIBE}
                display={isUserFollowing ? 'flex' : 'none'}
                isLoading={isLoading}
                onClick={handleBloggerToggleStatus}
            >
                <UnfollowIcon {...styles.buttonIcon} />
                Вы подписаны
            </Button>

            <Button
                {...styles.button(false)}
                data-test-id={DATA_TEST_ATTRIBUTES.BLOG_TOGGLE_SUBSCRIBE}
                display={isUserFollowing ? 'none' : 'flex'}
                isLoading={isLoading}
                onClick={handleBloggerToggleStatus}
            >
                <FollowIcon {...styles.buttonIcon} />
                Подписаться
            </Button>
        </>
    );
};
