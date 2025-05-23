import { useDisclosure } from '@chakra-ui/react';
import { FC, memo, useCallback, useMemo } from 'react';

import { useAppDispatch } from '~/shared/model';
import { Checkbox } from '~/shared/ui/checkbox';
import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownPreview,
    DropdownToggleButton,
} from '~/shared/ui/dropdown';

import { FilterRecipeControlProps } from '../index.types';

export const FilterRecipeMenu: FC<FilterRecipeControlProps> = memo(
    ({ action, dataTestId, items, title }) => {
        const { isOpen, onClose, onToggle } = useDisclosure();

        const dispatch = useAppDispatch();

        const handleCheckboxChange = useCallback(
            (id: string) => () => {
                dispatch(action(id));
            },
            [action, dispatch],
        );

        const selectedItemTags = useMemo(() => items.filter((item) => item.selected), [items]);

        return (
            <Dropdown isOpen={isOpen} onClose={onClose}>
                <DropdownToggleButton
                    dataTestId={dataTestId ? dataTestId : ''}
                    isOpen={isOpen}
                    onClick={onToggle}
                >
                    <DropdownPreview
                        items={selectedItemTags}
                        placeholder={title}
                        shouldShowPlaceholder={selectedItemTags.length === 0}
                    />
                </DropdownToggleButton>

                <DropdownItems>
                    {items.map((item) => (
                        <DropdownItem key={item.id}>
                            <Checkbox
                                data-test-id={
                                    item.title === 'Веганская кухня'
                                        ? 'checkbox-веганская кухня'
                                        : ''
                                }
                                isChecked={item.selected}
                                onChange={handleCheckboxChange(item.id)}
                            >
                                {item.title}
                            </Checkbox>
                        </DropdownItem>
                    ))}
                </DropdownItems>
            </Dropdown>
        );
    },
);
