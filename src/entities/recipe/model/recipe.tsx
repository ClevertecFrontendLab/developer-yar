import { User } from '~/entities/user/@x/recipe';
import { Category } from '~/shared/model';

export interface Recipe {
    id: number;
    title: string;
    description: string;
    image: string;
    category: Category;
    bookmarks?: number;
    emojies?: number;
    recommendedBy?: User;
}
