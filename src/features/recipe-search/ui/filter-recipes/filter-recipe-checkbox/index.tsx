import { Stack, Text } from '@chakra-ui/react';
import { FC, useCallback } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useAppDispatch } from '~/shared/model';
import { Checkbox } from '~/shared/ui/checkbox';

import { FilterRecipeControlProps } from '../index.types';
import { filterRecipeCheckboxStyles as styles } from './index.styles';

export const FilterRecipeCheckbox: FC<FilterRecipeControlProps> = ({ title, items, action }) => {
    const dispatch = useAppDispatch();

    const handleCheckboxChange = useCallback(
        (id: string) => () => {
            dispatch(action(id));
        },
        [action, dispatch],
    );

    return (
        <Stack {...styles.listContainer}>
            <Text {...styles.labelText}>{title}</Text>
            {items.map((item) => (
                <Checkbox
                    key={item.id}
                    data-test-id={`${DATA_TEST_ATTRIBUTES.CHECKBOX}-${item.title.toLowerCase()}`}
                    isChecked={item.selected}
                    onChange={handleCheckboxChange(item.id)}
                    {...styles.checkbox}
                >
                    {item.title}
                </Checkbox>
            ))}
        </Stack>
    );
};
