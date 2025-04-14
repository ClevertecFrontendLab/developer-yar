import { QuestionIcon } from '@chakra-ui/icons';
import { FC } from 'react';

import { CATEGORY_ICON_MAP } from '~/shared/consts';
import { Category } from '~/shared/model';

interface CategoryIconProps {
    category: Category;
    boxSize?: number;
}

export const CategoryIcon: FC<CategoryIconProps> = ({ category, boxSize = 4 }) => {
    const IconComponent = CATEGORY_ICON_MAP[category] ?? QuestionIcon;
    return <IconComponent boxSize={boxSize} />;
};
