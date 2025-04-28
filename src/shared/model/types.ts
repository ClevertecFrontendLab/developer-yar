import { CATEGORY_CONFIG_MAP } from '../consts';

type MapType = typeof CATEGORY_CONFIG_MAP;

export type Category = keyof MapType;

export type TagColor = 'yellow' | 'green' | 'gray';
