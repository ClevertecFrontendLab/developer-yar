import { Flex, Hide } from '@chakra-ui/react';
import { FC } from 'react';

import { getDisplayForBreakpoints } from '~/shared/lib';
import { useAppDispatch, useAppSelector } from '~/shared/model';

import {
    selectAllAllergens,
    selectCheckedAllergens,
    selectIsFilteringAllergens,
} from '../../model/selectors';
import {
    addAllergen,
    removeAllergen,
    toggleAllergen,
    toggleAllergenFilter,
} from '../../model/slice';
import { Allergen } from '../../model/types';
import { AllergenPicker } from '../allergen-picker';
import { excludeAllergensStyles as styles } from './index.styles';

const shonwOnXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

export const ExcludeAllergens: FC = () => {
    const allergens = useAppSelector(selectAllAllergens);
    const isFilteringAllergens = useAppSelector(selectIsFilteringAllergens);
    const selectedAllergens = useAppSelector(selectCheckedAllergens);

    const dispatch = useAppDispatch();

    return (
        <Hide below='lg'>
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
        </Hide>
    );
};
