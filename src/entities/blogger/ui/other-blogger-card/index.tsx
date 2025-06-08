import { FC, PropsWithChildren } from 'react';

import { Blogger, BloggerCardFooterVariant } from '../../model/types';
import { BaseBloggerCard } from '../base-blogger-card';
import { BloggerCardFooter } from '../blogger-card-footer';
import { BloggerReadButton } from '../blogger-read-button';

type OtherBloggerCardProps = {
    blogger: Blogger;
    variant?: BloggerCardFooterVariant;
} & PropsWithChildren;

export const OtherBloggerCard: FC<OtherBloggerCardProps> = ({ blogger, children, variant }) => (
    <BaseBloggerCard
        blogger={blogger}
        footer={
            <BloggerCardFooter
                bookmarks={blogger.bookmarksCount}
                followers={blogger.followersCount}
                variant={variant}
            >
                {children}
                <BloggerReadButton bloggerId={blogger.id} variant='others' />
            </BloggerCardFooter>
        }
    />
);
