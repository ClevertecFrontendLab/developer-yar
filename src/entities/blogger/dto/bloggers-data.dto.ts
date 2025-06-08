import { BloggerDto } from './blogger.dto';

export type BloggersDataDto = {
    favorites: BloggerDto[];
    others: BloggerDto[];
};
