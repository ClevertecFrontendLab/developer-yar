import { useDisclosure } from '@chakra-ui/react';
import { FC, useMemo } from 'react';

import { useCategoryList } from '~/entities/navigation';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getErrorOutline, hasItems } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';
import { Checkbox } from '~/shared/ui/checkbox';
import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownPreview,
    DropdownToggleButton,
} from '~/shared/ui/dropdown';

type RecipeSubcategoriesMenuProps = {
    isInvalid: boolean;
    items: string[];
    onCheckboxChange: (id: string) => void;
};

export const RecipeSubcategoriesMenu: FC<RecipeSubcategoriesMenuProps> = ({
    items,
    isInvalid,
    onCheckboxChange,
}) => {
    const { isOpen, onClose, onToggle } = useDisclosure();

    const {
        data: categories,
        isLoading: isCategoriesLoading,
        isError: isCategoriesError,
        isSuccess: isCategoriesSuccess,
    } = useCategoryList();

    const subcategories = useMemo(
        () =>
            isCategoriesSuccess && categories ? categories.flatMap(({ submenu }) => submenu) : [],
        [categories, isCategoriesSuccess],
    );

    useApiStatusSync(isCategoriesLoading && !hasItems(subcategories), {
        isError: isCategoriesError,
    });

    const selectedItemTags = useMemo(
        () => subcategories.filter((subcategory) => items.includes(subcategory.id)),

        [items, subcategories],
    );

    if (hasItems(subcategories))
        return (
            <Dropdown isOpen={isOpen} onClose={onClose}>
                <DropdownToggleButton
                    isOpen={isOpen}
                    onClick={onToggle}
                    {...getErrorOutline(isInvalid)}
                    data-test-id={DATA_TEST_ATTRIBUTES.RECIPE_CATEGORIES}
                >
                    <DropdownPreview
                        crop={true}
                        items={selectedItemTags}
                        placeholder='Выберите из списка'
                        shouldShowPlaceholder={!hasItems(selectedItemTags)}
                    />
                </DropdownToggleButton>

                <DropdownItems>
                    {subcategories.map((subcategory) => (
                        <DropdownItem key={subcategory.id}>
                            <Checkbox
                                isChecked={items.includes(subcategory.id)}
                                onChange={() => onCheckboxChange(subcategory.id)}
                            >
                                {subcategory.title}
                            </Checkbox>
                        </DropdownItem>
                    ))}
                </DropdownItems>
            </Dropdown>
        );
    return null;
};
