import { Center, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { WriteRecipeIcon } from '~/shared/ui/icons';

import { recipeCreationButtonStyles as styles } from './recipe-creation-button.styles';

export const RecipeCreationButton: FC = () => (
    <Center {...styles.container}>
        <Center {...styles.iconWrapper}>
            <WriteRecipeIcon boxSize={6} />
        </Center>
        <Text {...styles.text}>Записать рецепт</Text>
    </Center>
);
