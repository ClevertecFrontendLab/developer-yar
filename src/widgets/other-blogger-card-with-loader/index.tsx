import { FC, useState } from 'react';

import { Blogger, OtherBloggerCard } from '~/entities/blogger';
import { BloggerFollowButton } from '~/features/blogger-follow';
import { CardWithLoader } from '~/shared/ui/card-with-loader';

type OtherBloggerCardWithLoaderProps = {
    blogger: Blogger;
};

export const OtherBloggerCardWithLoader: FC<OtherBloggerCardWithLoaderProps> = ({ blogger }) => {
    const [isFollowLoading, setIsFollowLoading] = useState(false);

    const handleStatusChange = (loading: boolean) => {
        setIsFollowLoading(loading);
    };

    return (
        <CardWithLoader isLoading={isFollowLoading}>
            <OtherBloggerCard blogger={blogger}>
                <BloggerFollowButton
                    bloggerId={blogger.id}
                    isUserFollowing={blogger.isUserFollowing}
                    onStatusChange={handleStatusChange}
                />
            </OtherBloggerCard>
        </CardWithLoader>
    );
};
