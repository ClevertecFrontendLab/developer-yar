import { RecipeItem } from '~/entities/recipe/@x/blogger';

import { Note } from '../model/types';

export type BloggerInfoApi = {
    bloggerInfo: {
        _id: string;
        drafts: RecipeItem[];
        email: string;
        firstName: string;
        lastName: string;
        login: string;
        notes: Note[];
        recipesIds: string[];
        subscribers: string[];
        subscriptions: string[];
    };
    isFavorite: boolean;
    totalBookmarks: number;
    totalSubscribers: number;
};
