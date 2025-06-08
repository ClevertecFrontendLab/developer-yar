import { BloggerFollowDto } from '../dto/blogger-follow.dto';
import { BloggerFollow } from '../model/types';

export const mapBloggerFollowToDto = ({
    bloggerId,
    currentUserId,
}: BloggerFollow): BloggerFollowDto => ({
    fromUserId: currentUserId,
    toUserId: bloggerId,
});
