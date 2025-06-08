import { Blogger } from '../model/types';

export const getBloggerFirstNote = (blogger: Blogger) => blogger.notes?.[0]?.text;
