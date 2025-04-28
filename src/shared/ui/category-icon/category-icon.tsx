import { QuestionIcon } from '@chakra-ui/icons';
import { FC } from 'react';

import { CATEGORY_CONFIG_MAP } from '~/shared/consts';
import { Category } from '~/shared/model';

type CategoryIconProps = {
    boxSize?: number;
    category: Category;
};

export const CategoryIcon: FC<CategoryIconProps> = ({ category, boxSize = 4 }) => {
    const IconComponent = CATEGORY_CONFIG_MAP[category]?.Icon ?? QuestionIcon;
    return <IconComponent boxSize={boxSize} />;
};
