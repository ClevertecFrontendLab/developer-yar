import { Center, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { WriteRecipeIcon } from '~/shared/ui/icons';

import { writeRecipeStyles as styles } from './write-recipe.styles';

export const WriteRecipe: FC = () => (
    <Center {...styles.container}>
        <Center {...styles.iconWrapper}>
            <WriteRecipeIcon boxSize={6} />
        </Center>
        <Text {...styles.text}>Записать рецепт</Text>
    </Center>
);
