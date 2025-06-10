import { BloggerApi } from './blogger.api';

export type BloggersDataApi = {
    favorites: BloggerApi[];
    others: BloggerApi[];
};
