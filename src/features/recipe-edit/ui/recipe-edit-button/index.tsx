import { Button, EditIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';

import { buildAbsoluteUrl } from '~/shared/lib';

import { recipeEditButtonStyles as styles } from './index.styles';

export const RecipeEditButton: FC = () => {
    const navigate = useNavigate();

    const { category, subcategory, recipeId } = useParams<{
        category: string;
        recipeId: string;
        subcategory: string;
    }>();

    const navigateToEditPage = () => {
        if (category && subcategory && recipeId)
            navigate(buildAbsoluteUrl('edit-recipe', category, subcategory, recipeId));
    };

    return (
        <Button {...styles.editButton} onClick={navigateToEditPage}>
            <EditIcon />
            Редактировать рецепт
        </Button>
    );
};
