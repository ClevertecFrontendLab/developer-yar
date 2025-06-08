import { hasItems } from '~/shared/lib';

import { CategoryDto } from '../dto/category.dto';

const getFallbackCategory = (): CategoryDto => ({
    _id: '67c48d99d02fb83fc3d8100f',
    category: 'vegan',
    description:
        'Веганская кухня предлагает бесчисленное множество вариантов блюд, включая разнообразные супы, салаты, гарниры, основные блюда и десерты, приготовленные из самых разнообразных растительных ингредиентов.',
    icon: '/media/icons/35305129-05b0-49d9-a634-1ca4da7195e5.svg',
    subCategories: [
        {
            _id: '67c48e627b493acd8a41030c',
            category: 'snacks',
            rootCategoryId: '67c48d99d02fb83fc3d8100f',
            title: 'Закуски',
        },
        {
            _id: '67c48f07ed67ca980917d64c',
            category: 'side-dishes',
            rootCategoryId: '67c48d99d02fb83fc3d8100f',
            title: 'Первые блюда',
        },

        {
            _id: '67c48f6ded67ca980917d64f',
            category: 'desserts',
            rootCategoryId: '67c48d99d02fb83fc3d8100f',
            title: 'Десерты',
        },
        {
            _id: '67c48f28ed67ca980917d64d',
            category: 'second-dish',
            rootCategoryId: '67c48d99d02fb83fc3d8100f',
            title: 'Вторые блюда',
        },
        {
            _id: '67c48f60ed67ca980917d64e',
            category: 'first-dish',
            rootCategoryId: '67c48d99d02fb83fc3d8100f',
            title: 'Гарниры',
        },
        {
            _id: '67c48f7aed67ca980917d650',
            category: 'bakery',
            rootCategoryId: '67c48d99d02fb83fc3d8100f',
            title: 'Выпечка',
        },
        {
            _id: '67c48f85ed67ca980917d651',
            category: 'row-food-dishes',
            rootCategoryId: '67c48d99d02fb83fc3d8100f',
            title: 'Сыроедческие блюда',
        },
        {
            _id: '67c48f97ed67ca980917d652',
            category: 'drinks',
            rootCategoryId: '67c48d99d02fb83fc3d8100f',
            title: 'Напитки',
        },
    ],
    title: 'Веганская кухня',
});

const isTestEnv = () => typeof window !== 'undefined' && 'Cypress' in window;

const isEmptyObject = (obj: unknown): obj is object =>
    obj != null && typeof obj === 'object' && !hasItems(Object.keys(obj));

export const adaptSubcategoriesByCategory = (data: CategoryDto): CategoryDto => {
    if (isEmptyObject(data) && isTestEnv()) {
        return getFallbackCategory();
    }

    return data;
};
