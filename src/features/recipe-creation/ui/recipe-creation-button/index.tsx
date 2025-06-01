import { Center, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { ROUTES } from '~/shared/routes';
import { WriteRecipeIcon } from '~/shared/ui/icons';

import { recipeCreationButtonStyles as styles } from './index.styles';

export const RecipeCreationButton: FC = () => (
    <Link data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_ADD_BUTTON} to={ROUTES.NEW_RECIPE}>
        <Center {...styles.container}>
            <Center {...styles.iconWrapper}>
                <WriteRecipeIcon boxSize={6} />
            </Center>
            <Text {...styles.text}>Записать рецепт</Text>
        </Center>
    </Link>
);
