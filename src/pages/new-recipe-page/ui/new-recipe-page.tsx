import { Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { RecipeCreationForm } from '~/features/recipe-creation';

import { newRecipePageStyles as styles } from './new-recipe-page.styles';

const RecipePage: FC = () => (
    <Stack {...styles.pageContainer}>
        <Flex {...styles.layout}>
            <RecipeCreationForm />
        </Flex>
    </Stack>
);

export default RecipePage;
