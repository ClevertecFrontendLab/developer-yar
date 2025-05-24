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
    toggleRecipeAllergenFilter,
} from '../../model/slice';
import { Allergen } from '../../model/types';
import { RecipeAllergenPicker } from '../recipe-allergen-picker';
import { recipeAllergenFilterStyles as styles } from './index.styles';

const shonwOnXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

export const RecipeAllergenFilter: FC = () => {
    const allergens = useAppSelector(selectAllAllergens);
    const isFilteringAllergens = useAppSelector(selectIsFilteringAllergens);
    const selectedAllergens = useAppSelector(selectCheckedAllergens);

    const dispatch = useAppDispatch();

    return (
        <Hide below='lg'>
            <Flex {...shonwOnXlBreakpoint} {...styles.container}>
                <Flex {...styles.content}>
                    <RecipeAllergenPicker
                        allergens={allergens}
                        isFilteringAllergens={isFilteringAllergens}
                        selectedAllergens={selectedAllergens}
                        title='Выберите из списка'
                        variant='recipeAllergenFilter'
                        onAddAllergen={(allergen: Allergen) => dispatch(addAllergen(allergen))}
                        onRemoveAllergen={(id: number) => dispatch(removeAllergen(id))}
                        onToggleAllergen={(id: number) => dispatch(toggleAllergen(id))}
                        onToggleFilter={() => dispatch(toggleRecipeAllergenFilter())}
                    />
                </Flex>
            </Flex>
        </Hide>
    );
};
