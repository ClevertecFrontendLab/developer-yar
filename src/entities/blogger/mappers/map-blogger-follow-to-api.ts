import { BloggerFollowApi } from '../api/blogger-follow.api';
import { BloggerFollow } from '../model/types';

export const mapBloggerFollowToApi = ({
    bloggerId,
    currentUserId,
}: BloggerFollow): BloggerFollowApi => ({
    fromUserId: currentUserId,
    toUserId: bloggerId,
});
