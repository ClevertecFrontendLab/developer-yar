import { BloggerDto } from '../dto/blogger.dto';
import { formatBloggerUsername } from '../lib/format-blogger-username';
import { Blogger } from '../model/types';

export const mapBloggerFromDto = (blogger: BloggerDto): Blogger => ({
    bookmarksCount: blogger.bookmarksCount,
    followersCount: blogger.subscribersCount,
    fullName: `${blogger.firstName} ${blogger.lastName}`,
    id: blogger._id,
    isUserFollowing: blogger.isFavorite,
    newRecipesCount: blogger.newRecipesCount,
    notes: blogger.notes,
    username: formatBloggerUsername(blogger.login),
});
