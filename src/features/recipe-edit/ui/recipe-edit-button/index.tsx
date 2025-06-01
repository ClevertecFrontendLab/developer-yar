import { Button, EditIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';

import { buildAbsoluteUrl } from '~/shared/lib';

import { recipeEditButtonStyles as styles } from './index.styles';

export const RecipeEditButton: FC = () => {
    const navigate = useNavigate();

    const { category, subcategory, id } = useParams<{
        category: string;
        id: string;
        subcategory: string;
    }>();

    const navigateToEditPage = () => {
        if (category && subcategory && id)
            navigate(buildAbsoluteUrl('edit-recipe', category, subcategory, id));
    };

    return (
        <Button {...styles.editButton} onClick={navigateToEditPage}>
            <EditIcon />
            Редактировать рецепт
        </Button>
    );
};
