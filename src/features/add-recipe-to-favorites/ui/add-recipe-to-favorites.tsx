import { Box, Button } from '@chakra-ui/react';
import { FC } from 'react';

import { getDisplayForBreakpoints } from '~/shared/lib';
import { BookmarkIcon } from '~/shared/ui/icons';

import { AddRecipeToFavoritesButtonVariant } from '../model/types';
import { addRecipeToFavoritesButtonVariants } from './add-recipe-to-favorites.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

type AddRecipeToFavoritesButtonProps = {
    variant?: AddRecipeToFavoritesButtonVariant;
};

export const AddRecipeToFavoritesButton: FC<AddRecipeToFavoritesButtonProps> = ({
    variant = 'primary',
}) => {
    const styles =
        addRecipeToFavoritesButtonVariants[variant] || addRecipeToFavoritesButtonVariants.primary;
    return (
        <Button {...styles.button}>
            <BookmarkIcon {...styles.buttonIcon} />
            <Box {...(variant === 'secondary' ? { ...shownFromXlBreakpoint } : {})}>
                Сохранить {variant === 'primary' && 'в закладки'}
            </Box>
        </Button>
    );
};
