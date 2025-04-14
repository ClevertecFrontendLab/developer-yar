import { Box, Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { Recipe, RecipeSliderCard } from '~/entities/recipe';
import { getDisplayForBreakpoints } from '~/shared/lib';
import { SectionTitle } from '~/shared/ui/section-title';

import { mockNewRecipes } from '../../consts/mock-new-recipes';
import { Arrows } from './arrows';
import { newRecipesStyles as styles } from './index.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl', display: '-webkit-box' });

export const NewRecipes: FC = () => (
    <Stack {...styles.newRecipesContainer}>
        <SectionTitle>Новые рецепты</SectionTitle>
        <Box>
            <Box {...shownFromXlBreakpoint}>
                <Arrows />
            </Box>
            <Flex {...styles.newRecipes}>
                {mockNewRecipes.map((recipe: Recipe) => (
                    <RecipeSliderCard key={recipe.id} {...recipe} />
                ))}
            </Flex>
        </Box>
    </Stack>
);
