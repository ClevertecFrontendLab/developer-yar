export type BloggersData = {
    followed: Blogger[];
    others: Blogger[];
};

export type Blogger = {
    bookmarksCount: number;
    followersCount: number;
    fullName: string;
    id: string;
    isUserFollowing: boolean;
    notes: Note[];
    username: string;
    newRecipesCount?: number;
};

export type BloggerInfo = {
    fullName: string;
    id: string;
    isUserFollowing: boolean;
    name: string;
    notes: Note[];
    recipesIds: string[];
    subscribers: string[];
    subscriptions: string[];
    surname: string;
    totalBookmarks: number;
    totalFollowers: number;
    username: string;
};

export type BloggerFollow = {
    bloggerId: string;
    currentUserId: string;
};

export type GetAllBloggersQueryParams = {
    currentUserId: string;
    limit: BloggersCountLimit;
};

export type BloggersCountLimit = '' | '3' | '9' | 'all';

export type GetBloggerByIdQueryParams = {
    bloggerId: string;
    currentUserId: string;
};

export type Note = {
    date: string;
    text: string;
};
