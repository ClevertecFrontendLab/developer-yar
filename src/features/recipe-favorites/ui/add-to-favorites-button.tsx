import { Box, Button } from '@chakra-ui/react';
import { FC } from 'react';

import { getDisplayForBreakpoints } from '~/shared/lib';
import { BookmarkIcon } from '~/shared/ui/icons';

import { AddToFavoritesButtonVariant } from '../model/types';
import { addToFavoritesButtonVariants } from './add-to-favorites-button.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

type AddToFavoritesButtonProps = {
    variant?: AddToFavoritesButtonVariant;
};

export const AddToFavoritesButton: FC<AddToFavoritesButtonProps> = ({ variant = 'primary' }) => {
    const styles = addToFavoritesButtonVariants[variant] || addToFavoritesButtonVariants.primary;
    return (
        <Button {...styles.button}>
            <BookmarkIcon {...styles.buttonIcon} />
            <Box {...(variant === 'secondary' ? { ...shownFromXlBreakpoint } : {})}>
                Сохранить {variant === 'primary' && 'в закладки'}
            </Box>
        </Button>
    );
};
