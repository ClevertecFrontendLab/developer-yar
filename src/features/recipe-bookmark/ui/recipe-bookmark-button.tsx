import { Box, Button } from '@chakra-ui/react';
import { FC } from 'react';

import { useBookmarkRecipeMutation } from '~/entities/recipe';
import { getDisplayForBreakpoints } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';
import { BookmarkIcon } from '~/shared/ui/icons';

import { RecipeBookmarkButtonVariant } from '../model/types';
import { recipeBookmarkButtonVariants } from './recipe-bookmark-button.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

type RecipeBookmarkButtonProps = {
    recipeId: string;
    variant?: RecipeBookmarkButtonVariant;
};

export const RecipeBookmarkButton: FC<RecipeBookmarkButtonProps> = ({
    recipeId,
    variant = 'primary',
}) => {
    const [bookmarkRecipe, { isLoading, isError }] = useBookmarkRecipeMutation();

    const handleBookmark = async () => {
        await bookmarkRecipe(recipeId).unwrap();
    };

    useApiStatusSync(isLoading, {
        isError,
    });

    const styles = recipeBookmarkButtonVariants[variant] || recipeBookmarkButtonVariants.primary;

    return (
        <Button {...styles.button} onClick={handleBookmark}>
            <BookmarkIcon {...styles.buttonIcon} />
            <Box {...(variant === 'secondary' ? { ...shownFromXlBreakpoint } : {})}>
                Сохранить {variant === 'primary' && 'в закладки'}
            </Box>
        </Button>
    );
};
