import { CATEGORY_NAMES } from '~/shared/consts';

export type Category = (typeof CATEGORY_NAMES)[keyof typeof CATEGORY_NAMES];
