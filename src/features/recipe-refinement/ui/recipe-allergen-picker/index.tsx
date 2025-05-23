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

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { generateId } from '~/shared/lib';
import { Checkbox } from '~/shared/ui/checkbox';
import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownPreview,
    DropdownToggleButton,
} from '~/shared/ui/dropdown';
import { AddIcon } from '~/shared/ui/icons';

import { Allergen } from '../../model/types';
import { recipeAllergenPickerBaseStyles, recipeAllergenPickerVariants } from './index.styles';

export type RecipeAllergenPickerVariant = 'recipeAllergenFilter' | 'filterRecipes';

type RecipeAllergenPickerProps = {
    allergens: Allergen[];
    isFilteringAllergens: boolean;
    onAddAllergen: (allergen: Allergen) => void;
    onRemoveAllergen: (id: number) => void;
    onToggleAllergen: (id: number) => void;
    onToggleFilter: () => void;
    selectedAllergens: Allergen[];
    title: string;
    variant?: RecipeAllergenPickerVariant;
};

export const RecipeAllergenPicker: FC<RecipeAllergenPickerProps> = ({
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

    const variantStyles = recipeAllergenPickerVariants[variant];

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
        <Stack
            {...recipeAllergenPickerBaseStyles.recipeAllergenPickerContainer}
            {...variantStyles.container}
        >
            <Center
                {...recipeAllergenPickerBaseStyles.switchContainer}
                {...variantStyles.switchContainer}
            >
                <Text {...recipeAllergenPickerBaseStyles.switchLabel}>Исключить аллергены</Text>
                <Switch
                    isChecked={isFilteringAllergens}
                    onChange={handleSwitchChange}
                    {...recipeAllergenPickerBaseStyles.switch}
                    data-test-id={
                        variant === 'recipeAllergenFilter'
                            ? DATA_TEST_ATTRIBUTES.ALLERGEN_SWITCHER
                            : DATA_TEST_ATTRIBUTES.ALLERGEN_SWITCHER_FILTER
                    }
                />
            </Center>

            <Dropdown isOpen={isOpen} onClose={onClose}>
                <DropdownToggleButton
                    isDisabled={!isFilteringAllergens}
                    isOpen={isOpen}
                    onClick={onToggle}
                    {...recipeAllergenPickerBaseStyles.dropdownToggleButton}
                    {...variantStyles.toggleButton}
                    dataTestId={
                        variant === 'recipeAllergenFilter'
                            ? DATA_TEST_ATTRIBUTES.ALLERGEN_MENU_BUTTON
                            : DATA_TEST_ATTRIBUTES.ALLERGEN_MENU_BUTTON_FILTER
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
                    <DropdownItems data-test-id={DATA_TEST_ATTRIBUTES.ALLERGENS_MENU}>
                        {allergens.map((allergen) => (
                            <DropdownItem key={allergen.id}>
                                <Checkbox
                                    data-test-id={`${DATA_TEST_ATTRIBUTES.ALLERGEN}-${allergen.id}`}
                                    isChecked={allergen.selected}
                                    onChange={handleCheckboxChange(allergen.id)}
                                >
                                    {allergen.title}
                                    {allergen.custom && (
                                        <Flex {...recipeAllergenPickerBaseStyles.removeIconWrapper}>
                                            <IconButton
                                                aria-label='Удалить аллерген'
                                                icon={
                                                    <DeleteIcon
                                                        {...recipeAllergenPickerBaseStyles.removeIcon}
                                                    />
                                                }
                                                onClick={() => removeUserAllergen(allergen.id)}
                                                {...recipeAllergenPickerBaseStyles.popoverAddAllergenButton}
                                            />
                                        </Flex>
                                    )}
                                </Checkbox>
                            </DropdownItem>
                        ))}

                        <Flex {...recipeAllergenPickerBaseStyles.popoverAddAllergen}>
                            <Input
                                placeholder='Другой аллерген'
                                value={customAllergen}
                                onChange={(e) => setCustomAllergen(e.target.value)}
                                onKeyDown={handleKeyDown}
                                {...recipeAllergenPickerBaseStyles.popoverAddAllergenInput}
                                data-test-id={DATA_TEST_ATTRIBUTES.ADD_OTHER_ALLERGEN}
                            />
                            <IconButton
                                aria-label='Добавить свой аллерген'
                                icon={<AddIcon {...recipeAllergenPickerBaseStyles.addIcon} />}
                                onClick={addUserAllergen}
                                {...recipeAllergenPickerBaseStyles.popoverAddAllergenButton}
                                data-test-id={DATA_TEST_ATTRIBUTES.ADD_ALLERGEN_BUTTON}
                            />
                        </Flex>
                    </DropdownItems>
                )}
            </Dropdown>
        </Stack>
    );
};
