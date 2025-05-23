import { Box, Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useAppSelector } from '~/shared/model';
import { Spinner } from '~/shared/ui/spinner';

import { selectIsFetching } from '../model/selectors';
import { RecipeAllergenFilter } from './recipe-allergen-filter';
import { RecipeFilter } from './recipe-filter';
import { recipeRefinementStyles as styles } from './recipe-refinement.styles';
import { RecipeSearch } from './recipe-search';

export const RecipeRefinement: FC = () => {
    const isFetching = useAppSelector(selectIsFetching);

    return (
        <Stack {...styles.wrapper}>
            {isFetching && (
                <Box {...styles.loader} data-test-id={DATA_TEST_ATTRIBUTES.LOADER_SEARCH_BLOCK}>
                    <Spinner variant='search' />
                </Box>
            )}
            <Stack {...styles.filterAndSearchWrapper(isFetching)}>
                <Flex {...styles.filterAndSearch}>
                    <RecipeFilter />
                    <RecipeSearch />
                </Flex>
                <RecipeAllergenFilter />
            </Stack>
        </Stack>
    );
};
