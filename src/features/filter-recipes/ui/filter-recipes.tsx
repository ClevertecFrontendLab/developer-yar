import {
    Box,
    Button,
    Center,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Wrap,
} from '@chakra-ui/react';
import { FC, memo, useCallback } from 'react';

import { AllergenPicker } from '~/entities/allergen';
import { useAppDispatch, useAppSelector } from '~/shared/model';
import { CloseIcon, FilterIcon } from '~/shared/ui/icons';
import { SelectedItemTag } from '~/shared/ui/selected-item-tag';

import { useFiltersData } from '../hooks/use-filters-data';
import {
    isNoFilters,
    selectAllAllergens,
    selectAllAuthors,
    selectAllCategories,
    selectAllGarnishTypes,
    selectAllMeatTypes,
    selectCheckedAllergens,
    selectIsFilteringAllergens,
} from '../model/selectors';
import {
    addAllergen,
    findRecipes,
    removeAllergen,
    resetAllFilters,
    toggleAllergen,
    toggleAllergenFilter,
    toggleAuthorSelected,
    toggleCategorySelected,
    toggleGarnishTypeSelected,
    toggleMeatTypeSelected,
} from '../model/slice';
import { FilterRecipeCheckbox } from './filter-recipe-checkbox';
import { FilterRecipeMenu } from './filter-recipe-menu';
import { filterRecipesStyles as styles } from './filter-recipes.styles';

export const FilterRecipes: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useFiltersData();

    const allCategories = useAppSelector(selectAllCategories);
    const allAuthors = useAppSelector(selectAllAuthors);
    const allMeatTypes = useAppSelector(selectAllMeatTypes);
    const allGarnishTypes = useAppSelector(selectAllGarnishTypes);

    const allAllergens = useAppSelector(selectAllAllergens);
    const isFilteringAllergens = useAppSelector(selectIsFilteringAllergens);

    const selectedAllergens = useAppSelector(selectCheckedAllergens);

    const noFilters = useAppSelector(isNoFilters);

    const dispatch = useAppDispatch();

    const reset = useCallback(() => dispatch(resetAllFilters()), [dispatch]);

    const find = useCallback(() => {
        dispatch(findRecipes());
        onClose();
    }, [dispatch, onClose]);

    const openDrawer = useCallback(() => {
        reset();
        onOpen();
    }, [reset, onOpen]);

    return (
        <>
            <Center onClick={openDrawer} {...styles.filterButtonContainer}>
                <FilterIcon {...styles.filterIcon} data-test-id='filter-button' />
            </Center>

            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent {...styles.drawerContent} data-test-id='filter-drawer'>
                    <DrawerHeader {...styles.filterHeaderText}>
                        Фильтр
                        <DrawerCloseButton
                            {...styles.closeIconButton}
                            data-test-id='close-filter-drawer'
                        >
                            <CloseIcon {...styles.closeIcon} />
                        </DrawerCloseButton>
                    </DrawerHeader>

                    <DrawerBody {...styles.filterBodyContainer}>
                        <FilterRecipeMenu
                            action={toggleCategorySelected}
                            dataTestId='filter-menu-button-категория'
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

                        <AllergenPicker
                            allergens={allAllergens}
                            isFilteringAllergens={isFilteringAllergens}
                            selectedAllergens={selectedAllergens}
                            title='Выберите из списка аллергенов'
                            variant='filterRecipes'
                            onAddAllergen={(allergen) => dispatch(addAllergen(allergen))}
                            onRemoveAllergen={(id: number) => dispatch(removeAllergen(id))}
                            onToggleAllergen={(id: number) => dispatch(toggleAllergen(id))}
                            onToggleFilter={() => dispatch(toggleAllergenFilter())}
                        />

                        <Wrap>
                            {allCategories.map(
                                (category) =>
                                    category.selected && (
                                        <Box key={category.id} data-test-id='filter-tag'>
                                            <SelectedItemTag>{category.title}</SelectedItemTag>
                                        </Box>
                                    ),
                            )}
                            {allAuthors.map(
                                (author) =>
                                    author.selected && (
                                        <Box key={author.id} data-test-id='filter-tag'>
                                            <SelectedItemTag>{author.title}</SelectedItemTag>
                                        </Box>
                                    ),
                            )}
                            {allMeatTypes.map(
                                (meatType) =>
                                    meatType.selected && (
                                        <Box key={meatType.id} data-test-id='filter-tag'>
                                            <SelectedItemTag>{meatType.title}</SelectedItemTag>
                                        </Box>
                                    ),
                            )}
                            {allGarnishTypes.map(
                                (garnishType) =>
                                    garnishType.selected && (
                                        <Box key={garnishType.id} data-test-id='filter-tag'>
                                            <SelectedItemTag>{garnishType.title}</SelectedItemTag>
                                        </Box>
                                    ),
                            )}
                            {allAllergens.map(
                                (allergen) =>
                                    allergen.selected && (
                                        <Box key={allergen.id} data-test-id='filter-tag'>
                                            <SelectedItemTag>{allergen.title}</SelectedItemTag>
                                        </Box>
                                    ),
                            )}
                        </Wrap>
                    </DrawerBody>

                    <DrawerFooter {...styles.filterFooterContainer}>
                        <Button
                            {...styles.clearButton}
                            data-test-id='clear-filter-button'
                            onClick={reset}
                        >
                            Очистить фильтр
                        </Button>
                        <Button
                            isDisabled={noFilters}
                            onClick={find}
                            {...styles.findRecipeButton(noFilters)}
                            data-test-id='find-recipe-button'
                        >
                            Найти рецепт
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
});
