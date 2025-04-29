import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { Allergen, AllergenPicker } from '~/entities/allergen';
import { getDisplayForBreakpoints } from '~/shared/lib';
import { useAppDispatch, useAppSelector } from '~/shared/model';

import {
    selectAllAllergens,
    selectCheckedAllergens,
    selectIsFilteringAllergens,
} from '../model/selectors';
import { addAllergen, removeAllergen, toggleAllergen, toggleAllergenFilter } from '../model/slice';
import { excludeAllergensStyles as styles } from './exclude-allergens.styles';

const shonwOnXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

export const ExcludeAllergens: FC = () => {
    const allergens = useAppSelector(selectAllAllergens);
    const isFilteringAllergens = useAppSelector(selectIsFilteringAllergens);
    const selectedAllergens = useAppSelector(selectCheckedAllergens);

    const dispatch = useAppDispatch();

    return (
        <Flex {...shonwOnXlBreakpoint} {...styles.container}>
            <Flex {...styles.content}>
                <AllergenPicker
                    allergens={allergens}
                    isFilteringAllergens={isFilteringAllergens}
                    selectedAllergens={selectedAllergens}
                    title='Выберите из списка'
                    variant='excludeAllergens'
                    onAddAllergen={(allergen: Allergen) => dispatch(addAllergen(allergen))}
                    onRemoveAllergen={(id: number) => dispatch(removeAllergen(id))}
                    onToggleAllergen={(id: number) => dispatch(toggleAllergen(id))}
                    onToggleFilter={() => dispatch(toggleAllergenFilter())}
                />
            </Flex>
        </Flex>
    );
};
