import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, InputGroup } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useAppDispatch, useAppSelector } from '~/shared/model';

import { useSearchResultStatus } from '../../hooks/use-search-result-status';
import { selectIsSearchDisabled, selectSearchQuery } from '../../model/selectors';
import { setRecipeQueryActive, setSearchQuery } from '../../model/slice';
import { recipeSearchStyles as styles } from './index.styles';

export const RecipeSearch: FC = () => {
    const dispatch = useAppDispatch();

    const searchQuery = useAppSelector(selectSearchQuery);
    const isSearchDisabled = useAppSelector(selectIsSearchDisabled);

    const { status: searchResultStatus } = useSearchResultStatus();

    const handleSearch = () => {
        dispatch(setRecipeQueryActive());
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSearch();
    };

    const handleClear = () => {
        dispatch(setSearchQuery(''));
    };

    return (
        <InputGroup {...styles.inputWrapper}>
            <Input
                placeholder='Название или ингредиент...'
                type='text'
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                {...styles.input(!searchQuery, searchResultStatus)}
                data-test-id={DATA_TEST_ATTRIBUTES.SEARCH_INPUT}
                noOfLines={1}
            />

            <Flex {...styles.inputButtons}>
                <IconButton
                    aria-label='Очистить'
                    icon={<SmallCloseIcon {...styles.clearIcon} />}
                    onClick={handleClear}
                    {...styles.iconWrapper}
                    {...styles.clearIconWrapper(!searchQuery)}
                />
                <IconButton
                    aria-label='Поиск'
                    data-test-id={DATA_TEST_ATTRIBUTES.SEARCH_BUTTON}
                    icon={<SearchIcon {...styles.searchIcon} />}
                    isDisabled={isSearchDisabled}
                    onClick={handleSearch}
                    {...styles.iconWrapper}
                    {...styles.searchIconWrapper(isSearchDisabled)}
                />
            </Flex>
        </InputGroup>
    );
};
