import { Badge } from '@chakra-ui/react';
import { FC } from 'react';

import { Category } from '~/shared/model';
import { CategoryIcon } from '~/shared/ui/category-icon';

import { categoryBadgeStyles as styles } from './category-badge.styles';
import { CategoryBadgeColor } from './category-badge.types';

interface CategoryBadgeProps {
    text: Category;
    bg: CategoryBadgeColor;
}

export const CategoryBadge: FC<CategoryBadgeProps> = ({ text, bg }) => (
    <Badge {...styles.button(bg)}>
        <CategoryIcon category={text} boxSize={4} />
        {text}
    </Badge>
);
