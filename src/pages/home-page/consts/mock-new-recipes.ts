import { Recipe } from '~/entities/recipe';

import image1 from '../assets/mock-new-recipe-1.png';
import image2 from '../assets/mock-new-recipe-2.png';
import image3 from '../assets/mock-new-recipe-3.png';
import image4 from '../assets/mock-new-recipe-4.png';

export const mockNewRecipes: Recipe[] = [
    {
        id: 0,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Первые блюда',
        image: image1,
        bookmarks: 1,
    },
    {
        id: 1,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        category: 'Веганская кухня',
        image: image2,
        bookmarks: 2,
        emojies: 1,
    },
    {
        id: 2,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        category: 'Десерты, выпечка',
        image: image3,
        bookmarks: 1,
    },
    {
        id: 3,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        category: 'Салаты',
        image: image4,
    },
    {
        id: 4,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        category: 'Салаты',
        image: image4,
    },
];
