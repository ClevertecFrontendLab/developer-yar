import { FC, PropsWithChildren } from 'react';

import { Blogger } from '../../model/types';
import { BaseBloggerCard } from '../base-blogger-card';
import { BloggerCardFooter } from '../blogger-card-footer';
import { BloggerReadButton } from '../blogger-read-button';

type OtherBloggerCardProps = {
    blogger: Blogger;
} & PropsWithChildren;

export const OtherBloggerCard: FC<OtherBloggerCardProps> = ({ blogger, children }) => (
    <BaseBloggerCard
        blogger={blogger}
        footer={
            <BloggerCardFooter
                bookmarks={blogger.bookmarksCount}
                followers={blogger.followersCount}
            >
                {children}
                <BloggerReadButton bloggerId={blogger.id} variant='others' />
            </BloggerCardFooter>
        }
    />
);
