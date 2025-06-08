import { BloggerInfoDto } from '../dto/blogger-info.dto';
import { formatBloggerUsername } from '../lib/format-blogger-username';
import { BloggerInfo } from '../model/types';

export const mapBloggerInfoFromDto = (blogger: BloggerInfoDto): BloggerInfo => ({
    fullName: `${blogger.bloggerInfo.firstName} ${blogger.bloggerInfo.lastName}`,
    id: blogger.bloggerInfo._id,
    isUserFollowing: blogger.isFavorite,
    name: blogger.bloggerInfo.firstName,
    notes: blogger.bloggerInfo.notes,
    recipesIds: blogger.bloggerInfo.recipesIds,
    subscribers: blogger.bloggerInfo.subscribers,
    subscriptions: blogger.bloggerInfo.subscriptions,
    surname: blogger.bloggerInfo.lastName,
    totalBookmarks: blogger.totalBookmarks,
    totalFollowers: blogger.totalSubscribers,
    username: formatBloggerUsername(blogger.bloggerInfo.login),
});
