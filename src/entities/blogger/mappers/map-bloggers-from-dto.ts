import { BloggersDataDto } from '../dto/bloggers-data.dto';
import { BloggersData } from '../model/types';
import { mapBloggerFromDto } from './map-blogger-from-dto';

export const mapBloggersFromDto = (bloggers: BloggersDataDto): BloggersData => ({
    followed: bloggers.favorites.map((blogger) => mapBloggerFromDto(blogger)),
    others: bloggers.others.map((blogger) => mapBloggerFromDto(blogger)),
});
