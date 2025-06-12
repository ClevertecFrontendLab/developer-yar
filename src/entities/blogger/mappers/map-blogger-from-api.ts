import { BloggerApi } from '../api/blogger.api';
import { formatBloggerUsername } from '../lib/format-blogger-username';
import { Blogger } from '../model/types';

export const mapBloggerFromApi = (blogger: BloggerApi): Blogger => ({
    bookmarksCount: blogger.bookmarksCount,
    followersCount: blogger.subscribersCount,
    fullName: `${blogger.firstName} ${blogger.lastName}`,
    id: blogger._id,
    isUserFollowing: blogger.isFavorite,
    newRecipesCount: blogger.newRecipesCount,
    notes: blogger.notes,
    username: formatBloggerUsername(blogger.login),
});
