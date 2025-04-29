import { User } from '~/entities/user/@x/post';

export type Post = {
    author: User;
    id: number;
    text: string;
};
