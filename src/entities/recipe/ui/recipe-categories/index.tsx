import { FC } from 'react';

import { Category } from '~/entities/navigation/@x/recipe';
import { Icon } from '~/shared/ui/icon';
import { Tag } from '~/shared/ui/tag';

import { TagColor } from '../../model/types';

type RecipeCategoriesProps = {
    categories: Category[];
    variant?: TagColor;
};

export const RecipeCategories: FC<RecipeCategoriesProps> = ({ categories, variant = 'yellow' }) =>
    categories.map(({ id, title, icon }) => (
        <Tag key={id} icon={<Icon icon={icon} variant='small' />} variant={variant}>
            {title}
        </Tag>
    ));
