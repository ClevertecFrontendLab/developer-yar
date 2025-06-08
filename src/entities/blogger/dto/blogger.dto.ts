import { Note } from '../model/types';

export type BloggerDto = {
    _id: string;
    bookmarksCount: number;
    firstName: string;
    isFavorite: boolean;
    lastName: string;
    login: string;
    newRecipesCount: number;
    notes: Note[];
    subscribersCount: number;
};
