import { Box, Flex, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useAppSelector } from '~/shared/model';
import { Spinner } from '~/shared/ui/spinner';

import { selectIsFetching } from '../model/selectors';
import { ExcludeAllergens } from './exclude-allergens';
import { FilterRecipes } from './filter-recipes';
import { recipeSearchStyles as styles } from './recipe-search.styles';
import { SearchRecipes } from './search-recipes';

export const RecipeSearch: FC = () => {
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
                    <FilterRecipes />
                    <SearchRecipes />
                </Flex>
                <ExcludeAllergens />
            </Stack>
        </Stack>
    );
};
