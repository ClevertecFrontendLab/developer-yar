import { Box, Button } from '@chakra-ui/react';
import { FC } from 'react';

import { getDisplayForBreakpoints } from '~/shared/lib';
import { BookmarkHeartIcon } from '~/shared/ui/icons';

import { addRecipeToFavoritesButtonStyles as styles } from './add-recipe-to-favorites.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

export const AddRecipeToFavoritesButton: FC = () => (
    <Button {...styles.button}>
        <BookmarkHeartIcon {...styles.buttonIcon} />
        <Box {...shownFromXlBreakpoint}>Сохранить</Box>
    </Button>
);
