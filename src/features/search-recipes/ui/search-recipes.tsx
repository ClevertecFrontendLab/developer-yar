import { SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, InputGroup } from '@chakra-ui/react';
import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '~/shared/model';

import {
    selectIsQueryNotEmpty,
    selectIsQueryNotLongEnough,
    selectSearchQuery,
} from '../model/selectors';
import { setSearchingActive, setSearchQuery } from '../model/slice';
import { searchRecipesStyles as styles } from './search-recipes.styles';

export const SearchRecipes: FC = () => {
    const dispatch = useAppDispatch();

    const searchQuery = useAppSelector(selectSearchQuery);
    const isQueryNotEmpty = useAppSelector(selectIsQueryNotEmpty);
    const isQueryNotLongEnough = useAppSelector(selectIsQueryNotLongEnough);

    const handleSearch = () => dispatch(setSearchingActive(true));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchQuery(e.target.value));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSearch();
    };

    const handleClear = () => {
        dispatch(setSearchQuery(''));
        dispatch(setSearchingActive(false));
    };

    return (
        <InputGroup {...styles.inputWrapper}>
            <Input
                placeholder='Название или ингредиент...'
                type='text'
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                {...styles.input(isQueryNotEmpty, isQueryNotLongEnough)}
                data-test-id='search-input'
                noOfLines={1}
            />

            <Flex {...styles.inputButtons}>
                <IconButton
                    aria-label='Очистить'
                    data-test-id='clear-button'
                    icon={<SmallCloseIcon {...styles.clearIcon} />}
                    onClick={handleClear}
                    {...styles.iconWrapper}
                    {...styles.clearIconWrapper(isQueryNotEmpty)}
                />
                <IconButton
                    aria-label='Поиск'
                    data-test-id='search-button'
                    icon={<SearchIcon {...styles.searchIcon} />}
                    isDisabled={isQueryNotLongEnough}
                    onClick={handleSearch}
                    {...styles.iconWrapper}
                    {...styles.searchIconWrapper(isQueryNotLongEnough)}
                />
            </Flex>
        </InputGroup>
    );
};
