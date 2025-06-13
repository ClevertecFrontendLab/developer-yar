import { BloggersDataApi } from '../api/bloggers-data.api';
import { BloggersData } from '../model/types';
import { mapBloggerFromApi } from './map-blogger-from-api';

export const mapBloggersFromApi = (bloggers: BloggersDataApi): BloggersData => ({
    followed: bloggers.favorites.map((blogger) => mapBloggerFromApi(blogger)),
    others: bloggers.others.map((blogger) => mapBloggerFromApi(blogger)),
});
