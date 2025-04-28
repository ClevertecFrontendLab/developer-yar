import { FC } from 'react';

import { CATEGORY_CONFIG_MAP } from '~/shared/consts';
import { Category, TagColor } from '~/shared/model';
import { CategoryIcon } from '~/shared/ui/category-icon';
import { Tag } from '~/shared/ui/tag';

type CategoryTagProps = {
    categories: Category[];
    variant: TagColor;
};

export const CategoryTags: FC<CategoryTagProps> = ({ categories, variant }) =>
    categories.map((category) => {
        const name = CATEGORY_CONFIG_MAP[category].name;
        return (
            <Tag
                key={category}
                icon={<CategoryIcon boxSize={4} category={category} />}
                variant={variant}
            >
                {name}
            </Tag>
        );
    });
