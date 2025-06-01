import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
    useDisclosure,
    Wrap,
} from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useAppDispatch, useAppSelector } from '~/shared/model';
import { CloseFilterIcon, FilterIcon } from '~/shared/ui/icons';
import { SelectedItemTag } from '~/shared/ui/selected-item-tag';

import { useFiltersData } from '../../hooks/use-filters-data';
import {
    selectAllAllergens,
    selectAllAuthors,
    selectAllCategories,
    selectAllGarnishTypes,
    selectAllMeatTypes,
    selectCheckedAllergens,
    selectIsAnyFilterActive,
    selectIsFilteringAllergens,
} from '../../model/selectors';
import {
    addAllergen,
    removeAllergen,
    resetAllFilters,
    setRecipeQueryActive,
    toggleAllergen,
    toggleAuthorSelected,
    toggleCategorySelected,
    toggleGarnishTypeSelected,
    toggleMeatTypeSelected,
    toggleRecipeAllergenFilter,
} from '../../model/slice';
import { RecipeAllergenPicker } from '../recipe-allergen-picker';
import { FilterRecipeCheckbox } from './filter-recipe-checkbox';
import { FilterRecipeMenu } from './filter-recipe-menu';
import { filterRecipesStyles as styles } from './index.styles';

export const RecipeFilter: FC = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    useFiltersData();

    const allCategories = useAppSelector(selectAllCategories);
    const allAuthors = useAppSelector(selectAllAuthors);
    const allMeatTypes = useAppSelector(selectAllMeatTypes);
    const allGarnishTypes = useAppSelector(selectAllGarnishTypes);

    const allAllergens = useAppSelector(selectAllAllergens);
    const isFilteringAllergens = useAppSelector(selectIsFilteringAllergens);

    const selectedAllergens = useAppSelector(selectCheckedAllergens);

    const isAnyFilterActive = useAppSelector(selectIsAnyFilterActive);

    const dispatch = useAppDispatch();

    const reset = () => {
        dispatch(resetAllFilters());
    };

    const handleFilter = () => {
        dispatch(setRecipeQueryActive());
        onClose();
    };

    const handleOnOpen = () => {
        dispatch(resetAllFilters());
        onOpen();
    };

    return (
        <>
            <IconButton
                aria-label='Открыть фильтры'
                icon={
                    <FilterIcon
                        {...styles.filterIcon}
                        data-test-id={DATA_TEST_ATTRIBUTES.FILTER_BUTTON}
                    />
                }
                onClick={handleOnOpen}
                {...styles.filterButtonContainer}
            />

            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent
                    {...styles.drawerContent}
                    data-test-id={DATA_TEST_ATTRIBUTES.FILTER_DRAWER}
                >
                    <DrawerHeader {...styles.filterHeaderText}>
                        Фильтр
                        <DrawerCloseButton
                            {...styles.closeIconButton}
                            data-test-id={DATA_TEST_ATTRIBUTES.CLOSE_FILTER_DRAWER}
                        >
                            <CloseFilterIcon {...styles.closeIcon} />
                        </DrawerCloseButton>
                    </DrawerHeader>

                    <DrawerBody {...styles.filterBodyContainer}>
                        <FilterRecipeMenu
                            action={toggleCategorySelected}
                            id={DATA_TEST_ATTRIBUTES.FILTER_BY_CATEGORY_BUTTON}
                            items={allCategories}
                            title='Категория'
                        />

                        <FilterRecipeMenu
                            action={toggleAuthorSelected}
                            items={allAuthors}
                            title='Поиск по автору'
                        />

                        <FilterRecipeCheckbox
                            action={toggleMeatTypeSelected}
                            items={allMeatTypes}
                            title='Тип мяса'
                        />

                        <FilterRecipeCheckbox
                            action={toggleGarnishTypeSelected}
                            items={allGarnishTypes}
                            title='Тип гарнира'
                        />

                        <RecipeAllergenPicker
                            allergens={allAllergens}
                            isFilteringAllergens={isFilteringAllergens}
                            selectedAllergens={selectedAllergens}
                            title='Выберите из списка аллергенов'
                            variant='filterRecipes'
                            onAddAllergen={(allergen) => dispatch(addAllergen(allergen))}
                            onRemoveAllergen={(id: number) => dispatch(removeAllergen(id))}
                            onToggleAllergen={(id: number) => dispatch(toggleAllergen(id))}
                            onToggleFilter={() => dispatch(toggleRecipeAllergenFilter())}
                        />

                        <Wrap>
                            {[
                                allCategories,
                                allAuthors,
                                allMeatTypes,
                                allGarnishTypes,
                                allAllergens,
                            ].flatMap((filters) =>
                                filters
                                    .filter((filter) => filter.selected)
                                    .map((filter) => (
                                        <Box
                                            data-test-id={DATA_TEST_ATTRIBUTES.FILTER_TAG}
                                            key={filter.id}
                                        >
                                            <SelectedItemTag>{filter.title}</SelectedItemTag>
                                        </Box>
                                    )),
                            )}
                        </Wrap>
                    </DrawerBody>

                    <DrawerFooter {...styles.filterFooterContainer}>
                        <Button
                            {...styles.clearButton}
                            data-test-id={DATA_TEST_ATTRIBUTES.CLEAR_FILTER_BUTTON}
                            onClick={reset}
                        >
                            Очистить фильтр
                        </Button>
                        <Button
                            isDisabled={!isAnyFilterActive}
                            onClick={handleFilter}
                            {...styles.findRecipeButton(!isAnyFilterActive)}
                            data-test-id={DATA_TEST_ATTRIBUTES.FIND_RECIPE_BUTTON}
                        >
                            Найти рецепт
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};
