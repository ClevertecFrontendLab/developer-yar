import { DeleteIcon } from '@chakra-ui/icons';
import {
    Center,
    Flex,
    IconButton,
    Input,
    Stack,
    Switch,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { FC, useCallback, useEffect, useState } from 'react';

import { generateId } from '~/shared/lib';
import { Checkbox } from '~/shared/ui/checkbox';
import { Dropdown } from '~/shared/ui/dropdown';
import { DropdownItem } from '~/shared/ui/dropdown-item';
import { DropdownItems } from '~/shared/ui/dropdown-items';
import { DropdownPreview } from '~/shared/ui/dropdown-preview';
import { DropdownToggleButton } from '~/shared/ui/dropdown-toggle-button';
import { AddIcon } from '~/shared/ui/icons';

import { Allergen } from '../model/allergen';
import { allergenPickerBaseStyles, allergenPickerVariants } from './allergen-picker.styles';

export type AllergenPickerVariant = 'excludeAllergens' | 'filterRecipes';

type AllergenPickerProps = {
    allergens: Allergen[];
    isFilteringAllergens: boolean;
    onAddAllergen: (allergen: Allergen) => void;
    onRemoveAllergen: (id: number) => void;
    onToggleAllergen: (id: number) => void;
    onToggleFilter: () => void;
    selectedAllergens: Allergen[];
    title: string;
    variant?: AllergenPickerVariant;
};

export const AllergenPicker: FC<AllergenPickerProps> = ({
    allergens,
    isFilteringAllergens,
    onAddAllergen,
    onRemoveAllergen,
    onToggleAllergen,
    onToggleFilter,
    selectedAllergens,
    title,
    variant = 'filterRecipes',
}) => {
    const { isOpen, onClose, onToggle } = useDisclosure();
    const [customAllergen, setCustomAllergen] = useState('');

    const variantStyles = allergenPickerVariants[variant];

    const handleCheckboxChange = useCallback(
        (allergenId: number) => () => {
            onToggleAllergen(allergenId);
        },
        [onToggleAllergen],
    );

    const handleSwitchChange = () => {
        onToggleFilter();
    };

    const addUserAllergen = useCallback(() => {
        const isEmpty = !customAllergen.trim();
        const exists = allergens.find(
            (allergen) => allergen.title.toLowerCase() === customAllergen.toLowerCase(),
        );

        if (!(isEmpty || exists)) {
            onAddAllergen({
                custom: true,
                id: generateId(),
                selected: true,
                title: customAllergen,
            });
            setCustomAllergen('');
        }
    }, [allergens, customAllergen, onAddAllergen]);

    const removeUserAllergen = (id: number) => {
        onRemoveAllergen(id);
    };

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') addUserAllergen();
        },
        [addUserAllergen],
    );

    useEffect(() => {
        if (!isFilteringAllergens && isOpen) onToggle();
    }, [isFilteringAllergens, isOpen, onToggle]);

    return (
        <Stack {...allergenPickerBaseStyles.allergenPickerContainer} {...variantStyles.container}>
            <Center {...allergenPickerBaseStyles.switchContainer}>
                <Text {...allergenPickerBaseStyles.switchLabel}>Исключить аллергены</Text>
                <Switch
                    onChange={handleSwitchChange}
                    {...allergenPickerBaseStyles.switch}
                    data-test-id={
                        variant === 'excludeAllergens'
                            ? 'allergens-switcher'
                            : 'allergens-switcher-filter'
                    }
                />
            </Center>

            <Dropdown isOpen={isOpen} onClose={onClose}>
                <DropdownToggleButton
                    isDisabled={!isFilteringAllergens}
                    isOpen={isOpen}
                    onClick={onToggle}
                    {...allergenPickerBaseStyles.dropdownToggleButton}
                    {...variantStyles.toggleButton}
                    dataTestId={
                        variant === 'excludeAllergens'
                            ? 'allergens-menu-button'
                            : 'allergens-menu-button-filter'
                    }
                >
                    <DropdownPreview
                        items={selectedAllergens}
                        placeholder={title}
                        shouldShowPlaceholder={
                            selectedAllergens.length === 0 || !isFilteringAllergens
                        }
                    />
                </DropdownToggleButton>
                {isOpen && (
                    <DropdownItems data-test-id='allergens-menu'>
                        {allergens.map((allergen, index) => (
                            <DropdownItem key={allergen.id}>
                                <Checkbox
                                    data-test-id={`allergen-${index}`}
                                    isChecked={allergen.selected}
                                    onChange={handleCheckboxChange(allergen.id)}
                                >
                                    {allergen.title}
                                    {allergen.custom && (
                                        <Flex {...allergenPickerBaseStyles.removeIconWrapper}>
                                            <IconButton
                                                aria-label='Удалить аллерген'
                                                icon={
                                                    <DeleteIcon
                                                        {...allergenPickerBaseStyles.removeIcon}
                                                    />
                                                }
                                                onClick={() => removeUserAllergen(allergen.id)}
                                                {...allergenPickerBaseStyles.popoverAddAllergenButton}
                                                data-test-id='remove-allergen-button'
                                            />
                                        </Flex>
                                    )}
                                </Checkbox>
                            </DropdownItem>
                        ))}

                        <Flex {...allergenPickerBaseStyles.popoverAddAllergen}>
                            <Input
                                placeholder='Другой аллерген'
                                value={customAllergen}
                                onChange={(e) => setCustomAllergen(e.target.value)}
                                onKeyDown={handleKeyDown}
                                {...allergenPickerBaseStyles.popoverAddAllergenInput}
                                data-test-id='add-other-allergen'
                            />
                            <IconButton
                                aria-label='Добавить свой аллерген'
                                icon={<AddIcon {...allergenPickerBaseStyles.addIcon} />}
                                onClick={addUserAllergen}
                                {...allergenPickerBaseStyles.popoverAddAllergenButton}
                                data-test-id='add-allergen-button'
                            />
                        </Flex>
                    </DropdownItems>
                )}
            </Dropdown>
        </Stack>
    );
};
