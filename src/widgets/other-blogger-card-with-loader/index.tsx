import { FC, useState } from 'react';

import { Blogger, BloggerCardFooterVariant, OtherBloggerCard } from '~/entities/blogger';
import { BloggerFollowButton } from '~/features/blogger-follow';
import { CardWithLoader } from '~/shared/ui/card-with-loader';

type OtherBloggerCardWithLoaderProps = {
    blogger: Blogger;
    variant?: BloggerCardFooterVariant;
};

export const OtherBloggerCardWithLoader: FC<OtherBloggerCardWithLoaderProps> = ({
    blogger,
    variant,
}) => {
    const [isFollowLoading, setIsFollowLoading] = useState(false);

    const handleStatusChange = (loading: boolean) => {
        setIsFollowLoading(loading);
    };

    return (
        <CardWithLoader isLoading={isFollowLoading}>
            <OtherBloggerCard blogger={blogger} variant={variant}>
                <BloggerFollowButton
                    bloggerId={blogger.id}
                    isUserFollowing={blogger.isUserFollowing}
                    onStatusChange={handleStatusChange}
                />
            </OtherBloggerCard>
        </CardWithLoader>
    );
};
