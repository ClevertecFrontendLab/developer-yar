import { User } from '~/entities/user/@x/post';

export interface Post {
    id: number;
    text: string;
    author: User;
}
