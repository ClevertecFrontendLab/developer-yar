import { SearchIcon } from '@chakra-ui/icons';
import {
    Center,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Stack,
    Switch,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';

import { FilterIcon } from '~/shared/ui/icons';

import { searchRecipeStyles as styles } from './search-recipe.styles';

export const SearchRecipe: FC = () => (
    <Stack {...styles.stackWrapper}>
        <Flex {...styles.filterAndSearchWrapper}>
            <Center {...styles.filterButtonContainer}>
                <FilterIcon {...styles.filterIcon} />
            </Center>
            <InputGroup {...styles.inputWrapper}>
                <Input type='text' placeholder='Название или ингредиент...' {...styles.input} />
                <InputRightElement {...styles.inputRightElement}>
                    <SearchIcon {...styles.searchIcon} />
                </InputRightElement>
            </InputGroup>
        </Flex>
        <Flex {...styles.filterRowWrapper}>
            <Center {...styles.switchContainer}>
                <Text {...styles.switchLabel}>Исключить мои аллергены</Text>
                <Switch {...styles.switch} />
            </Center>
            <Select placeholder='Выберите из списка' {...styles.select}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
        </Flex>
    </Stack>
);
